import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const RippleEffect = ({ children }: { children: React.ReactNode }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipples([...ripples, { x, y, id: Date.now() }]);
  };

  useEffect(() => {
    ripples.forEach((ripple) => {
      const timer = setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((r) => r.id !== ripple.id)
        );
      }, 1000);

      return () => clearTimeout(timer);
    });
  }, [ripples]);

  return (
    <div className="relative overflow-hidden" onClick={createRipple}>
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};