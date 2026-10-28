function applyOperation(numbers, operation) {
    let result = [];

    for (let number of numbers) {
        result.push(operation(number));
    }

    return result;
}

let numbers = [1, 2, 3, 4];

let doubled = applyOperation(numbers, function(number) {
    return number * 2;
});

let squared = applyOperation(numbers, function(number) {
    return number * number;
});

console.log("Doubled:", doubled);
console.log("Squared:", squared);
