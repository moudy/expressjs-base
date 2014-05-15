var mongoose = require('mongoose');

exports.connect = function (app, done) {
  if ('development' === app.get('env')) mongoose.set('debug', true);
  var db = mongoose.connect(app.get('MONGO_URI')).connection;

  db.on('error', function () {
    console.log('MongoDB connection error', app.get('MONGO_URI'), arguments);
    done && done();
  });

  db.on('open', function () {
    console.log('MongoDB connection open at:', app.get('MONGO_URI'));
    done && done();
  });

  return db;
};
