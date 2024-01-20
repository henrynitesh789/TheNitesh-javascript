let someNum = 20
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof(stringNum));

// *********** OPERATIONS in JS *************

// Number
let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2*2);
console.log(2**3);  // 2 raise to the power 3
console.log(2/3);
console.log(2%3);

// string
let str1 = "hello"
let str2 = " nitesh"
console.log(str1+str2);
console.log("1" + 2); // output=12
console.log(1 + "2"); // output=12
console.log("1" + 2 + 2); // output=122
console.log(1 + 2+ "2"); // output=32
console.log((3+4)*5%3);  // output=2

// Boolean
console.log(true);
console.log(+true); // output=1
console.log(+"");   // output=0

// Increment 
let gameCounter = 100
let sequenceCounter = 200
gameCounter++;     // postfix
++sequenceCounter; // prefix
console.log(gameCounter);
console.log(sequenceCounter);