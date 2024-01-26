// singleton objects or constructor 

// const app1 = new Object()  // this is a singleton object
// const app2 = {} // this is non-singleton object
// console.log(app1); // output: {}
// console.log(app2); // output: {}

// const app3 = new Object()
// app3.id = "123ac"
// app3.name = "nitesh"
// app3.isLoggedIn = false

// console.log(app3);

// object inside object (object nesting)
const App4 = {
    email: "nsnnndn@oracle.com",
    fullName: {
        userfullname: {
            firstName: "nitesh",
            lastname: "kumar"
        }
    },
    userId: "123"
}
console.log(App4.fullName.userfullname.firstName);

// combining object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({},obj1 , obj2, obj3) // note: all the values will goes into the blank object
console.log(obj4);

