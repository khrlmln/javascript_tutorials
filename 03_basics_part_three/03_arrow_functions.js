// Arrow Functions in JavaScript

const user = {
  userName: "Milan",
  welcomeMessage: function () {
    return `${this.userName} welcome to website`;
  },
};

console.log(user.welcomeMessage());

// Arrow functions in JavaScript provide a more concise way to write functions compared to traditional function expressions. They were introduced in ECMAScript 6 (ES6).

// basic arrow function
const greeting = (userName) => {
  return `Hello, ${userName}`;
};

console.log(greeting("Milan"));

// implicit return arrow function
const greet = (userName) => `Hello Again, ${userName}`;

console.log(greet("Milan"));

// passing an object using implicit return arrow function
const users = () => ({ userName: "Milan" });

console.log(users());
