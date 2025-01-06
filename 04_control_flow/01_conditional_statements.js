// Conditional Statements in JavaScript

// If statement
if (true) {
  console.log("Hello World!");
} // it executes only if condition is true otherwise it doesn't execute

// Else statement
if (2 != 2) {
  console.log("False");
} else {
  console.log("True");
} // it executes based on the conditions, if condition is true then if block's code is executed otherwise else block's code is executed

// Else if Statement
marks = 95;

if (marks < 0 || marks > 100) {
  console.log("Enter a valid marks");
} else if (marks > 90) {
  console.log("You've got 'A' grade");
} else if (marks > 80) {
  console.log("You've got 'B' grade");
} else if (marks > 70) {
  console.log("You've got 'C' grade");
} else if (marks > 60) {
  console.log("You've got 'D' grade");
} else {
  console.log("You've got 'F' grade");
}

// Nested if-else statement
let a = 10;
let b = 20;
let c = 30;

if (a < b) {
  if (b < c) {
    console.log("b is between a and c");
  } else {
    console.log("b is not less than c");
  }
} else {
  console.log("a is not less than b");
}

// Switch statements
const month = "january";

switch (month) {
  case "january":
    console.log("January");
    break;
  case "february":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  default:
    console.log("Default Case Matched");
    break;
}

// Truthy & falsy values determine how values are interpreted in contexts where a boolean value is required, such as in conditionals (if statements) or logical operations.

// Falsy values
/* These are values that are considered false when evaluated in a boolean context. The falsy values in JavaScript are:
    false
    0
    -0 (negative zero)
    0n (BigInt zero)
    "" (an empty string)
    null
    undefined
    NaN (Not-a-Number)

If any of these values are used in a condition like an if statement, they will be evaluated as false. */

if (false) {
  console.log("This won't run");
}
if (0) {
  console.log("This won't run either");
}
if ("") {
  console.log("This won't run");
}

// Truthy values
/* All values that are not falsy are considered truthy. Even values like [] (an empty array), {} (an empty object), and new Date() (a date object) are truthy.

Examples of truthy values include:
    true
    Any non-zero number (e.g., 42, 3.14)
    Non-empty strings (e.g., "hello", " ")
    Objects (e.g., {}, [])
    Dates (new Date())
    Infinity and -Infinity
    Any non-zero BigInt (e.g., 1n)

In these cases, the condition evaluates to true. */

if (true) {
  console.log("This will run");
}
if (42) {
  console.log("This will also run");
}
if ("hello") {
  console.log("This will run too");
}
if ([]) {
  console.log("This will run");
}

// checking array is empty or not
const fruits = [];

if (fruits.length === 0) {
  console.log("Array is empty");
}

// checking object is empty or not
const users = {};

if (Object.keys(users).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): The nullish coalescing operator is used to provide a fallback value when a value is null or undefined. It works similarly to the logical OR (||), but it only checks for null or undefined, unlike ||, which also considers other falsy values like 0, NaN, and "" (empty string).

let value;
let finalVal = value ?? 10;

console.log(finalVal);

// Ternary Operator (? :): The ternary operator is a shorthand for an if-else statement. It allows you to evaluate a condition and return one of two values based on whether the condition is true or false.

let iceTeaPrice = 100;
iceTeaPrice < 80
  ? console.log("price is less than 80")
  : console.log("price is more than 80");
