// Control Structures

const password = prompt("Your password");
console.log(password);

if (password === 'Hello') {
    console.log("Hello, works");
} else if (password === 'hello') {
    console.log("hello, works");
} else {
    console.log("Access Denied");
}

const hobbies = ['Sports', 'Cooking'];

for (const hobby of hobbies) {
    console.log(hobby);
}