import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import Preloader from './components/Preloader';
import VisitorCounter from './components/VisitorCounter';
import Chatbot from './components/Chatbot';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <HelmetProvider>
      <Preloader />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <CursorEffect />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <VisitorCounter />
        <Chatbot />
      </div>
    </HelmetProvider>
  );
}

export default App;