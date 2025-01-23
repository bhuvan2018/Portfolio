import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Moon, Sun, Sparkles } from 'lucide-react';

export type Theme = 'minimalist' | 'vibrant' | 'futuristic' | 'dark' | 'light';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeSwitcher = ({ currentTheme, setTheme }: ThemeSwitcherProps) => {
  const themes: { name: Theme; icon: typeof Moon; label: string }[] = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'minimalist', icon: Palette, label: 'Minimalist' },
    { name: 'vibrant', icon: Sparkles, label: 'Vibrant' },
    { name: 'futuristic', icon: Sparkles, label: 'Futuristic' },
  ];

  return (
    <div className="fixed top-20 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col gap-2"
      >
        {themes.map(({ name, icon: Icon, label }) => (
          <motion.button
            key={name}
            onClick={() => setTheme(name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg flex items-center gap-2 ${
              currentTheme === name
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;