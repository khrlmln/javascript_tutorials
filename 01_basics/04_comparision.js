// lets declare a variable num1 & num2 with values respectively
num1 = 10;
num2 = 20;

// showing an output value of num1 & num2
console.log("num1 =", num1 + " & " + "num2 =", num2);

// comparision of num1 & num2
console.log("num1 > num2", num1 > num2);
console.log("num1 < num2", num1 < num2);
console.log("num1 <= num2", num1 <= num2);
console.log("num1 >= num2", num1 >= num2);
console.log("num1 == num2", num1 == num2);
console.log("num1 != num2", num1 != num2);
console.log("num1 === num2", num1 === num2);

// comparing null value
console.log("null > 0", null > 0);
console.log("null == 0", null == 0);
console.log("null >= 0", null >= 0);
// the reason is that an equality check == and comparisons <, >, >=, <= work differently.
// comparisons convert null to a number, treating as 0
// that's why null >= 0 is true and null > 0 is false

console.log("2" == 2); // because it converts string ton umber and checks that's why answer prints true but,
console.log("2" === 2); // prints false because it doesn't cnvert string to number

// === is used to check both values are equal or not as well as their data types, if their data type is not matched the result will get false whether the value is same or not data type also should be same
