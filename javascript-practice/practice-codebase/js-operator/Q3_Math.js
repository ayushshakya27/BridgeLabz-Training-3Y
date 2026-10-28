let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Number: ${x}`);
console.log(`Rounded: ${rounded}`);
console.log(`Square root: ${squareRoot.toFixed(2)}`);
console.log(`Power of 3: ${power.toFixed(2)}`);
console.log(`Random number: ${randomNumber}`);
