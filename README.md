# Hidden Lanka 🌿

A cinematic Sri Lankan destination discovery website built with React, Vite, Tailwind CSS v4, Motion, GSAP, and React Router.

## Setup

Requires a current Node.js LTS version compatible with Vite.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Features

- Seven pages and animated route transitions
- GSAP parallax hero and Motion scroll reveals
- Responsive navigation with mobile menu
- Search and category filters
- Destination details and external map links
- Favorites stored in browser localStorage
- Contact form that opens an email draft (demo only)
- Reduced-motion support

## Important notes

- Images are generic Unsplash placeholders and **do not depict the named Sri Lankan destinations**. Replace with verified, properly licensed photos before publishing as an authentic travel guide.
- Destination coordinates, access conditions and descriptions should be checked against authoritative sources before relying on them for travel.
- Contact uses `hello@example.com` as a placeholder. Replace with your own public contact email; this is not a server-backed contact form.
- Favorites are local to each browser and are not synced between devices.
- For Vercel SPA deep-link fallback, `vercel.json` is included.

## Deployment

Push to GitHub and import into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
