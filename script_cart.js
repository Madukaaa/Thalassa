document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cart = localStorage.getItem('cart') || '';
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart) {
        const items = cart.split(',');
        items.forEach((item, index) => {
            const [name, price, quantity, size] = item.split('|');
            const itemTotal = parseFloat(price) * parseInt(quantity);
            total += itemTotal;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${name} (${size})</span>
                <span>Quantity: ${quantity}</span>
                <span>Price: ${price} </span>
                <span>Total: ${itemTotal.toFixed(2)} Rs</span>
                <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    cartTotalElement.textContent = `Total: ${total.toFixed(2)} Rs`;
}

function removeItem(event) {
    const index = event.target.getAttribute('data-index');
    let cart = localStorage.getItem('cart') || '';
    const items = cart.split(',');
    items.splice(index, 1);
    cart = items.join(',');
    localStorage.setItem('cart', cart);
    displayCart();
}

function backToShop() {
    window.location.href = 'Shop.html';
}

function proceedToCheckout() {
    window.location.href = 'Checkout.html'
}