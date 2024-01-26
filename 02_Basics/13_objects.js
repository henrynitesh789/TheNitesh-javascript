
/* Note: there are two methods of declaring objects in javascript
    1) object literals 
    2) constructor (singleton)
*/

const mysymb = Symbol("key1")
// method 1 to create object
// Object.create
// method 2 to create object (ie. object literals)
const user = {  //note: object have both keys & values both
    name: "Nitesh",  // by default system process name as a string ie. "name"
    "full Name": "Nitesh Kumar", // now you can access only using square notation
    [mysymb]: "mykey1", // only way to use it as a key
    age: 18,
    location: "greater noida",
    email: "nitesh8383@gmail.com",
    isLoggedIn: false
}

// methods to access object values
console.log(user.name);      // method 1 (using dot)
console.log(user["location"]);  // method 2(using square braces)
console.log(user["full Name"]);
console.log(user[mysymb]);
console.log(typeof(user[mysymb]));  // output: string

// how to edit values 
user.email = "njjdjd13@apple.com"
// how to lock value so that no one can change
// Object.freeze(user)
user.email = "njjdjd13@microsoft.com" // can't change because it has freezed
console.log(user);

// making function
user.greeting = function(){
    console.log("hello user");
}

console.log(user.greeting()); // hello user
console.log(user.greeting);  // function anonymous

// function2
user.greeting2 = function(){
    console.log(`hello everyone, ${this.name}`);
}

console.log(user.greeting());   // hello user
console.log(user.greeting2()); // hello everyone, Nitesh