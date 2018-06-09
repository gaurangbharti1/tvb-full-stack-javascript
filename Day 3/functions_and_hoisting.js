/**
 * Functions declaration and expression
 *
 * Hoisting
 *
 * Scopes
 *
 */

// Function declaration
function printName(name) {
  console.log(name);
}

// Function expression
var printName = function(name) {
  console.log(name);
};

// Difference ?
var foo = undefined;
console.log(foo()); // what happens ??
foo = function() {
  return 10;
};

console.log(bar()); // what happens ?
function bar() {
  return 5;
}

// HOISTING

// So why does this happen ?
console.log(name);
var name = "Vijay";
console.log(name);

function changeName() {
  name = "Anil";
}

console.log(name);

function myFunc() {
  var foo = "bar";
}

console.log(foo);

// Scope
console.log(this);

var obj = {
  do: function() {
    console.log(this);
  },
};

// var, let, const
console.log(someVar);
console.log(other);
console.log(another);
var someVar = "someVar";
let other = "other";
const another = "another";
