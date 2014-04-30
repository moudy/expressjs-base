var express = require('express');
var assets = require('./middleware/assets');
var path = require('path');

exports.configure = function (app) {
  var rootPath = path.join(__dirname, '..');

  if ('development' === app.get('env')) {
    app.use(assets);
  } else {
    app.use('/assets', express.static(path.join(rootPath, 'assets')));
  }

  app.use(require('static-favicon')(path.join(rootPath, 'public/favicon.ico')));
  app.use(express.static(path.join(rootPath, 'public')));

  app.use(require('body-parser')());
  app.use(require('cookie-parser')());
  app.use(require('method-override')());

  if ('development' === app.get('env')) {
    app.use(require('morgan')('dev'));
  }

  app.use(require('./middleware/locals'));

  if ('development' === app.get('env')) {
    app.use(require('errorhandler')());
  }

};
