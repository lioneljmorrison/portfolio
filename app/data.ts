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
    id: 'UA',
    company: 'Under Armour',
    title: 'Sr. Software Engineer',
    dates: { start: '2022-09-12', end: '2023-06-16' },
    highlights: [
      'Lead global deployment rollouts and hotfixes working alongside developers and QA engineers to identify non-production-ready items',
      'Instrumental in new search engine implementation: $30M sales lift, 50% faster search, and improved accuracy',
      'Proficiently identified, logged, and resolved issues',
      'Actively engaged in standups and proficiently utilized Jira for recording and tracking work',
      'Collaborated with creative translating UI layouts into functional code implementations',
      'Conducted peer reviews of code for both contractors and full-time employees',
      'Utilized SFRA for crafting high-quality, robust code',
    ],
  },
  {
    id: 'NI',
    company: 'Nivel Parts and Manufacturing',
    title: 'Web Application Developer',
    dates: { start: '2021-08-12', end: '2022-08-12' },
    highlights: [
      'Implemented Scrum into development, marketing, and design teams',
      'Implemented Git and CircleCI for code tracking, code review, and deployment',
      'Introduced TypeScript and Git as standards for new development',
      'Created serverless Lambda API for data consumption from KiboCommerce',
      'Collaborated cross-functionally for UI/UX and SEO enhancements',
      // eslint-disable-next-line quotes
      "Architected serverless API to synchronization 3rd party APIs with companies' source of truth",
    ],
  },
  {
    id: 'RL',
    company: 'Redleaf Software',
    title: 'Web Application Developer',
    dates: { start: '2018-11-01', end: '2021-08-12' },
    highlights: [
      // eslint-disable-next-line quotes
      "Led greenfield Angular development for Importing revenue management files into a data-focused SPA dashboard providing market intelligence to optimize hoteliers' revenue through data analysis, forecasts, and budgets",
      'Significantly decreased report generation time by 60-75% and achieved exponential accuracy improvements freeing up employee time',
      'Proactively collaborated with product owners to drive UI/UX design and implementation using Adobe XD',
      'Conducted unit testing to achieve code coverage of the most critical functions',
      'Orchestrated code deployment of Firebase Functions and sites for User Acceptance Testing',
    ],
  },
  {
    id: 'PBG',
    company: 'Porter Brook Group',
    title: 'Full Stack Developer',
    dates: { start: '2011-06-01', end: '2018-11-01' },
    highlights: [
      'Spearheaded greenfield social, eCommerce, and IoT solutions for local and national businesses',
      'Implemented DevOps, Agile, and Kanban project management methodologies',
      'Advocated for an API-first approach in G2B, B2B, and B2C development',
      'Utilized Linux-based cloud hosting on AWS EC2',
      'Successfully integrated payment APIs from Stripe and Authorize.net',
      'Created IoT-based connectivity microservice using Express.js, MariaDB, and PHP',
    ],
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
  // Work projects stay `disabled: true` until they are cleared for public view.
  pulse: {
    name: 'Pulse',
    kind: 'work',
    problem:
      // eslint-disable-next-line quotes
      "SEO reporting was outsourced to an agency, and the insight arrived late, generic and disconnected from the team's actual work queue.",
    what: 'Pulls Search Console, GA4, Ahrefs and PageSpeed data into one graph-backed model, surfaces SEO and AI-search opportunities, and turns them into ClickUp tasks.',
    techLabels: ['Go', 'FalkorDB', 'Typesense', 'GA4 API', 'Search Console API', 'Ahrefs API', 'ClickUp API'],
    // Screenshot not supplied yet: expected ./assets/pulse.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Pulse screenshot' } },
    disabled: true,
  },
  alembic: {
    name: 'Alembic Studio',
    kind: 'work',
    // eslint-disable-next-line quotes
    problem: "MRCOOL's product imagery and marketing assets lived in a rented DAM (Cloudinary), with cost and lock-in to match.",
    what: 'An internally owned DAM. Teams upload, organize, search and publish assets across workspaces; partners get public or PIN-protected release pages, no account needed.',
    techLabels: ['Go', 'Next.js', 'Docker Compose', 'Cloudflare Tunnel', 'GitHub Actions', 'GHCR'],
    // Screenshot not supplied yet: expected ./assets/alembic-studio.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Alembic Studio screenshot' } },
    disabled: true,
  },
  squism: {
    name: 'Squism',
    kind: 'personal',
    problem: 'I wanted a self-hosted digital asset manager I fully control, without paying for a SaaS DAM.',
    what: 'A DAM with labels, saved views, drag-and-drop, bundles, QR sharing and a dependency tree. Self-hosted and publicly reachable through a Cloudflare Tunnel.',
    detail: 'Go back end covered by an end-to-end test suite.',
    techLabels: ['Go', 'Next.js 16', 'SQLite', 'Docker Compose', 'GHCR', 'Cloudflare Tunnel'],
    links: {
      Live: { link: 'https://squism.net' },
      // TODO: GitHub repo URL pending
    },
    // Screenshot not supplied yet: expected ./assets/squism.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Squism screenshot' } },
  },
  wisper: {
    name: 'Wisper',
    kind: 'personal',
    // eslint-disable-next-line quotes
    problem: "Wispr Flow-style voice dictation isn't available on Windows and Linux in a form that runs locally.",
    what: 'System-wide dictation with local speech-to-text (whisper.cpp) plus a small local model that cleans up the transcript. Optionally routes to a self-hosted OpenAI-compatible endpoint.',
    techLabels: ['Go', 'whisper.cpp', 'Qwen3-0.6B', 'OpenAI-compatible API'],
    // TODO: GitHub repo URL pending (add a GitHub link)
    // Screenshot not supplied yet: expected ./assets/wisper.png
    images: { default: { link: './assets/image-placeholder.png', alt: 'Wisper screenshot' } },
  },
  partnerPortal: {
    name: 'Partner Portal',
    kind: 'work',
    // eslint-disable-next-line quotes
    problem: "Partners needed a portal, but the job didn't justify cloud infrastructure costs.",
    // eslint-disable-next-line quotes
    what: "A Next.js partner portal running on a Raspberry Pi Zero 2W under PM2. SQLite is continuously replicated to Cloudflare R2 with Litestream, so the box is disposable and the data isn't.",
    techLabels: ['Next.js', 'SQLite', 'Litestream', 'Cloudflare R2', 'PM2', 'Raspberry Pi'],
    // Screenshot not supplied yet: expected ./assets/partner-portal.png
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
        link: './assets/scraper.svg',
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
    images: { default: { link: './assets/clacks-tdd.png' } },
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
    images: { default: { link: './assets/the-watch.png' } },
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
    images: { default: { link: './assets/clacks-mock.png' } },
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
