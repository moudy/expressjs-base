module.exports = function (app) {
  var env = process.env;
  app.set('port', env.PORT);
  app.set('ASSET_HOST', '//s3.amazonaws.com/expressjs-base');

  console.warn('Configure "%s"', __filename);
  // app.set('MONGO_URI', env.MONGOLAB_URI);
  // app.set('host', app.com);
};

