// In JavaScript, getters and setters are special methods that allows to define how properties of an object are accessed and modified. They are part of accessor properties and are used to control the behavior of reading from and writing to an object’s properties. Getters and setters are defined using the get and set keywords, respectively.
// 1. Getters: A getter is a method that is used to read the value of a property. It is defined using the get keyword.
// 2. Setters: A setter is a method that is used to set or update the value of a property. It is defined using the set keyword.

// Example:
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(val) {
    this._password = val;
  }
}

const userOne = new User("milan@example.com", "myPass@1");

console.log(userOne.password);

// another method: defining getter & setter through properties (function based)
function Users(email, password) {
  this.email = email;
  this._password = password;

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (val) {
      this._password = val;
    },
  });
}

const userTwo = new Users("meelan@example.com", "mee'sPass@");

console.log(userTwo.password);

// another method: defining getter & setter through object (object based)
const anotherUser = {
  email: "admin@example.com",
  _password: "admin'sPass@",

  get password() {
    return this._password.toUpperCase();
  },
  set password(val) {
    this._password = val;
  },
};

// we can create factory function
const userThree = Object.create(anotherUser);

console.log(userThree.password);
