var exphbs = require('express3-handlebars');
var handlebars = require('handlebars');
var helpers = require('../lib/handlebars-helpers');

module.exports = exphbs.create({
  defaultLayout: 'app'
, extname: '.hbs'
, layoutsDir: 'app/views/layouts/'
, partialsDir: 'app/views/partials/'
, handlebars: handlebars
, helpers: helpers
});
