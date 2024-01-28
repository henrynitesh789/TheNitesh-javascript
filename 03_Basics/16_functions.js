
// Functions and parameter
function addNumber(num1, num2){
    console.log(num1 + num2);
}
// calling function
addNumber() // output: NaN
addNumber(3,4) // with argument  output: 7
addNumber(3, "4")  // output: 34
addNumber(3, "a")  // output: 3a
addNumber(3, null)  // output: 3

const result = addNumber(3,5)
console.log("result: ", result);  // output: undefined

function add(num1, num2){
    return num1 + num2
}
console.log("sum is: ", add(3,9));  // output: undefined

function loginUsermesssage(username, ){
    if(username === undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}
// calling 
console.log(loginUsermesssage("hjjsahjj@gmail.com"));
console.log(loginUsermesssage(""));  // output: just logged in
console.log(loginUsermesssage());  // output: undefined just logged in

//  _______________________________
//  FUNCTIONS WITH OBJECTS & ARRAYS
//  _______________________________

function calculateCartPrice(val1, val2, ...num1){ // ... is called rest operator or sometimes spread operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000)); // val1 = 200, val2 = 400, rest goes in the array

const user111 = {
    username: "issac newton",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// passing object in the function
handleObject(user111)
handleObject( {username: "Albert Einstine", price: 399} )

// passing array in the function
const myArray = [200,250,500,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log("second value is: ", returnSecondValue(myArray));
console.log("second value is: ", returnSecondValue([200,250,500,100,600]));
