import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Sparkles, ArrowRight, Building2 } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 bg-blue-100/50 dark:bg-blue-900/50 rounded-2xl backdrop-blur-sm mb-6"
          >
            <span className="px-6 py-2 text-sm text-blue-800 dark:text-blue-200 font-medium">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-3">
            Professional Experience
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey, showcasing growth and achievements
            across different roles and organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
          />

          <div className="space-y-16">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className={`relative bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-100/20 dark:border-blue-500/20 overflow-hidden ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-30" />
                    
                    <motion.div
                      initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? 'justify-end' : ''
                      }`}
                    >
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {experience.title}
                      </h3>
                    </motion.div>

                    <motion.div
                      className={`flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400 ${
                        index % 2 === 0 ? 'justify-end' : ''
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{experience.company}</span>
                    </motion.div>

                    <motion.div
                      className={`flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-500 ${
                        index % 2 === 0 ? 'justify-end' : ''
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </motion.div>

                    <ul className={`space-y-3 text-gray-600 dark:text-gray-300 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      {experience.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-2 group"
                          style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                          <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="relative flex items-center justify-center w-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10 shadow-lg shadow-blue-500/25 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-8 w-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
                    >
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {index + 1}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;