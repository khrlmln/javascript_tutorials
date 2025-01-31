// Prototype Inheritance in JavaScript refers to a mechanism where objects can inherit properties and methods from other objects. This concept is a fundamental part of JavaScript and is essential for working with objects and classes. It allows for shared behavior and efficient memory usage by allowing multiple objects to share common methods without having to define them individually on each object.

// Object representing a User with properties like username, email, and password.
const User = {
  username: "khrlmln",
  email: "milan@example.com",
  password: "examplePass123",
};

// Object representing a Teacher, with a property indicating they can make lectures.
const Teacher = {
  makeLecture: true,
};

// Object representing TeachingSupport, with a property indicating availability.
const TeachingSupport = {
  isAvailable: false,
};

// Object representing TASupport, which inherits from TeachingSupport.
// It adds properties to create assignments and is full-time.
const TASupport = {
  makeAssignment: true,
  fullTime: true,
  __proto__: TeachingSupport, // Set TeachingSupport as its prototype (inheritance)
};

// Set Teacher as the prototype for TASupport, making TASupport inherit from Teacher.
Teacher.__proto__ = User; // Now Teacher inherits from User

// Modern syntax: This changes the prototype of TeachingSupport to Teacher. This means that TeachingSupport will inherit properties of Teacher.
Object.setPrototypeOf(TeachingSupport, Teacher);
