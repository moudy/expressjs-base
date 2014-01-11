var exphbs = require('express3-handlebars');

module.exports = exphbs.create({
  defaultLayout: 'app'
, extname: '.hbs'
, layoutsDir: 'app/views/layouts/'
, partialsDir: 'app/views/partials/'
});
