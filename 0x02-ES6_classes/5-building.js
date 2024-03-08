// defines a class Building
export default class Building {
  // constructor method
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // getter method for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // setter method for the sqft attribute
  set sqft(value) {
    this._sqft = value;
  }
}
