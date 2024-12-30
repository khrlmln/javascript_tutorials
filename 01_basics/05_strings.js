// Strings in JS
// we can use '', "" to write a string and use + sign to concatinate two strings
const userName = "Milan Kharel";
const userAge = 25;

console.log("Name is: ", userName + " " + "age is: ", userAge); // it works but not suggested to use anymore
console.log(`Name is ${userName.toUpperCase()} and age is ${userAge}`); // this is a modern way to concatinate two or more strings. It is known as string interpolation
// we can use methods directly if we use string interpolation, in this case toUpperCase() is a method which will uppercase userName

// Another method to write a string () in JS
// String constructor (String object)
const fullName = new String("Milan-Kharel");

// access multiple methods of string
console.log(fullName);
console.log(fullName[0]); // to access key value pairs
console.log(fullName.__proto__);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(3));
console.log(fullName.indexOf("e"));
// we can slice string value also
console.log(fullName.slice(0, 4));

// string slice method store on another variable
const firstName = fullName.substring(0, 4);
console.log(firstName);

// we can use negative values to get result from reverse on slice() method
const anotherName = fullName.slice(-3, 12);
console.log(anotherName);

// trim methods on string to remove extra spaces
const newString = "           Milan";

console.log(newString);
console.log(newString.trim()); // trim() method is used to remove extra space from string values. mostly used on website forms where user might knowingly or unknowingly adds extra spaces before submitting forms

// string replace() method
const url = "https://www.google.com/search?q=google%20nest";
console.log(url.replace("%20", "-"));
// OR
const urlOne = "https://www.google.com/search?q=google nest";
console.log(urlOne.replace(" ", "-"));

// to search if url includes particular words or not
console.log(urlOne.includes("google"));
console.log(urlOne.includes("facebook"));

// convert strings to arrays based on dash "-" or space " "
const webURL = "milankharel-com-np";
console.log(webURL.split("-"));
