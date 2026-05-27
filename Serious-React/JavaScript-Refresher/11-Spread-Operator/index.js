// Spread Operator

// Arrays
const hobbies = ['Reading', 'Sports'];

const hobbies2 = ['Cooking'];

const mergedHobbies = [...hobbies, ...hobbies2];

console.log(mergedHobbies);

// Objects
const userObj = {
    name: "Kunal",
    age: 22,
}

const extenderUser = {
    isAdmin: true,
    ...userObj
}

console.log(extenderUser);