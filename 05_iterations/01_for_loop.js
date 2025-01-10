// For loop in JavaScript

// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// nested for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// looping an array using for loop
fruits = ["mango", "Apple", "Banana", "Guava"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// The break and continue keywords

/* break Keyword:
    The break statement is used to exit the loop entirely, even if the loop’s condition hasn’t been met.
    It immediately terminates the loop and the control moves to the next statement following the loop. */
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

/* continue Keyword:
    The continue statement skips the current iteration of the loop and moves on to the next iteration.
    It does not exit the loop but just skips the current iteration and continues with the next one. */
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
