let marks = [88, 76, 91, 82, 79];
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

let average = totalMarks / marks.length;
let percentage = totalMarks / (marks.length * 100) * 100;
let failed = marks.some(mark => mark < 35);

if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}

console.log("Total Marks:", totalMarks);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
