// forEach loop in arrays(Heigher order function/Heigher order merthod bhi forEach ko bolte hai) -> array ki har ak value ka kam perform karana ho tb forEach use hota hai 
// arr.forEach( callBackFunction )
// calBackFunction: Here, it is a function to execute for each element in the arrray
// * A callBack is a function passed as an argument to another function .
//arr.forEach((val) => {
    //console.log(val);
//});

let arr = ["Delhi", "Pune", "Mumbai", "Goa", "Ladakh"];

//arr.forEach(function printVal (val) {
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val.toLowerCase());
// });

// arr.forEach((val, idx, ) => {
//     console.log(val.toUpperCase(), idx);
// });

arr.forEach((val) => {
    console.log(val.toLowerCase(), arr);
});