import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronDown, Sparkles } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm Bhuvan's assistant. How can I help you today? You can ask me about Bhuvan's skills, experience, or projects!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase();
    
    if (normalizedMessage.includes('skill') || normalizedMessage.includes('technology')) {
      return "Bhuvan is skilled in React, Node.js, TypeScript, and full-stack development. He's particularly experienced with modern web technologies and responsive design.";
    }
    
    if (normalizedMessage.includes('experience') || normalizedMessage.includes('work')) {
      return "Bhuvan has extensive experience as a Full Stack Developer, working with companies like Tech Innovations Inc. and Digital Solutions Ltd. He's led multiple successful projects and improved application performance significantly.";
    }
    
    if (normalizedMessage.includes('project')) {
      return "Bhuvan has worked on various impressive projects including an E-commerce Platform, Task Management App, and Weather Dashboard. Each project showcases his ability to create robust, user-friendly applications.";
    }
    
    if (normalizedMessage.includes('contact') || normalizedMessage.includes('hire')) {
      return "You can contact Bhuvan through the contact form in the Contact section. He's always open to discussing new opportunities and collaborations!";
    }
    
    if (normalizedMessage.includes('education') || normalizedMessage.includes('study')) {
      return "Bhuvan holds a Master's degree in Computer Science with a focus on AI and Machine Learning. He's also completed intensive training in modern web development technologies.";
    }

    return "I can tell you about Bhuvan's skills, experience, projects, education, or how to contact him. What would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { 
      text: userMessage,
      isBot: false,
      timestamp: new Date()
    }]);

    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { 
        text: response,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-full p-5 shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 group overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 10px 40px rgba(59, 130, 246, 0.3)',
              '0 10px 60px rgba(168, 85, 247, 0.4)',
              '0 10px 40px rgba(59, 130, 246, 0.3)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Sparkle particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI) / 2) * 25],
                y: [0, Math.sin((i * Math.PI) / 2) * 25],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            !
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 w-[420px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100/50 dark:border-blue-500/30 z-50"
            style={{
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
            }}
          >
            {/* Header with gradient */}
            <div className="relative p-5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Bot className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      Bhuvan's AI Assistant
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                      </motion.div>
                    </h3>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online now
                    </p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div ref={chatContainerRef} className="h-[450px] flex flex-col bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
              <div className="flex-1 p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} items-end gap-3`}
                  >
                    {message.isBot && (
                      <motion.div 
                        className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Bot className="w-6 h-6 text-white" />
                      </motion.div>
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`max-w-[75%] px-4 py-3 rounded-3xl shadow-lg ${
                        message.isBot
                          ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-md border border-gray-100 dark:border-gray-700'
                          : 'bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white rounded-br-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 flex items-center gap-1 ${
                        message.isBot ? 'text-gray-400' : 'text-white/70'
                      }`}>
                        <span className="w-1 h-1 rounded-full bg-current"></span>
                        {formatTime(message.timestamp)}
                      </p>
                    </motion.div>

                    {!message.isBot && (
                      <motion.div 
                        className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <User className="w-6 h-6 text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-3xl rounded-bl-md shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2.5 h-2.5 bg-blue-500 rounded-full"
                            animate={{
                              y: [-3, 0, -3],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t-2 border-gray-100/50 dark:border-gray-700/50">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 shadow-sm"
                    />
                    {/* Input glow effect on focus */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 pointer-events-none"
                      animate={{
                        opacity: input.length > 0 ? 0.5 : 0,
                      }}
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-3.5 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all group overflow-hidden"
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </div>

                {/* Quick suggestions */}
                <motion.div 
                  className="flex gap-2 mt-3 overflow-x-auto scrollbar-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: messages.length === 1 ? 1 : 0, y: messages.length === 1 ? 0 : 10 }}
                >
                  {['Skills', 'Projects', 'Experience'].map((suggestion) => (
                    <motion.button
                      key={suggestion}
                      onClick={() => setInput(suggestion)}
                      className="px-4 py-2 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-medium hover:bg-blue-100 dark:hover:bg-gray-700 transition-all whitespace-nowrap border border-blue-100 dark:border-gray-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Scroll to bottom button */}
            <AnimatePresence>
              {messages.length > 5 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => scrollToBottom()}
                  className="absolute bottom-24 right-6 p-2.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
