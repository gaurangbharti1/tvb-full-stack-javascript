/**
 * Let's learn about the Array.prototype.map function.
 *
 * `map` function allows us to transform an item in
 * an array and return a new transformed array.
 *
 * Reading material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 */

/**
 * Let's look at an example.
 *
 * Given an array of numbers [1,2,3,4,5]
 * let us transform this array by multiplying
 * each item by 2.
 */

let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(function(number) {
  /**
   * Array.prototype.map loops over the numbers array one item at a time.
   * On every loop through the array, it gives the
   * number at the current index.
   *
   */
  return number * 2;
});

/**
 * When we run this, each number in the array is multiplied by 2
 */
console.log(transformedNumbers);

/**
 * Let's look at another example.
 *
 * map is not just useful for working with numbers!
 * We can transform ANYTHING in an array. Let's take the
 * following example.
 */

let cats = [
  {
    name: "tinkerbell",
    age: 7,
    breed: "persian",
  },
  {
    name: "sam",
    age: 3,
    breed: "british shorthair",
  },
  {
    name: "max",
    age: 5,
    breed: "maine",
  },
];

/** Let us transform this array of object
 * and return only the `name` and `breed`
 * of cats
 */

let transformedCats = cats.map(function(cat) {
  /**
    * On the first iteration of this loop,
    * the variable cat has the value
    * {
        name: "tinkerbell",
        age: 7,
        breed: 'persian'
      }
    * 
    * On the second iteration, it's value is
    * {
        name: "same",
        age: 3,
        breed: 'british shorthair'
      },

    * and so on.
    * 
    * If we want just the name and breed, we do it like so:
    */

  return {
    name: cat.name,
    breed: cat.breed,
  };
});

/**
 * Now let's get your hands dirty with some code!
 *
 * Transform the users collection below to get only
 * the name.
 */

let users = [
  {
    name: "john",
    age: 22,
    email: "john@exmaple.com",
    friends: [
      {
        name: "jane",
        age: 20,
        email: "jane@example.com",
      },
    ],
  },
  {
    name: "mark",
    age: 30,
    email: "mark@exmaple.com",
    friends: [],
  },
  {
    name: "chris",
    age: 25,
    email: "chris@exmaple.com",
    friends: [
      {
        name: "mark",
        age: 30,
        email: "mark@example.com",
      },
    ],
  },
];

// TODO: console.log the transformed array of objects
// that only contains the name from the above users array
