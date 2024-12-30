// Objects in javaScript

const mySym = Symbol("Key1");

// object literals
const userDetails = {
  userName: "mlnkhrl",
  "Full Name": "Milan Kharel",
  [mySym]: "key", // link symbol into objects
  email: "admin@example.com",
  phone: 4152639874,
  isLoggedIn: true,
  salary: 250000,
};

// both method prints a username
console.log(userDetails.userName); // this is not prefered to use
console.log(userDetails["userName"]);
console.log(userDetails["Full Name"]);

// print a symbol
console.log(userDetails[mySym]);

// update object values
userDetails.email = "admin@mlnkhrl.com";
console.log(userDetails["email"]);

// prevent updating objejct values
// Object.freeze(userDetails); // commented right now to access function inside object

// doesn't change object values after freezing object
// userDetails.email = "admin@milankharel.com.np";
// console.log(userDetails["email"]); // commented because object isn't freezed

userDetails.greeting = function () {
  console.log("Hello Users");
};

userDetails.greetingTwo = function () {
  console.log(`Hello ${this["Full Name"]}`);
};

console.log(userDetails.greeting());
console.log(userDetails.greetingTwo());

// singleton object declaration
const singletonObject = new Object();

// non singleton object (object literals)
const nonSingletonObject = {};
nonSingletonObject.id = 123;
nonSingletonObject.name = "Mee Lan";
nonSingletonObject.isLoggedIn = false;

console.log(nonSingletonObject);

// object inside an object (Nested Object)
const anotherUsers = {
  email: "someone@example.com ",
  fullname: {
    userFullName: {
      firstName: "Mee",
      lastName: "Lan",
    },
  },
};

console.log(anotherUsers);

// object merge
const merObj1 = {
  userName: "mlnkhrl",
  fullName: "Milan Kharel",
  email: "admin@example.com",
};

const merObj2 = {
  phone: 4152639874,
  isLoggedIn: true,
  salary: 250000,
};

// const mergedObj = Object.assign({}, merObj1, merObj2);  // using object constructor
const mergedObj = { ...merObj1, ...merObj2 }; // using spread operator
console.log(mergedObj);

// extract keys and values from object
console.log(Object.keys(nonSingletonObject));
console.log(Object.values(nonSingletonObject));
console.log(Object.entries(nonSingletonObject)); // not much used

// to check if a property is available or not
console.log(nonSingletonObject.hasOwnProperty("name")); // returns true because we have a property called name

console.log(nonSingletonObject.hasOwnProperty("email")); // returns false because we don't have a property called email

// Declaring an object called 'course' with properties courseName, price, and courseInstructor.
const course = {
  courseName: "Introduction to JavaScript", // Name of the course
  price: "1000", // Price of the course
  courseInstructor: "Youtube", // Instructor of the course
};

// Method 1: Accessing object property directly using dot notation
// We print the value of the 'courseInstructor' property by using dot notation.
console.log(course.courseInstructor); // Output: "Youtube"

// Method 2: Object Destructuring to extract property
// We use object destructuring to extract the 'courseInstructor' property from the 'course' object.
// This creates a variable called 'courseInstructor' that directly holds the value from the object.
const { courseInstructor } = course;
console.log(courseInstructor); // Output: "Youtube"

// Method 3: Renaming the property during destructuring
// We can also rename the extracted variable while destructuring.
// Here, the 'courseInstructor' property is renamed to 'Instructor' when extracted.
const { courseInstructor: Instructor } = course;
console.log(Instructor); // Output: "Youtube"
