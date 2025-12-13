export enum SkillCategory {
  Programming = 'programming',
  TechStack = 'tech stack',
  Database = 'database',
  Framework = 'framework',
  Tool = 'tool'
}



export interface Skill {
  name: string,
  imageUrl: string,
  level: number,
  category: SkillCategory
}

export interface Experience {
  position: string,
  companyName: string,
  startedDate: Date,
  endedDate: Date,
  workAchievements: string[]
}

export interface Contact {
  name: string,
  iconStyle: string,
  link: string,
  title: string
}

export interface Resume {
  name: string,
  file: string
}

interface ProjectUrl {
  title: string,
  githubUrl: string,
  hostingUrl: string,
  gitIconUrl: string,
  demoIcon: string,
}

export interface Project {
  name: string,
  description: string,
  features: string[],
  startDate: string,
  endDate: string,
  projectUrls: ProjectUrl[]

}


export interface Package {
  name: string;
  imageUrl: string;
  description: string;
  type: 'Python' | 'NPM';
  version: string;
  category: PackageCategory;
  categories: string[];
}

export enum PackageCategory {
  PYTHON = 'python',
  //   NPM = 'npm',
  //   WEB_DEVELOPMENT = 'web development',
  //   DATA_SCIENCE = 'data science',
  //   MACHINE_LEARNING = 'machine learning',
  BACKEND = 'backend',
  //   FRONTEND = 'frontend',
  TESTING = 'testing',
  UTILITIES = 'utilities'
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  url: string;
  publishedDate: Date;
  category: ArticleCategory;
  tags: string[];
  views: number;
  likes: number;
  platform?: string; // Medium, Dev.to, Personal Blog, etc.
}

export enum ArticleCategory {
  WEB_DEVELOPMENT = 'web development',
  DATA_SCIENCE = 'data science',
  //   MACHINE_LEARNING = 'machine learning',
  //   DEVOPS = 'devops',
  //   TUTORIALS = 'tutorials',
  //   TECH_TRENDS = 'tech trends',
  PROGRAMMING_TIPS = 'programming tips',
  FRAMEWORKS = 'frameworks',
  DATABASES = 'databases'
}

export interface Certification {
  name: string;
  issuer: string;
  date: Date;
  imageUrl: string;
  url: string;
  skills: string[];
}
