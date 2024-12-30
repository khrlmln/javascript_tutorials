// Functions in JavaScript

// Defining a function 'addTwoNumbers' that takes two parameters (number1 and number2)
function addTwoNumbers(number1, number2) {
  // The function returns the sum of the two numbers passed as arguments
  return number1 + number2;
}

// Calling the 'addTwoNumbers' function with arguments 10 and 50, and logging the result to the console
console.log(addTwoNumbers(10, 50)); // Expected output: 60

// Defining another function 'loginUserMessage' that takes one parameter 'username'
function loginUserMessage(username) {
  // If no 'username' is provided (i.e., it is falsy), log a message to request a username
  if (!username) {
    console.log("Please enter a username");
    return; // Exit the function early if no username is provided
  }
  // If a valid 'username' is provided, return a success message
  return `${username} logged in successfully`;
}

// Calling 'loginUserMessage' with the argument 'khrlmln' and logging the result
console.log(loginUserMessage("khrlmln")); // Expected output: "khrlmln logged in successfully"

// Calling 'loginUserMessage' without any arguments (username is undefined), which triggers the error message
loginUserMessage(); // Expected output: "Please enter a username"

// The function calculateCartPrice takes multiple price values using the rest operator (...) and returns them as an array.
function calculateCartPrice(...price) {
  return price;
}

console.log(calculateCartPrice(100, 452, 741)); // Output: [100, 452, 741]

// pass an object to a function.
// create a 'users' object and pass it to the handleObject function, which accesses the properties of the object.
const users = {
  userName: "Milan Kharel",
  age: 25,
  email: "milan@example.com",
};

function handleObject(anyobject) {
  return `username is ${anyobject.userName}, age is ${anyobject.age}, email is ${anyobject.email}`;
}

console.log(handleObject(users)); // Output: username is Milan Kharel, age is 25, email is milan@example.com

// The function can also directly accept an object without needing a separate variable.
console.log(
  handleObject({
    userName: "Mee",
    age: 30,
    email: "mee@mee.com",
  })
);

// pass and work with an array in a function.
// create an array 'myArray' and pass it to the handleArray function, which returns the value at index 2.
const myArray = [100, 456, 789, 741];

function handleArray(getArray) {
  return getArray[2]; // Returns the element at the 2nd index (789 in this case)
}

console.log(handleArray(myArray)); // Output: 789

// The function can also directly accept an array without needing a separate variable.
console.log(handleArray([14, 88, 74])); // Output: 74
