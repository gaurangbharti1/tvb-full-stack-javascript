/**
 * Write a function that
 * executes every n seconds
 *
 * For example, a function that
 * prints to the console every second
 */

// ES5 syntax
let token = setInterval(function() {
  console.log("I'm going to run every second");
}, 1000);

setTimeout(function() {
  clearInterval(token);
}, 5000);

// ES6 syntax
// setInterval(() => {
//   console.log("I'm going to run every second");
// }, 1000);

// let token = setInterval(function () {
//   console.log('called')
// }, 1000);

// let timeoutToken = setTimeout(function () {
//   clearInterval(token);
// }, 5000)

// clearTimeout(timeoutToken);
