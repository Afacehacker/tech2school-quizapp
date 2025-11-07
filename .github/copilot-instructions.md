<!-- Copilot instructions for contributors and AI coding agents -->
# myrouterreact — Copilot / AI agent instructions

Short, practical notes to help an AI agent be productive in this repository.

## Quick commands
- Install dependencies: `npm install`
- Dev server (fast feedback / HMR): `npm run dev` (runs `vite`)
- Build for production: `npm run build` (runs `vite build`)
- Preview production build: `npm run preview` (runs `vite preview`)
- Lint source: `npm run lint` (uses `eslint` and `eslint.config.js`)

## Big-picture architecture
- Single-page React app (React 19) scaffolded with Vite. Entry point: `src/main.jsx`.
- Main application UI lives in `src/App.jsx` (small components currently colocated there).
- Styling uses Tailwind CSS. Tailwind is pulled into the build through `@tailwindcss/vite` in `vite.config.js` and `src/index.css` contains the Tailwind import.
- No backend or API wiring exists in the repository — network integrations are not present in source.

Files to inspect when changing behavior:
- Bootstrapping: `src/main.jsx` (createRoot + StrictMode + App import)
- App entry and local components: `src/App.jsx`
- Global CSS / Tailwind entry: `src/index.css`
- Build/dev config: `vite.config.js`
- Lint rules: `eslint.config.js`
- Package scripts + deps: `package.json`

## Project-specific conventions & gotchas
- Files use ESM (`package.json` has `type: "module"`) and `.jsx` for React components.
- Tailwind setup: `vite.config.js` registers the Tailwind Vite plugin; `src/index.css` contains `@import "tailwindcss";`. If you add Tailwind utilities or a `tailwind.config.js`, keep it at repo root.
- ESLint config (`eslint.config.js`) has a notable rule:
  - `"no-unused-vars"` uses `varsIgnorePattern: '^[A-Z_]'`. That means variables that start with an uppercase letter or underscore are exempt from the unused-var error — common for React components or intentionally named globals. Do not delete this rule without checking why it was added.
- Component files: create one default-exported component per file (e.g. `src/MyComponent.jsx`). `src/App.jsx` currently contains multiple tiny components; prefer isolating components when adding features.

## How to implement changes (practical guide for AI agents)
- Add components under `src/` with `.jsx` extension. Example pattern:
  - `src/MyWidget.jsx` — default export a functional component.
  - Import in `src/App.jsx` or compose in a new route file.
- Keep imports ESM-style (e.g. `import X from './X.jsx'`). Avoid CommonJS.
- When editing styling, update `src/index.css` or add component-scoped classes in JSX using Tailwind utility classes.
- Run `npm run lint` before proposing a change to avoid obvious ESLint failures.

## Integration points / external dependencies
- Runtime deps are listed in `package.json`: `react`, `react-dom`, `tailwindcss`, `@tailwindcss/vite`.
- Dev tooling: `vite`, `@vitejs/plugin-react`, and ESLint packages.
- There are no CI or test frameworks configured in the repo (no tests directory, no Jest/Vitest config). If you add tests, include a lightweight task in `package.json` and mention it in these instructions.

## Useful examples from the codebase
- Bootstrapping (see `src/main.jsx`):
  - `createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)`
- Tailwind entry (see `src/index.css`):
  - `@import "tailwindcss";`

## When to ask for clarification
- If a change adds runtime behavior (APIs, routing, global state), ask whether to also add tests, CI config, and a README note.
- If introducing Tailwind configuration (custom theme, plugins), confirm whether a root `tailwind.config.js` is acceptable.

If anything in these notes is unclear or you'd like examples for adding routes, tests, or Tailwind config, tell me which area to expand and I will iterate.
