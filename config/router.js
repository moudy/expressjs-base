var controllers = require('../app/controllers');


exports.configure = function (app) {

  app.get('/', controllers.pages.index);

};
