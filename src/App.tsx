import { useLayoutEffect, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, lerp: 0.075, smoothWheel: true, syncTouch: false, wheelMultiplier: 0.85 });
    const update = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('main > section');
      sections.slice(1).forEach((section) => {
        gsap.fromTo(section,
          { clipPath: 'inset(8% 0 0 0)', y: 34, scale: 0.992 },
          {
            clipPath: 'inset(0% 0 0 0)',
            y: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 42%',
              scrub: 1.7,
            },
          }
        );
      });
    });
    return () => context.revert();
  }, []);

  return (
    <HelmetProvider>
      <Preloader />
      <div className="site-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
