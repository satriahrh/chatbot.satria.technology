// ==========================================================================
// Main JavaScript for Satria Technology Landing Page
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScroll();
    initMobileMenu();
    initStickyHeader();
    initContactForm();
});

// ==========================================================================
// Smooth Scrolling for Anchor Links
// ==========================================================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }

                // Calculate header height for offset
                const header = document.getElementById('header');
                const headerHeight = header ? header.offsetHeight : 0;

                // Scroll to target with offset
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================================================
// Mobile Menu Toggle
// ==========================================================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ==========================================================================
// Sticky Header with Shadow on Scroll
// ==========================================================================

function initStickyHeader() {
    const header = document.getElementById('header');

    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow when scrolled down
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// ==========================================================================
// Contact Form Handling
// ==========================================================================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    // Basic form validation
    contactForm.addEventListener('submit', function(e) {
        // Clear previous error messages
        clearFormErrors();

        let isValid = true;
        const formData = new FormData(contactForm);

        // Validate required fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const company = formData.get('company');
        const businessType = formData.get('business_type');

        if (!name || name.trim() === '') {
            showFieldError('name', 'Nama lengkap harus diisi');
            isValid = false;
        }

        if (!email || email.trim() === '') {
            showFieldError('email', 'Email harus diisi');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showFieldError('email', 'Format email tidak valid');
            isValid = false;
        }

        if (!phone || phone.trim() === '') {
            showFieldError('phone', 'Nomor WhatsApp harus diisi');
            isValid = false;
        }

        if (!company || company.trim() === '') {
            showFieldError('company', 'Nama bisnis harus diisi');
            isValid = false;
        }

        if (!businessType || businessType === '') {
            showFieldError('business_type', 'Pilih jenis bisnis');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();

            // Scroll to first error
            const firstError = contactForm.querySelector('.error-message');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            return false;
        }

        // If using Formspree, the form will submit normally
        // If you want to handle submission with JavaScript (e.g., EmailJS), prevent default and handle here

        // For now, we'll let it submit normally to Formspree
        // You can uncomment the following if you want to show a custom success message
        /*
        e.preventDefault();

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            showSuccessMessage('Terima kasih! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        }, 1500);
        */
    });
}

// ==========================================================================
// Form Validation Helper Functions
// ==========================================================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    // Add error class to input
    field.classList.add('error');

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#DC3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '4px';

    formGroup.appendChild(errorDiv);
}

function clearFormErrors() {
    // Remove error classes
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });

    // Remove error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.remove();
    });
}

function showSuccessMessage(message) {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        background: #28A745;
        color: white;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 24px;
        text-align: center;
        font-weight: 600;
    `;

    contactForm.insertBefore(successDiv, contactForm.firstChild);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ==========================================================================
// Scroll Animations (Optional - Intersection Observer)
// ==========================================================================

// Uncomment this if you want to add scroll animations
/*
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .pricing-card, .use-case-card');

    if (!animatedElements.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Call this in DOMContentLoaded if you want animations
// initScrollAnimations();
*/

// ==========================================================================
// Analytics Event Tracking (Optional)
// ==========================================================================

// Track button clicks for analytics
function trackButtonClick(buttonName, buttonLocation) {
    // If you're using Google Analytics, you can track events like this:
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            'button_name': buttonName,
            'button_location': buttonLocation
        });
    }
    */

    console.log(`Button clicked: ${buttonName} at ${buttonLocation}`);
}

// Add click tracking to CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonSection = this.closest('section')?.id || 'unknown';
            trackButtonClick(buttonText, buttonSection);
        });
    });
});

// ==========================================================================
// Utility Functions
// ==========================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================================================
// Console Welcome Message
// ==========================================================================

console.log('%c👋 Halo dari Satria Technology!', 'font-size: 20px; font-weight: bold; color: #25D366;');
console.log('%cTertarik dengan chatbot AI untuk WhatsApp Business? Hubungi kami di business@satria.technology', 'font-size: 14px; color: #666;');
