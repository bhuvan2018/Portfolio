import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <WaveEffect key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-blue-400 transition-colors p-2 rounded-full bg-gray-800"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              </WaveEffect>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Bhuvan Shetty. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              By me with React, TypeScript, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;