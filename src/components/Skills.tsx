import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import type { IconType } from 'react-icons';
import { SiCss, SiDocker, SiExpress, SiGit, SiGithub, SiGo, SiHtml5, SiJavascript, SiMysql, SiNodedotjs, SiPostman, SiPostgresql, SiReact, SiSwagger, SiTailwindcss, SiVitest } from 'react-icons/si';

const technologyIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  React: SiReact,
  JavaScript: SiJavascript,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Go: SiGo,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Swagger: SiSwagger,
  Vitest: SiVitest,
};

const TechnologyChip = ({ name }: { name: string }) => {
  const Icon = technologyIcons[name];
  return <span className="inline-flex h-9 items-center gap-2 border border-white/10 bg-white/[.03] px-2.5 text-xs leading-none text-[#b7c0cb] transition-colors hover:border-[#e6b84c]/50 hover:text-white"><span className="flex h-4 w-4 shrink-0 items-center justify-center text-[#e6b84c]">{Icon ? <Icon size={14} /> : <span className="font-mono text-[9px]">{name === 'AWS EC2' ? 'AWS' : name.slice(0, 2).toUpperCase()}</span>}</span><span className="whitespace-nowrap">{name}</span></span>;
};

const Skills = () => (
  <section id="skills" className="page-panel section border-b border-white/10 bg-[#111820]">
    <div className="section-frame">
      <div className="mb-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="section-heading"><span className="section-label">Professional Skills</span><h2 className="section-title">Skills &amp; Expertise</h2></div><p className="section-copy">A comprehensive overview of my technical proficiency and expertise across various technologies and tools.</p></div>
      <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
        {skillsData.map((skill, index) => <motion.article key={skill.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }} className={`group bg-[#111820] p-7 transition-colors hover:bg-[#18222d] ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <div className="mb-12 flex items-start justify-between"><skill.icon size={25} strokeWidth={1.5} className="text-[#e6b84c]" /><span className="font-mono text-xs text-[#687586]">0{index + 1}</span></div>
          <h3 className="mb-4 text-xl font-semibold tracking-[-.04em] text-white">{skill.name}</h3>
          <div className="flex flex-wrap gap-2">{skill.description.split(', ').map((technology) => <TechnologyChip key={technology} name={technology} />)}</div>
        </motion.article>)}
      </div>
      <p className="mt-10 font-mono text-xs uppercase tracking-[.16em] text-[#687586]">Constantly improving and expanding my skill set</p>
    </div>
  </section>
);

export default Skills;
