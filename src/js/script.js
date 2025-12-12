// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");

function toggleMenu(open) {
    if (!menuBtn || !menu) return;
    menuBtn.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
}

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
        toggleMenu(!isOpen);
    });

    if (menuClose) menuClose.addEventListener("click", () => toggleMenu(false));

    menu.querySelectorAll(".menu__item a").forEach(link => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    document.addEventListener("click", (e) => {
        if (menuBtn.getAttribute("aria-expanded") === "true" &&
            !menu.contains(e.target) && !menuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });
}

// Carousel drag scroll
function dragCarousel(selector) {
    document.querySelectorAll(selector).forEach(carousel => {
        const track = carousel.querySelector(`${selector}__track`);
        if (!track) return;

        let isDragging = false;
        let startPos = 0;
        let scrollStart = 0;

        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = e.pageX;
            scrollStart = track.scrollLeft;
            track.style.cursor = 'grabbing';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            track.scrollLeft = scrollStart - (e.pageX - startPos) * 2;
        });

        track.addEventListener('mouseup', () => {
            isDragging = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mouseleave', () => isDragging = false);
    });
}

// Carousel partenaires auto-scroll
function partnersCarousel() {
    const carousel = document.querySelector('.partenaires-carousel__track');
    if (!carousel) return;

    Array.from(carousel.children).forEach(slide => {
        carousel.appendChild(slide.cloneNode(true));
    });
}

// Carousel équipe avec navigation
function teamCarousel() {
    const team = document.querySelector('.team');
    if (!team) return;

    const track = team.querySelector('.team__track');
    const prev = team.querySelector('.team__button--prev');
    const next = team.querySelector('.team__button--next');
    const slides = team.querySelectorAll('.team__slide');

    if (!track || !prev || !next || !slides.length) return;

    let current = 0;

    function update() {
        const width = slides[0].offsetWidth + 22;
        track.style.transform = `translateX(-${current * width}px)`;
        prev.disabled = current === 0;
        next.disabled = current >= slides.length - 1;
    }

    prev.onclick = () => { if (current > 0) { current--; update(); } };
    next.onclick = () => { if (current < slides.length - 1) { current++; update(); } };
    window.onresize = update;

    update();
}

// Header disparait au footer
function headerHide() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    if (!header || !footer) return;

    header.style.transition = 'opacity 0.4s, transform 0.4s';

    new IntersectionObserver((entries) => {
        const visible = entries[0].isIntersecting;
        header.style.opacity = visible ? '0' : '1';
        header.style.transform = visible ? 'translateY(-100%)' : 'translateY(0)';
        header.style.pointerEvents = visible ? 'none' : 'auto';
    }, { threshold: 0.1 }).observe(footer);
}

// FAQ accordéon
function faqAccordion() {
    document.querySelectorAll('.faq__question').forEach(btn => {
        btn.onclick = () => {
            const open = btn.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.faq__question').forEach(q => {
                q.setAttribute('aria-expanded', 'false');
            });
            btn.setAttribute('aria-expanded', !open);
        };
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    partnersCarousel();
    dragCarousel('.team');
    dragCarousel('.artiste1-carousel');
    teamCarousel();
    headerHide();
    faqAccordion();
});



