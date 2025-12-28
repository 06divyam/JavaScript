// We are given array of marks of students. Filter out of the marks of students that scored 90.

let marks = [99, 87, 90, 68, 89, 95, 69, 97, 81];

let topperArr = marks.filter((val) => {
    return val > 90;
})

console.log(topperArr);