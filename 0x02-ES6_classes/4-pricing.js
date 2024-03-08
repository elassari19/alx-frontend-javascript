import Currency from './3-currency';

// difine and export a class called Pricing
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter method for the amount attribute
  get amount() {
    return this._amount;
  }

  // setter method for the amount attribute
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  // getter method for the currency attribute
  get currency() {
    return this._currency;
  }

  // setter method for the currency attribute
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  // method that returns the full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // method that converts the price to a different currency
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
