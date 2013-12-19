var exphbs = require('express3-handlebars');

module.exports = exphbs({
  defaultLayout : 'main'
, layoutsDir    : 'app/views/layouts/'
, partialsDir   : 'app/views/partials/'
});
