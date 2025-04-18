import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Disc3 } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    if (audioRef.current) {
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.remove();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Playback error:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-full" />
        <motion.button
          onClick={toggleMusic}
          className="relative flex items-center gap-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 p-4 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300">
            <motion.div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg ${
                isPlaying 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-white dark:bg-gray-400'
              }`}
              animate={{
                x: isPlaying ? 32 : 0,
                rotate: isPlaying ? 360 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={isPlaying ? 'playing' : 'stopped'}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {isPlaying ? (
                  <Disc3 className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                ) : (
                  <Music2 className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                )}
              </motion.div>
            </AnimatePresence>

            {isPlaying && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                    animate={{
                      scale: [1, 1.5 + i * 0.2],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 1.5 + i * 0.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </>
            )}
          </div>

          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                className="flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                    animate={{
                      height: ["12px", "24px", "12px"],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-sm py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-white/10"
          initial={false}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {isPlaying ? '🎵 Now Playing' : 'Toggle Music'}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MusicToggle;