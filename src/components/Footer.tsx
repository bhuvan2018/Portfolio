import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code, Coffee } from 'lucide-react';
import { WaveEffect } from './animations/WaveEffect';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bhuvan2018', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:bhuvanshetty2018@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative">
        {/* Top wave */}
        <svg className="fill-current text-white dark:text-gray-900" viewBox="0 0 1440 120">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>

        <div className="bg-gradient-to-b from-gray-900 to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-12">
              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <WaveEffect key={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors relative" />
                    </motion.a>
                  </WaveEffect>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center space-y-4"
              >
                <p className="text-gray-400 flex items-center justify-center gap-2">
                  &copy; {currentYear} Bhuvan Shetty. All rights reserved.
                </p>
                
                <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  </span>
                  <span className="flex items-center gap-1">
                    <Code className="w-4 h-4 text-blue-500" /> &
                  </span>
                  <span className="flex items-center gap-1">
                    <Coffee className="w-4 h-4 text-yellow-500" />
                  </span>
                </div>

                <motion.p 
                  className="text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Built with React, TypeScript, Tailwind CSS
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;