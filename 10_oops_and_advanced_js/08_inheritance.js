// Inheritance in JavaScript allows one object (or class) to inherit properties and methods from another, which promotes code reuse and enables more structured, maintainable code. JavaScript uses prototype-based inheritance, but ES6 classes provide a cleaner syntax to implement inheritance.

// This is a simple example of class-based inheritance in JavaScript
class User {
  // The constructor method initializes the 'username' property when a new instance is created.
  constructor(username) {
    this.username = username; // Sets the 'username' property for the instance
  }

  // Method that returns a string displaying the 'username' property
  logMe() {
    return `username is ${this.username}`; // Logs the username of the instance
  }
}

// Defining a derived class 'Teacher' that extends the 'User' class
class Teacher extends User {
  // Constructor of the 'Teacher' class. It calls the parent class constructor using 'super()' and initializes additional properties
  constructor(username, email, password) {
    super(username); // Calls the constructor of the parent class (User) to initialize the 'username' property
    this.email = email; // Sets the 'email' property specific to the Teacher class
    this.password = password; // Sets the 'password' property specific to the Teacher class
  }

  // Method specific to the 'Teacher' class that adds a course
  addCourse() {
    return `a new course is added by ${this.username}`; // Logs a message with the teacher's username
  }
}

// Creating an instance of the 'Teacher' class with username, email, and password
const teacher = new Teacher("khrlmln", "khrlmln@example.com", "myPass123");

// Logging the 'teacher' object to see all the properties and methods inherited and defined
console.log(teacher);

// Calling the 'logMe' method, which is inherited from the 'User' class
console.log(teacher.logMe());

// Calling the 'addCourse' method, which is specific to the 'Teacher' class
console.log(teacher.addCourse());
