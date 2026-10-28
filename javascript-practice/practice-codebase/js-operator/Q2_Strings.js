let productName = " wireless headphones PRO ";

productName = productName.trim();
productName = productName.toLowerCase();

let words = productName.split(" ");
let newWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

productName = newWords.join(" ");
productName = productName.replace("Pro", "Pro Edition");

console.log("Product: " + productName);
console.log("Length: " + productName.length);
