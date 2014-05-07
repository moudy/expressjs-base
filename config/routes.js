var requireDirectory = require('node-require-directory');

module.exports = function (app) {
  var controllers = requireDirectory('app/controllers');
  app.get('/', controllers.pages.index);
};
