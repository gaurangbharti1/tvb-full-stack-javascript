function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function() {
  console.log(`${this.name} says "Hi"`);
};

class User {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.height = attributes.height;
  }

  login() {
    console.log("logging in to system");
  }
}

// ES2015 or ES6
class Person {
  constructor() {
    console.log("called constructor");
  }
}

var person = new Person();
