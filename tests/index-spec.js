import supertest from 'supertest'
let should    = require('chai').should(),
    expect    = require('chai').expect(),
    api       = supertest('http://localhost:4008');

describe('Server?', () => {
  describe('Is the API responding to commands?', () => {
    it('should return a 200 response', (done) => {
      api.get('/')
        .expect(200, done);
    })
    it('should return 404 for everything else', (done) => {
      api.get('/something-else')
        .expect(404, done);
    });
  });
});
