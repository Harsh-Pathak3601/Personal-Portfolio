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

## 🔍 What the Home route renders

The app uses a single App Router page (`app/page.tsx`) that composes the visible sections below. Edit the referenced components to change each section.

1. Intro loader — `components/ui/IntroLoader.tsx`
   - Startup splash that transitions into the Home view.
2. Floating Navbar — `components/ui/Navbar.tsx`
   - Global, auto-hide navigation; reads `navItems` from `data/index.ts`.
3. Hero / Spotlight — `components/Hero.tsx` + `components/ui/Spotlight.tsx`
   - Animated headline, typewriter roles, CTAs and profile visual.
4. Skills / Snapshot — `components/Stats.tsx`
   - Skills carousel, virtual terminal demo and GitHub activity calendar.
5. Projects showcase — `components/RecentProject.tsx`
   - Drag-enabled project carousel with live/demo and repo links.
6. Contact form — `components/ContactPage.tsx`
   - EmailJS-powered client-side contact flow (requires `NEXT_PUBLIC_EMAILJS_*` env vars).
7. Footer — `components/Footer.tsx`
   - Social links and quick anchors.

---

```
portfolio/
├─ app/
│  ├─ layout.tsx           # Global layout + metadata (fonts + ThemeProvider)
│  ├─ page.tsx             # Home route — mounts IntroLoader, Navbar, Hero, Stats, Projects, Contact, Footer
│  ├─ provider.tsx         # next-themes provider
│  └─ globals.css          # Tailwind tokens & custom utilities
├─ components/
│  ├─ Hero.tsx             # Hero + spotlight + CTA
│  ├─ RecentProject.tsx    # Projects carousel (stack/grid)
│  ├─ ContactPage.tsx      # EmailJS contact form
│  ├─ Stats.tsx            # Skills, virtual terminal, GitHub calendar
│  └─ Footer.tsx           # Footer & social links
├─ components/ui/          # UI primitives (Navbar, MagicButton, IntroLoader, Spotlight, TextGenerateEffect)
├─ data/                   # `data/index.ts` — projects, navItems, stats, testimonials
├─ lib/                    # Helpers (e.g. `cn()`)
├─ public/                 # Static assets (images, icons)
├─ utils/                  # duplicate `cn()` helper (consider consolidating)
├─ package.json
├─ tailwind.config.ts
└─ README.md
```

Tip: keep all editable content inside `data/index.ts` — it's the single source of truth for projects, testimonials and stats.

---

## 🧰 Tech stack (short)

- Framework: `Next.js` (App Router)
- UI / styling: `Tailwind CSS` + utility components
- Animations & 3D: `Framer Motion`, `three`, `@react-three/fiber`
- Forms / contact: `@emailjs/browser` (client-side)
- Tooling: TypeScript, ESLint, PostCSS

---

## ⚙️ Scripts

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — create production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

---

## 🔑 Environment variables
Create a `.env.local` in the project root and add the EmailJS keys below for the contact form to work locally:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — EmailJS public key

All three are required by `components/ContactPage.tsx`.

---

## 🚀 Notable projects (summary)

1. DragonBall Z — interactive 3D experience with energy effects
   - Tech: React, Three.js, Framer Motion
   - Live: https://ui.DragonBall.com • Repo: Harsh-Pathak3601/DragonBall-Z

2. Pokemon — themed responsive UI with Cloudinary media
   - Tech: Next.js, Tailwind
   - Live: https://ui.Pokemon.com • Repo: Harsh-Pathak3601/Pokemon-Web

3. Idaten Jump — speed-focused UI interactions
   - Tech: React, Three.js
   - Live: https://ui.Idaten-Jump.com • Repo: Harsh-Pathak3601/Idaten-Jump

4. Reyukando — premium site recreation with GSAP + Three
   - Tech: Next.js, GSAP, Three
   - Live: https://ui.Reyukando.com • Repo: Harsh-Pathak3601/Reyukando

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

## ✅ Contributing & PR checklist
1. Fork the repo and create a branch
2. Run `npm install` and `npm run dev`
3. Run `npm run lint` and fix issues
4. Add tests / screenshots for UI changes
5. Open a PR with a clear description

---

## 🛠 Roadmap & suggestions
- Add CI (lint/build) — high priority
- Add unit / integration tests — planned
- Add `LICENSE` (MIT) — suggested
- Add visual screenshots / OG images — optional

---

## 🐞 Common issues & fixes
- Contact form fails → Check `NEXT_PUBLIC_EMAILJS_*` env vars and EmailJS template
- Build fails on CI → Ensure Node >= 18 in CI configuration
- Missing images → Verify files exist in `public/` and paths in `data/index.ts`
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

