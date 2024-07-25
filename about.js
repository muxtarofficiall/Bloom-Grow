document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dropdown menu
    const dropdown = document.querySelector('.fa-chevron-down');
    dropdown.addEventListener('click', () => {
        const dropdownMenu = document.querySelector('.navbar ul');
        dropdownMenu.classList.toggle('show');
    });

    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Abone olundu: ${email}`);
        } else {
            alert('Zehmet olmasa Emailiniz daxil edin...');
        }
        form.reset();
    });
});
