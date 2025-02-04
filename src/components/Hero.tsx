import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 relative">
              Hi, I'm{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="relative inline-block text-blue-600 dark:text-blue-400">
                  Bhuvan Shetty
                  <Sparkles className="absolute -top-6 -right-8 w-5 h-5 text-yellow-400 animate-pulse" />
                </span>
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Typewriter
              options={{
                strings: [
                  'NextJS Developer',
                  'MERN Stack Developer',
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
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Passionate about creating beautiful, functional, and user-friendly applications
            that solve real-world problems.
          </motion.p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div
                className="absolute inset-0 bg-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(229, 231, 235, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors overflow-hidden group"
            >
              <span className="relative z-10">View Work</span>
              <motion.div
                className="absolute inset-0 bg-gray-300 dark:bg-gray-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </motion.div>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 -right-4 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;