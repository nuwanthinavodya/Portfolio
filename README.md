# Your Name — Portfolio Website

A modern, dark-purple, fully responsive portfolio website built with React 19, Vite, Tailwind CSS, and Framer Motion. Every piece of personal content lives in JSON files under `src/data/` — you never touch component code to update your info.

**Live demo:** _add your deployed URL here once published_

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Customization](#customization)
- [Deployment](#deployment)
  - [Vercel (recommended, free)](#option-a--vercel-recommended-free)
  - [Netlify (free)](#option-b--netlify-free)
  - [GitHub Pages (free)](#option-c--github-pages-free)
  - [Buying & connecting a custom domain](#buying-a-domain-later--connecting-it)
- [License](#license)

---

## Project Overview

This site includes ten sections — Home, About, Education, Technical Skills, Projects, Certifications, Experience, Extra Activities, Achievements, and Contact — wrapped in a sticky, scroll-aware navbar and a footer with quick links. It's dark-mode by default with a light-mode toggle, uses glassmorphism cards, scroll-triggered Framer Motion animations, an animated typing effect, a particle background, a scroll progress bar, a back-to-top button, and a working contact form wired to EmailJS.

## Tech Stack

| Purpose | Library |
|---|---|
| UI framework | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Animation | Framer Motion |
| Icons | React Icons |
| Contact form | EmailJS (`@emailjs/browser`) |

No Next.js — this is a static single-page app, deployable anywhere that serves static files.

## Folder Structure

```
portfolio/
├── public/                  # Static assets served as-is
│   ├── images/               # Profile, project, certificate, OG images
│   ├── favicon.svg
│   ├── resume.pdf            # Replace with your real CV
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/            # SectionHeading, Navbar widgets, cursor, etc.
│   │   ├── sections/           # Hero, About, Education, Skills, Projects...
│   │   └── ui/                 # Small reusable primitives (RevealCard)
│   ├── layouts/               # Navbar, Footer, MainLayout
│   ├── pages/                  # Home, NotFound
│   ├── data/                   # ← EDIT THESE JSON FILES TO UPDATE YOUR SITE
│   │   ├── profile.json
│   │   ├── education.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── certifications.json
│   │   ├── experience.json
│   │   ├── activities.json
│   │   ├── achievements.json
│   │   ├── socials.json
│   │   └── navLinks.js
│   ├── hooks/                  # useTypingEffect, useCountUp, useTheme, etc.
│   ├── utils/                  # scrollTo helper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Theme tokens & global styles
├── tailwind.config.js          # Color palette lives here
├── vercel.json                 # SPA rewrite rule for Vercel
├── .env.example                 # EmailJS key placeholders
└── package.json
```

## Installation

Requires [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Clone or unzip the project, then move into it
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The page hot-reloads as you edit.

To build for production:

```bash
npm run build      # outputs static files to /dist
npm run preview    # serve the production build locally to double-check it
```

## Customization

**You should only need to edit files inside `src/data/`** to make this your own:

| File | Controls |
|---|---|
| `profile.json` | Name, titles, bio, photo, resume link, languages, interests, contact info, map |
| `education.json` | Education timeline entries |
| `skills.json` | Skill categories and proficiency percentages |
| `projects.json` | Project cards, tech tags, GitHub/demo links, features |
| `certifications.json` | Certificate cards |
| `experience.json` | Work experience timeline |
| `activities.json` | Extra activities (leadership, IEEE, hackathons, etc.) |
| `achievements.json` | Animated stat counters + awards list |
| `socials.json` | Social links shown as icons in the navbar/hero/footer |
| `navLinks.js` | Section order/labels in the navbar and footer |

**Images & files:** replace the SVG placeholders in `public/images/` with your own photos (`.jpg`/`.png` work fine — just update the path in the matching JSON file), and replace `public/resume.pdf` with your real CV — the "Download CV" button already points at `/resume.pdf`.

**Colors:** the entire dark-purple palette is defined once in `tailwind.config.js` under `theme.extend.colors` (`ink`, `violet`, `glow`, `mist`). Change the hex values there to re-theme the whole site.

**Contact form (EmailJS):**
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an Email Service and a Template.
3. Open `src/components/sections/Contact.jsx` and replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your own values (or wire in `.env` using `import.meta.env`, see `.env.example`).

## Deployment

Below are complete instructions for three free hosting options, starting from a brand-new project.

### First: push the project to GitHub

```bash
# from inside the portfolio/ folder
git init
git add .
git commit -m "Initial commit — portfolio site"

# create a new empty repo on github.com first, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(On github.com: click **New repository**, name it, leave it empty — no README/license — then copy the URL it gives you for the `git remote add` command above.)

---

### Option A — Vercel (recommended, free)

1. Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub account.
2. Click **Add New → Project**.
3. Select your `portfolio` repository and click **Import**.
4. Vercel auto-detects Vite — leave the defaults:
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
5. Click **Deploy**. In under a minute you'll get a live URL like `your-project.vercel.app`.
6. Every future `git push` to `main` auto-deploys a new version.

This project already includes `vercel.json`, which adds the SPA rewrite rule React Router needs so refreshing a non-home URL doesn't 404.

### Option B — Netlify (free)

1. Go to [netlify.com](https://netlify.com) and sign up/log in with GitHub.
2. Click **Add new site → Import an existing project**.
3. Choose GitHub, then select your repository.
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. Netlify gives you a URL like `your-project.netlify.app`.

This project includes `public/_redirects` (`/* /index.html 200`) so client-side routing works correctly on Netlify too.

### Option C — GitHub Pages (free)

GitHub Pages serves static files directly from your repo.

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set the `base` option to your repo name so assets resolve correctly:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO/',
   })
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. On GitHub: go to **Settings → Pages**, and under **Build and deployment → Source**, choose the `gh-pages` branch (created automatically by the command above). Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO`.

> Note: GitHub Pages doesn't support SPA rewrites as easily as Vercel/Netlify, so deep-linking to a route other than `/` can 404 on refresh unless you add a 404→index.html redirect trick. For a single-page portfolio like this one (everything lives on `/` via anchor scrolling), that's rarely an issue in practice.

---

### Buying a domain (later) & connecting it

You don't need a custom domain to publish for free — the `vercel.app` / `netlify.app` / `github.io` URL works immediately. When you're ready for a custom domain:

1. **Buy a domain** from a registrar such as [Namecheap](https://www.namecheap.com), [Google Domains/Squarespace](https://domains.squarespace.com), [Porkbun](https://porkbun.com), or [GoDaddy](https://www.godaddy.com). Prices are typically $8–15/year for a `.com`.
2. **Connect it to Vercel:**
   - In your Vercel project, go to **Settings → Domains → Add**.
   - Enter your domain (e.g. `yourname.com`).
   - Vercel shows you DNS records to add (usually an `A` record pointing to `76.76.21.21` and/or a `CNAME` for `www`).
   - Go to your domain registrar's DNS settings and add those records.
   - Wait for DNS propagation (a few minutes to a few hours) — Vercel auto-issues an SSL certificate once it's verified.
3. **Connect it to Netlify:** same idea — **Site settings → Domain management → Add a domain**, then update your registrar's DNS (or use Netlify DNS by changing your domain's nameservers).
4. **Connect it to GitHub Pages:** **Settings → Pages → Custom domain**, enter your domain, then add the `A`/`CNAME` records GitHub shows you at your registrar.

## License

This project is open for personal use — customize it freely for your own portfolio. If you'd like to add an explicit license, MIT is a common choice:

```
MIT License

Copyright (c) 2026 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```
