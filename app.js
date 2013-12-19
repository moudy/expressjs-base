var express = require('express');
var http    = require('http');

var settings   = require('./config/settings');
var middleware = require('./config/middleware');
var router     = require('./config/router');
var mailer     = require('./config/mailer');

var app = express();

settings.configure(app);
middleware.configure(app);
router.configure(app);
mailer.configure(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

