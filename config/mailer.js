var nodemailer = require("nodemailer");
var smtpTransport;

exports.configure = function (app) {
  var options;

  if ('production' === app.get('env')) {
    // add production credentials here
  }

  if ('development' === app.get('env')) {
    options = { host: '127.0.0.1' , port: 1025 };
  }

  smtpTransport = nodemailer.createTransport('SMTP', options);
};

exports.mailer = smtpTransport;

