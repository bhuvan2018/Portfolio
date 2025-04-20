import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: (Skill & { icon: any; description: string })[] = [
  {
    name: 'Frontend Development',
    level: 90,
    icon: Layout,
    description: 'HTML, Tailwind-CSS, JavaScript, TypeScript, React.js, Framer-Motion',
  },
  {
    name: 'Backend Development',
    level: 85,
    icon: Server,
    description: 'Next.js, Node.js, Express.js',
  },
  {
    name: 'Mobile App Development',
    level: 85,
    icon: Layout,
    description: 'React Native, Flet',
  },
  {
    name: 'Programming Languages',
    level: 85,
    icon: Code2,
    description: 'C, Java, Python, TypeScript',
  },
  {
    name: 'Database Management',
    level: 80,
    icon: Database,
    description: 'MySQL, MongoDB, Firebase',
  },
  {
    name: 'DevOps',
    level: 75,
    icon: Wrench,
    description: 'Git, Github',
  }
];