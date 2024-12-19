document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuIcons = mobileMenuButton.querySelectorAll('svg');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcons.forEach(icon => icon.classList.toggle('hidden'));
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcons[0].classList.remove('hidden');
            menuIcons[1].classList.add('hidden');
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100; // Offset for better highlighting

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-link-active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-link-active');
                    }
                });
            }
        });
    }

    // Update navigation highlighting on scroll
    window.addEventListener('scroll', highlightNavigation);
    
    // Initial highlight check
    highlightNavigation();
});