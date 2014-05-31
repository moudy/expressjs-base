var logger = require('../lib/logger');
var mongoose = require('mongoose');

var env = process.env;
var MONGO_URI = env.MONGO_URI ||env.MONGOLAB_URI;

exports.connect = function (app, done) {
  if ('development' === app.get('env')) mongoose.set('debug', true);
  var db = mongoose.connect(MONGO_URI).connection;

  db.on('error', function () {
    logger.info('MongoDB connection error', MONGO_URI, arguments);
    done && done();
  });

  db.on('open', function () {
    logger.info('MongoDB connection open at:', MONGO_URI);
    done && done();
  });

  return db;
};
