/**Sync in JS
 * Synchronous means the code runs in a particular sewuence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution .
 * 
 * Asynchronous
 * Due to sy nchronous programming, sometimes imp instruction get blocked due to some previous instructions, which causes a delay in the Ul. Asynchronous code execution allows to execute next instructions immediately & doesn't block the flow.
 */

// console.log("one");
// console.log("two");

// setTimeout ( () => {
//     console.log("three");
// }, 4000); 

// console.log("three");
// console.log("four");


function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);