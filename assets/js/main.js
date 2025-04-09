document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}); 