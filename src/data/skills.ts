import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: (Skill & { icon: any; description: string })[] = [
  {
    name: 'Frontend Development',
    level: 90,
    icon: Layout,
    description: 'HTML, CSS, Tailwind CSS, JavaScript, React',
  },
  {
    name: 'Backend & APIs',
    level: 85,
    icon: Server,
    description: 'Node.js, Express.js, Go, REST APIs',
  },
  {
    name: 'Database Management',
    level: 85,
    icon: Database,
    description: 'PostgreSQL, MySQL',
  },
  {
    name: 'Cloud & DevOps',
    level: 80,
    icon: Wrench,
    description: 'Docker, AWS EC2, Amplify, S3',
  },
  {
    name: 'Tools & Testing',
    level: 75,
    icon: Code2,
    description: 'Git, GitHub, Postman, VS Code, Swagger, Playwright, Vitest, Supertest',
  }
];
