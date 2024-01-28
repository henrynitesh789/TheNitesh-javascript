// declaring variable in global scope 
let a = 1
const b = 2
var c = 3  // variable declared with var can be access anywhere 
console.log(a);
console.log(b);
console.log(c);

// declaring local scope 
if(true){
    // note: scope of this variable is only in the if block
    let a = 4
    const b = 5
    var c = 6
}
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 6
