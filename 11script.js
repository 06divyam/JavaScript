// Orignal String Inmutable hoti hai


// Infinte Loop
// A loop that never ends

// kabhi bhi infinte loop use nhi kerna hai, infinte tk series chal jati jisse ki pc leg hota hai or virus aata hai 


// while loop 
/**let i = 1;
while(i <= 5){
    console.log("Apna College");
    i++;
}**/

//do while loop

/**let i = 1;
do{
    console.log("i=",i);
    i++;
} while(i <= 10);**/

// for-of Loop

// let str ="ApnaCollege";
// let size = 0;

// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("string size =",size);

// for in loop 

let student = {
    Name: "Divyam Patel",
    age:19,
    cgpa: 7.5,
    ispass: true, 
};

for(let key in student){
    console.log("key =",key , "value =",student[key]);
}