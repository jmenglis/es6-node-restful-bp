import request from 'supertest'
let should    = require('chai').should(),
  expect    = require('chai').expect(),
  assert    = require('chai').assert;

describe('API?', () => {
  describe('/GET api', () => {
    let app;
    let server;
    beforeEach(() => {
      app = require('../../app/app');
      server = app.listen(4008);
    });
    afterEach(() => {
      server.close()
    });
    it('it should GET a version', (done) => {
      request('http://localhost:4008')
        .get('/api')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          console.log(res.body);
          res.body.should.be.a('object');
          // res.body.should.have.property('version');
          done();
        })
    });
  });
});
