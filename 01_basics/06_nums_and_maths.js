// Numbers and Maths on JS

// Numbers in JS
const number = 400; // simple method to define a number
console.log(number);

// if i need to define an explicit numbers
const balance = new Number(400);
console.log(balance);

// methods of number object

// convert number to length
console.log(balance.toString().length);

// print a pricision values
console.log(balance.toFixed(2));

const otherNumber = 123.987;
console.log(otherNumber.toPrecision(3)); // roundoff value to nearest number

// Converts a number to a string by using the current or specified locale.
const newNumber = 150000;
console.log(newNumber.toLocaleString("en-IN"));

// Maths in JS
// Math is an intrinsic object that provides basic mathematics functionality and constants.
console.log(Math);
console.log(Math.abs(-10)); // Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.round(10.69)); // Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(10.29));

// we have two new methods ceil & floor to roundoff values
console.log(Math.ceil(10.28));
console.log(Math.floor(10.98));

// we can calculate square root, power etc of a number
console.log(Math.pow(7, 3));
console.log(Math.sqrt(100));

// min method to get the smaller of a set of supplied numeric expressions.
console.log(Math.min(12, 24, 48, 60, 72)); // prints min values of this array

// max method to get the larger of a set of supplied numeric expressions.
console.log(Math.max(12, 24, 48, 60, 72)); // prints max values of this array

// random method used to get a pseudorandom number between 0 and 1.
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1); // to get a random number between 1 - 10 herewe used floor method get lower number also we add 1 to avoid 0 value

// if we need a value between 10 - 20 range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
