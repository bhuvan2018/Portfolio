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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20 opacity-40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
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
            <motion.div 
              className="inline-block p-2 bg-blue-100/50 dark:bg-blue-900/50 rounded-2xl backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 text-sm text-blue-800 dark:text-blue-200 font-medium">
                About Me
              </span>
            </motion.div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              Crafting Digital Experiences
              <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 relative">
              {[
                "With good skilled in web development, I specialize in creating responsive and user-friendly applications using modern technologies.",
                "I'm passionate about solving complex problems and creating intuitive user experiences that make a difference in people's lives.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-6 transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full" />
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 relative inline-block group"
            >
              <motion.a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
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
            className="relative group flex justify-center"
          >
            {/* Image Container with enhanced effects */}
            <div className="relative w-[280px] md:w-[320px] aspect-square rounded-2xl overflow-hidden transform perspective-1000">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 h-full"
              >
                {/* Hexagonal Clip Path */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl" style={{ padding: '3px' }}>
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl" />
                </div>
                
                {/* Main Image */}
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <img
                    src="/Photo1.jpg"
                    alt="Professional headshot"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0">
                  {/* Animated Corner Accents */}
                  {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((position, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-8 h-8 ${position}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      background: `rgba(${index * 30 + 100}, 100, 255, 0.3)`,
                      filter: 'blur(8px)',
                    }}
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;