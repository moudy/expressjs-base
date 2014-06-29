var handlebars = require('handlebars');

var helpers = {};

helpers['asset-url'] = function (path) {
  if ('production' !== this.settings.environment) return path;

  var urlParts = path.split('/');
  var name = urlParts.pop();

  var nameParts = name.split('.');
  var extname = nameParts.pop()+'.gz';
  var basename = nameParts.join('.');

  var regex = new RegExp(basename+'.+'+extname);

  name = this.settings.ASSETS.filter(function (a) { return a.match(regex); })[0];
  name = [urlParts.join('/'), name].join('/');

  if (this.settings.assetHost) name = this.settings.assetHost+name;
  return name;
};

helpers['to-json'] = function (data) {
  return new handlebars.SafeString(JSON.stringify(data));
};

module.exports = helpers;
