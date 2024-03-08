import Car from './10-car';

// define a class named EVCar that extends the class Car
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // method that returns a message about the car
  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
