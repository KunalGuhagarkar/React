// Reference vs Primitive Values

// Returns a new strings does not update the current
let userMessage = "Hello";
userMessage = userMessage.concat("!!!!");
console.log(userMessage);

// but arrays its another story
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
console.log(hobbies);

