import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Sparkles, Code2, Laptop, Braces, Terminal, Star, Zap, Rocket } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);

  const gradient = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    rgba(59, 130, 246, 0.15),
    transparent 80%
  )`;

  return (
    <section ref={containerRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-200/10 dark:border-blue-800/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Code2, Laptop, Braces, Terminal, Star, Zap, Rocket].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-500/30 dark:text-blue-400/30"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative inline-block mb-8 group"
          >
            {/* Animated border */}
            <motion.div
              className="absolute -inset-px rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(0deg, #3B82F6, #8B5CF6, #EC4899)",
                  "linear-gradient(180deg, #EC4899, #3B82F6, #8B5CF6)",
                  "linear-gradient(360deg, #8B5CF6, #EC4899, #3B82F6)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ filter: "blur(8px)" }}
            />

            <motion.h1
              className="relative px-8 py-4 bg-white dark:bg-gray-900 rounded-2xl text-4xl sm:text-6xl font-bold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                Bhuvan Shetty
              </motion.span>
              <motion.div
                className="absolute -top-6 -right-8 w-12 h-12"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-full h-full text-yellow-400 filter drop-shadow-lg" />
              </motion.div>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl"
              animate={{
                filter: ['blur(8px)', 'blur(12px)', 'blur(8px)'],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Typewriter
              options={{
                strings: [
                  'React.js Developer',
                  'Coding Enthusiast',
                  'Tech Freak'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto relative"
          >
            Driven to build elegant, effective, and user-centric solutions that address real-world challenges.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="#contact"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur transition-opacity"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full leading-none flex items-center">
                Get in Touch
                <motion.div
                  className="ml-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>

            <motion.a
              href="#projects"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full opacity-70 group-hover:opacity-100 blur transition-opacity"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full leading-none flex items-center">
                View Work
                <motion.div
                  className="ml-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
