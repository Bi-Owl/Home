AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

feather.replace();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
