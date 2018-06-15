function getUsers(cb) {
  $.ajax({
    url: "https://randomuser.me/api",
    success: function(data) {
      cb(data.results);
    },
  });
}

/**
 * Usage of our custom getUsers function.
 * */
getUsers(function(users) {
  console.log(users);
});
