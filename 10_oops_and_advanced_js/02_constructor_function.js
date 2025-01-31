// A constructor function in JavaScript is a special type of function used to create and initialize objects. It allows us to define the properties and methods that should be shared by all instances of the object. When we invoke a constructor function with the new keyword, a new object is created, and this inside the constructor refers to that new object.

// Constructor function
function person(name, age) {
  // Properties
  this.name = name;
  this.age = age;

  // Method
  this.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

// Creating instances
const person1 = new person("Milan", 25);
const person2 = new person("Bob", 25);

/* 
The new keyword in JavaScript is used to create a new instance of an object that is based on a constructor function or an ES6 class. When we use new, a number of things happen behind the scenes to set up the new object and its properties. Let's break down how the new keyword works and what it does.

How the new Keyword Works: When we use the new keyword, JavaScript performs the following steps:
    1. Create a new object: A new empty object is created.

    2. Set the prototype: The __proto__ (prototype) of the new object is set to the constructor function’s prototype property (or the class's prototype in the case of ES6 classes).

    3. Bind this: The this keyword inside the constructor function (or class) is bound to the newly created object.

    4. Call the constructor function: The constructor function (or class constructor) is executed, and it initializes the properties of the new object.

    5. Return the object: If the constructor function does not explicitly return an object, the newly created object is automatically returned. If the constructor function returns an object, that object will be returned instead.
*/

// Accessing properties and methods
console.log(person1.greet());
console.log(person2.greet());
