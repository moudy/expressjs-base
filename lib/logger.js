var winston = require('winston');

var logger = new winston.Logger();

logger.add(winston.transports.Console, {colorize: true});

var env = process.env;

if (!env.NODE_ENV || 'development' !== env.NODE_ENV) {
  winston.handleExceptions(new winston.transports.File({
    filename: 'logs/exceptions.log'
  }));
}

module.exports = logger;


