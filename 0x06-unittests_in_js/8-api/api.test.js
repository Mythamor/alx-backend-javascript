const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });

  it('should return "Welcome to the payment system"', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system')
  });
});
