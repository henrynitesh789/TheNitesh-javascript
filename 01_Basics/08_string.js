// declaring string 
const name = "nitesh"
const repoCount = 2

console.log(name + repoCount);  // optput: nitesh2
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another method of declaring string
const gameName = new String('niteshMotoRide')
const className = new String('classOf-2024')

// predefined methods in string
console.log(gameName[0]);             // accessing key value
console.log(gameName.__proto__);      // optput: {}
console.log(gameName.length);         // method to get length of string
console.log(gameName.toUpperCase());  // note: original value will  not change
console.log(gameName.charAt(4));      // optput: s
console.log(gameName.indexOf('s'));   // optput: 4

const newString = gameName.substring(0, 4)  
const anotherString = gameName.slice(1, 4) 
console.log(newString);               // optput: nite
console.log(anotherString);           // optput: ite

const newStringOne = "  hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nitesh.com/nitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('nitesh'));  // optput: true
console.log(url.includes('hello'));   // optput: false
console.log(className.split('-')); 
