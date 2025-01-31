// In JavaScript, classes are a more structured and modern way to create objects and handle inheritance. They were introduced in ES6 (ECMAScript 2015), and they are syntactic sugar over JavaScript's existing prototype-based inheritance system. Classes provide a cleaner and more familiar syntax to define constructors and methods.

// Class definition of the User class using ES6 syntax
class User {
  // The constructor method initializes the object when a new instance is created.
  // It sets the username, email, and password properties based on the values passed during instantiation.
  constructor(username, email, password) {
    this.username = username; // Assigns the 'username' property to the instance
    this.email = email; // Assigns the 'email' property to the instance
    this.password = password; // Assigns the 'password' property to the instance
  }

  // Method that encrypts the password by appending a string to it.
  // It returns a encrypted password string.
  encryptPassword() {
    return `(myPass${this.password}%^&*)`; // Creates a mock encryption format with the password
  }
}

// Creating an instance (object) of the User class using the 'new' keyword.
// The new instance has properties: username, email, and password initialized via the constructor.
const userOne = new User("khrlmln", "milan@example.com", "password");

// Logs the 'userOne' object, showing the properties that were set during initialization.
console.log(userOne);

// Calls the 'encryptPassword' method of 'userOne', which returns the "encrypted" password.
console.log(userOne.encryptPassword());

// Below is the old function-based approach (without using class syntax)

/* 
    Function-based object creation using constructor function syntax.
    Here, the User function works as a constructor to create objects with properties: username, email, and password.
    This is similar to how classes work in JavaScript, but the syntax is older.
  */
function User(username, email, password) {
  this.username = username; // Sets the 'username' property for the new object
  this.email = email; // Sets the 'email' property for the new object
  this.password = password; // Sets the 'password' property for the new object
}

/*
    Adding a method to the 'User' constructor function's prototype.
    The 'encryptPassword' method is now available to all instances created by this constructor function.
    This is the classical way of defining methods for instances, as opposed to using class syntax.
  */
User.prototype.encryptPassword = function () {
  return `(myPass${this.password}%^&*)`; // Returns the "encrypted" password using a mock encryption
};

// Creating another instance (object) using the constructor function approach
const userTwo = new User("milan", "kharel@example.com", "pass");

// Logs the 'userTwo' object, showing the properties: username, email, and password.
console.log(userTwo);

// Calls the 'encryptPassword' method of 'userTwo', which returns the "encrypted" password.
console.log(userTwo.encryptPassword());
