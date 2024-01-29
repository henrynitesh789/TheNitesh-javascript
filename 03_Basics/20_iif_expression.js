
// Immediately Invoked Function Expression (IIFE)
(
    function newFunction(){
        console.log(`DB connected`);
    } 
)(); // it will immediately called

// iffe with arrow function
(
    (name) => {
        console.log(`DB connected Two, ${name}`);
    } 
)('issac')