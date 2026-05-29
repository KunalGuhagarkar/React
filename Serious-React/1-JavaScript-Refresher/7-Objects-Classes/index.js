// Objects and Classes

// Objects
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


// Classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello Everyone!!!");
  }
}

const user1 = new User("Kunal", 22);
console.log(user1);
user1.greet();