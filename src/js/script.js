// Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");

if (menuBtn && menu) {
    menuBtn.onclick = function () {
        const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isOpen);
        menu.setAttribute("aria-hidden", isOpen);
        document.body.style.overflow = !isOpen ? "hidden" : "";
    };

    if (menuClose) {
        menuClose.onclick = function () {
            menuBtn.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        };
    }
}

// Carousel équipe
//
const prevBtn = document.querySelector('.team__button--prev');
const nextBtn = document.querySelector('.team__button--next');
const teamTrack = document.querySelector('.team__track');
const teamSlides = document.querySelectorAll('.team__slide');

if (prevBtn && nextBtn && teamTrack && teamSlides.length > 0) {
    let index = 0;
    teamTrack.style.transition = 'transform 0.5s ease';

    nextBtn.onclick = function () {
        if (index < teamSlides.length - 1) {
            index++;
            const cardWidth = teamSlides[0].offsetWidth + 22;
            teamTrack.style.transform = 'translateX(-' + (index * cardWidth) + 'px)';
        }
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === teamSlides.length - 1;
    };

    prevBtn.onclick = function () {
        if (index > 0) {
            index--;
            const cardWidth = teamSlides[0].offsetWidth + 22;
            teamTrack.style.transform = 'translateX(-' + (index * cardWidth) + 'px)';
        }
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === teamSlides.length - 1;
    };

    prevBtn.disabled = true;
}
