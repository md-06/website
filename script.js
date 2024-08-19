document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Validate Name
    if (name === '') {
        showError('nameError', 'Name is required.');
        valid = false;
    }

    // Validate Email
    if (email === '') {
        showError('emailError', 'Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format.');
        valid = false;
    }

    // Validate Password
    if (password === '') {
        showError('passwordError', 'Password is required.');
        valid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
        valid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === '') {
        showError('confirmPasswordError', 'Please confirm your password.');
        valid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        valid = false;
    }

    if (valid) {
        form.submit();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}
