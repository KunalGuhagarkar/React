// Objects and Classes

const user = {
  name: "Kunal",
  age: 22,
  greet(name) {
    console.log("Hello " + name + "!");
    console.log(this.age);
  }
}

console.log(user);
console.log(user.name);
console.log(user.age);
user.greet(user.name);