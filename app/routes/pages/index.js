var inherits = require('util').inherits;
var projectRouter = require('project-router');

function PagesIndexRoute () {}
inherits(PagesIndexRoute, projectRouter.Route);

module.exports = PagesIndexRoute;

var p = PagesIndexRoute.prototype;

p.model = function () {
  return {foo: 'Hello'};
};

