var express = require('express');
var path = require('path');

exports.configure = function (app) {

  if ('development' === app.get('env')) {
    app.use(require('./middleware/sass'));
    app.use('/app.js', require('./middleware/browserify'), {
      noParse: [] //'jquery', any other modules that don't need to parsed for require
    , insertGlobals:true // speed things up
    });
  }
  app.use(express.favicon(path.join(__dirname, '..', 'public/favicon.ico')));
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());

  app.use(function (req, res, next) {
    res.locals.ENV = {};
    res.locals.ENV[app.get('env')] = true;
    next();
  });

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(app.router);

  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
    //var mongoose = require('mongoose');
    //mongoose.set('debug', true);
  }

};
