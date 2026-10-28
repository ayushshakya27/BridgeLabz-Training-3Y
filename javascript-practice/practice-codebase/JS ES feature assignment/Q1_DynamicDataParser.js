"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
let validNumbers = [];
let invalidValues = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let numberValue = Number(value);

    console.log("Value:", String(value));
    console.log("Number:", numberValue);
    console.log("Boolean:", Boolean(value));
    console.log("String:", String(value));

    if (value === " " || value === "NaN" || Number.isNaN(numberValue)) {
        invalidValues.push(value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("Valid numbers:", validNumbers);
console.log("Invalid values:", invalidValues);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidValues.length);
