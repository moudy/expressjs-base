
var chai      = require('chai');
global.expect   = chai.expect;

global.createModel = function(Model, data, name, cb) {
  return function (done) {
    var context = this;
    Model.create(data, function (err, doc) {
      context[name] = doc;
      done(err);
    });
  };
};
