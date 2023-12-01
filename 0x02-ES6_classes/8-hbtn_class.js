export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Cast size to number
  valueOf() {
    return this._size;
  }

  // Cast to String
  toString() {
    return this._location;
  }
}
