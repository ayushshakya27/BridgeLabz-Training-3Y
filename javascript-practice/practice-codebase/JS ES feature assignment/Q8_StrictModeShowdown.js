"use strict";

function demo(firstNumber, secondNumber) {
    let total = firstNumber + secondNumber;
    console.log("Total:", total);
}

demo(5, 10);
console.log("In strict mode, duplicate parameter names and undeclared variables cause errors.");
console.log("Declare variables with let, const, or var before using them.");
