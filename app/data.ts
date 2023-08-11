import { AboutMe, Job, NavLinks, Projects } from './interfaces';

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
  tldr: 'Experienced Full Stack Developer focused on Continuous Integration, Continuous Development, developing APIs, and adding a sprinkle of Magic to web applications.',
  skillsTitle: 'Recent Technology Stack',
  skills: ['SFCC SFRA', 'TypeScript', 'Tailwind CSS', 'Nest.js', 'Next.js', 'React'],
  quote: {
    author: 'Arthur C. Clarke',
    text: 'Any sufficiently advanced technology is indistinguishable from magic',
  },
};

export const navData: NavLinks = {
  'About Me': {
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
    disabled: true,
  },
  Resume: {
    href: 'https://drive.google.com/file/d/1_Lq07acaEXcrddp59ruIDXjVm3cvT96-/view?usp=sharing',
    target: '_blank',
  },
};

export const projectData: Projects = {
  portfolio: {
    name: 'Portfolio v1',
    tldr: 'Created as a way to learn Tailwind CSS. Its is a living project as it fundementally serves as my resume.',
    techLabels: ['Tailwind CSS', 'GitHub Actions', 'Nest.js', 'React'],
    links: {
      GitHub: { link: 'https://github.com/lioneljmorrison/portfolio' },
    },
    images: { default: { link: './assets/portfolio-v1.png' } },
  },
  stardust: {
    name: 'Stardust',
    tldr: 'Bla bla bla',
    techLabels: ['LESS', 'Nest.js'],
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
  },
  clacks: {
    name: 'Clacks (Mockup)',
    tldr: 'This high-fidelity mockup of the Clacks Technical Design Documnet based on Google Chat, was created using Angular and SCSS in StackBlitz with flexable layout options. Nb. This is non-functional mock',
    techLabels: ['TypeScript', 'SCSS', 'Angular', 'StackBlitz'],
    links: {
      'StackBlitz Code': { link: 'https://stackblitz.com/edit/stackblitz-starters-cpngaw?file=src%2Fmain.ts' },
      'StackBlitz Mock': { link: 'https://stackblitz-starters-cpngaw.stackblitz.io' },
    },
    images: { default: { link: './assets/clacks-mock.png' } },
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
