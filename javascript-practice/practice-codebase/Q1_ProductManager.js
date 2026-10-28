class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `${this.name} | Category: ${this.category} | Price: Rs.${this.price.toFixed(2)}`;
    }
}

let products = [
    new Product(1, "Headphones", 1500, "Electronics"),
    new Product(2, "Notebook", 100, "Stationery"),
    new Product(3, "Keyboard", 2200, "Electronics")
];

products[0].applyDiscount(10);

let costlyProducts = products.filter(function(product) {
    return product.price > 1000;
});

for (let product of costlyProducts) {
    console.log(product.getDetails());
}
