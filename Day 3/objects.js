// Method 1
let person = {
  name: "Vijay",
  age: 28,
  speak: function() {
    console.log("My name is " + this.name + ", I'm " + this.age + " years old");
  },
};

let dog = Object.create({});
dog.name = "Shadow";
dog.age = 10;
dog.bark = function() {
  console.log("bow bow!");
};

function printName() {
  function anotherPrintName() {
    console.log(this);
  }
  anotherPrintName();
}

// refactor function in person to ES6 syntax
// use template literal
