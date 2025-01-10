// High-order array loops in JavaScript

// high-order array loops are methods that operate on arrays and allow you to iterate through elements in a more abstracted way, often making your code cleaner and more readable.

// forOf loops
fruits = ["mango", "Apple", "Banana", "Guava"];

for (const value of fruits) {
  console.log(value);
}

// using forOf loop in string
for (const word of "Hello") {
  console.log(word);
}

// using forOf loop in Map()
const myMap = new Map();

myMap.set("NP", "Nepal");
myMap.set("IN", "India");
myMap.set("FR", "France");
myMap.set("UK", "United Kingdom");

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// using forIn loop in Object
const users = {
  fullName: "Milan Kharel",
  userName: "khrlmln",
  email: "milan@example.com",
  contact: 9841741474,
};

for (const key in users) {
  console.log(`${key}: ${users[key]}`);
}

// using forIn loop in arrays
for (const index in fruits) {
  console.log(fruits[index]);
}

// forEach loops in arrays
programming_languages = ["C", "C++", "Java", "Python", "JavaScript"];

// using normal function
programming_languages.forEach(function (value) {
  console.log(`programming language = ${value}`);
});

// using arrow function
programming_languages.forEach((value) => {
  console.log(value);
});

// parameters on forEach loops
programming_languages.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// using forEach loop on array of objects
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileExtension: ".js",
  },
  {
    languageName: "Python",
    languageFileExtension: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.languageName} (${item.languageFileExtension})`);
});

// using filter()
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = nums.filter((num) => num > 4);
// const newNums = nums.filter((num) => {
//   return num > 4;
// });

console.log(newNums);

// Example of forEach:
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

books.forEach((item) => {
  console.log(
    `Book name: ${item.title}, genre: ${item.genre}, published date: ${item.publish}, current edition: ${item.edition}`
  );
});

// Example of filter()
const historyBooks = books.filter((book) => book.genre === "History");
const newBooks = books.filter((book) => {
  return book.publish > 1995 && book.genre === "History";
});

console.log(historyBooks);
console.log(newBooks);

// using map()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = numbers.map((num) => num + 10);

// chaining
const chainedNumbers = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

console.log(newNumbers);
console.log(chainedNumbers);

// using reduce()
const myNumbers = [1, 2, 3];

const myTotal = myNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "shoes",
    price: 2500,
  },
  {
    itemName: "Shirt",
    price: 1500,
  },
  {
    itemName: "Jeans",
    price: 1850,
  },
];

const totalPrice = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(totalPrice);
