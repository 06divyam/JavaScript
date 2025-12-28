// Write a code which can give grades to students according to their scores.
/** . 90-100,A
. 70-89,B
. 60-69,C
. 50-59,D
0-49,E
**/

let score = prompt("Enter your score(0-100)");
let grade;

if(score >=90 && score <= 100){
    grade="A";
} else if(score >=89 && score <= 70){
    grade = "B";
} else if(score >=69 && score <= 60){
    grade = "C";
} else if(score >=59 && score <= 50){
    grade = "D";
} else if(score >=49 && score <= 0) {
    grade = "E";
}

console.log("According to your scores, your grade was :", grade);