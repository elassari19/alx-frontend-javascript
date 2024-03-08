// defines a class named HolbertonCourse
export default class HolbertonCourse {
  // constructor method
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter method for the name attribute
  get name() {
    return this._name;
  }

  // setter method for the name attribute
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // getter method for the length attribute
  get length() {
    return this._length;
  }

  // setter method for the length attribute
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // getter method for the students attribute
  get students() {
    return this._students;
  }

  // setter method for the students attribute
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
