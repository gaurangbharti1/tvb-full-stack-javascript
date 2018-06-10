/**
 * Solution to responding to click
 * events from a button
 */

function onClick(el, cb) {
  el.addEventListener("click", cb);
}

const button = document.querySelector("#button");

onClick(button, function(e) {
  console.log("clicked");
});
