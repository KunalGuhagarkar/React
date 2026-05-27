// Arrays and Array Methods

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1]);

hobbies.push("Working");
console.log(hobbies);

// findIndex
const index = hobbies.findIndex(item => item == "Reading");
console.log(index);

const notIndex = hobbies.findIndex(item => item == "Racing");
console.log(notIndex);

// map
const hobbiesMap = hobbies.map(item => item + '!');
console.log(hobbiesMap);
