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
  tldr: string;
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
    tldr?: string;
    description?: string;
    techLabels?: TechLables[];
    images?: { [name: string]: { link: string; alt?: string; default?: boolean } };
    links?: ProjectLinks;
    disabled?: boolean;
  };
}
