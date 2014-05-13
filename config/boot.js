var fs = require('fs');
var path = require('path');
var express = require('express');
var view = require('./view');

module.exports = function (app) {
  // Make sure app has environment
  app.set('environment', process.env.NODE_ENV || 'development');

  var rootPath = path.join(__dirname, '..');
  var configPath = path.join(rootPath, 'config');
  var environmentPath = path.join(configPath, 'environments', app.get('environment'));
  var initializersPath = path.join(configPath, 'initializers');

  console.warn('Configure `title` in "%s"', __filename);
  app.set('title', 'expressjs-base');

  // Setup view path and engine
  app.set('views', path.join(rootPath, 'app', 'views'));
  app.engine('.hbs', view.engine);
  app.set('view engine', '.hbs');

  // Configure environment specific settings
  require(environmentPath)(app);

  // Load initializers
  fs.readdirSync(initializersPath).forEach(function (file) {
    require(path.join(initializersPath, file))(app);
  });


  // Middleware

  if ('development' === app.get('env')) {
    // Use Broccoli for serving and bulding assets in development (configured in Brocfile.js)
    app.use('/assets', require('broccoli-middleware'));
  } else if ('production' === app.get('env')) {
    // Use asset-rack to fingerprint when not in development
    app.use(require('./assets').handle);
  }

  app.use(require('serve-favicon')(path.join(rootPath, 'public/favicon.ico')));
  app.use(express.static(path.join(rootPath, 'public')));
  app.use(require('body-parser')());
  app.use(require('cookie-parser')());
  app.use(require('method-override')());
  app.use(require('./middleware/locals'));

  if ('development' === app.get('env')) {
    app.use(require('morgan')('dev'));
    app.use(require('errorhandler')());
  }

  app.use(require('./router'));

};

