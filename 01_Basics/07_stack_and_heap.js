// ************ Memory in JS ***************
/* There basically two type of memory in JS
    1) Stack memory:
        . use for primitive data types.
        . you get copy of data from stack
    2) Heap memory:
        . for Non-primitve data types.
        . you get original data(ie.reference of original data) from the heap.
*/

let myName = "nitesh" // stored in to stack
let anotherName = myName
anotherName = "henry"
console.log(myName);
console.log(anotherName);

let user1 = {
    email: "nitesh@gmail.com",
    upi: "user@ybl",
}
let user2 = user1
user2.email = "henry@gmail.com"
console.log(user1.email);
console.log(user2.email);