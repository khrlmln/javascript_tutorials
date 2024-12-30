// simple age variable with datatype number
let age = 25;
console.log(age, typeof age);

// variable with datatype string but value should be a number
let myAge = "25";
console.log(myAge, typeof myAge);

// Now convert myAge string to number
let newAge = Number(myAge);
console.log(newAge, typeof newAge);
// It'll log 25 value converted to number.

// If we got 25years from input then how to convert this into number? if we use above method the value of ageNumber "25years" will convert into number but value becomes NaN.
let ageNumber = "25years";
console.log(ageNumber, typeof ageNumber);

// Now convert myAge string to number
let newNumber = Number(ageNumber);
console.log(newNumber, typeof newNumber);
// as expected "25years" isn't converted into numbers and got a result of NaN number datatype

// Now lets try to convert numbers into boolean data type
// if we set a value to 1 then it'll convert into true and set a value of 0 then it'll convert into false
let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

// Now convert numbers into string data type
let phoneNumber = 8524178963;
console.log(phoneNumber, typeof phoneNumber);

let convertedPhoneNumber = String(phoneNumber);
console.log(convertedPhoneNumber, typeof convertedPhoneNumber);

// operations in JS
let str1 = "Hello";
let str2 = "Milan";
// method 1
let str3 = str1 + " " + str2;
console.log(str3);

// Method 2
console.log(str1, str2);

// In JavaScript, when you use the + operator with a string, it converts the other operands to strings and performs string concatenation.
// So, "1" + 3 results in "13", and then "13" + 2 results in "132".
console.log("1" + 3 + 2);

// Here, the parentheses (3 + 2) are evaluated first, so 3 + 2 results in 5. Now, the string "1" is concatenated with the number 5. Since the + operator is used with a string, JavaScript converts 5 to the string "5", and performs string concatenation. So, "1" + "5" results in "15".
console.log("1" + (3 + 2));
