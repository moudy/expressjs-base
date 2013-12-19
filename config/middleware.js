var express = require('express');
var path    = require('path');

exports.configure = function (app) {
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // development only
  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }

};
