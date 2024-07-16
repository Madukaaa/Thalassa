let cart = [];

function addToCart(button) {
    const item = button.closest('.item');
    const itemName = item.querySelector('.item-name').textContent;
    const itemPrice = parseFloat(item.querySelector('.item-price').textContent);
    const itemQuantity = parseInt(item.querySelector('.quantity').value);
    const itemSize = item.querySelector('.customize-select').value;

    const cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        size: itemSize
    };

    cart.push(cartItem);
    updateCartIcon();
    saveCartToLocalStorage();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (itemCount > 0) {
        if (!cartIcon.querySelector('.item-count')) {
            const countElement = document.createElement('div');
            countElement.className = 'item-count';
            cartIcon.appendChild(countElement);
        }
        cartIcon.querySelector('.item-count').textContent = itemCount;
    } else {
        const countElement = cartIcon.querySelector('.item-count');
        if (countElement) {
            cartIcon.removeChild(countElement);
        }
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelector('.cart-icon').addEventListener('click', () => {
    window.location.href = 'cart.html';
});