var fs = require('fs');
var path = require('path');
var view = require('./view');

module.exports = function (app) {
  // Make sure app has environment
  app.set('environment', process.env.NODE_ENV || 'development');

  var rootPath = path.join(__dirname, '..');
  var configPath = path.join(rootPath, 'config');
  var environmentPath = path.join(configPath, 'environments', app.get('environment'));
  var initializersPath = path.join(configPath, 'initializers');

  console.warn('Configure "%s"', __filename);
  app.set('title', 'expressjs-base');

  // Setup view path and engine
  app.set('views', path.join(rootPath, 'app', 'views'));
  app.engine('.hbs', view.engine);
  app.set('view engine', '.hbs');

  // Configure environment specific settings
  require(environmentPath)(app);

  // Load initializers
  fs.readdirSync(initializersPath).forEach(function (file) {
    require(path.join(initializersPath, file))(app);
  });

};

