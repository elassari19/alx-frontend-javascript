// difine and export a class called Currency
export default class Currency {
  // constructor method
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter method for the code attribute
  get code() {
    return this._code;
  }

  // setter method for the code attribute
  set code(value) {
    this._code = value;
  }

  // getter method for the name attribute
  get name() {
    return this._name;
  }

  // setter method for the name attribute
  set name(value) {
    this._name = value;
  }

  // method that returns the full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
