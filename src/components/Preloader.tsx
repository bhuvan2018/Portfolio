import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Braces, Brackets, Sparkles, Zap, Star, Laptop } from 'lucide-react';

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
    "import { Dreams } from 'future';",
    "const portfolio = await build();",
    "if (portfolio.isAwesome()) {",
    "  await celebrate();",
    "}",
    "export default Success;",
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
          {/* Enhanced Background Particles */}
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random(),
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
                background: [
                  'rgba(59, 130, 246, 0.3)',
                  'rgba(139, 92, 246, 0.3)',
                  'rgba(236, 72, 153, 0.3)',
                ],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <div className="relative">
            {/* Enhanced Code Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-72 bg-gray-800/80 rounded-xl p-4 backdrop-blur-lg border border-gray-700/50 overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'linear-gradient(0deg, #3B82F6, #8B5CF6, #EC4899)',
                    'linear-gradient(180deg, #EC4899, #3B82F6, #8B5CF6)',
                    'linear-gradient(360deg, #8B5CF6, #EC4899, #3B82F6)',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ opacity: 0.2 }}
              />

              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-xs font-mono mb-2 group"
                >
                  <motion.span
                    className="text-gray-500 mr-2 inline-block"
                    animate={{
                      color: ['rgb(107, 114, 128)', 'rgb(59, 130, 246)', 'rgb(107, 114, 128)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {index + 1}
                  </motion.span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                    {line}
                  </span>
                  <motion.div
                    className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              {/* Enhanced Floating Icons */}
              {[Star, Sparkles, Zap, Laptop].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <Icon className="w-3 h-3 text-blue-400/30" />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Main Loader */}
            <motion.div
              className="relative w-40 h-40 flex items-center justify-center perspective-1000"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Enhanced Orbital Rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid transparent',
                    borderTopColor: `rgba(59, 130, 246, ${0.3 - i * 0.05})`,
                    transform: `rotateX(${60 + i * 30}deg) rotateY(${i * 45}deg)`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Enhanced Floating Icons */}
              {[Code2, Terminal, Braces, Brackets].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
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
                  <Icon className="w-6 h-6 text-blue-500 filter drop-shadow-lg" />
                </motion.div>
              ))}

              {/* Enhanced Center Logo */}
              <motion.div
                className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Code2 className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div 
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-56"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative h-2 w-full bg-gray-700 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <motion.div
                className="mt-2 text-center text-sm text-gray-400 font-medium"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Loading... {progress}%
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
