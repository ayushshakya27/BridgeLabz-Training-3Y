class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name: name, price: price, quantity: quantity });
    }

    getTotal() {
        return this.items.reduce(function(total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        if (!/^(SAVE|DISC)(10|20|30)$/.test(coupon)) {
            return { valid: false, total: this.getTotal(), message: "Invalid coupon code." };
        }

        let discount = Number(coupon.match(/\d+$/)[0]);
        let total = this.getTotal();
        let finalTotal = total - total * discount / 100;

        return { valid: true, total: finalTotal, message: discount + "% discount applied." };
    }
}

const cart = new Cart();
cart.addItem("Headphones", 1500, 2);
cart.addItem("Book", 500, 1);

const couponInput = document.getElementById("coupon");
const cartForm = document.getElementById("cartForm");
const cartResult = document.getElementById("cartResult");

document.getElementById("cartTotal").textContent = "Cart total: Rs." + cart.getTotal();

cartForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let result = cart.applyCoupon(couponInput.value.trim().toUpperCase());
    cartResult.textContent = result.message + " Final total: Rs." + result.total.toFixed(2);
});
