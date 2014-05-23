var logger = require('../../lib/logger');

module.exports = function (app) {
  var env = process.env;
  app.set('port', env.PORT);
  app.set('ASSET_HOST', '//dk2xqe978zxxy.cloudfront.net');

  logger.warn('Configure "%s"', __filename);
  // app.set('MONGO_URI', env.MONGOLAB_URI);
  // app.set('host', app.com);
};

