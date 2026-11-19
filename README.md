# Nattachai Kaewchum — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS. It introduces my background and skills, highlights selected projects, and provides ways to get in touch.

## Sections

- **Home** — introduction and profile photo
- **About** — background and education
- **Skills** — technologies and tools
- **Projects** — selected work with links to source repositories
- **Contact** — email, phone, and LinkedIn

The site also includes a sticky section navbar, smooth scrolling, and a compact dot navigation that tracks scroll position.

## Run locally

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Vite prints the local address when the development server starts.

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Run `npm run lint` to check the source files.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, and deploys it to GitHub Pages whenever changes are pushed to `master`. Pull requests run the build without publishing. You can also start the workflow manually from the repository’s **Actions** tab.

For the first deployment, open **Settings → Pages** in the repository and set the build and deployment source to **GitHub Actions**. The Vite build uses `/Portfolio/` as its base path on GitHub Pages and `/` during local development.

After a successful deployment, the site is available at <https://gooddez.github.io/Portfolio/>.
