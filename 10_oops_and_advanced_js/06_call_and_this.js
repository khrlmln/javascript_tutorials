//  In JavaScript, call and this are often used together to invoke functions in a different context.

/*
this refers to the context in which a function is called. Its value depends on how the function is invoked.

    Inside a regular function, this refers to the global object (in browsers, it’s window).

    Inside an object method, this refers to the object itself.

    Inside an arrow function, this is lexical, meaning it uses the value of this from the outer context.
*/

// The call() method allows us to invoke a function with a specified this value and arguments provided individually. It’s especially useful when we want to invoke a function in a different context than the one in which it’s defined.

// EXample:
// This is a helper function that assigns the username to the current object (the 'this' context). It's intended to be reused to avoid repetition.
function setUserName(username) {
  this.username = username; // 'this' refers to the object on which setUserName is called.
}

// The createUser function is meant to create a new user object with username, email, and password.
function createUser(username, email, password) {
  // call setUserName using 'call' so that 'this' inside setUserName refers to the new object created by 'new createUser'.
  // 'this' will be the context of the newly created object (i.e., the user being created).
  setUserName.call(this, username);

  // After setting the username, manually assign the email and password to the new object.
  this.email = email;
  this.password = password;
}

// Here, using the 'new' keyword to create a new instance of createUser.
// 'new' ensures that 'this' inside createUser will refer to the new object being created (the user object).
const userOne = new createUser("milan", "milan@example.com", "myPass@123");

// logs the created user object to the console, showing the username, email, and password.
console.log(userOne);
