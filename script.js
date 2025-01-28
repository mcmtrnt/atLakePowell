document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });


    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Custom animation for hero section
    const heroContent = document.querySelector('.hero .container');
    heroContent.classList.add('fade-in-up');

    // Parallax effect for sections with background images
    window.addEventListener('scroll', () => {
        const parallaxSections = document.querySelectorAll('.parallax');
        parallaxSections.forEach(section => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            section.style.backgroundPositionY = `${rate}px`;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // ... (keep existing code)

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Call once to set initial state

    // Close mobile menu on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // ... (keep existing code)
});