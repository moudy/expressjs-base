var path = require('path');
var rack = require('asset-rack');

var assetsPath = path.join(__dirname, '..', 'assets');

module.exports = new rack.Rack([
  new rack.StaticAssets({
    dirname: assetsPath
  , gzip: true
  })
]);

