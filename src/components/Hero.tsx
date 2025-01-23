import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bhuvan Shetty</span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Web3 Passionate',
                  'UI/UX Designer',
                  'Problem Solver',
                  'Tech Enthusiast'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly applications
            that solve real-world problems.
          </p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;