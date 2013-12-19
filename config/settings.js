var path       = require('path');
var viewEngine = require('./view_engine');

var HOSTS = {
  production: 'app.com'
, development: 'app.dev'
};

var port       = exports.port       = process.env.PORT || 3003;
var views      = exports.views      = path.join(__dirname, '..', '/app/views');
var engine     = exports.engine     = viewEngine;
var viewEngine = exports.viewEngine = 'handlebars';
var host       = exports.host       = HOSTS[process.env.NODE_ENV];

exports.configure = function (app) {
  app.set('port'          , port);
  app.set('views'         , views);
  app.engine('handlebars' , engine);
  app.set('view engine'   , viewEngine);
  app.set('host'          , host);
};
