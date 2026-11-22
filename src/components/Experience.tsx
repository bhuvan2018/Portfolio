import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { SiFreelancer } from 'react-icons/si';
import { useRef } from 'react';
import { experienceData } from '../data/experience';

const companyMarks: Record<string, { label: string; className: string }> = {
  'SELCO Foundation': { label: 'SF', className: 'border-[#e6b84c]/70 bg-[#e6b84c]/10 text-[#f2c968]' },
  'Zephyr Technologies & Solutions Pvt Ltd.': { label: 'ZT', className: 'border-[#7dd3fc]/60 bg-[#7dd3fc]/10 text-[#bae6fd]' },
};

const companyLogos: Record<string, string> = {
  'SELCO Foundation': '/company-logos/selco-foundation.png',
  'Zephyr Technologies & Solutions Pvt Ltd.': '/company-logos/zephyr.png',
};

const CompanyMark = ({ company }: { company: string }) => {
  const logo = companyLogos[company];
  if (logo) return <span className="inline-flex h-10 w-24 items-center justify-center"><img src={logo} alt={`${company} logo`} className="max-h-9 max-w-full object-contain" /></span>;
  if (company === 'Freelancing.') return <span className="inline-flex h-10 w-10 items-center justify-center text-[#e6b84c]" aria-label="Freelancer logo"><SiFreelancer size={25} /></span>;
  const mark = companyMarks[company] || { label: company.slice(0, 2).toUpperCase(), className: 'border-white/20 bg-white/5 text-[#b7c0cb]' };
  return <span className={`inline-flex h-9 w-9 items-center justify-center border font-mono text-[10px] font-semibold tracking-[-.08em] ${mark.className}`} aria-hidden="true">{mark.label}</span>;
};

const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 35%'] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return <section ref={ref} id="experience" className="page-panel section border-b border-white/10 bg-[#111820]">
    <div className="section-frame"><div className="mb-20 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="section-heading"><span className="section-label">Career Journey</span><h2 className="section-title">Professional Experience</h2></div><p className="section-copy">A timeline of my professional journey, showcasing growth and achievements across different roles and organizations.</p></div>
      <div className="relative ml-0 pl-8 md:pl-14"><motion.div style={{ scaleY: lineProgress }} className="absolute bottom-0 left-1.5 top-0 w-px origin-top bg-[#e6b84c]" />{experienceData.map((experience, index) => <motion.article key={`${experience.company}-${experience.period}`} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }} className="relative mb-16 last:mb-0">
        <motion.span whileInView={{ scale: [1, 1.5, 1] }} viewport={{ once: true }} transition={{ duration: .5 }} className="absolute -left-[2.65rem] top-1 h-3 w-3 rounded-full border-2 border-[#111820] bg-[#e6b84c] md:-left-[3.45rem]" />
        <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2"><h3 className="text-2xl font-bold tracking-[-.05em] text-white">{experience.title}</h3><span className="font-mono text-xs text-[#e6b84c]">{experience.period}</span></div>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[#9aa4b2]"><CompanyMark company={experience.company} /><span className="break-words">{experience.company}</span><Calendar size={15} className="ml-2" /></div>
        <ul className="grid max-w-4xl gap-3 text-sm leading-7 text-[#9aa4b2] md:grid-cols-2">{experience.description.map((item) => <li key={item} className="border-l border-white/10 pl-4">{item}</li>)}</ul>
      </motion.article>)}</div>
    </div>
  </section>;
};

export default Experience;
