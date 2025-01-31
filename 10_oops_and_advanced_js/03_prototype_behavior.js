// function with an added property:
function multiplyNums(num) {
  return num * num; // Multiply the number by itself (square it)
}

// Add a custom property 'power' to the function object
multiplyNums.power = 2;

// Call the function with 5 and log the result
console.log(multiplyNums(5));

// Log the custom 'power' property of the function
console.log(multiplyNums.power);

// Log the 'prototype' property of the function (an empty object in this case)
console.log(multiplyNums.prototype);

/*
Explanation:

1. Function Definition:
   The function `multiplyNums(num)` takes a number as an argument and returns its square (i.e., `num * num`). When we call `multiplyNums(5)`, it will return `25`.

2. Adding a Property:
   We can add a custom property `power` directly to the `multiplyNums` function object with the value `2`. In JavaScript, functions are objects, so we can assign properties to them just like any other object.

3. Calling the Function:
   When `multiplyNums(5)` is called, it calculates `5 * 5` and returns `25`, which is logged to the console.

4. Accessing the `power` Property:
   We access and log the `power` property of the `multiplyNums` function. Since we set `multiplyNums.power = 2`, the console will log `2`.

5. Accessing the `prototype` Property:
   Every function in JavaScript has a `prototype` property, which is used primarily in the context of object inheritance. Since `multiplyNums` is not used as a constructor function, its `prototype` is an empty object (`{}`), which is logged to the console.
*/

// Constructor function to create a user with username and score
function createUser(username, score) {
  this.username = username; // Assign the username to the object
  this.score = score; // Assign the score to the object
}

// Add a method to the prototype to update the score
createUser.prototype.updateScore = function () {
  this.score++; // Increment the score by 1
};

// Add another method to the prototype to print user score
createUser.prototype.printUserScore = function () {
  return `User ${this.username}'s score is updated into ${this.score}`;
};

const userOne = createUser("Milan", 152); // Without using 'new', this doesn't work properly because 'this' doesn't refer to a new object
// Explanation: In the case of 'createUser("Milan", 152)', 'this' inside the constructor. Function does not refer to a new object, it refers to the global object. Hence, properties like 'username' and 'score' are not properly set on a new object.

// Correct way to create a new user instance using 'new'
const userTwo = new createUser("Sameer", 120); // This works because 'new' creates a new object

// Log the prototype of the 'createUser' function (methods shared by all instances)
console.log(createUser.prototype); // Output will show the methods 'updateScore' and 'printUserScore' attached to the prototype

console.log(userOne.printUserScore()); // This will throw an error or not work as expected because 'userOne' is not created with 'new'. As 'userOne' wasn't created with 'new', 'this' inside 'createUser' didn't refer to a new object. Therefore, 'userOne' doesn't have the expected 'username' and 'score' properties, so 'printUserScore' might fail or not work properly.

console.log(userTwo.printUserScore()); // This will work fine because 'userTwo' was created using 'new', and 'userTwo' is a proper instance

/*
Working mechanism of 'new' keyword:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
