// Scopes in JavaScript

/*
In JavaScript, scope refers to the region of the code where a variable is accessible. There are different types of scope in JavaScript:

1. Global Scope: Variables declared outside of any function or block are accessible everywhere in the code.

2. Function Scope: Variables declared inside a function are accessible only within that function.

3. Block Scope: Variables declared inside a block (e.g., inside loops, conditionals) are accessible only within that block.
*/

// lets create a if block and assign a value on 3 variables created using var, let & const
if (true) {
  var a = 100; // Variable 'a' is declared using 'var' and assigned the value 100.
  let b = 152; // Variable 'b' is declared using 'let' and assigned the value 152.
  const c = 123; // Variable 'c' is declared using 'const' and assigned the value 123.
}

// now lets try to access variables from outside of if block and see if a value printed or not
// console.log(a); // does work - Since 'a' was declared with 'var', it has a function or global scope, so it is accessible outside the if block.
// console.log(b); // doesn't work - 'b' was declared with 'let' which has block scope, so it's not accessible outside the if block. It throws an error: "b is not defined".
// console.log(c); // doesn't work - 'c' was declared with 'const', which also has block scope, so it's not accessible outside the if block. It throws an error: "c is not defined".

// Nested Scopes in JavaScript

// create a function
function firstFunction() {
  const userName = "Milan"; // userName is defined in the scope of firstFunction

  // Nested secondFunction inside firstFunction
  function secondFunction() {
    const email = "milan@example.com"; // email is defined in the scope of secondFunction
    console.log(userName); // It works because 'userName' is in the outer scope (firstFunction)
  }

  // console.log(email); // Error: email is not defined in the scope of firstFunction email is declared inside secondFunction, so it's not accessible here

  secondFunction(); // calling secondFunction, which logs 'userName' to the console
}

firstFunction(); // calling firstFunction, which in turn calls secondFunction

// create an if block
if (true) {
  const username = "Milan"; // 'username' is scoped to this if block

  // Nested if block inside the first if block
  if (true) {
    const email = "milan@example.com"; // 'email' is scoped to this nested if block
    console.log(`username is: ${username}, email is: ${email}`); // It works because 'username' and 'email' are both accessible within this nested block
  }

  // console.log(email); // Error: email is not defined in this scope, 'email' is scoped to the inner if block, so it's not accessible here (outside of the nested if)
}

// console.log(username); // Error: username is not defined outside of the if block, 'username' is scoped to the outer if block, so it's not accessible outside of it

// interesting problem

// This logs the result of calling the 'addNum' function
console.log(addNum(5));

// function declaration.
function addNum(num) {
  return num + 1;
}

// This is a function expression. It creates an anonymous function and assigns it to the constant 'addNumTwo'.
const addNumTwo = function (num) {
  return num + 1;
};

// This calls the 'addNumTwo' function
addNumTwo(4);
