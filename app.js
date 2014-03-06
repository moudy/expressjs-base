var app = exports.app = require('express')();

// Setup Application
[ 'settings'
, 'middleware'
, 'routes'].forEach(function (i) {
  require('./config/'+i).configure(app);
});

// Only start app if it's not required by another module (i.e. testing or mounting)
if (!module.parent) {
  require('./config/db').connect(app);

  app.listen(app.get('port'), function(){
    console.log('"%s" running in "%s" on port %d', app.get('host'), app.get('env'), app.get('port'));
  });
}
