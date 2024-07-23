function addToCart(button) {
    const item = button.closest('.item');
    const itemName = item.querySelector('.item-name').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemQuantity = item.querySelector('.quantity').value;
    const itemSize = item.querySelector('.customize-select').value;

    const cartItem = `${itemName}|${itemPrice}|${itemQuantity}|${itemSize}`;
    
    let cart = localStorage.getItem('cart') || '';
    cart += (cart ? ',' : '') + cartItem;
    
    localStorage.setItem('cart', cart);
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    const cart = localStorage.getItem('cart') || '';
    const itemCount = cart ? cart.split(',').length : 0;
    
    let countElement = cartIcon.querySelector('.item-count');
    
    if (itemCount > 0) {
        if (!countElement) {
            countElement = document.createElement('div');
            countElement.className = 'item-count';
            cartIcon.appendChild(countElement);
        }
        countElement.textContent = itemCount;
    } else if (countElement) {
        cartIcon.removeChild(countElement);
    }
}

document.querySelector('.cart-icon').addEventListener('click', () => {
    window.location.href = 'cart.html';
});

document.addEventListener('DOMContentLoaded', updateCartIcon);
