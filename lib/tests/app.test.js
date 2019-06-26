const request = require('supertest');
const app = require('../app');

describe('application routes', () => {
  it('returns a list of dogs', () => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Spot'));
      });
  });
});
