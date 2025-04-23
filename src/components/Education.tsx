import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Sparkles, Award, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20 opacity-40" />
      
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 bg-blue-100/50 dark:bg-blue-900/50 rounded-2xl backdrop-blur-sm mb-6"
          >
            <span className="px-6 py-2 text-sm text-blue-800 dark:text-blue-200 font-medium">
              Academic Background
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-3">
            Education & Qualifications
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and achievements that have shaped my professional expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="relative group"
            >
              {/* Card container with gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-100/20 dark:border-blue-500/20">
                {/* Top decoration */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 p-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-xl mb-6"
                  >
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                      {education.degree}
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400"
                  >
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">{education.institution}</span>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-500"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {education.description}
                  </motion.p>

                  {/* Achievement badge */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <Award className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;