
//  BASIC CONVERSION
let score1 = "33abc"
let valueInNumber1 = Number(score1);
console.log(typeof (valueInNumber1));
console.log(valueInNumber1);  // it will give NaN (not a number), NaN is a special category

let score2 = null
let valueInNumber2 = Number(score2);
console.log(valueInNumber2);  // it will give value 0 (zero)

let score3 = undefined
let valueInNumber3 = Number(score3);
console.log(valueInNumber3);  // it will also give NaN as output

let score4 = true
let valueInNumber4 = Number(score4);
console.log(valueInNumber4);  // it will give result 1 as output

let isLoggedIn = 1
console.log(Boolean(isLoggedIn));

let isLogggedIn2 = "nitesh"
console.log(Boolean(isLogggedIn2));
/* similarly
      1       -> true
      0       -> false
      " "     -> false
    "nitesh"  -> true
*/

let someNum = 33
let stringNumber = String(someNum)
console.log(someNum);
console.log(typeof(stringNumber));
