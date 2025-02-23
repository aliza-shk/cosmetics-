let cart = [];

function addToCart(name, price) {
    let item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;
        let listItem = document.createElement("li");
        listItem.textContent = R{item.name} - R{item.price} x R{item.quantity};
        cartList.appendChild(listItem);
    });

    document.getElementById("cart-total").textContent = total;
}