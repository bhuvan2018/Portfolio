import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { skillsData } from '../data/skills';
import { Sparkles, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [chartVisible, setChartVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (inView) {
      // Delay showing chart for better visual sequence
      const timer = setTimeout(() => {
        setChartVisible(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Add subtle animation for background particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  const chartData = {
    labels: skillsData.map(skill => skill.name),
    datasets: [
      {
        data: skillsData.map(skill => skill.level),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(236, 72, 153, 1)',
        ],
        borderWidth: 2,
        hoverBorderWidth: 4,
        hoverOffset: 15,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: 14,
            weight: 500,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#1F2937',
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
          weight: "bold" as const,
        },
        padding: 12,
        borderColor: 'rgba(229, 231, 235, 1)',
        borderWidth: 1,
        displayColors: true,
        boxWidth: 10,
        boxHeight: 10,
        usePointStyle: true,
        callbacks: {
          label: function(tooltipItem: TooltipItem<'doughnut'>) {
            const label = tooltipItem.label || '';
            const rawValue = tooltipItem.raw as number;
            return `${label}: ${rawValue}%`;
          },
          title: function(context: { label: string }[]) {
            return context[0].label;
          }
        }
      }
    },
    maintainAspectRatio: false,
    cutout: '75%',
    rotation: -90,
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1800,
      onComplete: () => {
        setAnimationComplete(true);
      }
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20 opacity-40" />
      
      {/* Floating particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 dark:opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.max(4, Math.random() * 20),
            height: Math.max(4, Math.random() * 20),
          }}
        />
      ))}
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-block p-2 bg-blue-100/50 dark:bg-blue-900/50 rounded-2xl backdrop-blur-sm mb-6 shadow-sm"
          >
            <span className="px-6 py-2 text-sm text-blue-800 dark:text-blue-200 font-medium flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Professional Skills
              <ChevronRight className="w-4 h-4 transform rotate-180" />
            </span>
          </motion.div>

          <motion.h2 
            className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 inline-flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Skills & Expertise
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-10 h-10 text-blue-500" />
            </motion.div>
          </motion.h2>

          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive overview of my technical proficiency and expertise across
            various technologies and tools.
          </motion.p>
          
          {/* Decorative divider */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
            className="relative h-[450px] p-6 bg-white/80 dark:bg-gray-800/80 rounded-3xl backdrop-blur-sm shadow-xl border border-gray-100 dark:border-gray-700"
          >
            {/* Circular gradient accent */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-2xl" />
            
            {/* Chart wrapper with animated entry */}
            <motion.div
              className="relative h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: chartVisible ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Doughnut data={chartData} options={chartOptions} />
              
              {/* Animated center content */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: animationComplete ? 1 : 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className="relative"
                  >
                    {/* Pulsing background circle */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0.9, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative p-8">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                        85%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                        Overall Expertise
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Chart label */}
            <div className="absolute -bottom-4 inset-x-0 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 10 }}
                transition={{ delay: 0.8 }}
                className="bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Skills Distribution
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.03, translateY: -5 }}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Animated gradient border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ padding: '2px' }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <div className="h-full w-full bg-white dark:bg-gray-800 rounded-xl" />
                </motion.div>
                
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                      whileHover={{ rotate: 5 }}
                      animate={hoveredSkill === index ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0],
                      } : {}}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {skill.name}
                    </h3>
                    
                    {/* Arrow indicator that appears on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: hoveredSkill === index ? 1 : 0, x: hoveredSkill === index ? 0 : -10 }}
                      className="ml-auto"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500" />
                    </motion.div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-y-0 left-0 w-8 bg-white/50 h-full blur-sm z-10"
                        animate={{
                          x: ['-100%', '500%', '-100%'],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                      
                      {/* Progress bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Proficiency
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400"
                      >
                        {skill.level}%
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full shadow-md border border-blue-100/50 dark:border-blue-800/30">
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Constantly improving and expanding my skill set
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
