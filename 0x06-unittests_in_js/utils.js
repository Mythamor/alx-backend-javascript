const Utils = {
  calculateNumber(type, a, b) {
    // Round the numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Cases for different operations
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid type. Type should be SUM, SUBTARCT, or DIVIDE');
    }
  },
};

module.exports = Utils;
