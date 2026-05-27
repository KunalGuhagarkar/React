// import { apiKey } from "./utils.js";
// // This works only when the live server is setup
// console.log(apiKey);

// import apikey from "./utils.js";
// console.log(apikey);

// // Importing mulitple things
// import {key1, key2} from "./utils.js";
// console.log(key1);
// console.log(key2);

// // Mixing multiple
// import defaultKey, { keyOne, keyTwo } from "./utils.js";
// console.log(defaultKey);
// console.log(keyOne);
// console.log(keyTwo);

// // Another way
// import * as util from "./utils.js";
// console.log(util);
// console.log(util.default);
// console.log(util.keyOne);
// console.log(util.keyTwo);


// Using alias
import d, {keyOne as k1, keyTwo as k2} from './utils.js';
console.log(d);
console.log(k1);
console.log(k2);