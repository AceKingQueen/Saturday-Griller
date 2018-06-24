var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  food.all(function(data) {
    var hbsObject = {
      food: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/food", function(req, res) {
  food.create([
    "name", "grilled"
  ], [
    req.body.name, req.body.grilled
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/food/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.update({
    grilled: req.body.grilled
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/food/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  food.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
