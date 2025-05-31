// Circular Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const circularNav = document.getElementById('circular-nav');
const navItems = document.querySelectorAll('.nav-item');
let isNavOpen = false;

// Initialize nav items
navItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px)'; // Initial position below final
});

// Toggle navigation
navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    isNavOpen = !isNavOpen;
    
    // Toggle plus/close icon
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-times');
    
    // Show/hide circular nav
    circularNav.classList.toggle('hidden');
    
    // Toggle nav items visibility with animation
    navItems.forEach((item, index) => {
        if (isNavOpen) {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)'; // Final position
                item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            }, index * 50);
        } else {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)'; // Initial position
                 item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            }, (navItems.length - 1 - index) * 50); // Animate out in reverse order
        }
    });
});

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (isNavOpen && !circularNav.contains(e.target) && !navToggle.contains(e.target)) {
        isNavOpen = false;
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-plus');
        icon.classList.remove('fa-times');
        circularNav.classList.add('hidden');
        
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                 item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            }, (navItems.length - 1 - index) * 50);
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close navigation after clicking a link
        if (isNavOpen) {
            isNavOpen = false;
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-plus');
            icon.classList.remove('fa-times');
            circularNav.classList.add('hidden');
            
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                     item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                }, (navItems.length - 1 - index) * 50);
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-4');
        }
    });
};

// Initial check for elements in view
window.addEventListener('load', animateOnScroll);
// Check for elements in view on scroll
window.addEventListener('scroll', animateOnScroll);

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}); 