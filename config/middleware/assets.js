var broccoli = require('broccoli');
var Watcher =  require('broccoli/lib/watcher');
var middleware = require('broccoli/lib/middleware');

var tree = broccoli.loadBrocfile();
var builder = new broccoli.Builder(tree);
var watcher = new Watcher(builder);

module.exports = middleware(watcher);

