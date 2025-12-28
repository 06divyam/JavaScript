// Some More array methods
//Map -> Creates a new array with the results of some operation. The value its callback returns are used to form new array
// arr.map( callbackFnx(value,index,array))
// let newArr = arr.map((val) => {
// return val * 2;
// //})

// let nums = [254, 45, 586];

// nums.map((val) => {
//     console.log(val *val);
// });

//Filter-> creates a new array of elements that give true for a condition /filter. Eg: all even elements
//  let newArr = arr.filter((val) => {
//     return val % 2 === 0;
//  })

let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr);