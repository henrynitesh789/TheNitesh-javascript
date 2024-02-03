
// +++++++++++++ Map ++++++++++++++++++

const myNum = [1,2,3,4,5,6,7,8]
const new1 = myNum.map( (num) => num + 10 ) // note: when you open scope you have to use return statement
console.log(new1);

// chaining method
const new2 = myNum
    .map( (nk) => nk * 10 )
    .map( (nk) => nk + 1 )
    .filter( (nk) => nk >=40 )
console.log(new2);