var isProductionEnv = process.env.NODE_ENV === 'production';

var mergeTrees = require('broccoli-merge-trees');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var browserify = require('broccoli-browserify');
var cleanCSS = require('broccoli-clean-css');

var css = 'app/assets/css';
var js = 'app/assets/js';

var appCss = compileSass([css], 'app.scss', 'assets/app.css');

var appJs = browserify(js, {
  entries: ['./app.js']
, outputFile: 'assets/app.js'
, bundle: {debug: !isProductionEnv}
});

if (isProductionEnv) {
  appJs = uglifyJavaScript(appJs);
  appCss = cleanCSS(appCss);
}

module.exports = mergeTrees([
  appCss
, appJs
]);
