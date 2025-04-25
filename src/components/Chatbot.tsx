import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, ChevronDown, Sparkles } from 'lucide-react';

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
    
    // Predefined responses based on keywords
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

    // Simulate typing delay
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
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-blue-100/20 dark:border-blue-500/20"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <h3 className="font-semibold flex items-center gap-2">
                  Bhuvan's Assistant
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </h3>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Chat Container */}
            <div ref={chatContainerRef} className="h-[400px] flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} items-end gap-2`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <motion.div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-60">{formatTime(message.timestamp)}</p>
                    </motion.div>

                    {!message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about skills, projects, etc..."
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <motion.button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
              onClick={() => scrollToBottom()}
              className="absolute bottom-20 right-4 p-2 bg-blue-600 text-white rounded-full shadow-lg opacity-0 hover:bg-blue-700 transition-all"
              animate={{
                opacity: messages.length > 4 ? 1 : 0,
                scale: messages.length > 4 ? 1 : 0,
              }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
