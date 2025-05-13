import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import LazyImage from './LazyImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RippleEffect } from './animations/RippleEffect';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <RippleEffect>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-[500px] perspective-1000"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence>
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden">
              <motion.div
                className="relative bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 rounded-2xl overflow-hidden h-full transform-gpu border border-blue-100/20 dark:border-blue-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.12), 0 0 30px rgba(59,130,246,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10 opacity-30 mix-blend-overlay" />
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20"
                  >
                    <motion.button
                      onClick={() => setIsFlipped(true)}
                      className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium shadow-xl hover:shadow-blue-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                  </motion.div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-1.5 text-sm bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-sm"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(59,130,246,0.1)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden rotateY-180">
              <motion.div
                className="bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 rounded-2xl overflow-hidden h-full border border-blue-100/20 dark:border-blue-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="h-full flex flex-col p-8">
                  <motion.h3
                    className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                    <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                  </motion.h3>

                  <div className="flex-1 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {project.features?.map((feature: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 group"
                          >
                            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                            <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                    <div className="flex justify-between items-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Source</span>
                      </motion.a>

                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors group flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>

                    <motion.button
                      onClick={() => setIsFlipped(false)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-800 dark:to-blue-900/50 text-gray-900 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                      <span className="relative">Back to Preview</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </RippleEffect>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20 opacity-40" />
      
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
              Portfolio Showcase
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-3">
            Featured Projects
            <Sparkles className="w-8 h-8 text-blue-500" />
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions across various technologies
            and domains.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <motion.button
                onClick={prevPage}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:hover:shadow-none group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg shadow-blue-500/25'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {currentPage === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/50 mix-blend-overlay"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:hover:shadow-none group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
