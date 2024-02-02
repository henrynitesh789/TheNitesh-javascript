
// ++++++++++++++++++++ FOR OF LOOP ++++++++++++++++
/* Syntax:
    for (const iterator of object) {
        -----------
    }
*/

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const str = "hello world"
for (const s of str) {
    console.log(s);
}

// Maps
const map = new Map()
map.set('IN', "india")
map.set('Usa', "united states of america")
map.set('IN', "india")  // map known for its unique value

console.log(map);

// --- applying for-of loop on map ---
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// --- applying for-of loop on object ---
const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
/*  You CAN'T apply for of loop on object

    for (const [keys,value] of myObject) {
        console.log(keys,':-',value);
    }
*/
// ++++++++++++++ FOR-IN LOOP ++++++++++++++++++++
/* Syntax: 
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }
*/
// --- for objects we use for-in loop -----
const myObject1 = {
    ja: "javascript",
    cpp: "cpp",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject1) {
    // console.log(myObject1[key]);
    console.log(`${key} shortcutkey is for ${myObject1[key]}`);
}

// ------ for-in loop on arrays ------
const language = ["js", "rb", "py", "c", "cpp"]
for (const key in language) {
    console.log(key,"-", language[key]);
}

/*  note: you CAN'T apply for-in loop on map
        for (const key in map) {
            console.log(key);
        }
*/

// ++++++++++++++ FOR-EACH LOOP +++++++++++++++++++
/* Syntax: 
        array.forEach(element => {});
*/

const coding = ["js", "ruby", "java", "python", "cpp"]
// ------for-each loop on arrays ------
coding.forEach(function (item){console.log(item)})
coding.forEach((value) => {console.log(value)}) // Arrow function

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

language.forEach( (item, index, arr ) => {console.log(item, index, arr)} );

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )