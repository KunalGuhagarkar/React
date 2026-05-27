// Arrow Functions

// Anonymous Function
import util from './utils.js';

// util(); // -> "From Anonymous Function" / "From Anonymous Arrow Function"

const greetingNew = util("Kunal", "Hello bro!");
console.log(greetingNew);

// More on Arrow Function

// Omitting paramter list
// if only one parameter no need for '()'
const arrFuncOne = username => {
  const greet = "Hello " + username;
  return greet;
}

console.log(arrFuncOne("Kunal"));