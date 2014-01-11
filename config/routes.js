var requireDirectory = require('node-require-directory');
var controllers = requireDirectory('app/controllers');

exports.configure = function (app) {
  app.get('/', controllers.pages.index);
};
