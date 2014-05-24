var logger = require('./lib/logger');
var app = exports.app = require('express')();

try {
  require('./config/boot')(app);
} catch(e) {
  logger.error(e.message, e);
}

// Only start app if it's not required by another module (i.e. testing or mounting)
if (!module.parent) {
  require('./config/db').connect(app);

  app.listen(app.get('port'), function(){
    logger.info(
    '"http://%s" running in "%s" on port %d'
    , app.get('host')
    , app.get('env')
    , app.get('port')
    );
  });
}
