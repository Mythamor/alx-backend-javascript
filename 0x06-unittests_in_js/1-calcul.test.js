const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      // Test for SUM
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the diff of rounded numbers', () => {
      // Test for SUBTRACT
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
      assert.equal(calculateNumber('SUBTRACT', 5.7, 3), 3);
      assert.equal(calculateNumber('SUBTRACT', 5.7, 3.7), 2);
      assert.equal(calculateNumber('SUBTRACT', 6.6, 3), 4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the div of rounded numbers', () => {
      // Test for DIVIDE
      assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 12, 3), 4);
      assert.equal(calculateNumber('DIVIDE', 10, 4), 2.5);
      assert.equal(calculateNumber('DIVIDE', 15, 3), 5);
    });

    it('should return Error when dividing by 0', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invlaid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 10, 5), { message: 'Invalid type. Type should be SUM, SUBTARCT, or DIVIDE' });
    });
  });
});
