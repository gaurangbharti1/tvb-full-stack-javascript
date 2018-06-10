/**
 * jQuery is a library written in JavaScript
 * that makes manipulating the DOM very easy.
 *
 * jQuery exists on the index.html included in
 * the exercise3 folder and is available on
 * the global scope.
 */

jQuery.get(
  "https://gist.githubusercontent.com/vjrngn/ef31cc969b66d6c80f149d2b8484c79e/raw/02031cad3adf0f1fee265a50bdf324ea94c5e934/rest_assignment.md",
  function(data) {
    console.log(data);
  }
);
