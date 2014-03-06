var requireDirectory = require('node-require-directory');

exports.configure = function (app) {
  var controllers = requireDirectory('app/controllers');
  app.get('/', controllers.pages.index);
};
