var logger = require('../../lib/logger');

module.exports = function (app) {
  logger.warn('Configure `port`, `MONGO_URI` and `host` in "%s"', __filename);
  app.set('port', 4321);
  app.set('MONGO_URI', 'mongodb://localhost/expressjs-base-development');
  app.set('host', 'expressjs-base.dev');
  require('node-pow')(app);
};
