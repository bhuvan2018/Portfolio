import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => <section id="education" className="page-panel section border-b border-white/10 bg-[#0d1117]">
  <div className="section-frame"><div className="section-heading mb-16"><span className="section-label">Academic Background</span><h2 className="section-title">Education &amp; Qualifications</h2><p className="section-copy mt-6">My academic journey and achievements that have shaped my professional expertise.</p></div>
    <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">{educationData.map((education, index) => <motion.article key={education.degree} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1 }} className="bg-[#0d1117] p-7"><span className="font-mono text-xs text-[#e6b84c]">{education.period}</span><h3 className="mt-14 text-xl font-semibold leading-tight tracking-[-.04em] text-white">{education.degree}</h3><p className="mt-5 text-sm leading-7 text-[#9aa4b2]">{education.institution}</p><p className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-[#687586]">{education.description}</p></motion.article>)}</div>
  </div>
</section>;

export default Education;
