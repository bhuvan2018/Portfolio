import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Braces, Brackets } from 'lucide-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

   
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const codeLines = [
    "import { Life } from 'dreams';",
    "const success = await goals.achieve();",
    "if (success) celebrate();",
    "export default Happiness;",
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
          <div className="relative">
            {/* Code Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50"
            >
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-xs text-gray-300 font-mono mb-2"
                >
                  <span className="text-gray-500 mr-2">{index + 1}</span>
                  {line}
                </motion.div>
              ))}
            </motion.div>

            {/* Main Loader */}
            <motion.div
              className="relative w-32 h-32 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Orbital Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500/30"
                  style={{
                    transform: `rotateX(${60 + i * 30}deg) rotateY(${i * 45}deg)`,
                  }}
                />
              ))}

              {/* Floating Icons */}
              {[Code2, Terminal, Braces, Brackets].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${50 + Math.cos(index * Math.PI / 2) * 40}%`,
                    top: `${50 + Math.sin(index * Math.PI / 2) * 40}%`,
                  }}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                </motion.div>
              ))}

              {/* Center Logo */}
              <motion.div
                className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48">
              <div className="relative h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="mt-2 text-center text-sm text-gray-400">
                Loading... {progress}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;