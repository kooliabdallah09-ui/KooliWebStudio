# Abdallah Kooli – Personal Website

A one-page personal website for a student web developer offering affordable websites to small businesses.

## Contents

- **index.html** – Semantic HTML with all sections (hero, about, services, why me, portfolio, process, contact, footer)
- **css/style.css** – Clean, minimal, mobile-first CSS with variables and comments
- **js/main.js** – Mobile menu toggle, footer year, and contact form demo handler

## How to view

1. Open `index.html` in a browser, or  
2. Serve the folder with any local server (e.g. `npx serve .` or your editor’s “Live Server”).

## Contact form

The form currently shows a thank-you message and resets. To receive real messages you can:

- Use [Formspree](https://formspree.io) (add their form action to the `<form>` tag)
- Use [Netlify Forms](https://docs.netlify.com/forms/setup/) if you deploy on Netlify
- Connect it to your own backend and point the form `action` and `method` there

## Customization

- **Colors**: Edit the `:root` variables in `css/style.css` (e.g. `--color-accent`, `--color-bg`)
- **Portfolio**: Replace the placeholder project blocks with real project titles, links, and images
- **Copy**: Update any text in `index.html` to match your tone and details

## Design

- Light background, minimal layout
- Responsive (mobile, tablet, desktop)
- No heavy animations
- Clear typography (DM Sans, DM Serif Display from Google Fonts)
