var app = require('../app').app;
var request = require('supertest');

it('works', function (done) {
  request(app)
    .get('/')
    .expect(200)
    .end(done);
});
