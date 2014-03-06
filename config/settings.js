var path = require('path');
var view = require('./view');

exports.configure = function (app) {
  app.set('environment', process.env.NODE_ENV || 'development');

  console.warn('Configure "%s"', __filename);
  app.set('title', 'expressjs-base');

  var environmentPath = './environments/'+app.get('environment');
  require(environmentPath).configure(app);

  // Setup view path and engine
  app.set('views', path.join(__dirname, '..', 'app', 'views'));
  app.engine('.hbs', view.engine);
  app.set('view engine', '.hbs');
};

