import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Sparkles, Code2, Laptop, Braces, Terminal } from 'lucide-react';
import { useRef } from 'react';

import { IconType } from 'react-icons';

const FloatingIcon = ({ icon: Icon, x, y, delay = 0 }: { icon: IconType; x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute text-blue-500/30 dark:text-blue-400/30"
    style={{ x, y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon size={32} />
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-30">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="border border-blue-200/20 dark:border-blue-800/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        <FloatingIcon icon={Code2} x="20%" y="20%" delay={0} />
        <FloatingIcon icon={Laptop} x="80%" y="30%" delay={0.5} />
        <FloatingIcon icon={Braces} x="15%" y="70%" delay={1} />
        <FloatingIcon icon={Terminal} x="75%" y="75%" delay={1.5} />
      </div>

      {/* 3D Rotating Cards Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl backdrop-blur-3xl"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: -1,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative inline-block mb-8"
          >
            <motion.div
              className="absolute -inset-px bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur"
              animate={{
                background: [
                  "linear-gradient(0deg, #2563eb, #7c3aed, #db2777)",
                  "linear-gradient(360deg, #db2777, #2563eb, #7c3aed)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <h1 className="relative px-8 py-4 bg-white dark:bg-gray-900 rounded-2xl text-4xl sm:text-6xl font-bold">
              Hi, I'm{' '}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                Bhuvan Shetty
                <Sparkles className="absolute -top-6 -right-8 w-5 h-5 text-yellow-400 animate-pulse" />
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl" />
            <Typewriter
              options={{
                strings: [
                  'Next.js Developer',
                  'React.js Developer',
                  'Problem Solver',
                  'Tech Enthusiast'
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
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition" />
              <div className="relative px-8 py-3 bg-blue-600 text-white rounded-full leading-none flex items-center">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full blur opacity-75 group-hover:opacity-100 transition" />
              <div className="relative px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full leading-none flex items-center">
                View Work
                <motion.div
                  className="ml-2"
                  animate={{
                    scale: [1, 1.2, 1],
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
