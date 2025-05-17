import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Terminal, Braces, Brackets, 
  Sparkles, Zap, Star, Laptop, 
  Globe, Rocket, Cpu, Database
} from 'lucide-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Smoother loading animation with easing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Extended time for better experience

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress to make it feel more realistic
        const increment = Math.max(1, Math.floor((100 - prev) / 20));
        return Math.min(100, prev + increment);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const codeLines = [
    "import { Dreams } from 'future';",
    "const portfolio = await build();",
    "portfolio.features.push('creativity');",
    "await portfolio.optimize();",
    "if (portfolio.isAwesome()) {",
    "  await celebrate();",
    "}",
    "export default Success;",
  ];

  // Generate random particles with different sizes and colors
  const generateParticles = (count: number) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * 2,
      color: i % 5 === 0 ? '#60A5FA' : // blue
             i % 5 === 1 ? '#C084FC' : // purple
             i % 5 === 2 ? '#F472B6' : // pink
             i % 5 === 3 ? '#34D399' : // green
                          '#FBBF24'    // yellow
    }));
  };

  const particles = generateParticles(120);
  const orbitingIcons = [Code2, Terminal, Braces, Brackets, Globe, Rocket, Cpu, Database];
  const floatingIcons = [Star, Sparkles, Zap, Laptop];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
        >
          {/* Enhanced Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3), transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3), transparent 50%)',
                'radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3), transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3), transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Enhanced Background Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
              }}
              initial={{
                x: `${particle.x}vw`,
                y: `${particle.y}vh`,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: [`${particle.x}vw`, `${(particle.x + (Math.random() * 20) - 10) % 100}vw`],
                y: [`${particle.y}vh`, `${(particle.y + (Math.random() * 20) - 10) % 100}vh`],
                scale: [0, 1, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Cosmic Grid */}
          <motion.div className="absolute inset-0" style={{ opacity: 0.2 }}>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`grid-h-${i}`}
                className="absolute w-full h-px bg-blue-500/20"
                style={{ top: `${(i * 100) / 12}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i % 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`grid-v-${i}`}
                className="absolute h-full w-px bg-purple-500/20"
                style={{ left: `${(i * 100) / 12}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleX: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i % 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          <div className="relative">
            {/* Enhanced Code Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-48 left-1/2 -translate-x-1/2 w-80 bg-gray-900/90 rounded-xl p-5 backdrop-blur-xl border border-gray-700/50 overflow-hidden shadow-2xl"
            >
              {/* Animated Glow Effect */}
              <motion.div
                className="absolute -inset-1 rounded-xl opacity-50 blur-xl"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3B82F6 0%, transparent 50%, #EC4899 100%)',
                    'linear-gradient(45deg, #8B5CF6 0%, transparent 50%, #3B82F6 100%)',
                    'linear-gradient(45deg, #EC4899 0%, transparent 50%, #8B5CF6 100%)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative">
                <div className="flex space-x-1.5">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <motion.div 
                  className="text-xs text-gray-500 font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  portfolio.js
                </motion.div>
              </div>

              {/* Code Editor Line Numbers */}
              <div className="absolute left-0 top-12 bottom-0 w-6 flex flex-col items-end pr-1">
                {codeLines.map((_, i) => (
                  <motion.div
                    key={`line-${i}`}
                    className="text-xs font-mono text-gray-600 h-6 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>

              {/* Code Content */}
              <div className="pl-6">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    className="relative text-xs font-mono mb-2 group h-6 flex items-center"
                  >
                    <div className="text-blue-300 group-hover:text-blue-400 transition-colors">
                      {line.startsWith('import') ? (
                        <SyntaxHighlight line={line} />
                      ) : line.startsWith('const') || line.startsWith('await') ? (
                        <SyntaxHighlight line={line} />
                      ) : line.startsWith('if') ? (
                        <SyntaxHighlight line={line} />
                      ) : line.startsWith('  ') ? (
                        <SyntaxHighlight line={line} />
                      ) : line.startsWith('export') ? (
                        <SyntaxHighlight line={line} />
                      ) : line.startsWith('portfolio') ? (
                        <SyntaxHighlight line={line} />
                      ) : (
                        <SyntaxHighlight line={line} />
                      )}
                    </div>
                    <motion.div
                      className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Cursor Effect */}
              <motion.div
                className="absolute w-2 h-5 bg-blue-500/70 bottom-8 left-36"
                animate={{
                  opacity: [1, 0, 1],
                  left: ["36%", "70%", "52%", "36%"]
                }}
                transition={{
                  opacity: { duration: 0.8, repeat: Infinity },
                  left: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Enhanced Floating Icons */}
              {floatingIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${30 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-4 h-4 text-blue-400/50" />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Main Loader */}
            <motion.div
              className="relative w-48 h-48 flex items-center justify-center perspective-1000"
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Enhanced 3D Orbital Rings */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderTopColor: i % 2 === 0 ? 
                      `rgba(59, 130, 246, ${0.4 - i * 0.05})` : 
                      `rgba(236, 72, 153, ${0.4 - i * 0.05})`,
                    borderBottomColor: i % 2 === 0 ? 
                      `rgba(139, 92, 246, ${0.4 - i * 0.05})` : 
                      `rgba(52, 211, 153, ${0.4 - i * 0.05})`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              ))}

              {/* 3D Orbital Planes */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`plane-${i}`}
                  className="absolute w-full h-full rounded-full"
                  style={{
                    border: '1px dashed rgba(59, 130, 246, 0.2)',
                    transform: `rotateX(${45 + i * 45}deg)`,
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    rotateZ: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              ))}

              {/* Enhanced Orbiting Icons */}
              {orbitingIcons.map((Icon, index) => {
                const angle = (index / orbitingIcons.length) * 2 * Math.PI;
                const radius = 60;
                const initialX = Math.cos(angle) * radius;
                const initialY = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`orbiting-${index}`}
                    className="absolute"
                    initial={{
                      x: initialX,
                      y: initialY,
                    }}
                    animate={{
                      x: [initialX, -initialX, initialX],
                      y: [initialY, -initialY, initialY],
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                      zIndex: [1, 10, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      delay: index * (12 / orbitingIcons.length),
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-500 filter drop-shadow-lg" />
                  </motion.div>
                );
              })}

              {/* Enhanced Center Logo */}
              <motion.div
                className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Pulsating Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                    background: [
                      'radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.2))',
                      'radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.2))',
                      'radial-gradient(circle, rgba(236, 72, 153, 0.8), rgba(59, 130, 246, 0.2))',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Logo Container */}
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm z-10 border border-white/10"
                  style={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                  }}
                >
                  {/* Logo Inner Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-70"
                    animate={{
                      background: [
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.6) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(236, 72, 153, 0.6) 100%)',
                        'linear-gradient(45deg, rgba(236, 72, 153, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(139, 92, 246, 0.6) 100%)',
                        'linear-gradient(45deg, rgba(139, 92, 246, 0.6) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(59, 130, 246, 0.6) 100%)',
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Spinning Logo */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Code2 className="w-10 h-10 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div 
              className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden backdrop-blur-md border border-gray-700/50">
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
                  }}
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Progress Text */}
              <motion.div
                className="mt-3 text-center font-mono text-sm text-blue-100/80 font-medium flex items-center justify-center space-x-2"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>Initializing Portfolio</span>
                <motion.span
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mx-0.5"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mx-0.5"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-pink-400 mx-0.5"></span>
                </motion.span>
                <span>{progress}%</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Code syntax highlighting component
const SyntaxHighlight = ({ line }: { line: string }) => {
  // Basic syntax highlighting colors
  const keywords = ['import', 'const', 'await', 'if', 'export', 'default', 'from', 'push'];
  const functions = ['build', 'optimize', 'isAwesome', 'celebrate'];
  const strings = ['"future"', "'creativity'", "'future'"];
  const brackets = ['{', '}', '(', ')', '[', ']'];
  
  // Split by spaces while preserving quoted strings
  const tokens = tokenizeLine(line);
  
  return (
    <span>
      {tokens.map((token, i) => {
        if (keywords.includes(token)) {
          return <span key={i} className="text-purple-400">{token}</span>;
        } else if (strings.some(s => token.includes(s))) {
          return <span key={i} className="text-green-400">{token}</span>;
        } else if (functions.some(f => token.includes(f))) {
          return <span key={i} className="text-yellow-400">{token}</span>;
        } else if (brackets.includes(token)) {
          return <span key={i} className="text-gray-400">{token}</span>;
        } else if (token === "Dreams") {
          return <span key={i} className="text-pink-400">{token}</span>;
        } else if (token === "Success") {
          return <span key={i} className="text-yellow-400">{token}</span>;
        } else if (token === "portfolio") {
          return <span key={i} className="text-blue-400">{token}</span>;
        } else if (token === "features") {
          return <span key={i} className="text-cyan-400">{token}</span>;
        } else if (token === "=>" || token === ";" || token === ".") {
          return <span key={i} className="text-gray-400">{token}</span>;
        } else {
          return <span key={i} className="text-blue-300">{token}</span>;
        }
      })}
    </span>
  );
};

// Function to tokenize code line
const tokenizeLine = (line: string) => {
  const tokens = [];
  let currentToken = '';
  let inString = false;
  let stringChar = '';
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if ((char === "'" || char === '"') && (i === 0 || line[i-1] !== '\\')) {
      if (inString && char === stringChar) {
        // End of string
        currentToken += char;
        tokens.push(currentToken);
        currentToken = '';
        inString = false;
      } else if (!inString) {
        // Start of string
        if (currentToken) tokens.push(currentToken);
        currentToken = char;
        inString = true;
        stringChar = char;
      } else {
        // Different quote inside a string
        currentToken += char;
      }
    } else if (inString) {
      currentToken += char;
    } else if (char === ' ') {
      if (currentToken) tokens.push(currentToken);
      currentToken = '';
    } else if ("(){}[];.,".includes(char)) {
      if (currentToken) tokens.push(currentToken);
      tokens.push(char);
      currentToken = '';
    } else {
      currentToken += char;
    }
  }
  
  if (currentToken) tokens.push(currentToken);
  return tokens;
};

export default Preloader;
