document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    previewForm();
});

function previewForm() {
    const email = document.getElementById('email').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comments = document.getElementById('comments').value;

    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-firstname').innerText = firstname;
    document.getElementById('preview-lastname').innerText = lastname;
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
