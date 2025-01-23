import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const CareerMap = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: { x: 80, y: 20 },
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: { x: 60, y: 40 },
    },
    {
      year: '2019',
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: { x: 40, y: 60 },
    },
    {
      year: '2017',
      title: 'Graduated',
      company: 'Stanford University',
      location: { x: 20, y: 80 },
    },
  ];

  return (
    <div className="relative h-[600px] w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>
      
      {milestones.map((milestone, index) => (
        <motion.div
          key={milestone.year}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          className="absolute"
          style={{ left: `${milestone.location.x}%`, top: `${milestone.location.y}%` }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative group"
          >
            <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 whitespace-nowrap">
                <p className="font-bold text-gray-900 dark:text-white">{milestone.year}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{milestone.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{milestone.company}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CareerMap;