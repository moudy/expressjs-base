var app = require('../app').app;
var request = require('supertest');

it('works', function (done) {
  request(app).get('/').end(function (err, res) {
    expect(res.text).to.contain('Hello');
    done();
  });
});
