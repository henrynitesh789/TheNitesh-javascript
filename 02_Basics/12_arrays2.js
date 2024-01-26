// +++++++++++ Array2 +++++++++

const founder = ["ratan tata", "bill gates", "setve jobs"];
const ceo = ["sundar pichai", "satya nadela", "parag agarwal"]

founder.push(ceo) // ceo array inside founder array as an element
console.log(founder);
console.log(founder[3][0]);
const All = founder.concat(ceo)  // this function combine array and return a new array
console.log(All); // same as push function

const allNew = [...founder, ...ceo] // ... is a spread operator
console.log(allNew);

const anotherArr = [1,2,3, [8,7,4] ,11, [5,9,[12,13]]]
const anotherArr2 = anotherArr.flat(Infinity)
console.log(anotherArr2);

console.log(Array.isArray("nitesh")); // asking question, the given string is array or not 
console.log(Array.from("nitesh"));  // make array from the given string 
console.log(Array.from({name: "nitesh"})); // can't convert into array, it give empty array

let scrr1 = 100
let scrr2 = 200
let scrr3 = 300
console.log(Array.of(scrr1, scrr2, scrr3));  // it make an array of the given variables





