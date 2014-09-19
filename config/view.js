var exphbs = require('express-handlebars');
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
