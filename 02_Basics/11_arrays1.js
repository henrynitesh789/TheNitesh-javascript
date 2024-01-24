// Array

/* Note: Array perform Shallow copy, when you  apply copy operation on that 
//     _________________________
//     shallow copy VS deep copy
//     _________________________
//     shallow copy:-  a shallow copy of an object is a copy whose properties share
//                     the same references (point to the same underlying values) as
//                     those of the source object from which the copy was made.

//     Deep copy:- a deep copy of an object is a copy whose properties do not share 
//                     the same references(point to the same underlying values) as 
//                     those of the source object from which the copy was made 

// */

const myArr = [0,1,2,3,4,5]
const rich = ["ratan tata", "bill gates", "steve jobs"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);
console.log(myArr[1]);

// methods in arrays
myArr.push(11)  // push 11 in to myArr
console.log(myArr);
myArr.pop()  // pop last element
console.log(myArr);
myArr.unshift(9) // shift array by one & insert 9 at index 0
console.log(myArr);
myArr.shift() // remove first index of array and shift
console.log(myArr);

console.log(myArr.includes(9)); // return true if 9 is present in the array else false
console.log(myArr.indexOf(9)); // return index of element if present else rturn -1;

const newArr = myArr.join()  // Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);
console.log(typeof(newArr)); // string

// slice and splice method in array
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)   // Returns a copy of a section of an array. 

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // make change in original array also include last index
console.log("C ", myArr); // [0,4,5]
console.log(myn2);  // [1,2,3]