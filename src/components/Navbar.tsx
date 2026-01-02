import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { RippleEffect } from './animations/RippleEffect';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionId = section.getAttribute('id') || '';

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Sparkles },
    { href: '#about', label: 'About', icon: ChevronRight },
    { href: '#projects', label: 'Projects', icon: ChevronRight },
    { href: '#skills', label: 'Skills', icon: ChevronRight },
    { href: '#contact', label: 'Contact', icon: ChevronRight },
  ];

  const handleNavClick = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (!element) {
      console.error(`Cannot find element with id: ${id}`);
      return;
    }
    
    setIsOpen(false);
    
    setTimeout(() => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Animated gradient background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0"
        animate={{
          opacity: scrolled ? [0.3, 0.5, 0.3] : 0,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <RippleEffect>
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} 
                className="relative group flex items-center gap-2"
              >
                {/* Pulsing background glow */}
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                  }}
                />

                <span className="relative text-3xl font-black bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  Bhuvan
                </span>
                
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-6 h-6 text-blue-500 fill-blue-400/30" />
                </motion.div>
              </a>
            </RippleEffect>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RippleEffect>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-2xl transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? 'text-white shadow-lg shadow-blue-500/50'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {/* Active state background */}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: activeSection === link.href.slice(1) 
                          ? 'none' 
                          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                      }}
                    />

                    <span className="relative font-semibold tracking-wide z-10">
                      {link.label}
                    </span>
                    
                    <motion.div
                      className="relative z-10"
                      animate={{
                        x: activeSection === link.href.slice(1) ? [0, 3, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <link.icon className={`w-4 h-4 transition-all ${
                        activeSection === link.href.slice(1) 
                          ? 'text-white opacity-100' 
                          : 'opacity-40 group-hover:opacity-70'
                      }`} />
                    </motion.div>

                    {/* Underline animation */}
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: activeSection === link.href.slice(1) ? '80%' : 0 
                      }}
                      whileHover={{ width: '80%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </RippleEffect>
              </motion.div>
            ))}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative ml-2"
            >
              <motion.button
                onClick={toggleTheme}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Particles effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, (i - 1) * 15],
                      y: [0, -20 + i * 10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                <motion.div
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative z-10"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            id="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="px-2 pt-4 pb-4 space-y-2 mt-6 bg-gradient-to-br from-white/95 via-blue-50/95 to-purple-50/95 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-gray-800/95 backdrop-blur-2xl rounded-3xl border-2 border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <RippleEffect>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                          activeSection === link.href.slice(1)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                            : 'hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {/* Active indicator dot */}
                        {activeSection === link.href.slice(1) && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}

                        <span className={`font-semibold ml-3 ${
                          activeSection === link.href.slice(1) ? 'text-white' : ''
                        }`}>
                          {link.label}
                        </span>
                        
                        <motion.div
                          animate={{
                            x: activeSection === link.href.slice(1) ? [0, 5, 0] : 0,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          <link.icon className={`w-5 h-5 ${
                            activeSection === link.href.slice(1) ? 'text-white' : 'opacity-50'
                          }`} />
                        </motion.div>
                      </a>
                    </RippleEffect>
                  </motion.div>
                ))}

                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2"
                >
                  <RippleEffect>
                    <button
                      onClick={() => {
                        toggleTheme();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300"
                    >
                      <span className="font-semibold ml-3">
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        {isDark ? (
                          <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <Moon className="w-5 h-5 text-blue-600" />
                        )}
                      </motion.div>
                    </button>
                  </RippleEffect>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
