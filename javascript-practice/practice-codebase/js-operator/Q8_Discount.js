const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce(function(sum, product) {
    return sum + product.price;
}, 0);

let finalTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category == "electronics") {
        price = price - price * 10 / 100;
    } else if (product.category == "fashion") {
        price = price - price * 5 / 100;
    }

    finalTotal = finalTotal + price;
}

if (total > 50000) {
    finalTotal = finalTotal - finalTotal * 5 / 100;
}

console.log("Cart total: " + total);
console.log("Final total: " + finalTotal.toFixed(2));
