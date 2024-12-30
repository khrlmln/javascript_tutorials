// const variables values cannot be changed after assigning
const accountId = 1478;

var accountEmail = "admin@example.com";

// var is not used nowadays to declare a variable instead we use let because of issue in block scope & functional scope
let accountPassword = "Example@123";

// we can assign a variable without using const & var keywords but this is not prefererd
accountCity = "Kathmandu";

let accountState;

/* so if we try to change values of const variable we don't see an error on editor but js compiler will throw an error while running js file
okay lets change the value of accountId
accountId = 417;
console.log(accountId);
now we got an error of "TypeError: Assignment to constant variable"
*/

// now lets try to change value of let &  var as expected we've sucessfully changed the value of accountEmail
// but currently var is not used to declare a variable in js so, we have 2 methods to declare using const & var
accountEmail = "example@example.com";
accountPassword = "Admin@123";

// it works but not recommended
accountCity = "Bengaluru";

console.table([accountEmail, accountPassword, accountCity, accountState]); // we can use console.table to print multiple values
