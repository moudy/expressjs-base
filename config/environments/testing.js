var logger = require('../../lib/logger');

module.exports = function (app) {
  logger.warn('Configure "%s"', __filename);
  // app.set('port', <PORT>);
  app.set('MONGO_URI', 'mongodb://localhost/expressjs-base-testing');
  // app.set('host', app.test);
};
