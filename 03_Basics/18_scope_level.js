// scope level and mini hoisting

//+++++++ Example 1 ++++++++++++++++++++++++++++++++++++++++++++++
function one(){
    const userName = "issac"
    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website); // website is not defined, its scope is inside function two
    two()  // Nitesh
    console.log("function one is executed");
}
one()

//+++++++++ Example 2 ++++++++++++++++++++++++++++++++++++++++++++++
if(true){
    const username = "issac"
    if(username === "issac"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);  // website is not defined
}

// another example
console.log(addOne(5));
function addOne(num){
    return num + 1
}
// addOne(5)

console.log(addTwo(5)); // it will give error: can't access addTwo before initialization
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));  // it will give no error