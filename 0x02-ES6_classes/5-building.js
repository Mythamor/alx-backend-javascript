export default class Building {
  constructor(sqft) {
  // Abstrat method: subclasses implementation
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter and setter for sqft
  get sqft() {
    return this._sqft;
  }
}
