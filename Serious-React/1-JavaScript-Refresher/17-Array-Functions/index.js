// Array Functions

const arr = ['Sports', 'Reading', 'Cooking'];

const arrMap = arr.map(item => item);
console.log(arrMap);

const arr2 = [5, 12, 8, 130, 44]
const arrFind = arr2.find(item => item > 10);
console.log(arrFind);

const arrFindIndex = arr2.findIndex(item => item === 130);
console.log(arrFindIndex);

const arrfilter = arr2.filter(item => item > 10);
console.log(arrfilter);

const initialValue = 0;
const arrReducer = arr2.reduce((accumilator, currentValue) => accumilator + currentValue, initialValue);
console.log(arrReducer);

const arrConcat = arr.concat(arr2);
console.log(arrConcat);

const arrSlice = arrConcat.slice(2, 5);
console.log(arrSlice);

const arrSplice = arrConcat.splice(2, 2);
console.log(arrSplice);
console.log(arrConcat);