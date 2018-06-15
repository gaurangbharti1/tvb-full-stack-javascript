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

const transformedUsers = users.map(function(user) {
  return {
    name: user.name,
  };
});

console.log(transformedUsers);
