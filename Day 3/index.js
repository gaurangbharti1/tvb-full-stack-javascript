var age = 21;

if (age >= 21) {
  let message = "you are allowed to drink";
  message = "something else";

  console.log(message);
}

function doSomething() {
  console.log(message, someOtherMessage);
  let message = "some mesasge";
  var someOtherMessage = "some other message";
}

doSomething();

let newObj = {
  set foo(value) {
    console.log("setting value");
    this._foo = value;
  },
  get foo() {
    console.log("getting value");
    return this._foo;
  },
};

let obj = {
  set foo(value) {
    if (typeof value !== "string") {
      console.error("expected a string but got " + typeof value);
    }
  },
};

let person = {
  name: "vijay",
  age: 28,
  speak() {
    console.log("My name is " + this.name);
  },
};
