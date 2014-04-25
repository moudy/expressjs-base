var mongoose = require('mongoose');

exports.connect = function (app) {
  if ('development' === app.get('env')) mongoose.set('debug', true);
  var db = mongoose.connect(app.get('MONGO_URI')).connection;

  db.on('error', function () {
    console.log('MongoDB connection error', app.get('MONGO_URI'), arguments);
  });

  db.on('open', function () {
    console.log('MongoDB connection open at:', app.get('MONGO_URI'));
  });

  return db;
};
