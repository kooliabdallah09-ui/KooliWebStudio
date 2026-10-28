/**
 * Kooli Web Studio
 * Language switcher (EN/FR), mobile nav, scroll reveal, contact form, footer year
 */
(function () {
  "use strict";

  var translations = {
    en: {
      nav: { about: "About", services: "Services", pricing: "Pricing", work: "Work", contact: "Contact", cta: "Free consultation" },
      hero: {
        badge: "Web studio for small businesses in Tunisia",
        title: "Affordable websites that help small businesses <em>get more clients.</em>",
        subtitle: "Want to make a website? We design fast, mobile-friendly websites for local businesses in Tunisia. Clear pricing, quick delivery, and zero technical headache.",
        cta: "Get a free consultation",
        ctaSecondary: "See services",
        fact1: "From 300 DT",
        fact2: "1–3 days after confirmation",
        fact3: "Pay once, own it"
      },
      about: {
        title: "About",
        lead: "We help small to medium businesses get online <span class=\"inl\" aria-hidden=\"true\"><img src=\"images/hero-olive-hills.jpg\" alt=\"\"></span> with clean, fast, <span class=\"muted\">and effective <em>websites.</em></span>",
        photoTag: "Local businesses",
        b1title: "Who we help",
        b1p: "Local businesses, farms, restaurants, and shops that need a professional online presence.",
        b2k: "What we solve",
        b2big: "No agency <em>prices.</em>",
        b2p: "Expensive agencies and complicated processes. You get a clear, affordable website without the hassle.",
        b3k: "Delivery",
        b3num: "1–3",
        b3p: "days from the day you confirm your project.",
        b4k: "Why clients trust us",
        b4p: "Clear communication, fixed pricing, and a simple process from idea to launch.",
        seo: "Not sure how to make a website? We work with Tunisian businesses and local clients across Tunisia. <a href=\"#services\">See what we can build for you</a> or <a href=\"#contact\">get in touch</a> to make a website for your business."
      },
      services: {
        eyebrow: "Services",
        title: "What we can <span class=\"sage\">build for you.</span>",
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
        title: "Built with reliable, modern tools",
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
      process: {
        eyebrow: "Process",
        title: "How it works, <em>in three steps.</em>",
        step1title: "Free consultation",
        step1p: "We discuss your business and what you need. No obligation.",
        step2title: "Design & build",
        step2p: "We create your site based on your needs and keep it simple and professional.",
        step3title: "Launch & support",
        step3p: "We go live when you're happy. We're here if you need small updates later."
      },
      pricing: {
        title: "Pricing",
        headline: "Pay once. <em>Own your website.</em>",
        anchor: "No agencies. No subscriptions. You pay once and own your website.",
        intro: "Packages start around 300 DT depending on your needs.",
        badge: "Popular",
        starterName: "Starter",
        starterDesc: "Simple 1–3 page website",
        starterPrice: "<small>From</small> 300 DT",
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
        timeline: "Your website is delivered in 1–3 days from the day you confirm.",
        note: "No upfront commitment — we agree on everything before starting."
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's build your <em>website.</em>",
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
        noSpam: "No spam. No obligation.",
        whisper: "[ Built in Tunisia, one website at a time ]"
      },
      footer: { role: "Web Design & Development for Small to Medium Businesses", copy: "All rights reserved." }
    },

    fr: {
      nav: { about: "À propos", services: "Services", pricing: "Tarifs", work: "Réalisations", contact: "Contact", cta: "Consultation gratuite" },
      hero: {
        badge: "Studio web pour les petites entreprises en Tunisie",
        title: "Des sites web abordables qui aident les PME <em>à avoir plus de clients.</em>",
        subtitle: "Vous voulez créer un site web ? Nous concevons des sites rapides et adaptés au mobile pour les entreprises en Tunisie. Tarifs clairs, livraison rapide.",
        cta: "Consultation gratuite",
        ctaSecondary: "Voir les services",
        fact1: "À partir de 300 DT",
        fact2: "1 à 3 jours après confirmation",
        fact3: "Payé une fois, à vous"
      },
      about: {
        title: "À propos",
        lead: "Nous aidons les PME à être en ligne <span class=\"inl\" aria-hidden=\"true\"><img src=\"images/hero-olive-hills.jpg\" alt=\"\"></span> avec des sites clairs, rapides <span class=\"muted\">et <em>efficaces.</em></span>",
        photoTag: "Commerces locaux",
        b1title: "Qui nous aidons",
        b1p: "Commerces locaux, fermes, restaurants et boutiques qui ont besoin d'une présence en ligne professionnelle.",
        b2k: "Ce que nous résolvons",
        b2big: "Pas des prix <em>d'agence.</em>",
        b2p: "Pas d'agences chères ni de process compliqués. Vous obtenez un site clair et abordable sans prise de tête.",
        b3k: "Livraison",
        b3num: "1–3",
        b3p: "jours à partir de la confirmation de votre projet.",
        b4k: "Pourquoi on nous fait confiance",
        b4p: "Communication claire, tarifs fixes et un process simple de l'idée à la mise en ligne.",
        seo: "Comment créer un site web ? Nous travaillons avec des entreprises tunisiennes en Tunisie. <a href=\"#services\">Découvrez ce que nous pouvons créer</a> ou <a href=\"#contact\">contactez-nous</a> pour créer un site web pour votre entreprise."
      },
      services: {
        eyebrow: "Services",
        title: "Ce que nous pouvons <span class=\"sage\">créer pour vous.</span>",
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
      process: {
        eyebrow: "Process",
        title: "Comment ça se passe, <em>en trois étapes.</em>",
        step1title: "Consultation gratuite",
        step1p: "On discute de votre activité et de vos besoins. Sans engagement.",
        step2title: "Conception et réalisation",
        step2p: "Nous créons votre site selon vos besoins, simple et professionnel.",
        step3title: "Mise en ligne et suivi",
        step3p: "On met en ligne quand vous êtes satisfait. Nous restons disponibles pour de petites mises à jour."
      },
      pricing: {
        title: "Tarifs",
        headline: "Payez une fois. <em>Le site est à vous.</em>",
        anchor: "Pas d'agences. Pas d'abonnements. Vous payez une fois et le site vous appartient.",
        intro: "Les forfaits commencent autour de 300 DT selon vos besoins.",
        badge: "Populaire",
        starterName: "Starter",
        starterDesc: "Site simple 1–3 pages",
        starterPrice: "<small>À partir de</small> 300 DT",
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
        timeline: "Votre site est livré en 1 à 3 jours à partir de la confirmation.",
        note: "Aucun engagement à l'avance — on se met d'accord sur tout avant de commencer."
      },
      contact: {
        eyebrow: "Contact",
        title: "Créons votre <em>site web.</em>",
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
        noSpam: "Pas de spam. Pas d'engagement.",
        whisper: "[ Fait en Tunisie, un site à la fois ]"
      },
      footer: { role: "Création de sites web pour petites et moyennes entreprises", copy: "Tous droits réservés." }
    }
  };

  function getNested(obj, key) {
    return key.split(".").reduce(function (v, k) { return v == null ? undefined : v[k]; }, obj);
  }

  function applyLanguage(lang) {
    var t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getNested(t, el.getAttribute("data-i18n"));
      if (value == null) return;
      if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = getNested(t, el.getAttribute("data-i18n-placeholder"));
      if (value != null) el.placeholder = value;
    });

    var st = document.getElementById("form-success-title");
    var sx = document.getElementById("form-success-text");
    if (st) st.textContent = t.contact.successTitle;
    if (sx) sx.textContent = t.contact.successText;

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (translations[lang]) applyLanguage(lang);
    });
  });

  var savedLang = "fr";
  try { savedLang = localStorage.getItem("lang") || "fr"; } catch (e) {}
  applyLanguage(translations[savedLang] ? savedLang : "fr");

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  // Scroll reveal
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Phone quick-contact bar: show after the hero, hide while the contact section is on screen
  var mbar = document.getElementById("mbar");
  var hero = document.querySelector(".hero");
  var contact = document.getElementById("contact");
  if (mbar && hero && contact && "IntersectionObserver" in window) {
    var heroVisible = true, contactVisible = false;
    var update = function () { mbar.classList.toggle("show", !heroVisible && !contactVisible); };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }, { threshold: 0.25 }).observe(hero);
    new IntersectionObserver(function (e) { contactVisible = e[0].isIntersecting; update(); }).observe(contact);
  }

  // Gentle parallax on the hero photo
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < 1100) heroBg.style.translate = "0 " + (y * 0.22) + "px";
    }, { passive: true });
  }

  // Contact form (posts to Google Apps Script through a hidden iframe)
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success-message");
  if (form && success) {
    form.addEventListener("submit", function () {
      setTimeout(function () {
        success.hidden = false;
        form.reset();
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 800);
    });
  }
})();
