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

## Deploy

Hosted on [Vercel](https://vercel.com). To deploy your own instance:

**Option A — Vercel Dashboard (recommended)**

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Set the **Production Branch** to `v2-next` (or `main` after merging).
3. Framework preset is detected automatically as **Next.js** — no extra config needed.
4. Click **Deploy**.

**Option B — Vercel CLI**

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```
