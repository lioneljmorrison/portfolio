# portfolio — AI assistant context

## What this is

Lionel Morrison's personal portfolio: a single-page Next.js site (hero, Experience, Projects) styled with plain CSS design tokens, statically exported and hosted on GitHub Pages.

This is Next.js 16 (App Router, Turbopack) and React 19 on Node 24, with TypeScript 5.9 (typescript-eslint doesn't yet support TypeScript 7). Check what the installed version supports (`node_modules/next/dist/docs/`, or the Next 16 docs) before reaching for newer APIs.

## Where the docs are

- **README.md** — what the site is, how to run it locally, the fork/attribution note.
- **AGENTS.md** (this file) — the codebase, its conventions and how it deploys.
- **CLAUDE.md** — imports this file and adds the AI-assisted workflow (Backpack tracking, working the backlog).

Look facts up in the code or README rather than copying them here; point to the file instead.

## Key commands

- `npm run dev` — dev server on port 3000.
- `npm run lint` — `eslint app` (ESLint CLI, flat config in `eslint.config.mjs`; `next lint` no longer exists in Next 16). CI runs it on every pull request that touches `app/**` (`.github/workflows/lint.yml`).
- `npm run build` — production build; with `output: 'export'` (`next.config.js`) it writes the static site to `out/`.

There are no tests. A change is verified by `npm run lint` and `npm run build` both passing, and by looking at it in `npm run dev` at mobile and desktop widths. `npm start` doesn't serve a static export; to preview the built site, serve `out/` with any static server (e.g. `npx serve out`).

## Architecture

```
app/layout.tsx              root layout: <html>, Inter font, page metadata (title, description, Open Graph and Twitter card, all read from `siteMeta` in `data.ts`), head script that applies the stored colour mode
app/page.tsx                the home page: MainNav, then Hero, About, Experience, Projects
app/projects/[slug]/page.tsx  case-study page per current project (static: generateStaticParams, dynamicParams = false, per-page metadata)
app/lib/asset.ts            asset(path): root-relative, basePath-aware URL for files in public/
app/data.ts                 all site content: aboutMe, navData, jobsData, projectData, contact
app/interfaces.ts           types for that content (AboutMe, Contact, Job, NavLinks, Projects, TechLables)
app/globals.css             CSS entry: imports the four files below, base then components (layer order)
app/styles/tokens.css       plain-CSS design tokens: primitives and light/dark semantic tokens (custom properties only)
app/styles/base.css         plain-CSS reset, type scale, .container/.grid, .card, .btn and form basics, built on the tokens
app/styles/layout.css       plain-CSS sticky header, mobile drawer, page shell (.page-main) and section titles; components layer
app/styles/sections.css     plain-CSS styles for the Hero, Experience (timeline), Projects (stacked cards) and the shared .section and .chip; components layer
app/components/             one component per section (hero, about, experience, projects), plus nav.tsx, footer.tsx and section-header.tsx
public/assets/              project screenshots (and the scraper.svg diagram), referenced from data.ts as './assets/<file>'
```

- **Content lives in `app/data.ts`, not in components.** Adding a job, project or nav link is an edit to `data.ts` (and `interfaces.ts` if the shape changes). Projects and nav links with `disabled: true` are hidden; a project without `images.default` shows `image-placeholder.png`. Each current project (one with a `slug`) is a light card on the home page (`.project-tile*`: image, `client` tag, name, `tagline`, up to 4 stack chips) that links as a whole to its case study at `/projects/<slug>`; external links, the access line, role, results, approach, diagram and gallery live on that page (`app/projects/[slug]/page.tsx`, `.case*` and `.stat-tile*` in `sections.css`). Project fields: `slug`, `tagline`, `client` ('MRCOOL' | 'Personal'), `role`, `results` (stat tiles), `approach` (optional bullets under The Approach; none are set, since they only restated `what`), `diagram`, `gallery`, plus `problem`/`what`/`detail` (The Challenge, beside the Project info card / The Approach / The Results). `detail` is set only where it adds a fact the stat tiles don't (S3srv, Squism); each page says a fact once, so don't repeat `problem`, `what` or the tiles in it. Earlier work (`earlier: true`) keeps the old full-width card (`.project-card*`) and has no page. A `{{TODO}}` in `role` renders as written. Optional fields: `what` (a "What it does" row after the problem), `detail` (an extra line under it) and `kind: 'work' | 'personal'` (a Work/Personal tag chip beside the name). Projects with `earlier: true` render in a collapsed "Earlier work" `<details>` below the main list instead of the card list. `access: 'internal' | 'private'` explains a card with no `links`: a muted line ("Internal tool, not publicly available" or "Private repository") shows in the links slot, and is skipped when the card has links. Work projects are no longer gated: they show unless `disabled: true`. A missing screenshot points `images.default` at `image-placeholder.png` with a comment naming the expected file.
- **The hero (`app/components/hero.tsx`)** shows `aboutMe.role`, name (the page's h1), `pitch` (falling back to `tldr`) and a See projects button, with skills and the quote in a side card. The Contact me button renders only when the `contact` export has a non-empty value. `aboutMe.intro` is no longer rendered. The hero's id is `top`.
- **The About section (`app/components/about.tsx`)** sits between the hero and Experience and renders `aboutMe.bio` (an array of paragraphs). If `aboutMe.portrait` (`{ link, alt }`, a square image in `public/assets/`) is set it shows beside the text from 48rem; it is unset now, so the section is text-only.
- **Site metadata and shared copy come from `data.ts`:** `siteMeta` (title, description, `siteUrl`, social image `assets/og.png`), `footerCopy` (footer heading and line) and `resumeUrl` (used by both the Resume nav link and the footer button; currently the old resume link). `siteUrl` must keep `/portfolio/` because `configure-pages` only injects `basePath` in CI, and the image path stays relative to it so og:image resolves to an absolute URL under `/portfolio/`.
- **Sections are anchored by id** (`about` is the About section; `experience`, `projects`, and `contact` on the footer), passed as the `anchor` prop from `page.tsx`; nav links in `navData` scroll to them (`href: '#about'`, ...). The footer (`footer.tsx`, styles in `layout.css`) shows an email button, GitHub and LinkedIn buttons and the Resume link (`resumeUrl`), each only when set; the Contact nav link is enabled now that `contact` has values (set `disabled: true` on it to hide it again).
- **Only `nav.tsx` and `theme-toggle.tsx` are client components** (`'use client'`, for the mobile menu and the colour-mode toggle). Everything else renders at build time.
- **Colour mode:** follows the OS until the header toggle is pressed, then the choice is stored in `localStorage` (`theme-mode`) and set as `data-mode` on `<html>`. `layout.tsx` has an inline `<script>` in `<head>` that applies the stored value before first paint (no flash); it must stay tiny and dependency-free, and `<html>` carries `suppressHydrationWarning` for it. The toggle's icon is chosen in CSS, so the server HTML is the same for everyone.
- **No third-party scripts:** the site loads no analytics, chat or other third-party scripts. Adding one is a deliberate change that needs a plan and approval.

## Conventions

- ESLint (`eslint.config.mjs`, extending `eslint-config-next/core-web-vitals`): single quotes, semicolons, 2-space indent, no multiple spaces. A string that needs an apostrophe uses double quotes with `// eslint-disable-next-line quotes` above it, as in `data.ts`.
- Formatting follows `.vscode/settings.json`: Prettier with single quotes, print width 120.
- **Plain CSS, no CSS framework or PostCSS config.** All styling is in `app/styles/` (imported by `app/globals.css`); Next's built-in PostCSS handles it, so there is no `postcss.config.js`. Component styles use class names (`.btn`, `.card`, `.chip`, section classes), not utility classes. The mobile/desktop nav switches at 48rem (`app/styles/layout.css`).
- **Design tokens (`app/styles/`).** `tokens.css` has two tiers: primitives (`--sp-*`, `--radius-*`, `--color-gray-*`, `--color-primary-*` pine, ...) and semantic tokens (`--surface-*`, `--text-*` (`--text-on-brand` is the label colour on solid pine fills: white in light, gray-900 in dark; use it on `--interactive-primary-*` and `--surface-bg-brand`), `--border-*`, `--interactive-*`, `--elevation-*`); components use the semantic ones. Light is the default on `:root`; dark applies under `prefers-color-scheme: dark` unless `<html data-mode="light">`, and always under `data-mode="dark"` (the dark block is written twice, keep both identical). Breakpoints in plain CSS are literal: sm 40rem, md 48rem, lg 64rem, xl 80rem.
- **Cascade layers.** `globals.css` imports `base.css` with `layer(base)` and then `layout.css` and `sections.css` with `layer(components)`; layer order is import order (Next's bundler moves a leading `@layer a, b;` statement to the end, so don't rely on one), so a component rule beats a base rule whatever its specificity. Keep both layered and base first. `tokens.css` (custom properties only) is unlayered. `base.css` also holds the reset (it replaces the old framework preflight). Link colour there applies only to bare `<a>` and `.link`; classed links inherit.
- Colours: components use the semantic tokens only (light and dark), never raw hex values or primitives.
- **Experience timeline** (`experience.tsx`) is a static ordered list of every job in data order, with a line and ring markers drawn in CSS (`.timeline*` in `sections.css`); from 48rem each item is a two-column grid. `.section` has no max-width: sections and the hero share the full 65rem container, and text blocks cap their own measure.
- **Asset URLs go through `asset()` (`app/lib/asset.ts`).** `data.ts` keeps `./assets/...` paths, but those only resolve from the home page; pages under `/projects/` need root-relative URLs, and neither `next/image` (unoptimized) nor `<img>` adds the Pages `basePath`. `asset()` prefixes `process.env.__NEXT_ROUTER_BASEPATH`, which Next defines from the `basePath` that `configure-pages` injects in CI (empty locally). Nav hash links are root-relative (`/#about`) for the same reason. To check basePath behaviour, temporarily add `basePath: '/portfolio'`, build, and serve `out/` from a `portfolio/` subfolder.
- Images go through `next/image` with `images: { unoptimized: true }`, which a static export needs. Keep asset paths relative (`./assets/...`).
- `next.config.js` must stay a plain `.js`/`.cjs`/`.mjs` object literal: `actions/configure-pages` (`static_site_generator: next`) parses and rewrites it on the runner, and doesn't read `.ts`. `agentRules: false` stops Next writing into AGENTS.md during `next dev`.
- Static export only: no API routes, server actions, middleware, or anything else that needs a Node server at runtime.

## Deployment

Pushing to `main` deploys: `.github/workflows/nextjs.yml` builds the site and publishes `out/` to GitHub Pages. Nothing else deploys; a merge into `main` is a release. Node 24 is required: it is pinned in `.nvmrc` (which both workflows read via `actions/setup-node` `node-version-file`), `engines` in `package.json`, and `engine-strict=true` in `.npmrc`, so `npm install`/`npm ci` refuse to run on any other Node. The build job's `next build` already writes `out/` (`output: 'export'`), so there is no separate `next export` step; `actions/configure-pages` with `static_site_generator: next` still injects `basePath` and the export settings into `next.config.js` at build time.

Branches: `dev` is the integration branch and `main` the release branch. Task branches are `feature/YYYYMMDD-short-name` or `bug/YYYYMMDD-short-name`, cut from `dev` and merged back into `dev` by pull request. A release is a pull request from `dev` into `main`. Pushing to `dev` doesn't deploy, and `dev` has no preview site, so check changes locally (see "Key commands").
