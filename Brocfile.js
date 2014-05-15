var env = {};
env[process.env.NODE_ENV] = true;

// Plugins
var mergeTrees = require('broccoli-merge-trees');
var uglifyJS = require('broccoli-uglify-js');
var sass = require('broccoli-sass');
var browserify = require('broccoli-browserify');
var cleanCSS = require('broccoli-clean-css');
var fingerprint = require('broccoli-fingerprint');
var gzip = require('broccoli-gzip');

// Asset trees
var css = 'app/assets/css';
var js = 'app/assets/js';

// Output tree and files
var outputTree = [];
var APP_JS = 'app.js';
var APP_CSS = 'app.css';

var appCss = sass([css], 'app.scss', APP_CSS);

var appJs = browserify(js, {
  entries: ['./app.js']
, outputFile: APP_JS
, bundle: {debug: !env.production}
});

if (true || env.production) {
  appJs = uglifyJS(appJs);
  appJs = fingerprint(appJs);
  appJs = gzip(appJs, {extensions: ['js'], keepUncompressed: true});
  appCss = cleanCSS(appCss);
  appCss = fingerprint(appCss);
  appCss = gzip(appCss, {extensions: ['css'], keepUncompressed: true});
}

outputTree.push(appCss);
outputTree.push(appJs);

module.exports = mergeTrees(outputTree, {overwrite: true});
