//Take a number n as input from user. Create an array of numbers from 1 to n.
// use the reduse method to calculate sum of all number in the array.
// use the reduse method to calculate product of al numbers in the array.

let n = prompt("Enter a number :");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i - 1] = i; // 1 2 3 4 5 

}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factorial =", factorial);