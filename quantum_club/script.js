/**
 * QUANTUM CLUB - CLEAN JAVASCRIPT
 * Modern, organized JavaScript for the Quantum Club website
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
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

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
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

/**
 * Check if element is in viewport
 * @param {Element} element - Element to check
 * @param {number} threshold - Threshold percentage (0-1)
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= windowHeight * threshold &&
        rect.left <= windowWidth &&
        rect.right >= 0
    );
}

/**
 * Smooth scroll to element
 * @param {string|Element} target - Target element or selector
 * @param {number} offset - Offset from top
 */
function smoothScrollTo(target, offset = 0) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) {
        console.warn('Target element not found for smooth scroll');
        return;
    }
    
    const targetPosition = element.offsetTop - offset;
    console.log('Scrolling to position:', targetPosition);
    
    // Use modern smooth scrolling if available
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        // Fallback for older browsers
        window.scrollTo(0, targetPosition);
    }
}

// ========================================
// APPLICATION CLASS
// ========================================

class QuantumClubApp {
    constructor() {
        this.isLoading = true;
        this.currentVideoIndex = 0;
        this.lastScrollY = 0;
        this.isScrolling = false;
        
        // Video sources
        this.videoSources = [
            './assets/videos/3535732237-preview.mp4',
            './assets/videos/1095162475-preview.mp4',
            './assets/videos/1092359753-preview.mp4',
            './assets/videos/3578960709-preview.mp4'
        ];
        
        this.loadingOverlay = document.getElementById('loadingOverlay');

        this.heroVideo = document.querySelector('.hero-video');

        this.texts = [
            "Welcome to Quantum Club!",
            "Innovate. Inspire. Impact.",
            "Pioneering the Future of Tech."
        ];

        this.quotes = [
            "The best way to predict the future is to invent it.",
            "Quantum leaps begin with a single step.",
            "Innovation distinguishes between a leader and a follower."
        ];

        document.addEventListener('DOMContentLoaded', () => {
            this.init();  // ✅ Waits for DOM to be ready
        });
    }
    
    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.startLoadingSequence();
        this.onDOMContentLoaded();
    }
    
    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // DOM Content Loaded
        
        
        // Window Events
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 16));
        window.addEventListener('resize', debounce(() => this.handleResize(), 250));
        window.addEventListener('load', () => this.handleWindowLoad());
        
        // Navigation Events
        this.setupNavigationEvents();
        
        // Video Events
        this.setupVideoEvents();
        
        // Form Events
        this.setupFormEvents();
        
        // Accessibility Events
        this.setupAccessibilityEvents();
    }
    
    /**
     * Initialize components
     */
    initializeComponents() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.heroVideo = document.querySelector('.hero-video');
        this.backToTopBtn = document.getElementById('back-to-top');
        this.contactForm = document.getElementById('contactForm');
        
        // Initialize video functionality
        this.initVideoFunctionality();
        
        // Initialize Intersection Observer for animations
        this.initIntersectionObserver();
        
        // Initialize parallax effects
        this.initParallaxEffects();
    }
    
    /**
     * Initialize video functionality
     */
    initVideoFunctionality() {
        if (this.heroVideo) {
            console.log('Initializing video functionality');
            // Set video properties
            this.heroVideo.loop = false;
            this.heroVideo.muted = true;
            this.heroVideo.autoplay = true;
            
            // Setup video events
            this.setupVideoEvents();
            
            // Start with first video
            this.currentVideoIndex = 0;
            console.log('Video functionality initialized');
        } else {
            console.warn('Hero video element not found');
        }
    }

    /**
     * Handle DOM Content Loaded
     */
    onDOMContentLoaded() {
        console.log('Quantum Club App initialized');
        this.setupRippleEffect();
        this.setupTypingEffect();
    }
    
    /**
     * Start loading sequence
     */
    startLoadingSequence() {
        if (!this.loadingOverlay) {
            console.warn('Loading overlay not found');
            return;
        }
        
        // Simulate loading time with fallback
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 2000);
        
        // Fallback: Force hide loading screen after 5 seconds
        setTimeout(() => {
            if (this.isLoading) {
                console.log('Force hiding loading screen after timeout');
                this.hideLoadingScreen();
            }
        }, 5000);
    }
    
    /**
     * Hide loading screen
     */
    hideLoadingScreen() {
        if (!this.loadingOverlay) {
            console.warn('Cannot hide loading screen - overlay not found');
            return;
        }
        
        console.log('Hiding loading screen');
        this.loadingOverlay.classList.add('hidden');
        
        setTimeout(() => {
            this.loadingOverlay.style.display = 'none';
            this.isLoading = false;
            console.log('Loading screen hidden successfully');
        }, 500);
    }
    
    
    /**
     * Setup navigation events
     */
    setupNavigationEvents() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavLinkClick(e));
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.navMenu.classList.contains('active')) {
                if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });
    }
    
    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        if (!this.navMenu || !this.navToggle) return;
        
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        if (this.navMenu) this.navMenu.classList.remove('active');
        if (this.navToggle) this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    /**
     * Handle navigation link clicks
     */
    handleNavLinkClick(e) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;
        
        const targetSection = document.querySelector(targetId);
        if (!targetSection) {
            console.warn('Target section not found:', targetId);
            return;
        }
        
        console.log('Scrolling to section:', targetId);
        
        // Close mobile menu
        this.closeMobileMenu();
        
        // Update active nav link
        this.updateActiveNavLink(e.target);
        
        // Smooth scroll to section
        smoothScrollTo(targetSection, 70);
    }
    
    /**
     * Update active navigation link
     */
    updateActiveNavLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    /**
     * Setup video events
     */
    setupVideoEvents() {
        if (this.heroVideo) {
            console.log('Setting up video events');
            
            // Auto-switch video when current video ends
            this.heroVideo.addEventListener('ended', () => {
                console.log('Video ended, switching to next video');
                setTimeout(() => this.switchVideo(), 500); // Small delay for smooth transition
            });
            
            // Video error handling
            this.heroVideo.addEventListener('error', (e) => {
                console.warn('Video failed to load:', e);
                setTimeout(() => this.switchVideo(), 1000);
            });
            
            // Video loaded event
            this.heroVideo.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully');
            });
            
            // Ensure video properties
            this.heroVideo.loop = false;
            this.heroVideo.muted = true;
            this.heroVideo.autoplay = true;
        }
    }
    
    /**
     * Switch to next video
     */
    switchVideo() {
        if (!this.heroVideo || this.videoSources.length === 0) {
            console.warn('Cannot switch video - heroVideo or videoSources not available');
            return;
        }
        
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoSources.length;
        const newVideoSrc = this.videoSources[this.currentVideoIndex];
        
        console.log(`Switching to video ${this.currentVideoIndex + 1}/${this.videoSources.length}: ${newVideoSrc}`);
        
        // Pause current video
        this.heroVideo.pause();
        
        // Switch video source
        this.heroVideo.src = newVideoSrc;
        
        // Load and play new video
        this.heroVideo.load();
        
        // Play the new video
        const playPromise = this.heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video started playing successfully');
            }).catch(e => {
                console.warn('Video autoplay failed:', e);
                // If autoplay fails, try the next video
                setTimeout(() => this.switchVideo(), 1000);
            });
        }
    }
    
    /**
     * Setup form events
     */
    setupFormEvents() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }
    
    /**
     * Handle form submission
     */
    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!this.validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showNotification('Message sent successfully!', 'success');
            this.contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    /**
     * Validate form data
     */
    validateForm(data) {
        const requiredFields = ['name', 'email', 'interest', 'message'];
        
        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                this.showNotification(`Please fill in the ${field} field`, 'error');
                return false;
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return false;
        }
        
        return true;
    }
    
    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });
        
        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    /**
     * Setup accessibility events
     */
    setupAccessibilityEvents() {
        // Keyboard navigation for mobile menu
        if (this.navToggle) {
            this.navToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleMobileMenu();
                }
            });
        }
        
        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
        
        // Focus management
        this.setupFocusManagement();
    }
    
    /**
     * Setup focus management
     */
    setupFocusManagement() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: '#000',
            color: '#fff',
            padding: '8px',
            textDecoration: 'none',
            zIndex: '10000',
            transition: 'top 0.3s'
        });
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    /**
     * Handle scroll events
     */
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Navbar scroll effects
        if (this.navbar) {
            if (currentScrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
                this.navbar.classList.add('hidden');
            } else {
                this.navbar.classList.remove('hidden');
            }
        }
        
        // Back to top button
        if (this.backToTopBtn) {
            if (currentScrollY > 500) {
                this.backToTopBtn.classList.add('show');
            } else {
                this.backToTopBtn.classList.remove('show');
            }
        }
        
        // Update active navigation based on scroll position
        this.updateActiveNavOnScroll();
        
        this.lastScrollY = currentScrollY;
    }
    
    /**
     * Update active navigation based on scroll position
     */
    updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingLink) {
                    this.updateActiveNavLink(correspondingLink);
                }
            }
        });
    }
    
    /**
     * Handle window resize
     */
    handleResize() {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
        
        // Recalculate parallax elements
        this.updateParallaxElements();
    }
    
    /**
     * Handle window load
     */
    handleWindowLoad() {
        // Initialize any components that need full page load
        this.initScrollAnimations();
    }
    
    /**
     * Initialize Intersection Observer for animations
     */
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.about-card, .event-card, .team-member, .resource-category');
        animateElements.forEach(el => observer.observe(el));
    }
    
    /**
     * Initialize parallax effects
     */
    initParallaxEffects() {
        this.parallaxElements = document.querySelectorAll('.particle');
        this.updateParallaxElements();
    }
    
    /**
     * Update parallax elements
     */
    updateParallaxElements() {
        if (!this.parallaxElements) return;
        
        const scrollY = window.scrollY;
        
        this.parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    /**
     * Initialize scroll animations
     */
    initScrollAnimations() {
        // Add scroll-triggered animations
        const animatedElements = document.querySelectorAll('.section-header, .about-card, .event-card');
        
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    /**
     * Setup ripple effect for buttons
     */
    setupRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation CSS
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    /**
     * Setup typing effect for hero title
     */
    setupTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after loading
        setTimeout(typeWriter, 1000);
    }
}

// ========================================
// BACK TO TOP FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ========================================
// INITIALIZE APPLICATION
// ========================================

// Initialize the Quantum Club application
const quantumClubApp = new QuantumClubApp();

// Global function to skip loading screen
function skipLoading() {
    console.log('Loading screen skipped by user');
    if (quantumClubApp && quantumClubApp.hideLoadingScreen) {
        quantumClubApp.hideLoadingScreen();
    } else {
        // Fallback if app not initialized
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    }
}

// Global function to manually test video switching (for debugging)
function testVideoSwitch() {
    console.log('Manual video switch test');
    if (quantumClubApp && quantumClubApp.switchVideo) {
        quantumClubApp.switchVideo();
    }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumClubApp;
}