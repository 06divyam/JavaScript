// Logical operator
/**logical operator &&
 logical ||(or)
 logical not !
**/

//  && ak condition bhi kabhi false rahi to puri ki puri conditions false rahegi , dono condition true rahi too pura true rahega 
// || ak condition bhi kabhi true rahi to puri ki puri condition true rahegi , dono condition false rahi too pura false rahega 
// ! true condition ko false ker deta hai or false condition ko true ker deta hai 
let a = 5;
let b = 2;

/** &&
let cond1 = a > b; // true
let cond2 = a === 5;// true
console.log(" cond1 && cond2 =", cond1 && cond2);**/

// || 
/**let cond1 = a<b;
let cond2 = a === 5;
console.log("cond1 || cond2 =", a<b || a===5);**/

// ! 
let cond1 = a<b;
let cond2 = a===5;
console.log(" !(5<2) = " , !( a === 2));
