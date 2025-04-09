import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Music2 } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <motion.button
        onClick={toggleMusic}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Outer glow */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-xl transition-colors duration-500 ${
            isPlaying 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
              : 'bg-gray-400/30 dark:bg-gray-600/30'
          }`}
          animate={{
            scale: isPlaying ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Main button */}
        <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
          {/* Equalizer bars */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 flex space-x-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-4 bg-blue-500 rounded-full"
                    animate={{
                      height: ["16px", "24px", "16px"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Icon container */}
          <div className="relative">
            {/* Ripple circles */}
            {isPlaying && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              </>
            )}
            
            {/* Main icon */}
            <motion.div
              animate={{ 
                rotate: isPlaying ? 360 : 0,
                scale: isPlaying ? [1, 1.1, 1] : 1,
              }}
              transition={{ 
                duration: isPlaying ? 2 : 0.5,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear"
              }}
              className="relative z-10"
            >
              {isPlaying ? (
                <Music2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              ) : (
                <VolumeX className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Status tooltip */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-white/10"
          initial={false}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {isPlaying ? '🎵 Now Playing' : 'Click to Play'}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default MusicToggle;