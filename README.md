# Portfolio

<div align="left">

[![License](https://img.shields.io/badge/License-MIT-1a1a2e?style=for-the-badge&logoColor=white)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live-1a1a2e?style=for-the-badge&logoColor=white)]()
[![Version](https://img.shields.io/badge/Version-2.0.0-1a1a2e?style=for-the-badge&logoColor=white)]()

</div>

> **Portfolio** is a personal portfolio website built with React and TypeScript. It showcases professional experience, projects, certificates, and blog posts — with full bilingual support (Portuguese and English), dark/light themes, and a terminal-inspired design.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Features

| Capability | Description |
|---|---|
| **Bilingual** | Full Portuguese and English support with browser auto-detection and manual toggle |
| **Dark/Light theme** | Persists preference via `localStorage` and respects `prefers-color-scheme` |
| **Terminal hero** | Animated code editor display with typewriter effect |
| **Interactive timeline** | Career and education history with dark mode support |
| **Project showcase** | Cards with type badges (API, CLI), tech tags, and GitHub links |
| **Certificate viewer** | Inline PDF modal with mobile download fallback |
| **Blog page** | Dedicated `/blog` route with LinkedIn posts, tags, and expandable content |
| **CV download** | PDF preview directly in the browser |
| **Responsive design** | Adaptive layout, hamburger menu, and mobile-friendly components |
| **Loading screen** | Animated terminal boot sequence with progress bar |

---

## Tech Stack

![React](https://img.shields.io/badge/React-1a1a2e?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-1a1a2e?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-1a1a2e?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1a1a2e?style=for-the-badge&logo=cssmodules&logoColor=white)

| | |
|---|---|
| **Framework** | [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Bundler** | [Vite](https://vitejs.dev) |
| **Styling** | [CSS Modules](https://github.com/css-modules/css-modules) |
| **Linter** | [ESLint](https://eslint.org) |
| **Fonts** | DM Serif Display, DM Sans, JetBrains Mono |
| **Deploy** | [Vercel](https://vercel.com) |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Hugolelis/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── assets/                  # Static images and icons
├── components/
│   ├── About.tsx            # About me section with skills
│   ├── Certificates.tsx     # Certificate grid
│   ├── Contact.tsx          # Contact information
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Terminal-inspired hero section
│   ├── LoadingScreen.tsx    # Animated boot screen
│   ├── Nav.tsx              # Navigation with scroll spy
│   ├── PdfModal.tsx         # PDF viewer modal
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Projects.tsx         # Projects section
│   └── Timeline.tsx         # Career timeline
├── context/                 # React Context (theme, language, translations)
├── data/                    # Static data (projects, skills)
├── hooks/                   # Custom hooks
│   ├── useActiveSection.ts  # IntersectionObserver for nav
│   └── useScrollY.ts        # Scroll position tracking
├── i18n/                    # Translations (pt.ts, en.ts)
├── pages/                   # Pages (Blog)
├── types/                   # TypeScript interfaces
├── App.tsx                  # Root component
├── index.css                # Global styles and CSS custom properties
└── main.tsx                 # Entry point
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Run `tsc -b` and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Deployment

The project is configured for **Vercel** deployment with SPA rewrites via `vercel.json`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Hugolelis/Portfolio)

---

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.
