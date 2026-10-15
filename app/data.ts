import { AboutMe, Contact, FooterCopy, Job, NavLinks, Projects, SiteMeta } from './interfaces';

export const siteMeta: SiteMeta = {
  title: 'Lionel Morrison — Lead Software Engineer',
  description:
    'Lead software engineer building internal platforms, developer tooling and AI-assisted workflows in Go and TypeScript. Northern Vermont.',
  // Carries /portfolio/ itself: configure-pages only injects basePath in CI. Image paths are relative to it.
  siteUrl: 'https://lioneljmorrison.github.io/portfolio/',
  ogImage: 'assets/og.png',
  ogImageAlt: 'Lionel Morrison, Lead Software Engineer: Go, TypeScript, Agentic AI',
};

// Points to the old resume until a new link is available.
export const resumeUrl = 'https://drive.google.com/file/d/1_Lq07acaEXcrddp59ruIDXjVm3cvT96-/view?usp=sharing';

export const footerCopy: FooterCopy = {
  title: 'Get in touch',
  // eslint-disable-next-line quotes
  text: "Have a platform to build or a team to grow? I'd like to hear about it.",
};

export const jobsData: Job[] = [
  {
    id: 'MRCOOL',
    company: 'MRCOOL',
    title: 'Lead Software Engineer – Digital Experience',
    dates: { start: '2024-01-15' },
    highlights: [
      'Founded and lead a 5-person Digital Experience team (3 engineers, 1 QA, 1 PM) and set an agentic-first engineering approach across company projects',
      // eslint-disable-next-line quotes
      "Established the team's CI/CD standards: TDD by default, mandatory linting and pre-commit test gates, Storybook for every UI change, Playwright E2E and visual-regression tests, axe accessibility checks, and deploys through GitHub Actions and Vercel",
      'Alembic: replaced Cloudinary with an in-house asset platform (AI integrations, semantic search, MCP server) serving 1M+ requests/month across mrcool.com and mrcooldiy.com, at 93.8% annual cost savings and 1,524% ROI',
      'Pulse: replaced an $80K/yr SEO agency with an in-house SEO/AIO platform on ~$1.2K/yr of data APIs (98.5% cost reduction) that turns findings into LLM-generated ClickUp tasks',
      'System Configurator: replaced a 91K-row Excel configurator with a graph-based API and MCP server generating ~2.9M valid configurations with sub-ms responses',
      // eslint-disable-next-line quotes
      "Guided non-engineers (a Director of Customer Service, a product consultant) to ship their own internal tools with AI coding tools, and wrote the team's agent configuration and standards, all inside the same CI quality gates as human-written code",
    ],
  },
  {
    id: 'UA',
    company: 'Under Armour',
    title: 'Sr. Front-end Engineer',
    dates: { start: '2022-09-12', end: '2023-06-16' },
    highlights: [
      'Implemented an AI-based search engine: $30M sales lift, 50% faster search',
      'Led global deployment rollouts and hotfixes with dev and QA; reviewed code for contractors and full-time staff',
    ],
  },
  {
    id: 'NI',
    company: 'Nivel',
    title: 'Full Stack Engineer',
    dates: { start: '2021-08-12', end: '2022-09-12' },
    highlights: [
      'Increased deployment frequency 200% by introducing Git, CircleCI and code review; made TypeScript the standard for new development',
      // eslint-disable-next-line quotes
      "Built serverless Lambda APIs syncing KiboCommerce and third-party data with the company's source of truth; introduced Scrum across dev, marketing and design",
    ],
  },
  {
    id: 'RL',
    company: 'Redleaf Software',
    title: 'Front-end Engineer',
    dates: { start: '2018-11-15', end: '2021-08-12' },
    highlights: [
      'Built a greenfield Angular SPA for hotel revenue management (forecasts, budgets, market intelligence), cutting report-generation time 60–75% and doubling reporting accuracy',
      'Ran Firebase Functions deployments and UAT environments; drove UI/UX with product owners',
    ],
  },
  {
    id: 'PBG',
    company: 'Porter Brook Group',
    title: 'Full Stack Developer',
    dates: { start: '2011', end: '2018' },
    highlights: [
      'Greenfield e-commerce, social and IoT solutions; Stripe and Authorize.net integrations; API-first B2B/B2C on AWS EC2',
    ],
  },
  {
    id: 'LT',
    company: 'Lifeware TEK',
    title: 'DevOps / Software Developer',
    dates: { start: '2005', end: '2011' },
    highlights: ['Hybrid Linux/Windows hosting; custom build and SQL deployment tooling'],
  },
];

