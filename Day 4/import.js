var library = require("./index");

console.log(library);

/** library is an object that was imported from
* the index.js file. The printName function
* is available as a method on the exported
* object.
*/

library.printName("Hello, World!");
