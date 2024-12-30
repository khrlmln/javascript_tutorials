// summarizes previously studied data types of JavaScript

// JS is a dynamically typed laguage.
// example:
// int a = 10; // statically typed language
// a = 10; // dynamically typed language (int data typed is not required to write in js) js automatically knows wether it is and intiger or string or boolean etc.

// premitive data types: aka called by value
// 7 types of primitive data types: String, Number, Boolean, Null, Undefined, Symbol, bigInt
let username = "Milan Kharel"; // string data type
let userAge = 25; // number data type
let userLoggedIn = true; // boolean data type
let userPhone = null; // null data type means we haven't given a value (typrof null = object)
let userEmail = undefined; // undefined data type
const randID = Symbol("123"); // symbol data type
let randomNumber = BigInt(12345678901234567890n); // data type bigint

// non primitive (refrence) data types: directly allocated refrences to memory
// 3 types of refrence data types: Array, Object & Functions
const fruits = ["Apple", "Mango", "Banana"]; // array data types
const userDetails = {
  userName: "Milan Kharel",
  userAge: 25,
  userEmail: "admin@example.com",
}; // object data types
const myFunction = function () {
  console.log("This is a JS function");
}; // function data type declared as variables

// ================== Memory in JS =======================
// 2 Memories is there in JS
// Stack Memory - used in primitive data types
let emailOne = "admin@example.com";

let emailtwo = emailOne;
emailtwo = "example@example.com";

console.log(emailOne);
console.log(emailtwo);

// Heap Memory - used in refrence data types (non-primitive)
let userOne = {
  userName: "Milan Kharel",
  userAge: 25,
  userEmail: "admin@example.com",
};

let userTwo = userOne;
userTwo.userEmail = "milan@example.com"; // we changed a value of email on userTwo but it overrides the value of userOne also because heap doesn't copy & allocates a new memory space unlike stack memory so, it updates or changes a values on original memory

console.log(userOne.userEmail);
console.log(userTwo.userEmail);
// that's why we got a same email address from userOne & userTwo
