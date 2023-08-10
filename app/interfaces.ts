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
