const request = require('supertest');
const app = require('./api');

describe('Index page', () => {
  it('should return status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
  });

  it('should return "Welcome to the payment system"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Welcome to the payment system')
  });
});
