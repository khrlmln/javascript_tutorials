// Q.1 is value of Math.PI is changable explain in brief
// Math.PI is a built-in constant in JavaScript, and its value is immutable. This means that the value of Math.PI cannot be changed, because it is read-only. It is a property of the Math object that is not writable.

// this is the example
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
// Output Explanation:
// The output will provide the property descriptor for Math.PI, which contains the following information:
/* 
{
  value: 3.141592653589793, // The current value of Math.PI.
  writable: false, // Indicates that the property is not writable, so it cannot be changed.
  enumerable: false, // This means that the property does not appear in for...in loops or Object.entries().
  configurable: false // The property cannot be deleted or modified in terms of its descriptor (i.e., you can't make it writable or configurable).
}
*/
// This shows that Math.PI is a constant and cannot be modified because 'writable' is set to false.

// Example:
// creating our own object
const user = {
  name: "Milan Kharel",
  email: "milan@example.com",
  address: "Kathmandu, Nepal",

  // A method on the object, indicating the user is an adult
  isAdult: function () {
    console.log(`user: ${this.name} is an adult`);
  },
};

// Retrieving the descriptor of the 'name' property from the user object
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Output Explanation:
// The descriptor will look like this:
/*
{
  value: "Milan Kharel", // The current value of 'name' property.
  writable: true, // The property is writable, so it can be changed.
  enumerable: true, // The property appears in for...in loops or Object.entries().
  configurable: true // The property can be deleted or modified in terms of its descriptor.
}
*/
// This means the 'name' property is a normal property of the user object.

// Now defining a property with modified descriptors
Object.defineProperty(user, "name", {
  writable: false, // Now, the 'name' property is not writable.
  enumerable: false, // The 'name' property will not appear in for...in loops or Object.entries().
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Output Explanation:
// Now the descriptor will look like this:
/*
{
  value: "Milan Kharel", // The value of 'name' is still the same.
  writable: false, // The property 'name' is no longer writable, so it cannot be modified.
  enumerable: false, // The property will not appear in enumeration methods like for...in or Object.entries().
  configurable: true // The property can still be deleted or its descriptor modified.
}
*/
// Iterating over the properties of the 'user' object using Object.entries()
// The iteration will exclude the 'name' property because it's not enumerable now.
for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

// Trying to change the value of the 'name' property after defining its descriptors
user.name = "Meelan";

// The assignment will not work because the 'name' property is now non-writable.
// The assignment `user.name = "Milan Sagar Kharel"` is ignored due to the non-writable property.
console.log(user.name);
