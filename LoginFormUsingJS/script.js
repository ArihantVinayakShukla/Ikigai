const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Perform validation here
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all required fields.');
    } else if (!isEmailValid) {
        alert('Please enter a valid email address.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        // You can handle the login process here (e.g., send data to a server).
        alert('Login successful!');
        loginForm.reset();
    }
});
