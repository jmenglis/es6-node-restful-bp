import request from 'supertest'
let should    = require('chai').should(),
    expect    = require('chai').expect(),
    assert    = require('chai').assert;

describe('Server?', () => {
  describe('Is the Server responding to commands?', () => {
    let server;
    beforeEach(() => {
      server = require('../app/index');
    });
    afterEach(() => {
      server.close()
    });
    it('it should return a 200 response', (done) => {
      request(server)
        .get('/')
        .expect(200, done);
    });

    it('it should return 404 for everything else', (done) => {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });

  });
});

describe('API?', () => {
  describe('/GET api', () => {
    let server;
    beforeEach(() => {
      server = require('../app/index');
    });
    afterEach(() => {
      server.close()
    });
    it('it should GET a version', (done) => {
      request(server)
        .get('/api')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          res.body.should.be.a('object');
          res.body.should.have.property('version');
          done();
        })
    });
  });
});
