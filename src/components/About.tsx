import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Sparkles, Star } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-800 dark:via-blue-900/10 dark:to-gray-800 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              About Me
              <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 relative">
              <motion.p
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                With good skilled in web development, I specialize in
                creating responsive and user-friendly applications using modern
                technologies.
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                I'm passionate about solving complex problems and creating
                intuitive user experiences that make a difference in people's lives.
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge.
              </motion.p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 relative inline-block group"
            >
              <motion.a
                href="/Resume (1).pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                <span className="relative">
                  Download Resume
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </motion.a>
              <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            {/* Image Container with hover effects */}
            <div className="relative rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/Photo1.jpg"
                alt="Professional headshot"
                className="rounded-lg shadow-2xl w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;