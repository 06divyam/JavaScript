// create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

console.log(userNum);

while(userNum != gameNum){
    userNum = prompt("You enterd wront number. guess again :");
}

console.log("Congratulation, you enterd the right number");