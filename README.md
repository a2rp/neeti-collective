# NeetiCollective

NeetiCollective is a clean, editorial-style impact collective website built with React and Vite.  
The project focuses on clarity, restraint, and strong information hierarchy rather than visual noise.

This is a frontend-only implementation designed to be easily connected to a backend later without restructuring the UI.

---

## Tech Stack

- React 18
- Vite
- React Router DOM
- Styled Components
- MUI (loader only)
- React Icons
- React Toastify
- Axios (API ready)

---

## Features

- Editorial layout inspired by institutional foundations
- Modular page architecture
- Sub-routes for Work, Journal, and Initiatives
- Lazy-loaded routes with fallback loader
- Image loader component (no blank space while loading)
- Toast notifications ready for API integration
- GitHub Pages deployment ready
- Clean dependency structure

---

## Project Structure

```
src/
│
├── components/
│   ├── appHeader
│   ├── appFooter
│   └── scrollToTop
│
├── pages/
│   ├── home
│   ├── work
│   ├── workDetail
│   ├── journal
│   ├── journalDetail
│   ├── initiatives
│   ├── initiativeDetail
│   ├── about
│   ├── contact
│   ├── terms
│   ├── privacy
│   ├── submissionPolicy
│   ├── fraudAlerts
│   └── fellowships
│
├── App.jsx
├── AppRoutes.jsx
└── main.jsx
```

---

## Development

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Preview production build:

```
npm run preview
```

---

## Production Build

```
npm run build
```

Output will be generated in the `dist` folder.

---

## GitHub Pages Deployment

The project is configured for GitHub Pages deployment.

Make sure in `vite.config.js`:

```
base: "/your-repo-name/",
```

And in `main.jsx`:

```
<BrowserRouter basename="/your-repo-name">
```

Deploy:

```
npm run deploy
```

This publishes the `dist` folder to the `gh-pages` branch.

---

## Notes

- All images use fixed-height wrappers with full object-fit coverage.
- A loader is shown while images load.
- Newsletter and forms are frontend-functional and API-ready.
- Replace mock API functions with real backend endpoints when available.

---

## License

Private project.
All rights reserved.
