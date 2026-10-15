# portfolio — AI assistant context

## What this is

Lionel Morrison's personal portfolio: a single-page Next.js site (About Me, Experience, Projects) styled with Tailwind CSS, statically exported and hosted on GitHub Pages.

This is Next.js 13.4 (App Router) and React 18. Check what the installed version supports (`node_modules/next/dist/docs/`, or the 13.4 docs) before reaching for newer APIs.

## Where the docs are

- **README.md** — what the site is, how to run it locally, the fork/attribution note.
- **AGENTS.md** (this file) — the codebase, its conventions and how it deploys.
- **CLAUDE.md** — imports this file and adds the AI-assisted workflow (Backpack tracking, working the backlog).

Look facts up in the code or README rather than copying them here; point to the file instead.

## Key commands

- `npm run dev` — dev server on port 3000.
- `npm run lint` — `next lint` with the rules in `.eslintrc.json`. CI runs it on every pull request that touches `app/**` (`.github/workflows/lint.yml`).
- `npm run build` — production build; with `output: 'export'` (`next.config.js`) it writes the static site to `out/`.

There are no tests. A change is verified by `npm run lint` and `npm run build` both passing, and by looking at it in `npm run dev` at mobile and desktop widths. `npm start` doesn't serve a static export; to preview the built site, serve `out/` with any static server (e.g. `npx serve out`).

## Architecture

```
app/layout.tsx              root layout: <html>, Inter font, page metadata (title, description)
app/page.tsx                the only page: GA4 scripts, Chatbot, MainNav, then AboutMe, Experience, Projects
app/data.ts                 all site content: aboutMe, navData, jobsData, projectData
app/interfaces.ts           types for that content (AboutMe, Job, NavLinks, Projects, TechLables)
app/globals.css             Tailwind layers plus custom classes (project-*, nav-button, ...)
app/components/             one component per section, plus nav.tsx, section-header.tsx and chatbot.tsx
public/assets/              project screenshots, referenced from data.ts as './assets/<file>.png'
```

- **Content lives in `app/data.ts`, not in components.** Adding a job, project or nav link is an edit to `data.ts` (and `interfaces.ts` if the shape changes). Projects and nav links with `disabled: true` are hidden; a project without `images.default` shows `image-placeholder.png`. Projects alternate left/right layout by index.
- **Sections are anchored by id** (`about`, `experience`, `projects`), passed as the `anchor` prop from `page.tsx`; nav links in `navData` scroll to them (`href: '#about'`, ...).
- **Only `nav.tsx` is a client component** (`'use client'`, for the mobile menu state). Everything else renders at build time.
- **Third-party scripts:** Google Analytics 4 (tag `G-14RLENLVJH`, inline in `app/page.tsx`) and the Tidio chat widget (`app/components/chatbot.tsx`). Don't remove or change either without being asked.

## Conventions

- ESLint (`.eslintrc.json`): single quotes, semicolons, 2-space indent, no multiple spaces. A string that needs an apostrophe uses double quotes with `// eslint-disable-next-line quotes` above it, as in `data.ts`.
- Formatting follows `.vscode/settings.json`: Prettier with single quotes, print width 120.
- Tailwind `theme.screens` **replaces** the default breakpoints: `sm` 576px, `md` 960px, `lg` 1440px. There is no `xl` or `2xl`. The mobile/desktop nav switches at `md`.
- Colours are the Tailwind gray/slate scale on a dark background (`bg-gray-700` page, `bg-gray-800` nav and chips).
- Images go through `next/image` with `images: { unoptimized: true }`, which a static export needs. Keep asset paths relative (`./assets/...`).
- Static export only: no API routes, server actions, middleware, or anything else that needs a Node server at runtime.

## Deployment

Pushing to `main` deploys: `.github/workflows/nextjs.yml` builds the site and publishes `out/` to GitHub Pages. Nothing else deploys; a merge into `main` is a release. Both workflows pin Node 16 and the deploy workflow still runs the old `next export` step after `next build`.

Branches: `dev` is the integration branch and `main` the release branch. Task branches are `feature/YYYYMMDD-short-name` or `bug/YYYYMMDD-short-name`, cut from `dev` and merged back into `dev` by pull request. A release is a pull request from `dev` into `main`. Pushing to `dev` doesn't deploy, and `dev` has no preview site, so check changes locally (see "Key commands").
