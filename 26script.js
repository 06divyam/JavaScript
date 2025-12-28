// Create a function using the "Function" keyword that takes a string as an argument & returns the numner of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         console.log(char);
//         if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
//             count++;

//         }
//     }
//     return count;
// }

// Ques. create an arrow function to perform the same task.

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        console.log(char);
        if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
            count++;

        }
    }
    return count;
}

