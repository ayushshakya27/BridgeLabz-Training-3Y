"use strict";

function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        case "power":
            return Math.pow(num1, num2);
        case "root":
            if (num1 < 0) {
                throw new Error("Cannot find square root of a negative number");
            }
            return Math.sqrt(num1);
        case "subtract":
            return num1 - num2;
        default:
            throw new Error("InvalidOperationError");
    }
}

let operations = ["add", "divide", "power", "root", "subtract"];
let num1 = 25;
let num2 = 0;

for (let i = 0; i < operations.length; i++) {
    try {
        let result = calculate(operations[i], num1, num2);
        console.log(operations[i] + ": " + result);
    } catch (error) {
        console.log(operations[i] + " error: " + error.message);
    }
}

try {
    calculate("root", -9, 0);
} catch (error) {
    console.log("root error: " + error.message);
}
