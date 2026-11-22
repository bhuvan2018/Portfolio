import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const started = performance.now();
    let frame = 0;
    const update = (time: number) => {
      const next = Math.min(100, ((time - started) / 1500) * 100);
      setProgress(next);
      if (next < 100) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    const timer = window.setTimeout(() => setLoading(false), 1650);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, []);

  return <AnimatePresence>
    {loading && <motion.div key="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35, delay: .35 }} className="fixed inset-0 z-[100] overflow-hidden bg-[#0d1117]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(244,244,239,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,239,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, ease: 'easeInOut' }} className="absolute left-0 top-0 h-1 w-full origin-left bg-[#e6b84c]" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-10">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.18em] text-[#9aa4b2]"><span>Software Engineer</span><span>{Math.round(progress).toString().padStart(3, '0')}%</span></div>
        <div className="overflow-hidden"><motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .15, ease: [.2, .8, .2, 1] }} className="text-[clamp(4rem,13vw,12rem)] font-extrabold leading-[.8] tracking-[-.11em] text-white">Bhuvan<span className="text-[#e6b84c]">.</span></motion.h1></div>
        <div className="flex items-end justify-between"><div className="relative h-[2px] w-40 bg-white/15 md:w-64"><motion.div className="h-full bg-[#e6b84c] shadow-[0_0_12px_rgba(230,184,76,.8)]" style={{ width: `${progress}%` }} /><motion.span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#f2c968] shadow-[0_0_12px_rgba(242,201,104,1)]" style={{ left: `${progress}%` }} /></div><span className="font-mono text-[11px] uppercase tracking-[.18em] text-[#687586]">Portfolio</span></div>
      </div>
      <motion.div initial={{ y: '-100%' }} animate={{ y: '-100%' }} exit={{ y: 0 }} transition={{ duration: 1.05, ease: [.8, 0, .2, 1] }} className="absolute inset-x-0 top-0 z-10 h-1/2 bg-[#e6b84c]" />
      <motion.div initial={{ y: '100%' }} animate={{ y: '100%' }} exit={{ y: 0 }} transition={{ duration: 1.05, ease: [.8, 0, .2, 1] }} className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-[#e6b84c]" />
    </motion.div>}
  </AnimatePresence>;
};

export default Preloader;
