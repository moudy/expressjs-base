var mongoose = require('mongoose');

exports.connect = function (app) {
  if ('development' === app.get('env')) mongoose.set('debug', true);
  mongoose.connect(app.get('MONGO_URI'));
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'db connection error'));
  db.on('open', console.error.bind(console, 'db connection open'));
  return db;
};
