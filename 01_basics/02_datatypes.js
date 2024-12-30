"use strict"; // treat all js as newer version of js

/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint --> JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The object data type can contain:
1. An object
2. An array
3. A date
*/

let fullName = "Milan Kharel"; // datatype string
let age = 25; // datatype number
let bigNumber = BigInt("123456789012345678901234567890"); // datatype bigint
let accountActive = true; // boolean datatype
let address; // undefined datatype
let phoneNumber = null; // null is an object

console.table([
  fullName,
  typeof fullName,
  age,
  typeof age,
  bigNumber,
  typeof bigNumber,
  accountActive,
  typeof accountActive,
  address,
  typeof address,
  phoneNumber,
  typeof phoneNumber,
]);

//  Symbols can also be used as object keys. This is useful when you want to assign a unique identifier to an object.
const mySymbol = Symbol();

const myObject = {
  [mySymbol]: "Hello World",
};

console.log(myObject[mySymbol]);
// expected output: 'Hello World'

//  Symbols can also be used to create private properties in objects. Private properties are not enumerable, which means they will not show up when iterating over the object's properties.
const mySymbols = Symbol();

const myObjects = {
  [mySymbol]: "Hello World",
};

// Private property is not enumerable
console.log(Object.keys(myObject));

// an object
const userDetails = {
  userName: "Milan Kharel",
  userAge: 25,
  userEmail: "example@example.com",
  userLogged: true,
  address: "Mulpani Kathmandu",
  phoneNumber: null,
};

console.log(userDetails);

// an array in js
const fruits = ["Apple", "Banana", "cherry", "Dragonfruit", "Mango"];

console.log(fruits);

// date object in js

/* Date objects are created with the new Date() constructor.
 */
const date = new Date();

console.log(date);
