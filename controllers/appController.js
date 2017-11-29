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
var Recipes = require("../models/recipes.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    res.render("index.html");
});

// request handler 
router.get("/api/recipes", function(req, res) {
    Recipes.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
});

router.get("/results", function(req, res) {
	var categories = req.body.categories
    Recipes.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
});

	
// Export routes for server.js to use.
module.exports = router;