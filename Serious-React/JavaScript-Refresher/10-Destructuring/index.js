// Destructuring

// Array Destructuring
const username = ["Kunal", "Guhagarkar"];

const firstName = username[0];
const lastName = username[1];
console.log(firstName, lastName);

// Another way

const [userOne, userTwo] = ["Kunaladzzz", "KTG"];
console.log(userOne);
console.log(userTwo);


// Object Destructuring
const userObj = {
  user: "Kunal",
  email: "K@gmail.com",
};

const user = userObj.user;
const email = userObj.email;
console.log(user, email);

// Alternative way

const {user2, email2} = {
  user2: "Kunal the Great",
  email2: "ktg@gmail.com"
}

console.log(user2);
console.log(email2);