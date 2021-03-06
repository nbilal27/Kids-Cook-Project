// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var session = require('express-session')

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 3050;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public'));
var db = require("./models");

// Static directory to be served
//app.use(express.static("app/public"));
app.use(express.static(path.join(__dirname, 'public')));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
var routes = require("./controllers/appController");
app.use("/", routes);

//use sessions for tracking logins
/*app.use(session({
  secret: 'work hard',
  resave: true,
  genid: function(req) {
    return genuuid() // use UUIDs for session IDs
  },
  saveUninitialized: false
}));*/

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
