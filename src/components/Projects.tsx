import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { SiArduino, SiCplusplus, SiDaisyui, SiDocker, SiEspressif, SiExpress, SiFlask, SiFramer, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTensorflow, SiThreedotjs } from 'react-icons/si';
import { projectsData } from '../data/projects';

const technologyIcons: Record<string, IconType> = {
  'React.js': SiReact,
  'Tailwind-CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Python: SiPython,
  TensorFlow: SiTensorflow,
  Flask: SiFlask,
  'Three.js': SiThreedotjs,
  DaisyUI: SiDaisyui,
  Docker: SiDocker,
  'Framer-Motion': SiFramer,
  MongoDB: SiMongodb,
  Arduino: SiArduino,
  'C++': SiCplusplus,
  'ESP32 MCU': SiEspressif,
};

const ProjectTechnology = ({ name }: { name: string }) => {
  const Icon = technologyIcons[name];
  return <span className="inline-flex h-9 items-center gap-2 border border-white/10 bg-white/[.03] px-2.5 text-xs leading-none text-[#b7c0cb] transition-colors hover:border-[#e6b84c]/50 hover:text-white"><span className="flex h-4 w-4 shrink-0 items-center justify-center text-[#e6b84c]">{Icon ? <Icon size={14} /> : <span className="font-mono text-[9px]">{name.slice(0, 2).toUpperCase()}</span>}</span><span className="whitespace-nowrap">{name}</span></span>;
};

const ProjectSlide = ({ project, index, direction }: { project: (typeof projectsData)[number]; index: number; direction: number }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  return <motion.article ref={ref} initial={{ opacity: 0, x: direction * 45 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -45 }} transition={{ duration: .45, ease: [.2, .8, .2, 1] }} className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
    <div className="relative aspect-[4/3] overflow-hidden bg-[#151c25]"><motion.img style={{ y: imageY, scale: 1.04 }} src={project.image} alt={project.title} className="h-full w-full object-contain" /><div className="absolute bottom-4 left-4 bg-[#0d1117]/90 px-3 py-2 font-mono text-xs text-[#e6b84c]">PROJECT 0{index + 1}</div></div>
    <div><span className="font-mono text-xs uppercase tracking-[.16em] text-[#e6b84c]">{project.description}</span><h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-.06em] text-white md:text-5xl">{project.title}</h3><p className="mt-6 leading-8 text-[#9aa4b2]">{project.longDescription || project.description}</p>{project.features && <ul className="mt-7 grid gap-2 text-sm text-[#c4cbd4] sm:grid-cols-2">{project.features.slice(0, 4).map((feature) => <li key={feature} className="border-l border-[#e6b84c]/60 pl-3">{feature}</li>)}</ul>}<div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((tech) => <ProjectTechnology key={tech} name={tech} />)}</div><div className="mt-9 flex gap-5 text-sm font-semibold">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#f2c968] hover:text-white">Source <Github size={16} /></a>}{project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#f2c968] hover:text-white">Live Demo <ExternalLink size={16} /></a>}</div></div>
  </motion.article>;
};

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const next = () => { setDirection(1); setCurrent((value) => (value + 1) % projectsData.length); };
  const previous = () => { setDirection(-1); setCurrent((value) => (value - 1 + projectsData.length) % projectsData.length); };
  const project = projectsData[current];

  return <section id="projects" className="page-panel section border-b border-white/10 bg-[#0d1117]"><div className="section-frame"><div className="mb-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="section-heading"><span className="section-label">Portfolio Showcase</span><h2 className="section-title">Featured Projects</h2></div><p className="section-copy">Explore my latest work and creative solutions across various technologies and domains.</p></div>
    <div className="relative px-0 md:px-20"><button type="button" aria-label="Previous project" onClick={previous} className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 border border-white/20 p-3 text-[#9aa4b2] transition-colors hover:border-[#e6b84c] hover:text-[#f2c968] md:block"><ChevronLeft size={22} /></button><button type="button" aria-label="Next project" onClick={next} className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 border border-white/20 p-3 text-[#9aa4b2] transition-colors hover:border-[#e6b84c] hover:text-[#f2c968] md:block"><ChevronRight size={22} /></button>
      <div className="min-h-0 overflow-hidden py-3 lg:min-h-[610px]"><AnimatePresence mode="wait" initial={false}><ProjectSlide key={project.id} project={project} index={current} direction={direction} /></AnimatePresence></div>
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5"><div className="flex gap-2">{projectsData.map((item, index) => <button type="button" aria-label={`Show project ${index + 1}`} key={item.id} onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); }} className={`h-1 transition-all ${index === current ? 'w-12 bg-[#e6b84c]' : 'w-5 bg-white/20'}`} />)}</div><span className="font-mono text-xs text-[#687586]">{String(current + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}</span></div>
      <div className="mt-6 flex justify-between md:hidden"><button type="button" onClick={previous} className="inline-flex items-center gap-2 text-sm text-[#f2c968]"><ChevronLeft size={17} /> Previous</button><button type="button" onClick={next} className="inline-flex items-center gap-2 text-sm text-[#f2c968]">Next <ChevronRight size={17} /></button></div>
    </div>
  </div></section>;
};

export default Projects;
