# Harsh Pathak — Interactive Developer Portfolio

A fast, accessible developer portfolio built with Next.js, TypeScript and Tailwind CSS. It highlights projects, animations (Three.js + Framer Motion), and a secure contact form powered by EmailJS.

---

## 🚀 Quick demo
- Live: https://harsh-pathak-portfolio.vercel.app

---

## ✨ Highlights
- Modern Next.js (App Router) + TypeScript codebase
- Responsive, accessible UI styled with Tailwind CSS
- Smooth, hardware-accelerated animations (Framer Motion + three.js)
- Contact form using EmailJS (no backend required)
- Optimized for performance and SEO (Vercel deployment)

---

## 🧰 Tech stack
- Next.js 16 (App Router) • React 19 • TypeScript
- Tailwind CSS • Framer Motion • three.js
- EmailJS (@emailjs/browser) for contact form
- Lucide / React Icons • Formik + Yup • next-themes

---

## 🔧 Local development
Prereqs: Node.js 18+ and Git.

1. Clone and install:

```bash
git clone https://github.com/Harsh-Pathak3601/Personal-Portfolio.git
cd portfolio
npm install
```

2. Create env file (used by the contact form):

```bash
cp .env.example .env.local
# add the values below to .env.local
```

Required env vars (used in `components/ContactPage.tsx`):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

3. Run dev server:

```bash
npm run dev
# open http://localhost:3000
```

Scripts you’ll use:
- `npm run dev` — start Next dev server
- `npm run build` — build for production
- `npm run start` — run production build
- `npm run lint` — run ESLint

---

## 📁 Project structure (high level)
- `app/` — Next.js App Router routes + `layout.tsx`
- `components/` — page sections (Hero, Contact, Projects, etc.)
- `components/ui/` — reusable UI primitives
- `data/` — site content & project list (`data/index.ts`)
- `lib/`, `utils/` — helper utilities
- `public/` — static assets and images
- configuration: `next.config.js`, `tailwind.config.ts`, `tsconfig.json`

Tip: update your personal details and projects in `data/index.ts`.

---

## 📦 Deployment
Recommended: Vercel (automatic from GitHub). Add the same `NEXT_PUBLIC_*` env vars in your Vercel project settings before deploying.

---

## 🤝 Contributing
PRs and issues are welcome. For content or visual changes:
1. Fork → create a branch → open a PR with a clear description.
2. Run `npm run lint` and ensure no TypeScript errors.

---

## ❗ Notes & troubleshooting
- If contact emails fail: verify `NEXT_PUBLIC_EMAILJS_*` values and that EmailJS template IDs match.
- For styling changes, edit Tailwind classes or `globals.css`.

---

## ✉️ Contact
- Email: pathakharsh3601@gmail.com
- GitHub: https://github.com/Harsh-Pathak3601
- LinkedIn: https://www.linkedin.com/in/harsh-pathak-199503370

---
