export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // getter method for the name attribute
  get name() {
    return this._name;
  }

  // setter method for the name attribute
  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
