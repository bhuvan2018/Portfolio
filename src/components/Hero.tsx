import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const photoRotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const photoRotateY = useTransform(mouseX, [-1, 1], [-5, 5]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
  const name = 'Bhuvan Shetty'.split(' ');
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width * 2 - 1);
    mouseY.set((event.clientY - bounds.top) / bounds.height * 2 - 1);
  };
  const resetMouse = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section ref={ref} id="home" onMouseMove={handleMouseMove} onMouseLeave={resetMouse} className="page-panel relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-20">
      <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute right-[4%] top-1/2 hidden h-[22rem] w-[22rem] -translate-y-1/2 xl:block">
          <motion.div style={{ rotateX: photoRotateX, rotateY: photoRotateY }} className="h-full w-full overflow-hidden rounded-full border border-[#e6b84c]/25 bg-[#151c25] [perspective:1000px]"><img src="/dp.jpeg" alt="Bhuvan Shetty" className="h-full w-full scale-110 object-cover object-[center_18%]" /><div className="absolute inset-4 rounded-full border border-[#e6b84c]/30" /></motion.div>
        </div>
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[linear-gradient(to_bottom,transparent,rgba(230,184,76,.04))]" />
      </motion.div>
      <div className="section-frame relative grid gap-16 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }} className="mb-8 font-mono text-xs uppercase tracking-[.2em] text-[#e6b84c]">Software Engineer</motion.p>
          <h1 className="max-w-5xl text-[clamp(4rem,12vw,10.5rem)] font-extrabold leading-[.82] tracking-[-.1em] text-white">
            {name.map((word, index) => <span key={word} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.35 + index * .12, ease: [.2, .8, .2, 1] }} className="block">{word}</motion.span></span>)}
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.75 }} className="mt-12 flex flex-wrap items-center gap-4">
            <motion.a whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} href="#projects" className="inline-flex items-center gap-3 bg-[#e6b84c] px-5 py-3 text-sm font-bold text-[#0d1117]">View Work <ArrowUpRight size={17} /></motion.a>
            <motion.a whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} href="#contact" className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm text-white transition-colors hover:border-[#e6b84c] hover:text-[#f2c968]">Get in Touch <ArrowUpRight size={17} /></motion.a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55 }} className="border-l border-[#e6b84c] pl-5 lg:pr-56">
          <p className="max-w-sm text-sm leading-7 text-[#9aa4b2]">I build elegant, effective, and user-centric software solutions that solve real-world problems.</p><div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[.16em] text-[#9aa4b2]"><span className="h-2 w-2 rounded-full bg-[#e6b84c]" /> Scroll to explore</div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[#9aa4b2] md:block"><ArrowDown className="animate-bounce" size={20} /></a>
    </section>
  );
};

export default Hero;
