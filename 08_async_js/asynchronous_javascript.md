# Fundamentals of Async JavaScript

## Introduction

Asynchronous programming is crucial for building efficient, non-blocking applications. Asynchronous JavaScript allows to perform tasks like data fetching, timers, and handling user interactions without freezing or blocking the main thread of the browser. JavaScript traditionally runs in a synchronous manner, where code executes line by line. However, with asynchronous operations, JS can handle time-consuming tasks, such as network requests and file reading, without slowing down the user experience.

In this guide, I'll take you through the key concepts of asynchronous JavaScript, including **callbacks**, **promises**, and **async/await**, and show you how to use them in a clean and efficient way.

## Table of Contents

1. [Callbacks](#callbacks)
2. [Promises](#promises)
3. [Async/Await](#async-await)
4. [Error Handling in Async JavaScript](#error-handling-in-async-javascript)

---

## Callbacks

### What are Callbacks?

When I think of callbacks, I picture them as functions passed as arguments to other functions, which are executed once an asynchronous task completes. Callbacks were once the go-to method for handling async tasks in JavaScript.

### Example: Using Callbacks

Here’s an example where I use a callback to handle the result of an asynchronous operation:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello, World!";
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log("Received Data: " + data);
}

// Using the callback
fetchData(displayData);
```

### Callback Hell

One issue I’ve faced with callbacks is something commonly referred to as "callback hell." When multiple callbacks are nested, the code becomes harder to read and maintain. It looks like this:

```javascript
fetchData(function (data1) {
  processData(data1, function (data2) {
    manipulateData(data2, function (data3) {
      displayData(data3);
    });
  });
});
```

---

## Promises

### What are Promises?

Promises are a more modern way to handle asynchronous operations. When I return a promise, it represents the eventual completion (or failure) of the operation. A promise can be in one of three states:

- **Pending**: The operation is still in progress.
- **Fulfilled**: The operation was completed successfully.
- **Rejected**: The operation failed.

### Example: Using Promises

I find promises very useful because they allow me to handle async operations in a cleaner way than callbacks. Here’s how I use promises:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Hello, World!";
      resolve(data); // Resolve the promise with data
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Received Data: " + data);
  })
  .catch((error) => {
    console.error("Error: " + error);
  });
```

### Chaining Promises

One of the things I really like about promises is that I can chain multiple `.then()` methods to handle sequential asynchronous operations. Here’s an example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data + " and processed"), 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return processData(data);
  })
  .then((processedData) => {
    console.log(processedData);
  })
  .catch((error) => {
    console.error("Error: " + error);
  });
```

---

## Async/Await

### What is Async/Await?

When I started using `async` and `await`, it felt like a game-changer for writing cleaner and more readable asynchronous code.

- **`async`**: I mark a function as `async`, and it always returns a promise.
- **`await`**: I can only use `await` inside an `async` function. It pauses the execution of my function until the promise resolves or rejects.

### Example: Using Async/Await

Here’s an example of using async/await to handle an asynchronous operation:

```javascript
async function fetchData() {
  return "Hello, World!";
}

async function displayData() {
  const data = await fetchData(); // Wait for the fetchData function to resolve
  console.log("Received Data: " + data);
}

displayData();
```

### Handling Errors with Try/Catch

I’ve found that using `try/catch` blocks with async/await allows me to handle errors in a way that feels more natural, just like handling errors in synchronous code.

```javascript
async function fetchData() {
  throw new Error("Failed to fetch data");
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log("Received Data: " + data);
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

displayData();
```

---

## Error Handling in Async JavaScript

### Callbacks

When I use callbacks, I handle errors by passing an error argument to the callback function. Here’s an example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const error = null;
    const data = "Hello, World!";
    callback(error, data);
  }, 1000);
}

fetchData(function (error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});
```

### Promises

With promises, I handle errors using `.catch()`.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Failed to fetch data")), 1000);
  });
}

fetchData().catch((error) => {
  console.error("Error:", error.message);
});
```

### Async/Await

When I’m working with async/await, I handle errors using `try/catch`.

```javascript
async function fetchData() {
  throw new Error("Failed to fetch data");
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayData();
```
