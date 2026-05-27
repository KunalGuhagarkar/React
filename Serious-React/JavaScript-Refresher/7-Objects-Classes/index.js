// Objects and Classes

const user = {
  name: "Kunal",
  age: 22,
  greet() {
    console.log("Hello " + user.name + "!");
  }
}

console.log(user);
console.log(user.name);
console.log(user.age);
user.greet()