import request from 'supertest'
let should    = require('chai').should(),
    expect    = require('chai').expect(),
    assert    = require('chai').assert;

describe('Server?', () => {
  describe('Is the Server responding to commands?', () => {
    let app;
    let server;
    before(() => {
      app = require('../app/app');
      server = app.listen(4008);
    });
    after(() => {
      server.close();
    });
    it('it should return a 200 response', (done) => {
      request('http://localhost:4008')
        .get('/')
        .expect(200, done);
    });

    it('it should return 404 for everything else', (done) => {
      request('http://localhost:4008')
        .get('/foo/bar')
        .expect(404, done);
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
