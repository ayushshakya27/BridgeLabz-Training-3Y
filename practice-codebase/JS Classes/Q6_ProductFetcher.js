async function loadProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let products = await response.json();

        for (let product of products) {
            console.log("Product: " + product.title);
            console.log("Price: $" + product.price);
            console.log("Image: " + product.image);
        }

        let container = document.getElementById("products");

        if (container) {
            for (let product of products) {
                let card = document.createElement("div");
                let title = document.createElement("h3");
                let price = document.createElement("p");
                let image = document.createElement("img");

                title.textContent = product.title;
                price.textContent = "$" + product.price;
                image.src = product.image;
                image.alt = product.title;
                image.width = 100;

                card.appendChild(title);
                card.appendChild(price);
                card.appendChild(image);
                container.appendChild(card);
            }
        }
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

loadProducts();
