var path = require('path');
var rack = require('asset-rack');

var rootPath = path.join(__dirname, '..', '..');

var assets = new rack.Rack([
  new rack.StaticAssets({
    urlPrefix: '/assets'
  , dirname: rootPath + '/assets'
  , gzip: true
  })
]);

module.exports = assets.handle;
