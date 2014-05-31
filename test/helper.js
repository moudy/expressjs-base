process.env.NODE_ENV = 'testing';
require('dotenv').load();
var MONGO_URI = process.env.MONGO_URI;

var app      = require('../app').app;
var chai     = require('chai');
var mongoose = require('mongoose');
var clearDB  = require('mocha-mongoose')(MONGO_URI);
var db       = require('../config/db');

global.expect = chai.expect;

global.resetDB = function (done) {
  clearDB(function () {
    if (mongoose.connection.db) return done();
    db.connect(app, done);
  });
};

global.createModel = function(Model, data, name, cb) {
  return function (done) {
    var context = this;
    Model.create(data, function (err, doc) {
      context[name] = doc;
      done(err);
    });
  };
};

global.expectCount = function(Model, count, cb) {
  return function (done) {
    Model.count(function (err, count_) {
      expect(count_).to.eq(count);
      cb ? cb(err) : done(err);
    });
  };
};
