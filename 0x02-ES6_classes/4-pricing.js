export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = '';

    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Anount must be a number');
    }
    this._amount = value;
  }

  // Getter and setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return `${amount} * ${conversionRate}`;
  }
}
