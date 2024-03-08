import Building from './5-building';

// defines a class SkyHighBuilding that extends the Building class
export default class SkyHighBuilding extends Building {
  // constructor method
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getter method for the floors attribute
  get floors() {
    return this._floors;
  }

  // setter method for the floors attribute
  set floors(value) {
    this._floors = value;
  }

  // method that returns a message about the evacuation
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
