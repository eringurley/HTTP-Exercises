const request = require('supertest');
const app = require('../app');

// describe('application routes', () => {
//   it('returns a list of dogs', done => {
//     request(app)
//       .get('/')
//       .then(res => {
//         expect(res.text).toEqual(expect.stringContaining('Spot'));
//         done();
//       });
//   });
// });

describe('http routes', () => {
  it('has a home route', done => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.text).toContain('Welcome');
        done();
      });
  });

  it('has a red route', done => {
    request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toContain('red');
        done();
      });
  });

  it('has a green route', done => {
    request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toContain('green');
        done();
      });
  });

  it('has a blue route', done => {
    request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toContain('blue');
        done();
      });
  });
});
