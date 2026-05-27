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

// using aliases

const {user3: userName, email: userEmail} = {
  user3: "simpCity",
  email: "simp@gmail.com"
}

console.log(userName, userEmail);

// Destructuring in Function Parameter Lists

function normalDesFun(obj) {
  console.log(obj.name);
  console.log(obj.email);
}

normalDesFun({name: 'kun', email: 'kun@gmail.com'});

function destructureFunc ({user, email}) {
  console.log(user);
  console.log(email);
}

destructureFunc({user: "Kunal Guhagarkar", email: "ktg7@gmail.com"});

const objFun = {
  user: 'kkk',
  email: 'k@outlook.com'
};

destructureFunc(objFun);