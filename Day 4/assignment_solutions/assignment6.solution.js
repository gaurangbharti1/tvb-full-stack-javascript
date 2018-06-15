function getUsers(cb) {
  $.ajax({
    url: "https://randomuser.me/api?results=10",
    success: function(data) {
      cb(data.results);
    },
  });
}

getUsers(function(users) {
  const transformedUsers = users.map(function(user) {
    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  });

  console.log(transformedUsers);
});
