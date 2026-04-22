# 🚀 Harsh Pathak — Full-Stack Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://harsh-pathak-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A premium, high-performance developer portfolio featuring immersive 3D elements, smooth animations, and a sleek modern aesthetic. Built with the latest tech stack to showcase professional expertise and projects.

[Explore Live](https://harsh-pathak-portfolio.vercel.app) • [Report Bug](https://github.com/Harsh-Pathak3601/Personal-Portfolio/issues) • [Request Feature](https://github.com/Harsh-Pathak3601/Personal-Portfolio/issues)

</div>

---

## ✨ Key Features

-   **🎨 Immersive UI**: Built with Tailwind CSS and Framer Motion for buttery-smooth transitions and a premium feel.
-   **🌐 3D Integration**: Interactive 3D components powered by Three.js and React Three Fiber.
-   **📱 Fully Responsive**: Optimized for all devices, from mobile to ultra-wide monitors.
-   **⚡ High Performance**: Leveraging Next.js 16 and React 19 for lightning-fast load times and SEO optimization.
-   **📊 Dynamic Stats**: Integrated GitHub activity, LeetCode metrics, and tech stack visualization.
-   **✉️ Seamless Contact**: Integrated EmailJS for direct client-side communication.
-   **🛠️ Easy Customization**: Centralized data management via `data/index.ts` — update content without touching the core logic.

---

## 🛠️ Tech Stack

### Frontend
-   **Framework**: Next.js 16 (App Router)
-   **Library**: React 19
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion, GSAP
-   **3D**: Three.js, @react-three/fiber, @react-three/drei

### Utilities & Tools
-   **Language**: TypeScript
-   **Contact**: @emailjs/browser
-   **Icons**: Lucide React, React Icons
-   **Theme**: next-themes (Dark/Light mode support)

---

## 📂 Project Structure

```text
portfolio/
├── app/                # Next.js App Router (pages & layout)
├── components/         # React components
│   ├── ui/             # Reusable UI primitives (Buttons, Loaders, etc.)
│   ├── Hero.tsx        # Hero section with spotlight
│   ├── Stats.tsx       # Tech stacks, CLI, and GitHub stats
│   └── ...             # Other section components
├── data/               # 💡 Single source of truth for content
│   └── index.ts        # Edit this to change projects, skills, etc.
├── public/             # Static assets (images, icons)
├── lib/                # Utility functions (cn, etc.)
├── tailwind.config.ts  # Design system & theme configuration
└── package.json        # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+ 
-   npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harsh-Pathak3601/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Customization Guide

To update the portfolio content, you only need to modify **`data/index.ts`**. No need to dig into complex JSX/TSX files!

```typescript
// Example: Adding a new project
export const projects = [
  {
    id: 1,
    title: "Project Name",
    des: "A brief description of what you built.",
    img: "/path-to-image.png",
    iconLists: ["/next.svg", "/tail.svg"],
    techNames: ["Next.js", "Tailwind"],
    link: "https://live-link.com",
    github: "https://github.com/your-username/repo",
  },
  // ...
];
```

---

## 📈 Featured Projects

1.  **CivixShield**: Next-gen defense against social engineering and deepfakes.
2.  **Pokemon**: Visually engaging Pokémon-themed project with modern UI.
3.  **Idaten Jump**: High-energy speed-focused UI interactions.
4.  **Reyukando**: Premium site recreation with GSAP & Three.js.

---

## 📬 Contact & Socials

-   **Email**: [pathakharsh3601@gmail.com](mailto:pathakharsh3601@gmail.com)
-   **GitHub**: [@Harsh-Pathak3601](https://github.com/Harsh-Pathak3601)
-   **Portfolio**: [harsh-pathak-portfolio.vercel.app](https://harsh-pathak-portfolio.vercel.app)

---

<div align="center">
  Made with ❤️ by Harsh Pathak
</div>
