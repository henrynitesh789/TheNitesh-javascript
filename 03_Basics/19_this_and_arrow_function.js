
// _____________________ this ___________________________
const user = {
    userName: "Issac",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);  // print current context
    }
}
user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()

console.log(this); // output: {}, print current context ie. empty (there is no object in the global scope)

function one(){
    let username = "issac"
    console.log(this.username); // output: undefined, this can only be used in object
}
one()

// __________________ Arrow function ____________________

const hello = () => {  // this is arrow function
    let systemId = "issac"
    console.log(this);
}
hello()  // output: {}

const add2 = (num1, num2) => { // this is basic arrow function
    return num1 + num2
}
console.log(add2(2,6)); // 8

// implict return
const add3 = (num1, num2) => num1 + num2
console.log(add3(9,6)); // 15

const add4 = (num1, num2) => (num1 + num2)
console.log(add4(9,8)); // 17

// explicit return 
const add5 = (num1, num2) => ({username: "Issac"})
console.log(add5(9,8));


