const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      // Test for SUM
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the diff of rounded numbers', () => {
      // Test for SUBTRACT
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 5.7, 3)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 5.7, 3.7)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 6.6, 3)).to.equal(4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the div of rounded numbers', () => {
      // Test for DIVIDE
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 12, 3)).to.equal(4);
      expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
      expect(calculateNumber('DIVIDE', 15, 3)).to.equal(5);
    });

    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invlaid operation type', () => {
      expect(() => calculateNumber('INVALID', 10, 5)).to.throw('Invalid type. Type should be SUM, SUBTARCT, or DIVIDE' );
    });
  });
});
