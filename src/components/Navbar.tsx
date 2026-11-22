import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', ...links.map((link) => link.toLowerCase())];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] });
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const close = () => setOpen(false);
  const linkClass = (id: string) => `relative py-2 text-[13px] transition-colors ${activeSection === id ? 'text-white' : 'text-[#9aa4b2] hover:text-white'}`;

  return <header className={`fixed top-0 z-40 w-full border-b border-white/10 transition-all duration-300 ${scrolled ? 'bg-[#0d1117]/95 shadow-[0_12px_35px_rgba(0,0,0,.16)]' : 'bg-[#0d1117]/75'} backdrop-blur-xl`}>
    <div className="section-frame flex h-[76px] items-center justify-between">
      <a href="#home" onClick={close} className="text-2xl font-bold tracking-[-.07em] text-white">Bhuvan<span className="text-[#e6b84c]">.</span></a>
      <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">{links.map((link) => { const id = link.toLowerCase(); return <a key={link} href={`#${id}`} className={linkClass(id)} aria-current={activeSection === id ? 'page' : undefined}>{link}{activeSection === id && <span className="absolute -bottom-[1.4rem] left-1/2 h-px w-5 -translate-x-1/2 bg-[#e6b84c]" />}</a>; })}</nav>
      <a href="#contact" className="hidden border border-[#e6b84c]/70 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[.15em] text-[#f2c968] transition-colors hover:bg-[#e6b84c] hover:text-[#0d1117] md:block">Let's Talk</a>
      <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="border border-white/15 p-2 text-white md:hidden">{open ? <X size={19} /> : <Menu size={19} />}</button>
    </div>
    {open && <nav className="border-t border-white/10 bg-[#0d1117] px-4 py-3 md:hidden" aria-label="Mobile navigation">{links.map((link) => { const id = link.toLowerCase(); return <a key={link} href={`#${id}`} onClick={close} className={`block border-b border-white/10 py-4 text-sm ${activeSection === id ? 'text-[#f2c968]' : 'text-[#d9dde3]'}`}>{link}</a>; })}</nav>}
  </header>;
};

export default Navbar;
