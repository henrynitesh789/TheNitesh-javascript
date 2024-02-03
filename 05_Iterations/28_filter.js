
// +++++++++++++ FILTER +++++++++++++++++++++++
const codingLanguage = ["js", "ruby", "java", "python", "cpp"]

const values = codingLanguage.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values);            // output: undefined
console.log(typeof(values));    // output: undefined

// filter has call back properties 
const myNums = [1,2,3,4,5,6,7]
const newNums = myNums.filter( (num) => (num > 4) )
console.log(newNums);
/*
    const neww = []
    myNums.forEach( (num) => {
        if(num > 4){
            neww.push(num)
        }
    } )
    console.log(neww);
*/

const books = [
    {
        title: 'Book one',
        genre: 'fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book two',
        genre: 'non fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book three',
        genre: 'fiction',
        publish: 2000,
        edition: 2009
    }
]
const userBooks1 = books.filter( (bk) => (bk.genre === 'fiction') )
console.log(userBooks1);
const userBooks2 = books.filter( (bk) => {return bk.publish >= 2000} )
console.log(userBooks2);