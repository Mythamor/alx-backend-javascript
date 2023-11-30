export default class Building {
  constructor(sqft) {
    this._sqft = 0;

    this.sqft = sqft;

  }

  // Getter and setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }

  // Abstrat method: subclasses implementation
  evacuationWarningMessage() {
     if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
       throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
