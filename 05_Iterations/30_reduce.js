
// +++++++++++ REDUCE ++++++++++++

const array1 = [1,2,3,4,5];
const sum = array1.reduce(
    function (acc, cv) {
        console.log(`acc: ${acc} and cv`);
        return acc+cv
    },0
)
console.log(sum);

// using arrow function
const sum2 = array1.reduce( (acc, cv) => (acc+cv), 0)
console.log(sum2);

const  shoppingCart = [
    {
        itemName: "dsa course",
        price: 4000
    },
    {
        itemName: "web dev",
        price: 3000
    },
    {
        itemName: "genertive Ai",
        price: 5000
    }
]
const add = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(add);