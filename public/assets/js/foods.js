// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-grill").on("click", function(event) {
    var id = $(this).data("id");
    var newGrill = $(this).data("newgrill");

    var newGrillState = {
      grilled: newGrill
    };

    // Send the PUT request.
    $.ajax("/api/foods/" + id, {
      type: "PUT",
      data: newGrillState
    }).then(
      function() {
        console.log("changed grill to", newGrill);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFood = {
      name: $("#ca").val().trim(),
      grilled: $("[name=grilled]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/foods", {
      type: "POST",
      data: newFood
    }).then(
      function() {
        console.log("created new food");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-food").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/foods/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted food", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
