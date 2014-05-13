var env = {};
env[process.env.NODE_ENV] = true;

// Plugins
var mergeTrees = require('broccoli-merge-trees');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var browserify = require('broccoli-browserify');
var cleanCSS = require('broccoli-clean-css');

// Asset trees
var css = 'app/assets/css';
var js = 'app/assets/js';

// Output files
var APP_JS = 'app.js';
var APP_CSS = 'app.css';

var appCss = compileSass([css], 'app.scss', APP_CSS);

var appJs = browserify(js, {
  entries: ['./app.js']
, outputFile: APP_JS
, bundle: {debug: !env.production}
});

if (env.production) {
  appJs = uglifyJavaScript(appJs);
  appCss = cleanCSS(appCss);
}

module.exports = mergeTrees([
  appCss
, appJs
]);
