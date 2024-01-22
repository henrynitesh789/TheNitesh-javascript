
// ************ NUMBERS IN JAVASCRIPT *************
const score = 400
console.log(score); // output: 400

const balance = new Number(100)
console.log(balance);  // output: [Number: 100]
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // output: 10,00,000
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// ************ MATHS IN JAVASCRIPT ******************
console.log(Math);
console.log(Math.abs(-4));     // it give absolute value ie 4
console.log(Math.round(5.3));  // output: 5
console.log(Math.ceil(6.2));   // give top value
console.log(Math.floor(4.2));  // give floor value
console.log(Math.sqrt(9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min + 1)) + min);






