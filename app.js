var app = exports.app = require('express')();

[ 'settings'
, 'middleware'
, 'routes'].forEach(function (i) {
  require('./config/'+i).configure(app);
});

function start () {
  require('./config/db').connect(app);

  app.listen(app.get('port'), function(){
    console.log('"'+app.get('host')+'" running in "'+app.get('env')+'" on port '+app.get('port'));
  });
}

// Only start app if it's not required by another module (i.e. testing or mounting)
if (!module.parent) start();
