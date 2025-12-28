/** Loops in JS
Loops are used to execute a piece of code again & again  

1. For Loop

print 1 to n
for(let count = 1; count <= 500; count++){
    console.log("Apna College");
}

console.log("Loop has ended");**/

// Calculate sum of first n numbers
let sum = 0;
let n = 6
for(let i=1; i<=n; i++){
    sum = sum + i;
}
console.log("sum =", sum);
console.log("Loop has Ended");