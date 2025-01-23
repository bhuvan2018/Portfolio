export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}