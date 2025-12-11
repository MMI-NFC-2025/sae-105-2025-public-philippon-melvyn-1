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

// Partner carousel - no auto-scroll, just static grid
// Images are displayed in a responsive grid layout