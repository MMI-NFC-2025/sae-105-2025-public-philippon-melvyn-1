const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const closeBtn = document.querySelector(".menu__close");
const page = document.body;

// Helper function to close menu
function closeMenu() {
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (nav) nav.setAttribute("aria-hidden", "true");
    page.style.overflow = "";
}

// Menu toggle: manages aria-expanded and aria-hidden attributes
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const newState = !isOpen;

        // Update toggle button state
        toggle.setAttribute("aria-expanded", newState);

        // Update nav visibility via aria-hidden (CSS hooks on this)
        nav.setAttribute("aria-hidden", !newState);

        // Prevent body scroll when menu is open
        page.style.overflow = newState ? "hidden" : "";
    });

    // Close menu with the close button (X)
    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    // Close menu when a link is clicked
    const menuLinks = nav.querySelectorAll(".menu__item a");
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside (on the dark background)
    document.addEventListener("click", (e) => {
        const isMenuOpen = toggle.getAttribute("aria-expanded") === "true";
        const isClickInsideMenu = nav.contains(e.target);
        const isClickOnButton = toggle.contains(e.target);
        const isClickOnClose = closeBtn && closeBtn.contains(e.target);

        if (isMenuOpen && !isClickInsideMenu && !isClickOnButton && !isClickOnClose) {
            closeMenu();
        }
    });
}

// ===================================
// CAROUSELS - Horizontal scroll with smooth snap
// ===================================

/**
 * Initialize horizontal scroll carousel
 * @param {string} carouselSelector - CSS selector for the carousel container
 */
function initCarousel(carouselSelector) {
    const carousels = document.querySelectorAll(carouselSelector);

    carousels.forEach(carousel => {
        const track = carousel.querySelector(`${carouselSelector}__track`);
        if (!track) return;

        // Enable smooth scrolling
        track.style.scrollBehavior = 'smooth';

        // Optional: Add touch/drag support for better UX
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.style.cursor = 'grabbing';
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
    // Partners carousel
    initCarousel('.partenaires-carousel');

    // Team carousel
    initCarousel('.team');

    // Artist gallery carousel
    initCarousel('.artiste1-carousel');

    // Team carousel navigation buttons
    initTeamCarouselNavigation();
});

// ===================================
// TEAM CAROUSEL NAVIGATION
// ===================================

function initTeamCarouselNavigation() {
    const teamSection = document.querySelector('.team');
    if (!teamSection) return;

    const track = teamSection.querySelector('.team__track');
    const prevBtn = teamSection.querySelector('.team__button--prev');
    const nextBtn = teamSection.querySelector('.team__button--next');
    const slides = teamSection.querySelectorAll('.team__slide');

    if (!track || !prevBtn || !nextBtn || slides.length === 0) return;

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        const gap = 22; // 1.375rem = 22px gap between slides
        const scrollPosition = currentIndex * (slideWidth + gap);

        track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Disable/enable buttons based on position
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= slides.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize button states
    updateCarousel();
}


// ===================================
// FAQ ACCORDION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current FAQ item
            question.setAttribute('aria-expanded', !isExpanded);
        });
    });
});

