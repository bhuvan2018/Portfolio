import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const paragraphs = [
  'As a Software Engineer with strong skills in web development, I specialize in creating responsive and user-friendly applications using modern technologies.',
  "I'm passionate about solving complex problems and creating intuitive user experiences that make a difference in people's lives.",
  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge."
];

const About = () => (
  <section id="about" className="page-panel section border-b border-white/10 bg-[#0d1117]">
    <div className="section-frame grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
      <div className="section-heading"><span className="section-label">About Me</span><h2 className="section-title">Crafting Digital Experiences</h2></div>
      <div className="max-w-2xl">
        {paragraphs.map((text, index) => <motion.p key={text} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .1 }} className="mb-7 border-l border-white/15 pl-6 text-lg leading-8 text-[#9aa4b2]">{text}</motion.p>)}
        <a href="/Resume.pdf" download className="mt-3 inline-flex items-center gap-3 border-b border-[#e6b84c] pb-2 text-sm font-semibold text-[#f2c968]">Download Resume <Download size={16} /></a>
      </div>
    </div>
  </section>
);

export default About;
