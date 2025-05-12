import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code, Coffee, ExternalLink, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bhuvan2018', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bhuvan-shetty', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:bhuvanshetty2018@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-95" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Top Wave */}
        <svg className="fill-current text-white dark:text-gray-900 transform rotate-180" viewBox="0 0 1440 120">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left space-y-4"
              >
                <motion.h3
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2 justify-center md:justify-start"
                  whileHover={{ scale: 1.05 }}
                >
                  Bhuvan Shetty
                  <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                </motion.h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Crafting digital experiences with passion and precision. Let's build something amazing together.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Connect Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center md:text-right space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <div className="flex justify-center md:justify-end gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <div className="flex flex-col items-center space-y-4">
                <p className="text-gray-400 flex items-center gap-2 group">
                  &copy; {currentYear} Bhuvan Shetty. All rights reserved.
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors" />
                  </motion.span>
                </p>

                <motion.div
                  className="flex items-center gap-3 text-sm text-gray-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="flex items-center gap-1">
                    Made with <Code className="w-4 h-4 text-blue-400" />
                  </span>
                  <span className="flex items-center gap-1">
                    and <Coffee className="w-4 h-4 text-yellow-400" />
                  </span>
                </motion.div>

                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-xs text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-20 overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, -100],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="absolute inset-0 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
