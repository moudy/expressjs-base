;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global window:false */

var DATA = window.DATA;
var controllers = require('./controllers');

if (DATA.clientController) {
  var controller = controllers[DATA.clientController];

  if (controller) controller(DATA.clientData);
}

},{"./controllers":2}],2:[function(require,module,exports){
module.exports = {
  pagesIndex: require('./pages_index')
};

},{"./pages_index":3}],3:[function(require,module,exports){
module.exports = function (clientData) {
  console.log('controller initialized with clientData', clientData);
};

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbW91ZHkvQ29kZS92YXJzaXR5L2xhc3NvL2FwcC9hc3NldHMvanMvYXBwLmpzIiwiL1VzZXJzL21vdWR5L0NvZGUvdmFyc2l0eS9sYXNzby9hcHAvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwiL1VzZXJzL21vdWR5L0NvZGUvdmFyc2l0eS9sYXNzby9hcHAvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL3BhZ2VzX2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuXG52YXIgREFUQSA9IHdpbmRvdy5EQVRBO1xudmFyIGNvbnRyb2xsZXJzID0gcmVxdWlyZSgnLi9jb250cm9sbGVycycpO1xuXG5pZiAoREFUQS5jbGllbnRDb250cm9sbGVyKSB7XG4gIHZhciBjb250cm9sbGVyID0gY29udHJvbGxlcnNbREFUQS5jbGllbnRDb250cm9sbGVyXTtcblxuICBpZiAoY29udHJvbGxlcikgY29udHJvbGxlcihEQVRBLmNsaWVudERhdGEpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhZ2VzSW5kZXg6IHJlcXVpcmUoJy4vcGFnZXNfaW5kZXgnKVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNsaWVudERhdGEpIHtcbiAgY29uc29sZS5sb2coJ2NvbnRyb2xsZXIgaW5pdGlhbGl6ZWQgd2l0aCBjbGllbnREYXRhJywgY2xpZW50RGF0YSk7XG59O1xuIl19
;