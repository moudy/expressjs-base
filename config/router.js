var projectRouter = require('project-router');

module.exports = projectRouter.map(function () {

  this.get('/', 'pages/index');

});
