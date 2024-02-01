
/*  Falsey values:
    -> false, 0, -0, BigInt 0n, "", null, Undefined, Nan
    Truthy values:
    -> "0", 'false', " ", [], {}, function(){}, 
*/

const userEmail = "h@hdkwd.gmail"
if(userEmail){
    console.log("got user email");  
} else {
    console.log("don't have user email");
}

const userName = []
if(userName.length === 0){
    console.log("Array is empty");  
} else {
    console.log("not empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/* Note:
    false == 0    output: true
    false == ''   output: true
    0 == ''       output: true
*/

// ++++++++ Nullish Coalescing Operator (??): null undefined ++++++++++
let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 15
console.log(val3);

let val4;
val4 = null ?? 11 ?? 10
console.log(val4);

// +++++++ Terniary operator ++++++++++
// syntax: condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")