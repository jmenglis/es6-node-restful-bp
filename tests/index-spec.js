import request from 'supertest'
let should    = require('chai').should(),
    expect    = require('chai').expect();

describe('Server?', () => {
  describe('Is the API responding to commands?', () => {
    let server;
    beforeEach(() => {
      server = require('../app/index');
    });
    afterEach(() => {
      server.close()
    });
    it('should return a 200 response', (done) => {
      request(server)
        .get('/')
        .expect(200, done);
    });

    it('should return 404 for everything else', (done) => {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });

  });
});
