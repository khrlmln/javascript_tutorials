// In JavaScript, lexical scoping (also known as static scoping) refers to the way variables are resolved based on their physical location in the source code. This means that when a function is created, it "remembers" the scope in which it was created, not the scope from where it was invoked. In other words, the scope of a variable is determined at the time of writing the code, not when the function is executed. JavaScript functions have access to variables from the scope in which they were defined, not the scope in which they are invoked. This is why a function can access variables from its parent (outer) function even after that function has finished executing.

// **** Example of lexical scoping
function outerFunc() {
  let userName = "Milan"; // userName is declared in the outerFunc

  function innerFunc() {
    let email = "milan@example.com"; // email is declared in the innerFunc

    console.log(`username is: ${userName} and email is: ${email}`);
    // userName is accessible here because of lexical scoping.
    // innerFunc has access to variables in its own scope (email) and any variables in its outer scopes (userName). In this case, userName is accessible because innerFunc is inside outerFunc.
  }

  innerFunc();

  console.log(`email is: ${email} of ${userName}`);
  // This results in an error because email is only defined within the scope of innerFunc, so it's not accessible here. But, userName is still accessible here because it's defined in the scope of outerFunc, which is accessible to this code.
}

outerFunc();

console.log(userName);
// This also results in an error because userName is defined in the scope of outerFunc, and this console.log is outside that scope, so userName is not accessible here. It doesn't exist in the global scope, so the reference to it throws an error.

// **** Example of closure
function outerFunc() {
  let counter = 0; // counter is in the outer function's scope.

  // This inner function is a closure
  function innerFunc() {
    counter++; // innerFunc has access to counter from the outer scope
    console.log(counter);
  }

  return innerFunc; // Returning the inner function
}

const increment = outerFunc(); // Calling outerFunc returns innerFunc
increment();
increment();
increment();
