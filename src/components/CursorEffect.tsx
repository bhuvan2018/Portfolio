import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Inner core - smallest dot with intense glow */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(147, 197, 253, 1) 100%)',
          boxShadow: '0 0 30px rgba(147, 197, 253, 1), 0 0 60px rgba(59, 130, 246, 0.8), 0 0 90px rgba(37, 99, 235, 0.5)',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.6 : isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1500,
          damping: 40,
          mass: 0.2,
        }}
      />

      {/* Middle ring - elegant gradient border */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: isHovering ? '64px' : '40px',
          height: isHovering ? '64px' : '40px',
          border: '2px solid',
          borderImage: 'linear-gradient(135deg, rgba(147, 197, 253, 1), rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.7)) 1',
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
          boxShadow: isHovering 
            ? '0 0 50px rgba(59, 130, 246, 0.5), inset 0 0 30px rgba(147, 197, 253, 0.3)' 
            : '0 0 25px rgba(59, 130, 246, 0.4)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 32 : 20),
          y: mousePosition.y - (isHovering ? 32 : 20),
          scale: isClicking ? 0.8 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 25, mass: 0.4 },
          y: { type: 'spring', stiffness: 300, damping: 25, mass: 0.4 },
          scale: { type: 'spring', stiffness: 400, damping: 20 },
          rotate: { duration: 0.6, ease: 'easeOut' },
          width: { duration: 0.3, ease: 'easeOut' },
          height: { duration: 0.3, ease: 'easeOut' },
        }}
      />

      {/* Outer ring - slower follow with mix blend */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9997]"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.4)',
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 18,
          mass: 0.6,
        }}
      />

      {/* Ambient glow layer - ethereal effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9996]"
        style={{
          width: isHovering ? '120px' : '80px',
          height: isHovering ? '120px' : '80px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.08) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 60 : 40),
          y: mousePosition.y - (isHovering ? 60 : 40),
          scale: isClicking ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
          mass: 1,
        }}
      />

      {/* Trailing particles effect */}
      {isClicking && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9995]"
              style={{
                background: 'rgba(147, 197, 253, 0.6)',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
              }}
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: mousePosition.x + Math.cos((i * Math.PI * 2) / 8) * 40,
                y: mousePosition.y + Math.sin((i * Math.PI * 2) / 8) * 40,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CursorEffect;
