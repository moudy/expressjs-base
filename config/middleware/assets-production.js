var fs = require('fs');
var path = require('path');
var rack = require('asset-rack');
var brocfile = require('../../Brocfile');
var mime = require('mime');

var StaticAsset = rack.Asset.extend({
  create: function(options) {
    this.filename = path.resolve(options.filename);
    if (!this.mimetype) this.mimetype = mime.types[path.extname(this.filename).slice(1)] || 'text/plain';

    var self = this;
    fs.readFile(this.filename, function (error, data) {
      if(error) return self.emit('error', error);
      self.emit('created', {contents: data});
    });
  }
});

var assets = brocfile.inputTrees.map(function (t) {
  return new StaticAsset({
    filename: t.outputFile
  , url: '/'+t.outputFile
  , gzip: true
  });
});

var rack = new rack.Rack(assets);

module.exports = rack.handle;
