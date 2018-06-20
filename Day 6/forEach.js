/**
 * Let us look at Array.prototype.forEach and
 * see how it works.
 *
 * In this assignment we'll move from a simple
 * `for` loop to a custom forEach function called
 * 'each'. This assignment is aimed at giving you
 * a better understanding of how .forEach works.
 */

/** Let's write a simple loop that iterates over each item in an array */
let names = ["shadow", "lilly", "snowbell"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/** The result at the end of this loop will be:
 * > shadhow
 * > lilly
 * > snowbell
 *
 * Let's create another loop where we iterate over
 * a list of todos and mark each of them as complete
 */

let todos = [
  {
    id: 1,
    title: "Go to the mall",
    completed: false,
  },
  {
    id: 2,
    title: "Learn about forEach",
    completed: false,
  },
  {
    id: 3,
    title: "Learn more awesome JS stuff!!",
    completed: false,
  },
];

for (let i = 0; i < todos.length; i++) {
  todos[i].completed = true;
}

console.log(todos);

/** At the end of this loop, all items will be correctly
 * marked as completed = true.
 *
 * Let's convert these loops into
 * a method on the Array object so we don't have to
 * manually create a for loop, setting up variable `i`
 * to keep track of the index and so on...
 *
 * In the below section we create our own Array.prototype.each
 * method on the Array object.
 */

Array.prototype.each = function() {
  /** Notice below that we don't need to take an array as input from the function.
   * Since we are creating a method on the Array object, `this` refers to
   * the array of items that we want to iterate over.
   */
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

/** Using our names array from above, we'll see that
 * calling `names.each`, prints each item to the console.
 */
names.each();

/** Calling the `.each` method on our list of todos
 * prints the todos to the console.
 */
todos.each();

/** But, what if we want our original functionality
 * of marking each item as completed. We could write another
 * method to do that but that would not be very useful
 * as for every use case we will have to create a special method.
 *
 * Instead, let's provide a way for the user to customise
 * what happens to each item in the loop.
 *
 * How do we do that ? Let's take a look
 */

Array.prototype.customisedEach = function(callback) {
  if (typeof callback !== "function") {
    return this;
  }
  /** As we have learned, callbacks are functions passed to
   * other functions. Since we want to allow the user
   * to customise what happens to each item in the array,
   * we accept a user provided function as an argument
   * to our function.
   *
   * Our function (customsedEach) has only one responsiblity.
   * It loops over all items in the array. What happens to each
   * item is upto the user to decide, or, to put it in terms of
   * code, it is upto the `callback` to decide.
   *
   * So, all we have to do is give the callback each item as an
   * argument as we loop over the items.
   */
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

/** Now that we have our new super powered `customisedEach` method,
 * let's use it to mark all the items in our todos as complete.
 *
 * Before moving on, let's make create a new list of todos.
 */

let newTodos = [
  {
    id: 4,
    title: "Another thing to do",
    completed: false,
  },
  {
    id: 5,
    title: "Yet another thing to do",
    completed: false,
  },
];

newTodos.customisedEach(); // just calling this is not enough as all the function does is run a loop.

// We have to call this function and provide our own logic to transform each
// item. We do that by providing a function to the `customisedEach` method.
// Before we pass our own function, let's take a simple function for example.

function markAsCompleted(todo) {
  todo.completed = true;
}

let todo = {
  id: 1,
  title: "something to do",
  completed: false,
};
markAsCompleted(todo);

console.log(todo); // This prints the todo object provided above, but, it has now been marked complete

/** This is the same concept we use for our `customisedEach` method, the only difference
 * is that the for loop will call this function on our behalf instead of us manually calling
 * it. 
 * 
 * Let us pass this `markAsComplete` function as an argument to `customisedEach`. As we saw from 
 * the implementation of `customisedEach` above (on line 93), we accept a function that is
 * called for each item in the loop. On line 112, we see `callback(this[i])`, where
 * `this[i]` represents the currently iterated item and our `markAsCompleted` function
 * accepts a todo item as it's argument. So, using our newTodos list from above,
 * `this[0]` = {
    id: 4,
    title: "Another thing to do",
    completed: false
  };
  and we pass this item to the `markAsCompleted` function. Let's now bring these
  two concepts together.
*/

newTodos.customisedEach(markAsCompleted);

/**
 * Notice to following:
 *
 * Correct way: `newTodos.customisedEach(markAsCompleted)`
 * Incorrect way: `newTodos.customisedEach(markAsCompleted())`.
 *
 * When we want to pass a function to another function as a reference
 * and should NOT call the function.
 *
 * If we log the newTodos array now, we will see that all
 * items have been correctly marked as complete
 */
console.log(newTodos);

/** We may also write the above as follows. This time let's mark all items as incomplete
 * by setting completed = false.
 *
 * Here we pass an in-line function instead of defining it before-hand.
 * This function is also called an in-line anonymous function and is
 * equivalent to `markAsCompleted`.
 */
newTodos.customisedEach(function(todo) {
  todo.completed = false;
});

console.log(newTodos);
