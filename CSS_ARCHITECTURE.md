# Architecture CSS – Guide de découpage

Ce document récapitule **toute l'architecture CSS du site**, organisée par dossier et bloc BEM.

---

## 📂 Structure des dossiers

```
src/css/
├── vendors/
│   └── normalize.css          # Reset CSS
├── utils/
│   └── variables.css          # Couleurs, fonts, espacements (design tokens)
├── base/
│   ├── main.css               # Styles globaux (body, html, fonts)
│   └── media.css              # Reset & styles images/vidéos
├── layout/
│   ├── header.css             # Header, nav, menu
│   ├── footer.css             # Footer et ses éléments
│   └── section.css            # Sections conteneurs (intro, contenu, hero, values, redirection, pagination)
└── components/
    ├── menu.css               # Navigation menu
    ├── menu-btn.css           # Bouton hamburger du menu mobile
    ├── hero.css               # Hero sections (background, titre, subtitle, btn)
    ├── artists.css            # Bloc artistes (liste, conteneur)
    ├── artist-card.css        # Card artiste individuelle
    ├── intro-template.css     # Bloc intro d'artiste/scène avec socials
    ├── redirection-card.css   # Card redirection (programme, scènes, infos, about)
    ├── scene.css              # Bloc scènes et scene-card
    ├── team-card.css          # Card membre d'équipe (appropos.html)
    ├── value.css              # Card valeur (accessibilité, convivialité, esprit local)
    ├── carousel.css           # Carousels (artiste1, partenaires, team, scene1)
    ├── contact.css            # Formulaire contact + infos contact
    ├── infos-pratiques.css    # Transport, tarifs, localisation
    ├── faq.css                # FAQ (questions/réponses collapsibles)
    └── program.css            # Programme (cards, search, days filter, download)
```

---

## 🎨 LAYOUT – Conteneurs structurels

### `layout/header.css`
```css
.header            /* header principal */
.header__link      /* lien logo */
.header__menu      /* nav menu */
.header__menu-btn  /* bouton menu mobile */
.header__logo      /* logo dans nav */
.header__logo-image /* image du logo */
```

### `layout/footer.css`
```css
.footer            /* footer principal */
.footer__content   /* conteneur contenu footer */
.footer__logo      /* bloc logo footer */
.footer__logo-link 
.footer__logo-img
.footer__newsletter /* formulaire newsletter */
.footer__newsletter-label
.footer__newsletter-field
.footer__newsletter-input
.footer__newsletter-btn
.footer__newsletter-arrow
.footer__menu      /* menu footer */
.footer__menu-title
.footer__menu-list
.footer__menu-item
.footer__menu-link
.footer__socials   /* bloc réseaux sociaux */
.footer__socials-title
.footer__socials-list
.footer__social-link
.footer__legal     /* liens légaux */
.footer__legal-link
.footer__separator /* ligne HR */
.footer__festival  /* texte "JUMELAGE Festival 2026" */
.footer__copy      /* copyright */
```

### `layout/section.css`
```css
/* === intro === */
.intro             /* section intro (texte + titre optional) */
.intro__text       /* paragraphe intro */
.intro__title      /* titre dans intro */
.intro__image      /* image optionnelle */

/* === contenu === */
.contenu           /* section contenu (artiste1, scene1) */
.contenu__text     /* texte */
.contenu__image    /* image */

/* === hero === */
.hero              /* hero section (image + titre) */
.hero__background  /* image bg du hero */
.hero__background--small
.hero__title       /* titre grand */
.hero__title--bottom
.hero__subtitle    /* dates, sous-titre */
.hero__cta         /* call-to-action */
.hero__btn         /* bouton hero */

/* === values === */
.values            /* section valeurs */
.values__grid      /* grille des value cards */

/* === redirection === */
.redirection       /* section redirection vers programme/scènes/infos/about */
.redirection__grid /* grille des cards */

/* === artiste1-scene === */
.artiste1-scene    /* section scène dans artiste1.html */

/* === artists-background === */
.artists-background /* section artistes dans scene1.html avec background */
.artiste-background__large

/* === pagination === */
.pagination        /* pagination artiste.html */
.pagination__content
.pagination__info
.pagination__current
.pagination__total
.pagination__next
.pagination__arrow
```

---

## 🧩 COMPONENTS – Blocs réutilisables

### Navigation & Menus

#### `components/menu.css`
```css
.menu              /* nav menu wrapper */
.menu__list        /* ul de items */
.menu__item        /* li items */
.menu__link        /* liens du menu */
```

#### `components/menu-btn.css`
```css
.menu-btn          /* bouton hamburger */
.menu-btn__bar     /* barre (ligne) */
.menu-btn__bar--light
.menu-btn__bar--top
.menu-btn__bar--bottom
```

---

### Hero & Sections principales

#### `components/hero.css`
```css
.hero              /* peut être étendu par section.css */
.hero__background
.hero__title
.hero__subtitle
.hero__cta
```

---

### Artistes & Artists

#### `components/artists.css`
```css
.artists           /* bloc conteneur artistes */
.artists__list     /* grille/liste des cards */
.artists__item     /* item (si utilisé) */
.artists__more     /* zone "Et bien d'autres" */
.artists__more-text
.artists__more-btn
```

#### `components/artist-card.css`
```css
.artist-card       /* card artiste */
.artist-card__img
.artist-card__content
.artist-card__name
.artist-card__date
.artist-card__btn  /* "EN SAVOIR PLUS" */
.artist-card__arrow
```

---

### Intro & Socials

