// ******** comparison in JS **********

// number comparison
console.log(2 > 1);         // true
console.log(2 >= 1);        // true
console.log(2 < 1);         // false
console.log(2 == 1);        // false
console.log(2 != 1);        // true

// string comparison
console.log("2" > 1);       // true
console.log("02" > 1);      // true
console.log("2" > 2);       // false

// unexpected result
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

// unexpected result
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// === (triple equals to)
console.log("2" == 2);       // true
console.log("2" === 2);      // false