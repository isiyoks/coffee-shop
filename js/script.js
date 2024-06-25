document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Fetching form values
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const phone = document.getElementById('phone').value;

        // Validation for email, username, and password
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (username.length < 5) {
            alert('Username must be at least 5 characters long.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!/^(\d{10})$/.test(phone)) {
            alert('Phone number must be a 10-digit number.');
            return;
        }

        // If all validations pass
        console.log('Registration successful!');
        alert('Registration successful!');
    });
});
