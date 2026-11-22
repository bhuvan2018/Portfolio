import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => <footer className="relative z-20 border-t border-white/10 bg-[#0d1117] py-8"><div className="section-frame flex flex-col gap-5 text-sm text-[#687586] md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Bhuvan Shetty. All rights reserved.</p><div className="flex gap-5"><a href="https://github.com/bhuvan2018" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f2c968]" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/bhuvan-shetty" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f2c968]" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:bhuvanshetty2018@gmail.com" className="transition-colors hover:text-[#f2c968]" aria-label="Email"><Mail size={18} /></a></div></div></footer>;

export default Footer;
