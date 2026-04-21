# Martin Morales · Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS v4, and Motion.

## Stack

- **Next.js 16** — App Router, Turbopack
- **TypeScript** — strict mode
- **Tailwind CSS v4** — CSS custom properties for theming
- **Motion** — scroll-driven animations
- **React 19**

## Features

- Dark / light theme with no flash (persisted in `localStorage`)
- Bilingual (Spanish / English) with browser auto-detection (persisted in `localStorage`)
- Single-page layout: Hero, About, Experience, Tech Stack, Projects, Contact
- Fully responsive

## Project structure

```
src/
├── app/            # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── sections/   # Hero, About, Experience, TechStack, Projects, Contact
│   ├── ui/         # Badge, SectionTitle
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   └── Providers.tsx
├── contexts/       # ThemeContext, LanguageContext
├── data/           # personal.ts, experience.ts, projects.ts, techs.ts
└── locales/        # es.ts, en.ts, types.ts
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
