import React from 'react';
import { motion } from 'framer-motion';

export const WaveEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative overflow-hidden"
    >
      {children}
      <motion.div
        variants={{
          hover: {
            y: [100, -100],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }
          }
        }}
        className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent pointer-events-none"
        style={{ mixBlendMode: 'overlay' }}
      />
    </motion.div>
  );
};