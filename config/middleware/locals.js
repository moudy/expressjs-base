var app = require('../../app').app;

module.exports = function (req, res, next) {
  res.locals.ENV = {};
  res.locals.ENV[app.get('env')] = true;
  next();
};
