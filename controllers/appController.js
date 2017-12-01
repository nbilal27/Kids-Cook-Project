// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require("express");
var sequelize = require("sequelize");


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

/*router.post("/results", function(req, res) {
    db.Recipes.findAll({}).then(function(results) {
    	console.log(results)
        // results are available to us inside the .then
        res.json(results);
    });
});*/

 router.post("/results", function(req, res) {
     // Create an Author with the data available to us in req.body
     var data = req.body
     var params = [];
    console.log(data);
   for (var key in data){
    	//console.log(key)
    	if (data[key] === '1'){
    		var paramsObj = {};
    		 paramsObj[key] = data[key];
    		console.log(paramsObj)
    		params.push(paramsObj)
    	}
    }
    console.log(params)
    db.Recipes.findAll({
    	where: {
    		[sequelize.Op.or]: params
    	}

    }).then(function(results) {
    	console.log(results)
      res.json(results);
    });
  });
	
// Export routes for server.js to use.
module.exports = router;