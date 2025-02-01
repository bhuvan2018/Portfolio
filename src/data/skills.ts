import { Code2, Database, Layout, Server, Shield, Wrench } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: (Skill & { icon: any; description: string })[] = [
  {
    name: 'Frontend Development',
    level: 90,
    icon: Layout,
    description: 'HTML, BootStrap, Tailwind-CSS, JavaScript, TypeScript, React.js, Framer-Motion',
  },
  {
    name: 'Backend Development',
    level: 85,
    icon: Server,
    description: 'Next.js, Node.js, Express.js, Java',
  },
  {
    name: 'Database Management',
    level: 80,
    icon: Database,
    description: 'MySQL, MongoDB, PostgreSQL',
  },
  {
    name: 'DevOps',
    level: 75,
    icon: Wrench,
    description: 'Git, Github, Docker',
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
    description: 'ThunderClient, Postman',
  },
];