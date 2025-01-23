import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sessionKey = 'sessionVisit';
    const countKey = 'visitorCount';
    const hasVisitedThisSession = sessionStorage.getItem(sessionKey);
    
    if (!hasVisitedThisSession) {
      const currentCount = parseInt(localStorage.getItem(countKey) || '0');
      const newCount = currentCount + 1;
      localStorage.setItem(countKey, newCount.toString());
      sessionStorage.setItem(sessionKey, 'true');
      setVisitorCount(newCount);
    } else {
      const currentCount = parseInt(localStorage.getItem(countKey) || '0');
      setVisitorCount(currentCount);
    }

    // Hide counter after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center space-x-2"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <span className="text-gray-700 dark:text-gray-300">
        Visitors: {visitorCount.toLocaleString()}
      </span>
    </motion.div>
  );
};

export default VisitorCounter;