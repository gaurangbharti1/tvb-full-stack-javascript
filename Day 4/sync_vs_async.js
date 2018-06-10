/**
 * sync vs async
 */

// Example of synchronous code
console.log("one");
console.log("two");
console.log("three");

// Example of asynchronous code
console.log("one");
setTimeout(function () {
  console.log("two");
}, 1000);
console.log("three");