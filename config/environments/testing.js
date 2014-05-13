module.exports = function (app) {
  console.warn('Configure "%s"', __filename);
  // app.set('port', <PORT>);
  app.set('MONGO_URI', 'mongodb://localhost/expressjs-base-testing');
  // app.set('host', app.test);
};
