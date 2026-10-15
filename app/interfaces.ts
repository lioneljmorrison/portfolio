export type TechLables =
  | 'LESS'
  | 'SCSS'
  | 'Tailwind CSS'
  | 'Angular'
  | 'TypeScript'
  | 'JavaScript'
  | 'Next.js'
  | 'Nest.js'
  | 'React'
  | 'Firebase'
  | 'Firestore'
  | 'AWS'
  | 'Lambda'
  | 'PHP'
  | string;

export interface Job {
  id: string;
  company: string;
  title: string;
  dates: {
    start: string;
    end?: string;
  };
  tldr?: string;
  highlights?: string[];
}

export interface AboutMe {
  intro: string;
  name: string;
  role?: string;
  tldr: string;
  pitch?: string;
  // Paragraphs of the About section.
  bio: string[];
  // Square image shown beside the About text; the About section is text-only when unset.
  portrait?: { link: string; alt: string };
  quote?: {
    text: string;
    author: string;
  };
  skillsTitle: string;
  skills: string[];
}

export interface NavLinks {
  [label: string]: NavLink;
}

export interface NavLink {
  href: string;
  target?: '_blank' | string;
  disabled?: boolean;
  cssClass?: string;
}

export interface ProjectLinks {
  [name: string]: ProjectLinkData;
}

export interface ProjectLinkData {
  link: string;
  icon?: string;
}

export interface Projects {
  [project: string]: {
    name: string;
    // URL segment of the case-study page (/projects/<slug>); current (non-earlier) projects only.
    slug?: string;
    // One line shown on the card and under the page title.
    tagline?: string;
    client?: 'MRCOOL' | 'Personal';
    // Stat tiles at the top of the case study.
    results?: { value: string; label: string }[];
    // 2-4 bullets for "The Approach", after `what`.
    approach?: string[];
    // Architecture diagram shown on the case-study page (public/assets/diagrams/<slug>.svg).
    diagram?: { link: string; alt: string };
    gallery?: { src: string; alt: string; caption: string }[];
    tldr?: string;
    problem?: string;
    what?: string;
    detail?: string;
    kind?: 'work' | 'personal';
    // Why a card has no links: shown as a muted line when it has none.
    access?: 'internal' | 'private';
    earlier?: boolean;
    // Shown as "Role" in the Project Info aside; a {{TODO}} placeholder renders as is.
    role?: string;
    description?: string;
    techLabels?: TechLables[];
    images?: { [name: string]: { link: string; alt?: string; default?: boolean } };
    links?: ProjectLinks;
    disabled?: boolean;
  };
}

// github and linkedin are full URLs; email is a bare address (no mailto:).
export interface Contact {
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  siteUrl: string;
  ogImage: string;
  ogImageAlt: string;
}

export interface FooterCopy {
  title: string;
  text: string;
}
