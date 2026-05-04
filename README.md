<div align="center">

# ⚡ Harsh Pathak — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://harsh-pathak-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, single-page portfolio built on the **Obsidian Purple** design system — featuring a custom virtual CLI, animated intro sequence, liquid-physics cursor, and real-time GitHub/LeetCode stat integration.

[Explore Live](https://harsh-pathak-portfolio.vercel.app) · [Report Bug](https://github.com/Harsh-Pathak3601/Personal-Portfolio/issues) · [Request Feature](https://github.com/Harsh-Pathak3601/Personal-Portfolio/issues)

</div>

---

## ✨ What Makes This Portfolio Different

-   **🎬 Cinematic Intro Loader** — Time-aware greeting system (Good Morning/Afternoon/Evening) with animated SVG logo reveal and smooth slide-up exit.
-   **🖱️ Liquid Physics Cursor** — Custom cursor that stretches and deforms based on mouse velocity using Framer Motion spring physics. Transforms into a diamond on interactive elements.
-   **💻 Virtual CLI Terminal** — A fully interactive terminal modal (`admin@harsh:~$`) with commands like `bio`, `skills`, `socials`, `resume`, `clear`, and `exit`.
-   **📊 Live Engineering Stats** — Real-time GitHub contribution calendar, GitHub stats card, LeetCode problem-solving metrics, and language distribution — all pulled dynamically.
-   **🎯 Dual-View Project Vault** — Projects displayed in a **3D Stack Carousel** (with rotateY perspective + swipe support) or a responsive **Grid** layout, togglable by the user.
-   **🌗 Obsidian Purple Theme** — A custom dark/light design system built on HSL CSS variables. Dark mode uses a deep `265° 45% 2%` obsidian base with electric violet accents.
-   **⚡ Performance First** — Lazy-loaded components via `next/dynamic`, `contentVisibility: auto`, and optimized image loading with `loading="lazy"` and `decoding="async"`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) · React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS · CSS Variables (HSL Design Tokens) |
| **Animation** | Framer Motion (Spring Physics, AnimatePresence, useVelocity) |
| **Typography** | Google Fonts — Inter, Kaushan Script, Dancing Script, Gloria Hallelujah, Satisfy |
| **Icons** | Lucide React · React Icons · Heroicons |
| **Contact** | EmailJS (@emailjs/browser) |
| **Analytics** | Vercel Analytics |
| **Theme** | next-themes (Dark/Light with system detection) |

---

## 📂 Project Architecture

```text
portfolio/
├── app/
│   ├── globals.css        # Obsidian Purple design system (HSL tokens)
│   ├── layout.tsx         # Root layout with 5 Google Font families
│   ├── page.tsx           # SPA entry — lazy loads all sections
│   └── provider.tsx       # next-themes ThemeProvider wrapper
├── components/
│   ├── Hero.tsx           # Spotlight effects + Typewriter role rotator + profile image
│   ├── Stats.tsx          # Engineering Snapshot — skills marquee, CLI, GitHub calendar, stats cards
│   ├── RecentProject.tsx  # Project Vault — 3D stack carousel + grid view toggle
│   ├── ContactPage.tsx    # Contact form with EmailJS integration
│   ├── Footer.tsx         # Animated SVG logo + social links + navigation
│   └── ui/
│       ├── CustomCursor.tsx       # Liquid-physics velocity cursor
│       ├── IntroLoader.tsx        # Cinematic time-aware intro sequence
│       ├── Navbar.tsx             # Floating navbar with scroll-hide + mobile drawer
│       ├── MagicButton.tsx        # Reusable animated CTA button
│       ├── Spotlight.tsx          # Ambient light cone effect
│       └── TextGenerateEffect.tsx # Word-by-word text reveal animation
├── data/
│   └── index.ts           # Single source of truth — projects, skills, nav items, stats
├── public/                # Static assets — project screenshots, tech icons, resume PDF
└── tailwind.config.ts     # Extended theme with custom colors, fonts, and animations
```

---

## 📈 Featured Projects

| # | Project | Description | Stack |
| :--- | :--- | :--- | :--- |
| 1 | **[CivixShield](https://civix-shield-final.vercel.app)** | Defense platform against social engineering, phishing & deepfakes | Next.js · Three.js · Framer Motion |
| 2 | **[Starknet AI](https://github.com/Harsh-Pathak3601/Starknet-AI)** | Autonomous CLI multi-agent AI system with self-correcting code generation across the full SDLC | Node.js · Playwright · Groq |
| 3 | **[PayPulse](https://paypulse-pm84.onrender.com/)** | Enterprise payroll management — employee tracking, attendance & automated salary with tax compliance | Java · JSP · MySQL · Apache Tomcat |
| 4 | **[Reyukando](https://ui.Reyukando.com)** | Premium website recreation with smooth GSAP animations and immersive Three.js 3D effects | Next.js · GSAP · Three.js |

---

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Harsh-Pathak3601/Personal-Portfolio.git
cd Personal-Portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
#    Create a .env.local file in the root:
#    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
#    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
#    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## 🔧 Customization

All portfolio content is managed from a **single file** — [`data/index.ts`](data/index.ts). Update your projects, skills, navigation, and stats without touching any component code.

```typescript
// Example: Add a new project
export const projects = [
  {
    id: 1,
    title: "Project Name",
    des: "What you built and why it matters.",
    img: "/screenshot.png",
    iconLists: ["/next.svg", "/tail.svg"],
    techNames: ["Next.js", "Tailwind"],
    link: "https://live-demo.com",
    github: "https://github.com/username/repo",
  },
];
```

---

## 📬 Contact

-   **Email**: [pathakharsh3601@gmail.com](mailto:pathakharsh3601@gmail.com)
-   **GitHub**: [@Harsh-Pathak3601](https://github.com/Harsh-Pathak3601)
-   **LinkedIn**: [Harsh Pathak](https://linkedin.com/in/harsh-pathak-199503370)
-   **Portfolio**: [harsh-pathak-portfolio.vercel.app](https://harsh-pathak-portfolio.vercel.app)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Harsh Pathak</strong> — Mumbai, India</sub>
</div>
