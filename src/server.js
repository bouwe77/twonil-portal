// Create the Express application. 
var express = require('express');
var app = express();

// The "assets" folder contains files such as CSS stylesheets, javascripts and images.
// Register that folder so Express serves these files as static content.
var path = require('path');
app.use(express.static(path.join(__dirname + '/assets')));

// Register the routes.
var routes = require('./routing/routes.js');
routes(app);

// Register body-parser for handling form url encoded requests.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Register Handlebars as the view engine for the Express app.
var handlebarsInitializer = require('./handlebars/init');
var handlebars = handlebarsInitializer.handlebars;
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Start the HTTP server.
var port = process.env.PORT || 4000;
app.listen(port, function (err) {
    console.log('App started, listening on port ' + port);
});