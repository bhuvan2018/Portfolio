import { Code2, Database, Layout, Server, Shield, Wrench } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: (Skill & { icon: any; description: string })[] = [
  {
    name: 'Frontend Development',
    level: 90,
    icon: Layout,
    description: 'React, Vue, Angular, and modern CSS frameworks',
  },
  {
    name: 'Backend Development',
    level: 85,
    icon: Server,
    description: 'Node.js, Python, Java, and RESTful APIs',
  },
  {
    name: 'Database Management',
    level: 80,
    icon: Database,
    description: 'MongoDB, PostgreSQL, MySQL, Redis',
  },
  {
    name: 'DevOps',
    level: 75,
    icon: Wrench,
    description: 'Docker, Kubernetes, CI/CD, AWS',
  },
  {
    name: 'Security',
    level: 70,
    icon: Shield,
    description: 'Web security, authentication, encryption',
  },
  {
    name: 'Testing',
    level: 85,
    icon: Code2,
    description: 'Jest, Cypress, unit and e2e testing',
  },
];