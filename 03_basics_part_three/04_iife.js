// Immediately Invoked Function Expressions (IIFE)

// An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that is defined and executed immediately after its creation. It's typically used to create a new scope, isolating variables to avoid polluting the global scope, especially in older JavaScript code before the introduction of let, const, and block-scoped variables.

// Named IIFE
(function databaseConnect() {
  console.log(`DB Connected`);
})();

// using arrow function (Unnamed IIFE)
(() => {
  console.log(`Another DB Connected`);
})();

// by passing a parameters
((userName) => {
  console.log(`Hello ${userName}`);
})("Milan");
