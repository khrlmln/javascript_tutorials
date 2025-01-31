// In JavaScript, prototypes are used to add methods and properties to objects. Every JavaScript object has a prototype, which is essentially another object that it inherits properties and methods from. The prototype mechanism allows objects to share methods and properties without having to define them individually on each object, making our code more efficient.

// Declare an array of hero names
let heros = ["Thor", "Spiderman"];

// Declare an object that stores powers for heroes
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  // Method to get Thor's power
  getHeroPower: function () {
    return `Thor's power is ${this.thor}`; // Uses 'this' to refer to 'thor' from the heroPower object
  },
};

// Add a method 'milan' to the Object prototype, making it available to all objects
Object.prototype.milan = function () {
  return `milan is present in all objects`; // This method is now available to all objects
};

// Add a method 'heyMilan' to the Array prototype, making it available to all arrays
Array.prototype.heyMilan = function () {
  return `milan says hello`; // This method is now available to all arrays
};

// Call the 'milan' method on the 'heroPower' object
console.log(heroPower.milan()); // heroPower is an object, and all objects inherit from Object.prototype, so it can access the 'milan' method defined on Object.prototype

// Call the 'milan' method on the 'heros' array
console.log(heros.milan()); // heros is an array, and arrays are objects in JavaScript, so they inherit from Object.prototype, making the 'milan' method available to them

// Call the 'heyMilan' method on the 'heros' array
console.log(heros.heyMilan()); // heros is an array, and 'heyMilan' was defined specifically on Array.prototype, so it is available to all arrays.

// Call the 'heyMilan' method on the 'heroPower' object
console.log(heroPower.heyMilan()); // heroPower is an object, but 'heyMilan' was defined on Array.prototype. Since heroPower is not an array, it does not inherit the 'heyMilan' method. Therefore, calling 'heyMilan' on heroPower results in an error.
