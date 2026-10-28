let purchaseTotal = 6500;
let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let discountAmount = purchaseTotal * discountPercentage / 100;
let finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Original Total: Rs. " + purchaseTotal);
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: Rs. " + finalPrice);
