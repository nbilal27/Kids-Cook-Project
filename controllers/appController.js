// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require("express");


// ===============================================================================
// ROUTING
// ===============================================================================
var router = express.Router();

// Import the ORM to use its database functions.
//var ? = require("../models/?");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    res.render("index.html");
});

// Export routes for server.js to use.
module.exports = router;