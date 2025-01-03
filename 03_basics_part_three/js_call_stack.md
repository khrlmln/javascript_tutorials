# JavaScript Execution and the Call Stack

## Overview

JavaScript is a single-threaded, synchronous language, meaning it can execute one operation at a time, one after another. The execution process is managed through the **call stack** which helps in tracking function invocations.

## How JavaScript Executes Code

### 1. **Global Execution Context**

When a JavaScript program starts, it creates a **global execution context** (GEC). This context is the environment in which the code will be evaluated and executed. During this phase:

- The global execution context is created.
- All the global variables and functions are initialized.
- The code is executed line by line.

### 2. **Creation of the Call Stack**

The **call stack** is a data structure that stores information about the active execution contexts in the JavaScript engine. It follows a **LIFO** (Last In, First Out) principle: the last function that was called is the first one to finish executing.

### 3. **Function Execution**

When a function is invoked, a new **execution context** is created and placed on top of the call stack. The JavaScript engine then starts executing the function code.

#### Steps of Execution:

1. **Global Execution Context** (GEC) is pushed to the stack.
2. Whenever a function is called, a **new execution context** for that function is pushed onto the stack.
3. Once a function finishes execution, its execution context is popped off the stack, and the control returns to the previous context.

### 4. **Event Loop and Asynchronous Code**

JavaScript uses an **event loop** to handle asynchronous operations (such as `setTimeout`, `fetch`, or event listeners). The event loop allows JavaScript to continue executing code while waiting for asynchronous operations to complete.

- When an asynchronous task is called (e.g., `setTimeout`), the task is handed off to the browser's Web API.
- Once the task is completed, it is placed in the **callback queue**.
- The event loop checks if the call stack is empty. If it is, it will push the callback function from the queue to the call stack.

## Call Stack: Detailed Example

Here’s an example of how the call stack works:

```javascript
function a() {
  console.log("Inside function a");
  b();
}

function b() {
  console.log("Inside function b");
  c();
}

function c() {
  console.log("Inside function c");
}

a(); // Start execution here
```

### Execution Steps:

1. The **global execution context** is pushed onto the stack.
2. The function `a()` is called:
   - A new execution context for `a` is created and pushed onto the stack.
   - `"Inside function a"` is logged.
   - The function `b()` is called from within `a`.
3. The function `b()` is called:
   - A new execution context for `b` is created and pushed onto the stack.
   - `"Inside function b"` is logged.
   - The function `c()` is called from within `b`.
4. The function `c()` is called:
   - A new execution context for `c` is created and pushed onto the stack.
   - `"Inside function c"` is logged.
5. The function `c()` finishes, and its execution context is popped off the stack.
6. The function `b()` finishes, and its execution context is popped off the stack.
7. The function `a()` finishes, and its execution context is popped off the stack.
8. The global execution context is popped off the stack.

### Visualization of the Call Stack:

```
1. Global Execution Context
|
2. Function a's Execution Context
|
3. Function b's Execution Context
|
4. Function c's Execution Context
```

### After `c()` finishes:

```
1. Global Execution Context
|
2. Function a's Execution Context
|
3. Function b's Execution Context
```

### After `b()` finishes:

```
1. Global Execution Context
|
2. Function a's Execution Context
```

### After `a()` finishes:

```
1. Global Execution Context
```

## Important Concepts

### **Execution Context**

An execution context is an abstract concept describing the environment in which a piece of code is evaluated and executed. There are two types of execution contexts:

- **Global Execution Context (GEC):** The default context where all code runs.
- **Function Execution Context:** Created when a function is invoked.

### **Call Stack**

The call stack is a stack data structure that keeps track of the function executions. It follows a LIFO (Last In, First Out) order.

### **Event Loop**

The event loop is responsible for handling asynchronous code, placing callbacks in the callback queue when they are ready to be executed, and moving them to the call stack once it's empty.

## Summary

- The call stack keeps track of the order in which functions are called and executed.
- The event loop manages asynchronous operations, ensuring that callbacks are executed when the call stack is empty.
- The execution context helps in evaluating code in a particular environment, such as the global context or a function context.
