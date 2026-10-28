let expenses = [4500, 2000, 8000, 1500, 1000];
let totalExpense = 0;

for (let expense of expenses) {
    totalExpense += expense;
}

let averageExpense = totalExpense / expenses.length;
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

console.log("Total Expense: Rs. " + totalExpense.toFixed(2));
console.log("Average Expense: Rs. " + averageExpense.toFixed(2));
console.log("Tax: Rs. " + tax.toFixed(2));
console.log("Final Amount: Rs. " + finalAmount.toFixed(2));
