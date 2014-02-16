var app = exports.app = require('express')();

[ 'settings'
, 'middleware'
, 'routes'].forEach(function (i) {
  require('./config/'+i).configure(app);
});

function start () {
  require('./config/db').connect();

  app.listen(app.get('port'), function(){
    console.log('Server listening', 'port:'+ app.get('port'), 'environment:'+app.get('env'));
  });
}

if (!module.parent) start();
