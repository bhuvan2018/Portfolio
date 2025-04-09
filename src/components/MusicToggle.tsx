import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;

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
        className="relative group bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Ripple effect */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/30"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isPlaying ? (
              <Volume2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            ) : (
              <VolumeX className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </motion.div>
        </div>

        {/* Status indicator */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {isPlaying ? 'Music On' : 'Music Off'}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default MusicToggle;