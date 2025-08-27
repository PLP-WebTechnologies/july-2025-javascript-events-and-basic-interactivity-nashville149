// Part 1: JavaScript Event Handling and Interactive Elements

// Part 2: Building Interactive Elements

// -- Theme Toggle --
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// -- FAQ Section --
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Part 3: Form Validation with JavaScript
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Validate name
    if (name.value.trim() === '') {
        isValid = false;
        name.nextElementSibling.textContent = 'Name is required.';
    }

    // Validate email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.nextElementSibling.textContent = 'Please enter a valid email address.';
    }

    // Validate password
    if (password.value.length < 8) {
        isValid = false;
        password.nextElementSibling.textContent = 'Password must be at least 8 characters long.';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});
