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
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    res.render("index.html");
});

router.post("/api/email", function(req,res){

	console.log("body", req.body);
	res.render("quiz");
});


// request handler 
router.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
});

router.post("/results", function(req, res) {
    db.Recipes.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
});







	
// Export routes for server.js to use.
module.exports = router;