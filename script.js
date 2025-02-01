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

});


document.addEventListener('DOMContentLoaded', function() {
    // Animate feature list items
    function animateFeatureList() {
        const featureItems = document.querySelectorAll('.feature-list li');
        featureItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 200); // Stagger the animation
        });
    }

    // Run the animation when the section comes into view
    const aboutSection = document.getElementById('about-space');
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateFeatureList();
                observer.disconnect(); // Run the animation only once
            }
        });
        observer.observe(aboutSection);
    }
});

//Google Maps
document.addEventListener('DOMContentLoaded', function() {
    // Make Google Maps iframe responsive
    function resizeMap() {
        const mapIframe = document.querySelector('#location-contact iframe');
        if (mapIframe) {
            const mapAspectRatio = 4 / 3; // Adjust this value to change the aspect ratio
            const mapWidth = mapIframe.offsetWidth;
            mapIframe.style.height = (mapWidth / mapAspectRatio) + 'px';
        }
    }

    // Run on load and on window resize
    window.addEventListener('load', resizeMap);
    window.addEventListener('resize', resizeMap);
});