# OORJA 2026 — React + Vite + Tailwind CSS

This project migrates the supplied OORJA 2026 single-file website into a Vite React application while preserving the existing visual design and browser interactions.

## Stack

- React
- Vite
- Tailwind CSS v4
- Font Awesome 6 CDN
- Google Fonts

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Important

The original HTML is kept in `public/site-body.html` and its existing JavaScript is kept in `public/legacy.js`. React mounts the site and Vite/Tailwind handles the build. This is an intentionally low-risk first migration that preserves the original functionality. The next refactor can split the pages into JSX components (`Home`, `Events`, `Team`, `Gallery`, `Contact`, modals, etc.) without changing the visual design.
