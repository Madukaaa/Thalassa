document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    previewForm();
});

function previewForm() {
    const email = document.getElementById('email').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : null;
    const comments = document.getElementById('comments').value;

    let errorMessage = "";

    if (!email) {
        errorMessage += "Email is required.<br>";
    }
    if (!firstname) {
        errorMessage += "First name is required.<br>";
    }
    if (!lastname) {
        errorMessage += "Last name is required.<br>";
    }
    if (!phone) {
        errorMessage += "Phone number is required.<br>";
    } else if (!/^\d+$/.test(phone)) {
        errorMessage += "Phone number must contain only numeric values.<br>";
    }
    if (!rating) {
        errorMessage += "Rating is required.<br>";
    }
    if (!comments) {
        errorMessage += "Comments are required.<br>";
    }

    if (errorMessage) {
        document.getElementById('error-message').innerHTML = errorMessage;
        return;
    }

    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-firstname').innerText = firstname;
    document.getElementById('preview-lastname').innerText = lastname;
    document.getElementById('preview-phone').innerText = phone;
    document.getElementById('preview-rating').innerText = rating;
    document.getElementById('preview-comments').innerText = comments;

    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('preview-section').style.display = 'block';
}

function editForm() {
    document.getElementById('preview-section').style.display = 'none';
    document.getElementById('feedback-form').style.display = 'block';
}

function confirmForm() {
    document.getElementById('preview-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'block';
}
