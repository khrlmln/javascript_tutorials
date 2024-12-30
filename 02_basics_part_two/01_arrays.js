// **** Array in JavaScript
// An array is a group of similar elements or data items of the same type collected at contiguous memory locations. In simple words, we can say that in computer programming, arrays are generally used to organize the same type of data.

const myArr = [13, 25, 41, 78, 85]; // number based arrays
console.log(myArr); // to print all values stored in arrays
console.log(myArr[2]); // to print specific value (using indexing)

// Another method to declare an array
const myArr2 = new Array(10, 4, 52, 85);
console.log(myArr2);

// **** Methods in array
myArr.push(5); // to add a new value in array
console.log(myArr);

myArr.pop(); // to remove a last value from array
console.log(myArr);

myArr.unshift(10); // adds a new value in the beginning of the array which causes a shift of all values stored in arrays
console.log(myArr);

myArr.shift(); // to remove a first value from array
console.log(myArr);

console.log(myArr.includes(41)); // to get answer on boolean format
console.log(myArr.includes(741));

console.log(myArr.indexOf(85)); // prints a location of 45 stored in arrays. here 85 was stored in 4th place in array

const newArr = myArr.join(); // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr, typeof newArr);

// slice & splice
const sliceArr = myArr.slice(1, 3); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log("original array: ", myArr); // original array
console.log("got a value from 1 - 3: ", sliceArr); // it doesn't include 3rd value

const spliceArr = myArr.splice(1, 3); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("values removed from 1 - 3rd position by spliceArr: ", myArr); // values between 1 - 3rd position has been removed by spliceArr
console.log("printed a spliceArr: ", spliceArr); // it included a 3rd value unlike slice() method but it removed a values from 1 - 3rd position from original array

const userDetails = ["Milan", "Sameer", "Catherine", "Anushka"];
const userLocation = ["Kathmandu", "Pokhara", "Bhairahawa", "Biratnagar"];

// userDetails.push(userLocation); // it doesn't merge userDetails & userLocation into single arrays of userDetails instead in creates another array inside a userDetails array - Not prefered
// console.log(userDetails);
// console.log(userDetails[4]); // userLocation array added inside of userDetails array

// merge two arrays
const users = userDetails.concat(userLocation); // Combines two arrays. This method returns a new array without modifying any existing arrays.
console.log(users);

// Another method to merge array without using concat() method
const newUsers = [...userDetails, ...userLocation]; // prefered this method over concat() method
console.log(newUsers); // works same as concat() method

// spread out arrays using flat() method
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableAnotherArray = anotherArray.flat(2); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(usableAnotherArray);

// convert another data types into arrays
console.log(Array.isArray("Milan"));
console.log(Array.from("Milan"));
console.log(
  Array.from({
    userName: "Milan Kharel",
    userEmail: "admin@example.com",
    userContact: 412639875,
    userLoggedin: true,
  })
); // returns an empty array if conversion is not sucessful

// new array from a set of elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
