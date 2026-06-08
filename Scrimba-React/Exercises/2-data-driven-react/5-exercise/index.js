const nums = [1, 2, 3, 4, 5];

const squaredNums = nums.map(num => num * num);
// console.log(squaredNums);

const names = ["alice", "bob", "charlie", "danielle"]

const firstCapitalLetter = names.map(name => name[0].toUpperCase());
// console.log(firstCapitalLetter);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const pTagPokemon = pokemon.map(p => `<p>${p}</p>`);
console.log(pTagPokemon);