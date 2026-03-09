/**
 * Kooli Web Studio
 * Mobile nav, footer year, contact form, language switcher (EN/FR)
 */

(function () {
  "use strict";

  // ----- Translations (EN / FR) -----
  var translations = {
    en: {
      nav: { about: "About", services: "Services", pricing: "Pricing", work: "Work", contact: "Contact" },
      hero: {
        title: "Affordable Websites That Help Small to Medium Businesses Get More Clients",
        subtitle: "Want to make a website? We design fast, mobile-friendly websites for local businesses in Tunisia. Clear pricing, quick delivery, and zero technical headache.",
        cta: "Get a Free Website Consultation",
        ctaSecondary: "See My Work"
      },
      about: {
        title: "About",
        lead: "We help small to medium businesses get online with clean, fast, and effective websites.",
        bullet1: "<strong>Who we help:</strong> Local businesses, farms, restaurants, and shops that need a professional online presence.",
        bullet2: "<strong>What we solve:</strong> Expensive agencies and complicated processes. You get a clear, affordable website without the hassle.",
        bullet3: "<strong>Why clients trust us:</strong> Clear communication, fixed pricing, and a simple process from idea to launch.",
        trust: "We've worked with local businesses and farms to help them get online quickly, professionally, and affordably.",
        seo: "Not sure how to make a website? We work with Tunisian businesses and local clients across Tunisia. <a href=\"#services\">See what we can build for you</a> or <a href=\"#contact\">get in touch</a> to make a website for your business."
      },
      services: {
        title: "What We Can Build For You",
        forWho: "Perfect for restaurants, farms, local shops, schools, and small to medium businesses in Tunisia.",
        introSeo: "How to make a website that works: We build fast, mobile-friendly sites for Tunisia. <a href=\"#contact\">Request a free consultation</a> to make a website for your business.",
        s1title: "Small to medium business websites",
        s1p: "Simple sites with 1–5 pages: home, about, services, contact, and more if you need them.",
        s2title: "Websites that look perfect on phones",
        s2p: "Where most of your customers are. Your site will look and work great on mobile, tablet, and desktop.",
        s3title: "Fast-loading websites",
        s3p: "Important for Google and users. We build sites that load quickly so visitors don't leave.",
        s4title: "Contact forms that capture leads",
        s4p: "Visitors can message you directly from the site — no missed opportunities.",
        s5title: "Basic SEO so Google can find you",
        s5p: "Simple setup so search engines can find your business when people search locally.",
        s6title: "Updates and improvements",
        s6p: "Need changes or new sections later? We can help with updates."
      },
      tech: {
        title: "Built With Reliable, Modern Tools",
        intro: "We use proven technologies to make websites fast, secure, and easy to maintain.",
        item1title: "HTML, CSS & JavaScript",
        item1desc: "Clean, fast websites that load quickly and work everywhere.",
        item2title: "Shopify (if needed)",
        item2desc: "Simple online stores that are easy to manage.",
        item3title: "Figma",
        item3desc: "Clear design previews before building — no surprises.",
        item4title: "Git",
        item4desc: "Safe updates and easy future changes."
      },
      pricing: {
        title: "Pricing",
        anchor: "No agencies. No subscriptions. You pay once and own your website.",
        intro: "Packages start around 300 DT depending on your needs.",
        badge: "Popular",
        starterName: "Starter",
        starterDesc: "Simple 1–3 page website",
        starterPrice: "From 300 DT",
        starterF1: "Home, about, contact (or similar)",
        starterF2: "Mobile-friendly design",
        starterF3: "Contact form",
        starterF4: "Basic SEO",
        starterF5: "Modern design",
        starterCta: "Get started",
        growthName: "Growth",
        growthDesc: "4–5 pages + extras",
        growthPrice: "Custom quote",
        growthF1: "Everything in Starter",
        growthF2: "More pages (services, gallery, etc.)",
        growthF3: "Extra forms or sections",
        growthF4: "Revisions included",
        growthF5: "Backend work included",
        growthCta: "Get a quote",
        timeline: "Most projects are completed in 7–14 days.",
        note: "No upfront commitment — we agree on everything before starting."
      },
      portfolio: {
        title: "Work",
        intro: "Here are a few websites we are building for Tunisian businesses.",
        view1: "View farm website project",
        view2: "View olive oil producer website project",
        p1desc: "Built a clean website to help a local farm present its products professionally. Budget-friendly project for a local business.",
        p2desc: "Professional website for an olive oil producer. Responsive design, contact features, and clear presentation of products. Budget-friendly project for a local business."
      },
      process: {
        title: "How It Works",
        step1title: "Free consultation",
        step1p: "We discuss your business and what you need. No obligation.",
        step2title: "Design & build",
        step2p: "We create your site based on your needs and keep it simple and professional.",
        step3title: "Launch & support",
        step3p: "We go live when you're happy. We're here if you need small updates later."
      },
      contact: {
        title: "Get in Touch",
        intro: "Want to make a website? Tell us about your business and we usually reply within 24 hours.",
        whatsapp: "Contact on WhatsApp",
        successTitle: "Thank you!",
        successText: "Your message has been sent. We will get back to you soon.",
        nameLabel: "Your name",
        namePlaceholder: "e.g. Joe Alonso",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Phone number",
        phonePlaceholder: "e.g. +216 20 123 456",
        messageLabel: "Your message",
        messagePlaceholder: "Tell us about your business and what you need...",
        submit: "Request a free consultation",
        noSpam: "No spam. No obligation."
      },
      footer: { role: "Web Design & Development for Small to Medium Businesses", copy: "All rights reserved." }
    },
    fr: {
      nav: { about: "À propos", services: "Services", pricing: "Tarifs", work: "Réalisations", contact: "Contact" },
      hero: {
        title: "Des sites web abordables qui aident les petites et moyennes entreprises à avoir plus de clients",
        subtitle: "Vous voulez créer un site web ? Nous concevons des sites rapides et adaptés au mobile pour les entreprises en Tunisie. Tarifs clairs, livraison rapide.",
        cta: "Consultation gratuite",
        ctaSecondary: "Voir mes réalisations"
      },
      about: {
        title: "À propos",
        lead: "Nous aidons les petites et moyennes entreprises à être en ligne avec des sites clairs, rapides et efficaces.",
        bullet1: "<strong>Qui nous ciblons :</strong> Commerces locaux, fermes, restaurants et boutiques qui ont besoin d'une présence en ligne professionnelle.",
        bullet2: "<strong>Pourquoi nous ? : </strong>Pas d'agences chères ni de process compliqués. Vous obtenez un site clair et abordable sans prise de tête.",
        bullet3: "<strong>Pourquoi on nous fait confiance :</strong> Communication claire, tarifs fixes et un process simple de l'idée à la mise en ligne.",
        trust: "Nous avons travaillé avec des commerces locaux et des fermes pour les mettre en ligne rapidement, de façon professionnelle et à prix raisonnable.",
        seo: "Comment créer un site web ? Nous travaillons avec des entreprises tunisiennes en Tunisie. <a href=\"#services\">Découvrez ce que nous pouvons créer</a> ou <a href=\"#contact\">contactez-nous</a> pour créer un site web pour votre entreprise."
      },
      services: {
        title: "Ce que nous pouvons créer pour vous",
        forWho: "Idéal pour les restaurants, fermes, commerces locaux, écoles et petites et moyennes entreprises en Tunisie.",
        introSeo: "Comment créer un site web qui marche : nous réalisons des sites rapides et adaptés mobile en Tunisie. <a href=\"#contact\">Demander une consultation gratuite</a> pour créer un site web pour votre entreprise.",
        s1title: "Sites pour petites et moyennes entreprises",
        s1p: "Sites simples de 1 à 5 pages : accueil, à propos, services, contact, et plus si besoin.",
        s2title: "Sites parfaits sur mobile",
        s2p: "Là où se trouve la plupart de vos clients. Votre site sera beau et fonctionnel sur mobile, tablette et ordinateur.",
        s3title: "Sites rapides à charger",
        s3p: "Important pour Google et les utilisateurs. Nous construisons des sites qui chargent vite pour ne pas perdre de visiteurs.",
        s4title: "Formulaires de contact qui captent les leads",
        s4p: "Les visiteurs peuvent vous contacter directement depuis le site — pas d'opportunités manquées.",
        s5title: "SEO de base pour que Google vous trouve",
        s5p: "Mise en place simple pour que les moteurs de recherche trouvent votre activité en recherche locale.",
        s6title: "Mises à jour et évolutions",
        s6p: "Besoin de changements ou de nouvelles sections plus tard ? Nous pouvons faire les mises à jour."
      },
      tech: {
        title: "Construit avec des outils modernes et fiables",
        intro: "Nous utilisons des technologies éprouvées pour des sites rapides, sécurisés et faciles à maintenir.",
        item1title: "HTML, CSS et JavaScript",
        item1desc: "Des sites propres et rapides qui chargent vite et fonctionnent partout.",
        item2title: "Shopify (si besoin)",
        item2desc: "Des boutiques en ligne simples et faciles à gérer.",
        item3title: "Figma",
        item3desc: "Des maquettes claires avant la réalisation — pas de mauvaises surprises.",
        item4title: "Git",
        item4desc: "Mises à jour sûres et évolutions faciles plus tard."
      },
      pricing: {
        title: "Tarifs",
        anchor: "Pas d'agences. Pas d'abonnements. Vous payez une fois et le site vous appartient.",
        intro: "Les forfaits commencent autour de 300 DT selon vos besoins.",
        badge: "Populaire",
        starterName: "Starter",
        starterDesc: "Site simple 1–3 pages",
        starterPrice: "À partir de 300 DT",
        starterF1: "Accueil, à propos, contact (ou similaire)",
        starterF2: "Design adapté au mobile",
        starterF3: "Formulaire de contact",
        starterF4: "Référencement de base",
        starterF5: "Design moderne",
        starterCta: "Commencer",
        growthName: "Growth",
        growthDesc: "4–5 pages et plus",
        growthPrice: "Devis sur mesure",
        growthF1: "Tout du Starter",
        growthF2: "Plus de pages (services, galerie, etc.)",
        growthF3: "Formulaires ou sections en plus",
        growthF4: "Révisions incluses",
        growthF5: "Travail backend inclus",
        growthCta: "Demander un devis",
        timeline: "La plupart des projets sont livrés en 7 à 14 jours.",
        note: "Aucun engagement à l'avance — on se met d'accord sur tout avant de commencer."
      },
      portfolio: {
        title: "Réalisations",
        intro: "Quelques sites que nous sommes entrain de réaliser pour des entreprises tunisiennes.",
        view1: "Voir le projet site ferme",
        view2: "Voir le projet site producteur huile d'olive",
        p1desc: "Site clair pour une ferme locale afin de présenter ses produits professionnellement. Projet à prix abordable pour un commerce local.",
        p2desc: "Site professionnel pour un producteur d'huile d'olive. Design responsive, formulaire de contact et présentation claire des produits. Projet à prix abordable pour un commerce local."
      },
      process: {
        title: "Comment ça se passe",
        step1title: "Consultation gratuite",
        step1p: "On discute de votre activité et de vos besoins. Sans engagement.",
        step2title: "Conception et réalisation",
        step2p: "Nous créons votre site selon vos besoins, simple et professionnel.",
        step3title: "Mise en ligne et suivi",
        step3p: "On met en ligne quand vous êtes satisfait. Nous restons disponibles pour de petites mises à jour."
      },
      contact: {
        title: "Contact",
        intro: "Vous voulez créer un site web ? Parlez-nous de votre activité, nous répondons en général sous 24 h.",
        whatsapp: "Contacter sur WhatsApp",
        successTitle: "Merci !",
        successText: "Votre message a bien été envoyé. Nous vous répondrons bientôt.",
        nameLabel: "Votre nom",
        namePlaceholder: "ex. Jean Dupont",
        emailLabel: "E-mail",
        emailPlaceholder: "vous@exemple.com",
        phoneLabel: "Téléphone",
        phonePlaceholder: "ex. +216 20 123 456",
        messageLabel: "Votre message",
        messagePlaceholder: "Parlez-nous de votre activité et de vos besoins...",
        submit: "Demander une consultation gratuite",
        noSpam: "Pas de spam. Pas d'engagement."
      },
      footer: { role: "Création de sites web pour petites et moyennes entreprises", copy: "Tous droits réservés." }
    }
  };

  function getNested(obj, key) {
    var parts = key.split(".");
    var v = obj;
    for (var i = 0; i < parts.length; i++) {
      v = v[parts[i]];
      if (v === undefined) return undefined;
    }
    return v;
  }

  function applyLanguage(lang) {
    var t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = getNested(t, key);
      if (value != null) {
        if (el.getAttribute("data-i18n-html") === "true") {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var value = getNested(t, key);
      if (value != null) el.placeholder = value;
    });

    var successTitle = document.getElementById("form-success-title");
    var successText = document.getElementById("form-success-text");
    if (successTitle && t.contact) successTitle.textContent = t.contact.successTitle;
    if (successText && t.contact) successText.textContent = t.contact.successText;

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var langButtons = document.querySelectorAll(".lang-option");
  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang && translations[lang]) applyLanguage(lang);
    });
  });

  var savedLang = "en";
  try { savedLang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (translations[savedLang]) applyLanguage(savedLang);

  // ----- Footer: current year -----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Background videos: slow down playback -----
  var slowRate = 0.6;
  document.querySelectorAll(".hero-video, .about-video, .footer-video, .tech-video").forEach(function (video) {
    video.playbackRate = slowRate;
  });

  // ----- Mobile nav toggle -----
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var navShell = document.querySelector(".nav-shell");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("open");
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", !isOpen);
      toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    });
    var links = nav.querySelectorAll(".nav-links a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // ----- Sticky nav: add shell class when scrolling -----
  if (navShell) {
    var lastScrollY = window.scrollY || window.pageYOffset || 0;
    var updateNavShell = function () {
      var currentY = window.scrollY || window.pageYOffset || 0;
      var shouldBeScrolled = currentY > 32;
      navShell.classList.toggle("nav-shell--scrolled", shouldBeScrolled);
      lastScrollY = currentY;
    };

    updateNavShell();
    window.addEventListener("scroll", updateNavShell, { passive: true });
  }

  // ----- Contact form -----
  var contactForm = document.getElementById("contact-form");
  var formSuccess = document.getElementById("form-success-message");
  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function () {
      setTimeout(function () {
        formSuccess.hidden = false;
        contactForm.reset();
        formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 800);
    });
  }
})();