#### `components/intro-template.css`
```css
.intro-template    /* section intro artiste/scène */
.intro-template__title
.intro-template__content
.intro-template__socials
.intro-template__social-item
.intro-template__social-link
.intro-template__social-link--x
.intro-template__social-link--facebook
.intro-template__social-link--instagram
.intro-template__text
```

---

### Redirection Cards

#### `components/redirection-card.css`
```css
.redirection-card  /* card redirection */
.redirection-card__img
.redirection-card__content
.redirection-card__title
.redirection-card__text
.redirection-card__btn
.redirection-card__arrow
.redirection-card--scenes    /* variante pour scènes */
.redirection-card--program   /* variante pour programme */
.redirection-card--infos     /* variante pour infos pratiques */
.redirection-card--about     /* variante pour about */
```

---

### Scènes

#### `components/scene.css`
```css
.scene             /* bloc scènes */
.scene__grid       /* grille des scènes */
.scene__list       /* listé alternative */
.scene-card        /* card scène */
.scene-card__img
.scene-card__content
.scene-card__title
.scene-card__btn
.scene-card__arrow
.scene-card__meta
```

---

### Team & Values

#### `components/team-card.css`
```css
.team-card         /* card membre équipe */
.team-card__image
.team-card__body
.team-card__name
.team-card__description
.team-card__socials
.team-card__social-item
.team-card__social-link
.team-card__social-link--x
.team-card__social-link--facebook
.team-card__social-link--instagram
```

#### `components/value.css`
```css
.value             /* card valeur */
.value__title      /* Accessibilité, Convivialité, Esprit local */
.value__text
```

---

### Carousels

#### `components/carousel.css`
```css
/* Generic carousel */
.carousel
.carousel__track
.carousel__slide
.carousel__img
.carousel__arrow
.carousel__title

/* === artiste1-carousel === */
.artiste1-carousel
.artiste1-carousel__track
.artiste1-carousel__slide
.artiste1-carousel__img

/* === partenaires-carousel === */
.partenaires-carousel
.partenaires-carousel__track
.partenaires-carousel__slide
.partenaires-carousel__img
.partenaires-carousel__title

/* === team__carousel === */
.team__carousel
.team__track
.team__slide

/* === scene1-carousel === */
.scene1-carousel
.scene1-carousel__grid
.scene1-carousel__card
.scene1-carousel__img
.scene1-carousel__content
.scene1-carousel__btn
.scene1-carousel__arrow
.scene1-carousel__title
```

---

### Contact

#### `components/contact.css`
```css
/* === contact-form === */
.contact-form
.contact-form__field
.contact-form__field--textarea
.contact-form__label
.contact-form__optional
.contact-form__input
.contact-form__textarea
.contact-form__actions
.contact-form__submit

/* === contact-info === */
.contact-info
.contact-info__item
.contact-info__icon
.contact-info__content
.contact-info__title
.contact-info__text
.contact-info__link
```

---

### Infos Pratiques

#### `components/infos-pratiques.css`
```css
/* === transport-card === */
.transport-card
.transport__media
.transport__image
.transport__description

/* === tarifs-card === */
.tarifs__card
.tarifs__card-title
.tarifs__card-subtitle
.tarifs__price
.tarifs__amount
.tarifs__currency
.tarifs__free
.tarifs__list
.tarifs__info--background

/* === localisation === */
.localisation
.localisation__info
.localisation__title
.localisation__text
.localisation__image
```

---

### FAQ

#### `components/faq.css`
```css
.faq__list
.faq__item
.faq__question
.faq__question-text
.faq__icon
.faq__answer
```

---

### Programme

#### `components/program.css`
```css
/* === program-card === */
.program-card
.program-card__artist
.program-card__name
.program-card__genre
.program-card__scene
.program-card__time

/* === program-search === */
.program-search
.program-search__label
.program-search__input

/* === program-days === */
.program-days
.program-days__button
.program-days__button--active
.program-days__add

/* === program-download === */
.program-download
.program-download__content
.program-download__text
.program-download__link
```

---

---

## ✅ Checklist de peuplement CSS

Pour chaque bloc BEM créé, vous devez ajouter des styles pour :

1. **Layout & dimensions** : largeurs, hauteurs, margins, paddings
2. **Flexbox/Grid** : display, flex-direction, justify-content, align-items, gap, grid-template-columns
3. **Typographie** : font-size, font-weight, color, line-height
4. **Visuels** : background, border, box-shadow, border-radius
5. **Interactions** : hover, active, focus, transitions
6. **Responsive** : media queries pour mobile/tablet/desktop
7. **Variantes** : règles pour les modificateurs (`--large`, `--active`, etc.)

---

## 📌 Ordre d'importation recommandé

```
1. vendors/      (resets)
2. utils/        (variables)
3. base/         (styles globaux)
4. layout/       (structure page)
5. components/   (éléments réutilisables)
```

Cet ordre assure que :
- Les variables sont disponibles partout
- Les resets s'appliquent d'abord
- Les layouts construisent la structure
- Les components affinent les détails

---

## 💡 Prochaines étapes

1. **Peupler chaque fichier .css** avec les styles visuels réels
2. **Tester** sur chaque page pour s'assurer que les selecteurs BEM matchent l'HTML
3. **Responsive design** : ajouter les media queries dans section.css et les components
4. **Accessibilité** : focus states, contrast, animations respectueuses
5. **Optimisation** : vérifier qu'il n'y a pas de CSS dupliqué ou inutilisé

---

Bon courage pour le peuplement CSS ! 🎨
