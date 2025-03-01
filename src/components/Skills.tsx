import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { skillsData } from '../data/skills';
ChartJS.register(ArcElement, Tooltip, Legend);
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chartData = {
    labels: skillsData.map(skill => skill.name),
    datasets: [
      {
        data: skillsData.map(skill => skill.level),
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#EC4899',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px]"
          >
            <Doughnut data={chartData} options={chartOptions} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;