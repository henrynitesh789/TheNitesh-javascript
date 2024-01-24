// +++++++++++ DATES & TIME ++++++++++++++++
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof(myDate)); // object

let myCreateDate1 = new Date(2024,0,23) // in javascript month start from zero
let myCreateDate2 = new Date(2024,0,23,5, 3);
let myCreateDate3 = new Date("2024-01-14");
let myCreateDate4 = new Date("01-14-2024")

console.log(myCreateDate1.toDateString());  // Tue Jan 23 2024
console.log(myCreateDate2.toLocaleString());  // 1/23/2024, 5:03:00 AM
console.log(myCreateDate3.toLocaleString());  // 1/14/2024, 12"00:00 AM
console.log(myCreateDate4.toLocaleString()); 

let myTimeStamp = Date .now()
console.log(myTimeStamp);
console.log(myCreateDate4.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate); // 2024-01-24T04:42:50.073Z
console.log(newDate.getMonth()); // 0
console.log(newDate.getDay()); // 3

console.log(newDate.toLocaleString('default', {weekday:"long"}));
