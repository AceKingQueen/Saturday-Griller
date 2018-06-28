###[Saturday Griller](https://calm-inlet-44967.herokuapp.com/)

Saturday-Griller is a full stack application that lets users input the names of foods they'd like to grill. It is built using the MVC design pattern. 

The user submits a food's name and chooses whether to "throw it on the grill" or "save it for later" using the buttons. 

The added food item is then stored in a database, whether grilled or saved for later.

The user can also make changes to either list using the buttons next to each food item.
---

See the attached video for a run through of the app.

[user.mp4](quiver-file-url/65C68DA71B9B6600EB9D16E47547893E.mp4)

---
###Saturday-Griller Directory Structure

├── config
│   ├── connection.js
│   └── orm.js
│
├── controllers
│   └── foodController.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── food.js
│
├── node_modules
│
├── package.json
│
├── public
│   ├── assets
│       ├── css
│       │   └── style.css
|       |       grill.jpg
|       |       fridge.jpg
│       └── js
│           └── foods.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
    |    └── main.handlebars
    |__ partials
        |__ foods
            |__ food-block.handlebars
