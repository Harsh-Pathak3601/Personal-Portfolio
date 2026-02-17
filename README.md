# Harsh Pathak — Interactive Developer Portfolio

[![Live Demo](https://img.shields.io/badge/live-Vercel-000000?logo=vercel)](https://harsh-pathak-portfolio.vercel.app) [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A fast, accessible, and interactive developer portfolio built with `Next.js` (App Router), `React` 19 and `TypeScript`. It highlights modern UI patterns, small 3D scenes and a serverless contact flow via EmailJS.

---
## 🎯 Quick links
- Live: https://harsh-pathak-portfolio.vercel.app
- Source: `./` (this repository)
- Contact: `pathakharsh3601@gmail.com`

---

## ✨ Why this project
- Minimal, high-performance portfolio focused on UX and accessibility
- Content-driven: change text/images via `data/index.ts` — no code changes for content updates
- Progressive enhancement: 3D / animations are used sparingly and degrade gracefully

---

## � What `app/page.tsx` renders (single Home route)

This project uses one App Router route: `app/page.tsx` (the Home page). The Home page composes multiple sections — edit or extend these files to change the corresponding section.

| Section | File | Anchor / ID | Purpose |
|---|---|---:|---|
| Intro loader | `components/ui/IntroLoader.tsx` | (startup) | Animated intro/splash that transitions into the page.
| Floating Navbar | `components/ui/Navbar.tsx` | global (fixed) | Floating, auto-hide nav with desktop pill-links and mobile menu; reads `navItems` from `data/index.ts`.
| Hero / Spotlight | `components/Hero.tsx` + `components/ui/Spotlight.tsx` | `#Home` | Main hero with animated headline, typewriter roles, CTA buttons and profile image.
| Skills / Snapshot | `components/Stats.tsx` | (in-page) | Skills carousel, interactive virtual terminal modal and GitHub activity calendar.
| Projects showcase | `components/RecentProject.tsx` | `#projects` | Stack/grid project carousel with drag, live/demo and repo links.
| Contact form | `components/ContactPage.tsx` | `#contact` | EmailJS-powered contact form (client-side). Uses `process.env.NEXT_PUBLIC_EMAILJS_*`.
| Footer | `components/Footer.tsx` | (global) | Footer, social links and quick anchors.

---

```
portfolio/
├─ app/
│  ├─ layout.tsx           # Global layout + metadata
│  ├─ page.tsx             # Home route
│  ├─ provider.tsx         # Theme / context providers
│  └─ globals.css          # Global styles (Tailwind + base)
├─ components/             # Page sections
│  ├─ Hero.tsx
│  ├─ RecentProject.tsx
│  ├─ ContactPage.tsx
│  └─ Footer.tsx
├─ components/ui/          # Reusable primitives (buttons, navbar, loaders)
├─ data/
│  └─ index.ts             # All site content (projects, social, stats)
├─ lib/                    # Utilities
├─ public/                 # Static images & assets
├─ utils/                  # small helpers (e.g. `cn.ts`)
├─ package.json
├─ tailwind.config.ts
└─ README.md
```

Tip: keep all editable content inside `data/index.ts` — it's the single source of truth for projects, testimonials and stats.

---

## 🧰 Tech stack (high-level)

| Layer | Primary packages | Purpose |
|---|---:|---|
| Framework | `Next.js` (App Router) | Routing, SSR/SSG, performance
| UI + Styling | `Tailwind CSS` + utility components | Fast UI development, responsive design
| Animations & 3D | `Framer Motion`, `three`, `@react-three/fiber` | Polished motion & immersive visuals
| Forms & Contact | `@emailjs/browser` | Client-side email delivery (no backend)
| Tooling | TypeScript, ESLint, PostCSS | Type safety & code quality

---

## ⚙️ Scripts & shortcuts

| Command | What it does | Notes |
|---|---|---|
| `npm run dev` | Start dev server (http://localhost:3000) | Fast refresh + source maps
| `npm run build` | Create optimized production build | Used by Vercel on deploy
| `npm run start` | Serve production build | Run after `npm run build`
| `npm run lint` | Run ESLint | Fix issues before PRs

---

## 🔑 Environment variables

| Name | Required | Used in | Purpose |
|---|:---:|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ✅ | `components/ContactPage.tsx` | EmailJS service id |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ✅ | `components/ContactPage.tsx` | EmailJS template id |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | ✅ | `components/ContactPage.tsx` | EmailJS public key |

Create a `.env.local` in the project root and add these keys for the contact form to work locally.

---

## 🚀 Projects snapshot

| # | Project | Short description | Key tech | Live / Repo |
|---:|---|---|---|---|
| 1 | DragonBall Z | Interactive 3D experience with energy effects | React, Three.js, Framer | Live: `https://ui.DragonBall.com` • Repo: `Harsh-Pathak3601/DragonBall-Z` |
| 2 | Pokemon | Responsive themed UI with Cloudinary media | Next.js, Tailwind, Stream | Live: `https://ui.Pokemon.com` • Repo: `Harsh-Pathak3601/Pokemon-Web` |
| 3 | Idaten Jump | Dynamic, speed-focused UI interactions | React, Three.js | Live: `https://ui.Idaten-Jump.com` • Repo: `Harsh-Pathak3601/Idaten-Jump` |
| 4 | Reyukando | Premium site recreation with GSAP + Three | Next.js, GSAP, Three | Live: `https://ui.Reyukando.com` • Repo: `Harsh-Pathak3601/Reyukando` |

---

## ➕ How to add a new project (example)

Open `data/index.ts` and add an object to the `projects` array — for example:

```ts
projects.push({
  id: 99,
  title: "New Project",
  des: "Short description",
  img: "/screenshot.webp",
  iconLists: ["/react.svg", "/tail.svg"],
  techNames: ["React", "Tailwind"],
  link: "https://live.example.com",
  github: "https://github.com/your/repo"
});
```

After updating, restart `npm run dev` or wait for HMR to pick up the change.

---

## ✅ Contribution & PR checklist

| Step | Command / Action | Why |
|---:|---|---|
| 1 | Fork + branch | Isolate changes |
| 2 | `npm install` + `npm run dev` | Run locally |
| 3 | `npm run lint` | Keep code consistent |
| 4 | Add tests / screenshots (if UI) | Prevent regressions |
| 5 | Open PR & add description | Reviewable changes |

---

## 🛠 Roadmap / suggestions

| Feature | Priority | Status |
|---|---:|---|
| Add CI (lint/build) | High | Planned |
| Add unit / integration tests | Medium | Planned |
| Add `LICENSE` (MIT) | High | Suggested |
| Add visual screenshots / OG images | Low | Suggested |

---

## 🐞 Common issues & fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Contact form fails | Missing/incorrect EmailJS env vars | Verify `NEXT_PUBLIC_EMAILJS_*` and EmailJS template
| Build fails on CI | Node version mismatch | Ensure Node >= 18 in CI config
| Missing images | Wrong `public/` path | Confirm file exists in `public/` and path in `data/index.ts`

---

## 📦 Deployment
Recommended: Vercel for zero-config Next.js deployments.
- Connect GitHub repo → set env vars → deploy.
- Optional: enable `@vercel/analytics` or use Vercel Insights.

---

## 📝 License
This repository **suggests** MIT. Add `LICENSE` if you want to open-source the code.

---

## 📬 Contact
- Email: `pathakharsh3601@gmail.com`
- GitHub: `https://github.com/Harsh-Pathak3601`

---

Made with ❤️ and code — keep iterating and ship what matters.

