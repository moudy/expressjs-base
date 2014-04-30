var env = {};
env[process.env.NODE_ENV] = true;

var mergeTrees = require('broccoli-merge-trees');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var browserify = require('broccoli-browserify');
var cleanCSS = require('broccoli-clean-css');

var css = 'app/assets/css';
var js = 'app/assets/js';

var outputs = {
  css: (env.production ? 'app.css' : 'assets/app.css')
, js: (env.production ? 'app.js' : 'assets/app.js')
};

var appCss = compileSass([css], 'app.scss', outputs.css);

var appJs = browserify(js, {
  entries: ['./app.js']
, outputFile: outputs.js
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
