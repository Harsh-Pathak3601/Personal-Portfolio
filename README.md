# Harsh Pathak - Interactive Developer Portfolio

A high-performance, component-driven portfolio website showcasing full-stack engineering expertise, advanced animations, and secure client-side architecture. Built with modern web standards and crafted for accessibility, security, and user experience.

---

## Portfolio Overview

This portfolio is a reflection of how I approach software engineering: building reliable systems, writing maintainable code, and delivering intuitive user experiences.:

- **Full-stack engineering capabilities** — from enterprise Java backend systems to production-grade React frontends
- **Performance-first mindset** — optimized bundling, lazy-loaded components, and hardware-accelerated animations
- **Security awareness** — Content Security Policy, CSRF protection, bot detection, and secure form handling
- **Modern craftsmanship** — component isolation, semantic HTML, responsive design, and accessibility considerations

The portfolio itself is a functional showcase of the skills it describes—not just a marketing page, but an engineering project that prioritizes both form and function.

---

## Live Demo

**[View Portfolio](https://harsh-pathak-portfolio.vercel.app)** — Deployed on Vercel with automatic deployments from Git


---

## Tech Stack

### Frontend
- **React 19** — Latest stable version with hooks and concurrent rendering
- **Vite 7.2** — Lightning-fast dev server and optimized production builds
- **Tailwind CSS 3.4** — Utility-first styling with custom animations and extended color palette
- **Framer Motion 12.23** — Hardware-accelerated animations and gesture handling

### Styling & UI Components
- **Lucide React** — Crisp SVG icon library for consistent iconography
- **React Icons** — Additional icon support for rich visual feedback
- **Custom CSS Animations** — Marquee scrolling, pulse effects, and fade-in transitions
- **Glassmorphism Design System** — Modern frosted-glass aesthetic with depth and hierarchy

### Form Management & Validation
- **EmailJS 4.4** — Client-side email delivery without backend coupling.

### Developer Experience
- **PostCSS with Autoprefixer** — Cross-browser CSS compatibility.
- **Git-based versioning** — Full commit history and deployment tracking.

### Deployment & Infrastructure
- **Vercel** — Edge deployment with automatic deployments and serverless functions.
- **Content Security Policy (CSP)** — Strict header policies to prevent XSS and data exfiltration.
- **Security headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy.

---

## Key Features

### User Experience
- **Animated intro screen** — Multi-language greeting sequence (7 languages) that creates memorable first impression
- **Custom cursor** — Hardware-accelerated pointer with interactive feedback
- **Smooth scroll navigation** — Section-based anchor links with fade-in animations
- **Responsive Bento Grid layout** — Adapts seamlessly from mobile to 4K displays
- **Glassmorphism cards** — Spotlight effects and gradient overlays for depth


### Security & Protection
- **Content Security Policy (CSP)** — Whitelist-based policy blocks inline scripts and suspicious resources
- **Bot detection** — Honeypot field in contact form prevents automated spam
- **CSRF protection** — Form validation and submission integrity checks
- **Secure API integration** — Environment variables keep API keys out of version control
- **Input sanitization** — Formik + Yup validation prevents malicious payloads
- **Header security** — Vercel-configured response headers prevent clickjacking and MIME sniffing


### Advanced Features
- **Real-time GitHub contribution graph** — Fetches GitHub API data to display contribution history
- **Project image carousel** — Swipeable gallery with multiple project screenshots
- **Tech stack marquee** — Animated horizontal scrolling list of technologies
- **Educational timeline** — Time-based education section with icons and descriptions
- **Dynamic skills categorization** — Languages, frontend, backend, database, and tools with visual pills

---

## Sections Breakdown

### 1. **Intro Screen**
A IntroScreen Welcoming the User with greeting.

### 2. **Navigation**
floating navbar with smooth scroll behavior, responsive hamburger menu, and active section highlighting.

### 3. **Hero Section**
Bold introduction with call-to-action buttons, rotating greeting, bio summary, and resume download via lucide-react Download icon.

### 4. **About Section**
A interactive About Section Displayed using Bento Grid
- **Grid-1:** Showcasing My Tech Stack, the stack i used to build interactive web applications.
- **Grid-2:** Showcasing a virtual CLI where user can explore Harsh's Personal Terminal for Getting Quick information.
- **Grid-3:** Overall repository statistics showcasing total contribution commited in github.
- **Grid-4:** Showcasing the total Leetcode Problem solved in course of my Engineering.
- **Grid-5:** Most Used Programming Language I Use frequently for building web application 
- **Grid-6:** Github Contribution Chart Showcasing my daily Contribution on Github

### 6. **Projects Section**
Feature-rich project showcase with:
- Project cards with descriptions and tag badges
- Multiple Options for user to view the project section via Grid view or Stack view 
- Direct GitHub repository links
- Live deployment links


### 8. **Contact Section**
Professional contact form with:
- EmailJS integration for direct email delivery
- Contact details display (email, location, phone)

### 10. **Footer**
Social links, copyright information, and quick navigation.

---
## Setup & Local Development

### Prerequisites
- **Node.js** 18+ (includes npm)
- **Git** for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Harsh-Pathak3601/Personal-Portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment variables file (`.env`):**
```bash
cp .env.example .env
```

4. **Configure environment variables:**
Edit `.env` and add your credentials (see Environment Variables section below):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Running Locally

**Development server with Hot Module Replacement:**
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser. Changes to React components will refresh instantly.

**Production build:**
```bash
npm run build
```
Outputs optimized bundle to `dist/` directory for deployment.

**Preview production build locally:**
```bash
npm run preview
```
Serves the production build to verify optimization before deploying.

---
## Contact & Socials

**Email:** [pathakharsh3601@gmail.com](mailto:pathakharsh3601@gmail.com)

**GitHub:** [@Harsh-Pathak3601](https://github.com/Harsh-Pathak3601)

**LinkedIn:** [Harsh Pathak](www.linkedin.com/in/harsh-pathak-199503370)

**Location:** Mumbai, Maharashtra, India
---

**Built with attention to craft, optimization, and user experience.**