var path = require('path');

module.exports = require('node-sass').middleware({
  src: path.join(__dirname, '..', '..', 'app', 'assets', 'css')
, dest: path.join(__dirname, '..', '..', 'public')
, outputStyle: 'expanded'
, force: true
});
