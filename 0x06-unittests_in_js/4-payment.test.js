const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with correct args', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', totalAmount, totalShipping);
  });

  it('should log the correct message', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');
  });

});
