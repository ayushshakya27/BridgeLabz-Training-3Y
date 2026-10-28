let currentSalary = 40000;
let incrementRate = 8;
let salaryDetails = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * incrementRate / 100;
    salaryDetails.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

console.table(salaryDetails);