export const aboutMe: AboutMe = {
  // eslint-disable-next-line quotes
  intro: "Hi, I'm",
  name: 'Lionel Morrison',
  role: 'Lead Software Engineer',
  tldr: 'Experienced Full Stack Developer focused on Continuous Integration, Continuous Development, developing APIs, and adding a sprinkle of Magic to web applications.',
  // eslint-disable-next-line quotes
  pitch: "I build internal platforms, self-serve developer tooling and AI-assisted workflows. I lead MRCOOL's Digital Experience team, where we've replaced two vendor contracts with in-house platforms at 93.8% and 98.5% savings.",
  bio: [
    // eslint-disable-next-line quotes
    "I'm a lead software engineer with over 20 years across startups and Fortune 500 companies. I founded and lead MRCOOL's Digital Experience team (three engineers including me, plus QA and a PM), set its agentic-first engineering approach, and still write a lot of the code: Go services, Next.js front ends and the platforms underneath.",
    'I prefer owning the stack over renting it: insourcing vendor tools when the numbers work, and putting AI agents to work inside the same CI quality gates as human-written code. I grew up in the UK, spent years in Florida, and have lived in northern Vermont for about 16 years.',
  ],
  skillsTitle: 'Current Stack',
  skills: [
    'Go',
    'TypeScript',
    'Next.js',
    'React',
    'Claude Code',
    'MCP servers',
    'Docker',
    'GitHub Actions',
    'Cloudflare (R2, Edge)',
    'FalkorDB',
    'Typesense',
    'Playwright',
  ],
  quote: {
    author: 'Arthur C. Clarke',
    text: 'Any sufficiently advanced technology is indistinguishable from magic',
  },
};

export const contact: Contact = {
  email: 'lionel@morrison.mobi',
  github: 'https://github.com/lioneljmorrison',
  linkedin: 'https://www.linkedin.com/in/lionelmorrison/',
};

export const navData: NavLinks = {
  About: {
    href: './#about',
  },
  Experience: {
    href: './#experience',
  },
  Projects: {
    href: './#projects',
  },
  Contact: {
    href: './#contact',
  },
  Resume: {
    href: resumeUrl,
    target: '_blank',
  },
};

