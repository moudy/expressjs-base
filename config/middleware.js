var express = require('express');
var path = require('path');

module.exports = function (app) {
  var rootPath = path.join(__dirname, '..');

  if ('development' === app.get('env')) {
    app.use(require('./middleware/assets-development'));
  } else {
    app.use(require('./middleware/assets-production'));
  }

  app.use(require('serve-favicon')(path.join(rootPath, 'public/favicon.ico')));
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
