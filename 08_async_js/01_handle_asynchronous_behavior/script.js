// **** setTimeout
const userName = "Milan Kharel";

const sayHello = function () {
  console.log(`Hello ${userName}!`);
};

// does a job once after certain time
setTimeout(sayHello, 3000);

const changeTitle = function () {
  document.querySelector("h1").innerHTML = `Hello ${userName}`;
};

// changing documents title after 2s
const changeMe = setTimeout(changeTitle, 2000);

// clearing the timeout function to not apply change in h1 tag
document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe);
});

// **** setInterval
sayDate = function (str) {
  console.log(str, Date.now());
};

// does a job continously at the interval of certain time
document.querySelector("#start").addEventListener("click", function () {
  setInterval(sayDate, 1000, "Current date is: ");
});
