exports.configure = function (app) {
  console.warn('Configure "%s"', __filename);
  app.set('port', 4321);
  app.set('MONGO_URI', 'mongodb://localhost/expressjs-base-development');
  app.set('host', 'expressjs-base.dev');
  require('node-pow')(app);
};
