export enum TechTypes {
  html = 'HTML',
  html5 = 'HTML5',
  css = 'CSS',
  css3 = 'CSS3',
  less = 'LESS',
  scss = 'SCSS',
  sass = 'SASS',
  tailwindCss = 'Tailwind CSS',
  angular = 'Angular',
  typescript = 'TypeScript',
  javascript = 'JavaScript',
  es6 = 'ES6',
  nextJs = 'Next.js',
  nestJs = 'Nest.js',
  react = 'React.js',
  firebase = 'Firebase',
  firestore = 'Firestore',
  aws = 'AWS',
  lambda = 'AWS Lambda',
  dynamoDb = 'AWS DynamoDB',
  route53 = 'AWS Route53',
  apiGateway = 'AWS API Gateway',
  s3 = 'AWS S3',
  php = 'PHP',
  stackblitz = 'StackBlitz',
  github = 'Github',
  githubActions = 'Github Actions',
  vercel = 'Vercel',
  switchBot = 'SwitchBot API',
  confluence = 'Confluence',
  jira = 'Jira',
  techWriting = 'TechWriting',
  sfra = 'SFCC SFRA',
  figma = 'Figma',
}

export enum TechIcons {
  less = '',
}

export type TechTypeLabels = keyof typeof TechTypes;

export interface TechLabels {
  [techId: TechTypeLabels | string]: { icon?: string };
}

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
  skills: TechTypeLabels[];
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
    techLabels?: TechTypeLabels[];
    images?: { [name: string]: { link: string; alt?: string; default?: boolean } };
    links?: ProjectLinks;
    disabled?: boolean;
  };
}
