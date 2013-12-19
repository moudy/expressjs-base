/* global window:false */

var DATA = window.DATA;
var controllers = require('./controllers');

if (DATA.clientController) {
  var controller = controllers[DATA.clientController];

  if (controller) controller(DATA.clientData);
}
