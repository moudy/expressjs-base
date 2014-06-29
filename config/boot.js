var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser    = require('body-parser');
var projectRouter = require('project-router');
var view = require('./view');
var logger = require('../lib/logger');

module.exports = function (app) {
  var env = process.env;

  // Make sure app has environment
  app.set('environment', process.env.NODE_ENV || 'development');

  var rootPath = path.join(__dirname, '..');
  var assetsPath = path.join(rootPath, 'public', 'assets');
  var configPath = path.join(rootPath, 'config');
  var initializersPath = path.join(configPath, 'initializers');

  app.set('ASSETS', fs.readdirSync(assetsPath));

  logger.warn('Configure `title` in "%s"', __filename);
  app.set('title', 'expressjs-base');
  app.set('port', env.PORT);
  app.set('assetHost', env.ASSET_HOST);
  app.set('host', env.HOST);

  // Setup view path and engine
  app.set('views', path.join(rootPath, 'app', 'views'));
  app.engine('.hbs', view.engine);
  app.set('view engine', '.hbs');

  // Load initializers
  fs.readdirSync(initializersPath).forEach(function (file) {
    require(path.join(initializersPath, file))(app);
  });

  // Middleware

  if ('development' === app.get('env')) {
    // Use Broccoli for serving and bulding assets in development (configured in Brocfile.js)
    app.use('/assets', require('broccoli-middleware'));
    // Set up POW link
    require('node-pow')(app);
  }

  app.use('/assets/*.css.gz', function (req, res, next) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });

  app.use('/assets/*.js.gz', function (req, res, next) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  });

  app.use(require('serve-favicon')(path.join(rootPath, 'public/favicon.ico')));
  app.use(express.static(path.join(rootPath, 'public')));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('cookie-parser')());
  app.use(require('method-override')());

  if ('development' === app.get('env')) {
    app.use(require('morgan')('dev'));
    app.use(require('errorhandler')());
  }

  app.use(function (req, res, next) {
    res.locals.ENV = {};
    res.locals.ENV[app.get('env')] = true;
    next();
  });

  var router = projectRouter.map(require('./routes'));

  app.use('/routes', require('project-router-viewer')(router));

  app.use(router);

};

