exports.configure = function (app) {
  var env = process.env;
  app.set('port', env.PORT);

  console.warn('Configure "%s"', __filename);
  // app.set('MONGO_URI', env.MONGOLAB_URI);
  // app.set('host', app.com);
};

