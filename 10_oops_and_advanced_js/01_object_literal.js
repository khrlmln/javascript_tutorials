// An object literal in JavaScript is a way to define and initialize objects using a simple and clean syntax. Here's an example:
const users = {
  username: "khrlmln",
  email: "khrlmln@example.com",
  loginCount: 25,
  passwordExpiryDate: 90,
  getUserInfo: function () {
    return `Hello ${this.username} your password expires on ${this.passwordExpiryDate} days please change your password before expiry`;
  },
};

console.log(users.getUserInfo());

// The this keyword in JavaScript can behave differently depending on the context in which it's used. It is one of the most commonly misunderstood parts of JavaScript, as its value depends on how the function is called or the object it's associated with.
