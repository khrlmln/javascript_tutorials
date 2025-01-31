// In JavaScript, static properties (or static fields) are properties that belong to the class itself, rather than to instances of the class. These properties are shared across all instances of the class and are typically used for values that should be the same for every instance, such as constants, counters, or configuration settings. Static properties are defined using the static keyword inside a class. We can access a static property or method using the class name, not an instance of the class.

class User {
  // The constructor method is called when a new instance of the class is created.
  // It initializes the 'username' property with the value passed during instantiation.
  constructor(username) {
    this.username = username; // Sets the 'username' property for the instance
  }

  // Instance method 'logMe' which is used to log a message with the 'username' property.
  logMe() {
    return `user ${this.username} logged in`; // Returns a string message with the username
  }

  // Static method 'createId' which generates a random ID.
  // Static methods are called directly from the class, not from an instance.
  static createId() {
    // Returns a random number between 0 and 9 as a string
    return `${Math.floor(Math.random() * 10)}`;
  }
}

// Creating an instance of the User class and passing "khrlmln" as the username
const userOne = new User("khrlmln");

// Calling the instance method 'logMe' on the 'userOne' instance
// This returns the string with the username of the user
console.log(userOne.logMe());

// Trying to call the static method 'createId' on the instance 'userOne'
// This will cause an error because static methods are intended to be called directly from the class
console.log(userOne.createId()); // This will throw an error: 'createId is not a function'

// The correct way to call a static method is by referencing the class directly:
console.log(User.createId());
