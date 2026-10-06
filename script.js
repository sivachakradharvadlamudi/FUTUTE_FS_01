// Wait for DOM to load fully
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                formStatus.className = 'form-status status-error';
                formStatus.textContent = 'Please fill out all required fields.';
                return;
            }

            // Simulate form submission success
            formStatus.className = 'form-status status-success';
            formStatus.textContent = `Thank you, ${name}! Your message has been received.`;

            // Save to localStorage as a demonstration of storage
            try {
                const submissions = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
                submissions.push({ name, email, message, timestamp: new Date().toISOString() });
                localStorage.setItem('portfolio_messages', JSON.stringify(submissions));
            } catch (err) {
                console.log('LocalStorage save:', err);
            }

            // Reset form fields
            contactForm.reset();

            // Clear status message after 5 seconds
            setTimeout(function() {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        });
    }
});
