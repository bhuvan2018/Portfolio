import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <RippleEffect>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-[450px] perspective-1000"
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
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full transform-gpu"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    animate={isHovered ? "hover" : "initial"}
                  >
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
                    variants={overlayVariants}
                    animate={isHovered ? "hover" : "initial"}
                  >
                    <motion.button
                      onClick={() => setIsFlipped(true)}
                      className="px-6 py-3 bg-white text-gray-900 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        whileHover={{ scale: 1.1 }}
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
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="h-full flex flex-col">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {project.title} - Details
                  </motion.h3>
                  <div className="flex-1 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.longDescription || project.description}
                    </p>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {project.features?.map((feature: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source</span>
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                  <motion.button
                    onClick={() => setIsFlipped(false)}
                    className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Preview
                  </motion.button>
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
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing various technologies and
            problem-solving approaches.
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

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevPage}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextPage}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === index
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;