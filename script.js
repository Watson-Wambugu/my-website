// Form Validation for Contact and Newsletter Forms
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact form');
    const newsletterForm = document.querySelector('.newsletter form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateContactForm();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateNewsletterForm();
        });
    }

    function validateContactForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        }
    }

    function validateNewsletterForm() {
        const email = document.getElementById('newsletter-email').value.trim();

        if (email === '') {
            alert('Please enter your email address.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for subscribing to the newsletter!');
            newsletterForm.reset();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.createElement('span');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    document.querySelector('footer p').append(' ', yearSpan);
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.setAttribute('style', `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;
    `);

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
