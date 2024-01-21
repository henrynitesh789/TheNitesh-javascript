// ********* Data Types in JS *********

/*  Two types of data types in javascript based on how data is put in the memory
    1) Primitive: 7 types 
        . String
        . Number
        . Boolean
        . Null 
        . Undefined
        . Symbol
        . BigInt
 
    2) Non Primitive (reference type): 
        . Arrays
        . Objects
        . Functions

    NOTE: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

    Note: type of & their result 
        . Undefined -- undefined
        . Null --object
        . Boolean -- boolean
        . Number -- number
        . String -- string 
        . Object  -- object
*/

const score = 2
const isLoggedIn = false
const outSideTemp = null
let userEmail;  // by default value is undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);  // false

const BigNumber = 23562356287433n

const hereos = ["rahul","arpit","sachin","nitesh"]; 
// Objects are in curly braces
let myObj = {
    name: "nitesh",
    age: 18,
}
// function: you can treat function as variable in js
const myfunction = function(){ // Declare function and assign it in the variable
    console.log("hello world"); 
}

console.log(typeof(outSideTemp));    // object
console.log(typeof(BigNumber));      // bigInt
console.log(typeof(hereos));         // object
console.log(typeof(myObj));          // object
console.log(typeof(myfunction));     // function