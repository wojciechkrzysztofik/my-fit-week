var express = require('express');
//var passport = require('passport');
//var mongoose = require('mongoose');
var config = require('./config/config');

// Create a new Express application.
var app = express();

// init BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Controllers
app.use('/api', require('./api/api'))

// Configure view engine to render Handlebars templates.
app.set('view engine', 'hbs');
app.set('views', __dirname);

module.exports = app
