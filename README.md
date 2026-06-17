# Uttam Singh — Portfolio

Interactive portfolio site inspired by editorial design patterns — dark, minimal, scroll-driven animations, and media-rich project showcases.

**Live:** [uttamportfolio.com](https://uttamportfolio.com)

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, staggered text)
- Lenis (smooth scroll)
- Deployed via GitHub Actions → GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Pages

- `/` — Main portfolio (hero, work, about, experience, contact)
- `/automation` — Automation specialist showcase

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

Custom domain is configured via `public/CNAME` (`uttamportfolio.com`).

## Project structure

```
src/
├── components/   # UI sections (hero, work, about, experience, contact)
├── data/         # Site content, projects, experience
├── hooks/        # Lenis smooth scroll, reduced motion
└── styles/       # Global CSS + Tailwind
public/
└── images/       # Project showcase images
legacy/           # Previous vanilla HTML/CSS/JS site
```

## Contact

- Email: uttam6201@gmail.com
- GitHub: [uttamoffline](https://github.com/uttamoffline)
- LinkedIn: [uttambeingprofessional](https://linkedin.com/in/uttambeingprofessional)
