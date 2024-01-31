
/* comparisons
    <, >, <=, >=, ==, !=, === (compare with type)
*/

//  ++++++++++ if statement +++++++++++++
const isUserloggedIn = true
if (isUserloggedIn){
    console.log("user logged in");
}
if(2 == "2"){
    console.log("yes 2 == '2' ");
}
if(2 === "2"){
    console.log("not executed");
}
const temperature = 41
if(temperature < 50){
    console.log("temperature is less than 50");
}

// ++++++++++++ if-else statement +++++++++++++++++++

if(temperature < 50)
    console.log("temperature is less than 50");
else
    console.log("temperature is greater than 50");

const score = 200
if (score > 100){
    const power = "fly"
    var intensity = "high"
    console.log(`user power: ${power}`);
    console.log(`user intensity: ${intensity}`);
}
// console.log(`user power: ${power}`); // power is not defined
console.log(`user intensity: ${intensity}`); // can be access outside the scope if declared with

// short notation
const balance = 1000
if(balance > 500 ) console.log("yes");  // not applying curly braces means declaring implicit scope
// now for multiple line 
if(balance < 500 ) console.log("yes"), console.log("test2"); // you can write multiple code by using comma

// nested if-else statement
if (balance < 500 ){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else
    console.log("less than 1200");

const userLoggedIn =true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in");
}