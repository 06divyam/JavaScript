// Promises

// . pending: the result is undefined 
//. resolved: the result is a value(fullfilled)
//. rejected: the result is an error object

// Promise is for "eventual" comletion of task. It is an object in JS. It is a solution to callback hell.
//let promise = new Promise((resolve, reject) => {...})
//.then()& .catch()

//promise.then((res) =>{...})
//promise.catch((err) =>{...})


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//         reject("some error occured");
    
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some deta1");
            resolve("success1");
        }, 4000);
    });
}