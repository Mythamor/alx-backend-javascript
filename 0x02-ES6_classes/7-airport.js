export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Default string description
  toString() {
    return `[object ${this._code}]`;
  }
}
