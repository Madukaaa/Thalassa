document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.size})</span>
            <span>Quantity: ${item.quantity}</span>
            <span>Price: ${item.price.toFixed(2)} Rs</span>
            <span>Total: ${itemTotal.toFixed(2)} Rs</span>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.textContent = `Total: ${total.toFixed(2)} Rs`;
}

function backToShop() {
    window.location.href = 'Shop.html';
}

function proceedToCheckout() {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
}