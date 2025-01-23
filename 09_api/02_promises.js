// creating a new promise
const promiseOne = new Promise((resolve, reject) => {
  // do an async task. eg. DB calls, network related calls, cryptography
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

// consuming a promise
promiseOne.then(() => {
  console.log("promise consumed");
});

// creating a promise without holding on a variable
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

// creating a promise that resolves with an object
const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Milan", email: "milan@example.com" });
  }, 1000);
});

// consuming the promise and logging the resolved data
promisethree.then((user) => {
  console.log(user);
});

// creating a promise with conditional rejection
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ userName: "Milan", email: "milan@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});

// chaining 'then', 'catch', and 'finally' to handle promise resolution or rejection
promiseFour
  .then((user) => {
    console.log(user); // Logs the user data if promise resolves successfully
    return user.userName; // Returning a value that will be passed to the next 'then'
  })
  .then((userName) => {
    console.log(userName); // Logs the userName extracted from the previous 'then'
  })
  .catch((error) => {
    // handles any errors or promise rejections
    console.log(error); // Logs the error if the promise is rejected
  })
  .finally(() => console.log("the promise is either resolved or rejected")); // The finally block is executed after either resolution or rejection of the promise

// creating another promise with possible rejection
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ userName: "milan", password: "123abc" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 3000);
});

// Using async/await to consume the promise
async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Awaiting resolution of promiseFive
    console.log(response); // Logs the resolved value if the promise is successful
  } catch (error) {
    console.log(error); // Logs the error if the promise is rejected
  }
}

consumePromiseFive(); // Calls the async function to consume the promise
