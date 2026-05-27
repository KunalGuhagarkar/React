// Functions and Parameters

// Basic Functions
function greet() {
  return "Hello, World!";
}

// calling function
console.log(greet());
// console.log(greet());
// console.log(greet());

// Parameters
function greetWithParameters(username, message) {
  return `Hello, ${username} and ${message}`;
}

console.log(greetWithParameters("Kunal", "have a great day"));
console.log(greetWithParameters("Sid", "How are you?"));

// default values to Parameters
function defaultFunc(username = "Guest", message = "Hello") {
  return `Hi, ${username} and ${message}`;
}

console.log(defaultFunc());
console.log(defaultFunc("Kanak", "Oink!!"));
