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
//https://sae105.melvyn-philippon.fr/apropos

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

// FAQ Accordion
//https://sae105.melvyn-philippon.fr/infospratique
const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach(function (question) {
    question.onclick = function () {
        const isOpen = question.getAttribute('aria-expanded') === 'true';

        faqQuestions.forEach(function (q) {
            q.setAttribute('aria-expanded', 'false');
        });

        question.setAttribute('aria-expanded', !isOpen);
    };
});

// Carousel défilé automatique partenaires
//https://sae105.melvyn-philippon.fr/
const partnersTrack = document.querySelector('.partenaires-carousel__track');

if (partnersTrack) {
    const slides = Array.from(partnersTrack.children);
    slides.forEach(function (slide) {
        const clone = slide.cloneNode(true);
        partnersTrack.appendChild(clone);
    });
}

// Filtres programme par jour
//https://sae105.melvyn-philippon.fr/programme
const filterButtons = document.querySelectorAll('.program-days__button');
const programSections = document.querySelectorAll('.program__day, .program__day--background');

filterButtons.forEach(function (button) {
    button.onclick = function (e) {
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);

        programSections.forEach(function (section) {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    };
});

// Header disparait au footer
//https://sae105.melvyn-philippon.fr/
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

if (header && footer) {
    header.style.transition = 'opacity 0.3s, transform 0.3s';

    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
    }, { threshold: 0.1 });

    observer.observe(footer);
} 