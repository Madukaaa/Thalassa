document.addEventListener('DOMContentLoaded', function() {
    const cardNumber = document.getElementById('card-number');
    const expiryDate = document.getElementById('expiry-date');
    const cvv = document.getElementById('cvv');
    const phone = document.getElementById('phone');
    const makePaymentBtn = document.getElementById('make-payment');

    function validateCardNumber(value) {
        return /^\d{16}$/.test(value);
    }

    function validateExpiryDate(value) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
    }

    function validateCVV(value) {
        return /^\d{3}$/.test(value);
    }

    function validatePhoneNumber(value) {
        return /^\d{10}$/.test(value);
    }

    cardNumber.addEventListener('input', function() {
        if (!validateCardNumber(this.value)) {
            this.setCustomValidity('Invalid input: Must be 16 digits');
        } else {
            this.setCustomValidity('');
        }
    });

    expiryDate.addEventListener('input', function() {
        if (!validateExpiryDate(this.value)) {
            this.setCustomValidity('Invalid input: Must be in MM/YY format');
        } else {
            this.setCustomValidity('');
        }
    });

    cvv.addEventListener('input', function() {
        if (!validateCVV(this.value)) {
            this.setCustomValidity('Invalid input: Must be 3 digits');
        } else {
            this.setCustomValidity('');
        }
    });

    phone.addEventListener('input', function() {
        if (!validatePhoneNumber(this.value)) {
            this.setCustomValidity('Invalid input: Must be 10 digits');
        } else {
            this.setCustomValidity('');
        }
    });

    makePaymentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (document.querySelector('form:invalid')) {
            alert('Please fill in all required fields correctly.');
        } else {
            alert('Checkout complete! Thank you for your purchase.');
        }
    });

    document.getElementById('back-to-cart').addEventListener('click', function() {
        window.location.href = 'cart.html';
    });

    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    const cart = localStorage.getItem('cart') || '';

    let total = 0;
    if (cart) {
        const items = cart.split(',');
        items.forEach(item => {
            const [name, price, quantity, size] = item.split('|');
            const itemElement = document.createElement('p');
            itemElement.textContent = `${name} - ${price} (Quantity: ${quantity}, Size: ${size})`;
            orderItems.appendChild(itemElement);
            total += parseFloat(price) * parseInt(quantity);
        });
    }

    orderTotal.textContent = `${total.toFixed(2)} Rs`;
});