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

router.post("/api/email", function(req,res){

	console.log("body", req.body);
	res.render("quiz");


});


// request handler 
router.get("/api/recipes", function(req, res) {
    Recipes.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
});

router.get("/results", function(req, res) {
	//get the graded survey results from request
	var fruit = req.body.results.fruits
	var vegetable = req.body.results.vegetables
	var wholegrain = req.body.results.wholegrains
	var protein = req.body.results.protein

	//build logic scenarios per results
	//scenario for answering low in all categories or high in all categories pull all recipes
	if (fruit < 3 && vegetable < 3 && wholegrain < 3 && protein < 3 || fruit > 3 && vegetable > 3 && wholegrain > 3 && protein > 3){
    Recipes.findAll({
    	where: {
    		[Op.or]: [{vegetable_score: {[Op.gt]: 2}}, {wholegrain_score: {[Op.gt]: 2}}, {fruit_score: {[Op.gt]: 2}}, {protein_score: {[Op.gt]: 2}}] 
  		}
    }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });
	}
	//scenario for answering low in fruit category only 
	else if (fruit < 3 && vegetable > 3 && wholegrain > 3 && protein > 3){
	Recipes.findAll({
    	where: {
    		fruit_score: {[Op.gt]: 2}
  		}
    }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });	
	}
	//scenario for answering low in protein only
	else if (protein < 3 && vegetable > 3 && wholegrain > 3 && fruit > 3){
	Recipes.findAll({
    	where: {
    		protein_score: {[Op.gt]: 2}
  		}
    }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });	
	}
	//scenario for answering low in vegetable only
	else if (vegetable < 3 && fruit > 3 && wholegrain > 3 && protein > 3){
	Recipes.findAll({
    	where: {
    		vegetable_score: {[Op.gt]: 2}
  		}
    }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });	
	}
	//scenario for answering low in wholegrain only
	else if (wholegrain < 3 && vegetable > 3 && fruit > 3 && protein > 3){
	Recipes.findAll({
    	where: {
    		wholegrain_score: {[Op.gt]: 2}
  		}
    }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
    });	
	} 
	//if fruit and wholegrain are low
	//if fruit and vegetable are low
	//if fruit and protein are low
	//if fruit and protein and vegetable are low
	//if fruit and protein and wholegrain are low
	//if fruit and wholegrain and vegetable are low
	//if wholegrain and vegetable are low
	//if wholegrain and protein are low
	//if wholegrain vegetable and protein are low
	//
});

// Export routes for server.js to use.
module.exports = router;