export const projectData: Projects = {
  // Work cards without a public link carry `access: 'internal'` and say so on the card.
  alembic: {
    name: 'Alembic',
    kind: 'work',
    slug: 'alembic',
    tagline: 'In-house asset platform that replaced Cloudinary.',
    client: 'MRCOOL',
    role: '{{TODO: Lionel to confirm, e.g. Lead engineer & architect}}',
    results: [
      { value: '93.8%', label: 'annual cost savings' },
      { value: '1,524%', label: 'ROI' },
      { value: '1M+', label: 'requests per month' },
    ],
    diagram: { link: './assets/alembic/architecture.svg', alt: 'Alembic architecture diagram' },
    // eslint-disable-next-line quotes
    problem: "MRCOOL's product imagery and marketing assets lived in Cloudinary, a rented platform with costs and lock-in to match.",
    what: 'An in-house enterprise asset platform with AI integrations, semantic search and an MCP server, serving 1M+ requests a month across mrcool.com and mrcooldiy.com.',
    techLabels: ['Go', 'Next.js', 'Typesense', 'MongoDB', 'FalkorDB', 'DragonflyDB', 'Cloudflare R2', 'Docker'],
    access: 'internal',
    images: {
      default: {
        link: './assets/alembic/asset-grid.png',
        alt: 'Alembic Studio asset browser: a grid of MRCOOL product and lifestyle images with groups, labels and search',
      },
    },
    gallery: [
      {
        src: './assets/alembic/manage.png',
        alt: 'Alembic Studio Manage page: cards for workspaces, users, presets, API keys, webhooks, audit log and more',
        caption: 'Manage: workspaces, users, presets, API keys, webhooks, audit log and more',
      },
      {
        src: './assets/alembic/asset-detail.png',
        alt: 'Asset detail flyout showing type, size, dimensions and upload dates beside the asset grid',
        caption: 'Asset detail: metadata and dimensions',
      },
      {
        src: './assets/alembic/asset-colours.png',
        alt: 'Colour analysis panel listing predominant colours and top hex colours with percentages for an asset',
        caption: 'Colour analysis: predominant and top colours extracted from each asset',
      },
    ],
  },
  pulse: {
    name: 'Pulse',
    kind: 'work',
    slug: 'pulse',
    tagline: 'In-house SEO/AIO platform that replaced an $80K/yr agency.',
    client: 'MRCOOL',
    role: '{{TODO: Lionel to confirm, e.g. Lead engineer & architect}}',
    results: [
      { value: '98.5%', label: 'cost reduction' },
      { value: '~$1.2K/yr', label: 'in data APIs' },
    ],
    diagram: { link: './assets/pulse/architecture.svg', alt: 'Pulse architecture diagram' },
    // eslint-disable-next-line quotes
    problem: "MRCOOL paid an SEO agency $80K a year for reporting that arrived late and sat apart from the team's work queue.",
    what: 'Ingests Search Console, GA4, Ahrefs, DataForSEO and PageSpeed data; flags backlink, keyword, cannibalization and accessibility issues; and files LLM-generated recommendations as ClickUp tasks.',
    techLabels: [
      'Go',
      'FalkorDB',
      'Typesense',
      'GPT',
      'Search Console API',
      'GA4 API',
      'Ahrefs API',
      'DataForSEO',
      'ClickUp API',
    ],
    access: 'internal',
    images: {
      default: {
        link: './assets/pulse/sitemap-health.png',
        alt: 'Pulse sitemap health: pages listed in the sitemap that are broken, redirecting or set not to index',
      },
    },
    gallery: [
      {
        src: './assets/pulse/product-catalogue.png',
        alt: 'Pulse product catalogue: products discovered from the sitemap crawl, with category and entity',
        caption: 'Product catalogue: products discovered from the sitemap crawl, with category and entity',
      },
    ],
  },
  systemSelector: {
    name: 'System Selector',
    kind: 'work',
    slug: 'system-selector',
    tagline: 'A graph-based configurator API that replaced a 91K-row spreadsheet.',
    client: 'MRCOOL',
    role: '{{TODO: Lionel to confirm, e.g. Lead engineer & architect}}',
    results: [
      { value: '~2.9M', label: 'valid configurations' },
      { value: 'sub-ms', label: 'responses' },
    ],
    diagram: { link: './assets/system-selector/architecture.svg', alt: 'System Selector architecture diagram' },
    problem:
      // eslint-disable-next-line quotes
      "Mini-split system configurations lived in a manually maintained 91K-row Excel sheet that couldn't handle mixed wall-mount and cassette bundles.",
    // eslint-disable-next-line quotes
    what: "A graph-based API and MCP server behind MRCOOL's online system selector. It generates ~2.9M valid configurations with sub-ms responses and sizes systems with Manual J/S estimates from local winter design temperatures.",
    techLabels: ['Go', 'FalkorDB', 'MongoDB', 'Docker', 'MCP'],
    access: 'internal',
    // Screenshot not supplied yet: expected ./assets/system-selector/screenshot.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'System Selector screenshot' } },
  },
  secretsManager: {
    name: 'Secrets Manager',
    kind: 'work',
    slug: 'secrets-manager',
    tagline: 'Runtime secret injection so developers never handle shared credentials.',
    client: 'MRCOOL',
    role: '{{TODO: Lionel to confirm, e.g. Lead engineer & architect}}',
    diagram: { link: './assets/secrets-manager/architecture.svg', alt: 'Secrets Manager architecture diagram' },
    problem: 'Developers were handling shared env vars, tokens and keys directly.',
    what: 'Injects secrets at runtime so developers never handle shared credentials; v2 adds a locally encrypted credential store.',
    techLabels: ['Go', 'MongoDB'],
    access: 'internal',
    images: {
      default: {
        link: './assets/secrets-manager/web-ui.png',
        // eslint-disable-next-line quotes
        alt: "Secrets Manager: a project's environments and variables, with every value masked",
      },
    },
  },
  backpack: {
    name: 'Backpack',
    kind: 'personal',
    slug: 'backpack',
    tagline: 'Persistent project memory and reviewable plans for Claude.',
    client: 'Personal',
    role: 'Creator',
    results: [
      { value: '51', label: 'tasks in ~8 hours' },
      { value: '26', label: 'self-generated ideas' },
    ],
    diagram: { link: './assets/backpack/architecture.svg', alt: 'Backpack architecture diagram' },
    problem: 'AI coding agents forget the project between sessions and produce plans too big to review.',
    what: 'An open-source Kanban workflow and MCP server that gives Claude persistent project memory and bite-sized, reviewable plans.',
    techLabels: ['Go', 'SQLite', 'graph DB', 'MCP'],
    links: {
      GitHub: { link: 'https://github.com/lioneljmorrison/backpack' },
    },
    images: {
      default: {
        link: './assets/backpack/kanban.png',
        alt: 'Backpack Kanban board: phase summary, an approval queue and story columns',
      },
    },
  },
  s3srv: {
    name: 'S3srv',
    kind: 'personal',
    slug: 's3srv',
    tagline: 'S3-compatible object storage, built in a day by agents on Backpack.',
    client: 'Personal',
    role: 'Creator',
    results: [
      { value: '~8 hours', label: 'to build' },
    ],
    diagram: { link: './assets/s3srv/architecture.svg', alt: 'S3srv architecture diagram' },
    problem: 'Self-hosted services needed S3-compatible object storage I fully own, without running MinIO.',
    what: 'An S3-compatible MinIO replacement with chunking, deduplication, tar-packed small-file batching and recovery.',
    // eslint-disable-next-line quotes
    detail: "Backpack's first run: 51 tasks done and 26 self-generated ideas in about 8 hours.",
    techLabels: ['Go', 'SQLite', 'Docker', 'S3 API'],
    access: 'private',
    // Screenshot not supplied yet: expected ./assets/s3srv/screenshot.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'S3srv screenshot' } },
  },
  wisper: {
    name: 'Wisper',
    kind: 'personal',
    slug: 'wisper',
    tagline: 'Private, on-device dictation for Windows and Linux.',
    client: 'Personal',
    role: 'Creator',
    results: [
      { value: '422 ms', label: 'average latency, key release to text' },
      { value: '100%', label: 'local' },
    ],
    diagram: { link: './assets/wisper/architecture.svg', alt: 'Wisper architecture diagram' },
    // eslint-disable-next-line quotes
    problem: "Wispr Flow-style voice dictation isn't available on Windows and Linux in a form that runs locally.",
    what: 'Privacy-first, system-wide dictation: on-device transcription (whisper.cpp) and LLM cleanup (Qwen3-0.6B), about 422 ms on average from key release to pasted text, fully local.',
    techLabels: ['Go', 'whisper.cpp', 'Qwen3-0.6B'],
    access: 'private',
    images: {
      default: {
        link: './assets/wisper/dashboard.png',
        alt: 'Wisper dashboard: words per minute, latency, words dictated and a usage streak',
      },
    },
    gallery: [
      {
        src: './assets/wisper/caramel.png',
        alt: 'The Wisper dashboard in the caramel theme',
        caption: 'Caramel theme',
      },
      {
        src: './assets/wisper/styles.png',
        alt: 'Styles screen listing per-app writing styles: Formal, Casual, very casual and Technical',
        caption: 'Styles: per-app writing styles (Formal, Casual, very casual, Technical)',
      },
      {
        src: './assets/wisper/word-tools.png',
        alt: 'Word Tools screen with a custom dictionary that corrects how names and terms are spelled',
        caption: 'Word Tools: a custom dictionary that fixes how names and terms are spelled',
      },
      {
        src: './assets/wisper/settings-hotkeys.png',
        alt: 'Settings screen showing theme choices and hotkeys for push-to-talk, hands-free and AI ask',
        caption: 'Settings: themes and hotkeys for push-to-talk, hands-free and AI ask',
      },
      {
        src: './assets/wisper/speech-models.png',
        alt: 'Speech-to-text settings listing local whisper.cpp models from tiny.en up to large-v3-turbo',
        caption: 'Speech-to-text: local whisper.cpp models, from tiny.en to large-v3-turbo',
      },
      {
        src: './assets/wisper/correction-model.png',
        alt: 'Local correction model settings showing Qwen3-0.6B handling spoken self-corrections offline',
        caption: 'Local correction model: Qwen3-0.6B handles spoken self-corrections offline',
      },
      {
        src: './assets/wisper/inference-backend.png',
        alt: 'Inference backend options (CUDA, Vulkan or CPU) and the optional AI cleanup pass',
        caption: 'Inference backend (CUDA, Vulkan or CPU) and the optional AI cleanup pass',
      },
      {
        src: './assets/wisper/app-rules.png',
        alt: 'App classification rules that decide which apps count as personal, work or email',
        caption: 'App classification rules: which apps count as personal, work or email',
      },
    ],
  },
  squism: {
    name: 'Squism',
    kind: 'personal',
    slug: 'squism',
    tagline: 'A self-hosted digital asset manager.',
    client: 'Personal',
    role: 'Creator',
    diagram: { link: './assets/squism/architecture.svg', alt: 'Squism architecture diagram' },
    problem: 'I wanted a self-hosted digital asset manager I fully control, without paying for a SaaS DAM.',
    what: 'A DAM with labels, saved views, drag-and-drop, bundles, QR sharing and a dependency tree. Self-hosted and publicly reachable through a Cloudflare Tunnel.',
    detail: 'Go back end covered by an end-to-end test suite.',
    techLabels: ['Go', 'Next.js 16', 'SQLite', 'Docker Compose', 'GHCR', 'Cloudflare Tunnel'],
    links: {
      Live: { link: 'https://squism.net' },
    },
    access: 'private',
    // Screenshot not supplied yet: expected ./assets/squism/screenshot.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Squism screenshot' } },
  },
  partnerPortal: {
    name: 'Partner Portal',
    kind: 'work',
    // eslint-disable-next-line quotes
    problem: "Partners needed a portal, but the job didn't justify cloud infrastructure costs.",
    // eslint-disable-next-line quotes
    what: "A Next.js partner portal running on a Raspberry Pi Zero 2W under PM2. SQLite is continuously replicated to Cloudflare R2 with Litestream, so the box is disposable and the data isn't.",
    techLabels: ['Next.js', 'SQLite', 'Litestream', 'Cloudflare R2', 'PM2', 'Raspberry Pi'],
    // Screenshot not supplied yet: expected ./assets/partner-portal/screenshot.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Partner Portal screenshot' } },
    disabled: true,
  },
  scraper: {
    name: 'Retail Product Scraper',
    kind: 'work',
    // eslint-disable-next-line quotes
    problem: "Product listings on retailer sites drift from the source of truth, and checking them by hand doesn't scale.",
    // eslint-disable-next-line quotes
    what: "Drives real browsers with Playwright, prefers each retailer's embedded structured data where it exists (e.g. Apollo/GraphQL cache blobs), and falls back to Vertex AI with Google Search grounding for structured extraction.",
    techLabels: ['Go', 'Playwright', 'Vertex AI'],
    images: {
      default: {
        link: './assets/retail-product-scraper/architecture.svg',
        alt: 'Diagram: a Playwright browser feeds embedded structured data or Vertex AI extraction into structured product output',
      },
    },
    disabled: true,
  },
  'clacks-tdd': {
    name: 'Clacks TTD',
    tldr: 'Technical design document created for a chat client based on Google Chat',
    techLabels: ['Confluence', 'Technical Writing'],
    links: {
      PDF: { link: 'https://drive.google.com/file/d/17TacmAkk3619XaTAuc0Ex3NuOnIS6ebI/view?usp=sharing' },
    },
    images: { default: { link: './assets/clacks/tdd.png' } },
    disabled: true,
  },
  theWatch: {
    name: 'The Watch',
    tldr: 'Born out of need. This project was developed for a local business that needed to monitor its fridges and freezers and alert staff.',
    problem: 'A local business needed to monitor its fridges and freezers and alert staff.',
    techLabels: ['Tailwind CSS', 'Next.js', 'Lambda', 'DynamoDB', 'AWS API', 'Vercel', 'SwitchBot API'],
    links: {
      Figma: {
        link: 'https://www.figma.com/file/3KBVlkFySR6OYqk3vYrTpG/The-Watch?type=design&node-id=102%3A7&mode=design&t=wqgbseJE9ty0UAP2-1',
      },
      TDD: { link: 'https://drive.google.com/file/d/1webghPkOzo18Y6dtgm8XJuzCnVOBp6x6/view?usp=drive_link' },
      Live: { link: 'https://the-watch-nextjs.vercel.app/' },
    },
    images: { default: { link: './assets/the-watch/dashboard.png' } },
    earlier: true,
  },
  clacks: {
    name: 'Clacks (Mockup)',
    tldr: 'High-fidelity mockup of the Clacks Technical Design Document (TDD) based on Google Chat, was created using Angular and SCSS in StackBlitz with flexible layout options. Nb. This is non-functional mock',
    problem: 'A chat client based on Google Chat needed to be seen, not only described in a design document.',
    techLabels: ['TypeScript', 'SCSS', 'Angular', 'StackBlitz'],
    links: {
      StackBlitz: { link: 'https://stackblitz.com/edit/stackblitz-starters-cpngaw?file=src%2Fmain.ts' },
      Mock: { link: 'https://stackblitz-starters-cpngaw.stackblitz.io' },
      TDD: { link: 'https://drive.google.com/file/d/17TacmAkk3619XaTAuc0Ex3NuOnIS6ebI/view?usp=sharing' },
    },
    images: { default: { link: './assets/clacks/mockup.png' } },
    earlier: true,
  },
  stardust: {
    name: 'Stardust',
    tldr: 'Bla bla bla',
    techLabels: ['LESS', 'Nest.js'],
    disabled: true,
  },
  soil: { name: 'Feed My Dirt', tldr: 'Bla bla bla', techLabels: ['Angular', 'Firebase', 'Firestore'], disabled: true },
  books: { name: 'Redux', tldr: 'Bla bla bla', techLabels: ['Angular', 'Firebase', 'Firestore'], disabled: true },
  cidery: {
    name: 'Cidery Datalogger',
    tldr: 'Bla bla bla',
    techLabels: ['Angular', 'Firebase', 'Firestore', 'StackBlitz'],
    disabled: true,
  },
};
