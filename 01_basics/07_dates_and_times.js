// date and time in javaScript

let newDate = new Date();
console.log(newDate);
console.log(newDate.toString()); // converted to string
console.log(newDate.toDateString()); // date with weekday name
console.log(newDate.toISOString());
console.log(newDate.toJSON());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());

// to create a custom date or custom date declaration
let customDate = new Date(2024, 3, 9); // declared custom date
let customFullDate = new Date(2024, 3, 9, 22, 15, 36); // declared custom date with time
console.log("declared date is: ", customDate.toDateString()); // result: declared date is:  Tue Apr 09 2024
console.log("declared full date with time: ", customFullDate.toLocaleString()); // result: declared full date with time:  4/9/2024, 10:15:36 PM

// declare a date with MM/DD/YYYY
let date = new Date("04/09/2024");
console.log(date.toDateString());

// timestamp on date
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// to get a time from custom created date above
console.log(customDate.getTime());

// if we need to get current second then,
console.log(Math.floor(Date.now() / 1000));

// if we need a certain info from dates without converting into string
console.log(customFullDate.getMonth() + 1); // to get a month
console.log(customFullDate.getFullYear()); // to get a year
console.log(customFullDate.getDay()); // to get a day means weekday like sunday, monday etc.
console.log(customFullDate.getHours()); // to get an hour
console.log(customFullDate.getMinutes()); // to get an hour
console.log(customFullDate.getSeconds()); // to get an hour

// customize toLocaleString method
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
    year: "numeric",
  })
);
