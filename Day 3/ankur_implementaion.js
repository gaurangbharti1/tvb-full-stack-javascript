//User class using es5 syntax
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.speak = function() {
  console.log(`${this.name} says Hi`);
};

User.prototype.play = function(player) {
  console.log(`${this.name} wants to play with ${player} `);
};

//User for 2nd assignment
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} says Hi`);
  }

  play(player) {
    console.log(`${this.name} wants to play FIFA with ${player}`);
  }
}

//Users collection class
class Users {
  constructor(users) {
    if (!Array.isArray(users)) {
      this.users = [users];
    }

    this.users = users.filter(function(user) {
      return user instanceof User;
    });
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users.pop(user);
  }
}

let vijay = new User("vijay", 28);
let users = new Users(vijay);
