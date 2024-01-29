
/* JAVASCRIPT EXECUTION CONTEXT
    {} -> global exection context
    global exection context is refered to the variable 'this'

    EXECUTION PHASE types
    -> Global execution context
    -> Function execution context

    suppose we have code
    --------------------
            let val1 = 10
            let val2 = 20
            function addNum(num1, num2){
                let total =  num1 + num2 
                return total
            }
            let result1 = addNum(val1, val2)
            let result2 = addNum(10,2)

    1) first phase -- global execution
                {} - this

    2) second phase -- memory creation phase
        . naming all variable and put undefined in it
        . val1 = undefined
        . val2 = undefined
        . addNum = definition
        . result1 = undrfined
        . result2 = undefined

    3) third phase -- execution phase: assing value in it
        . val1 = 10
        . val2 = 20
        . addNum = here it forms { new variable environment + execution thread } 
            note: the more you call the function, that much times { new variable environment + execution thread } will be formed
            
            -> now for { new variable environment + execution thread } cycle
                i) memory phase: 
                    . val1 = undefined
                    . val2 = undefined
                    . total = undefined
                ii) execution phase:
                    . num1 = 10
                    . num2 = 20
                    . total = 30  this will return to global executional context
                
                Note: after returning value to the global executional context, the variable 
                    environment & execution thread will be deleted automatically

        . result1 = 30
        . addNum = { new variable environment + execution thread } 
            -> now for { new variable environment + execution thread } cycle
                i) memory phase: 
                    . total = undefined
                ii) execution phase:
                    . num1 = 10
                    . num2 = 2
                    . total = 12  this will return to global executional context
        . result2 = 12
*/

function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}
one()
two()
three()

/* CALL STACK
    -> LIFO -- last in first out

*/