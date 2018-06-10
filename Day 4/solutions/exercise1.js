/**
 * Write a function that
 * executes every n seconds
 *
 * For example, a function that
 * prints to the console every second
 */

// ES5 syntax
setInterval(function() {
  console.log("I'm going to run every second");
}, 1000);

// ES6 syntax
setInterval(() => {
  console.log("I'm going to run every second");
}, 1000);
