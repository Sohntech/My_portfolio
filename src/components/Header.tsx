import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const tabVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  const glowVariants = {
    hover: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <AnimatePresence>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
          >
            Portfolio
          </motion.div>
          
          <div className="flex items-center space-x-8">
            {['Home', 'Projets', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                className="relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] rounded-lg opacity-75 blur-sm"
                  variants={{
                    rest: { opacity: 0, scale: 0.9 },
                    hover: { opacity: 0.8, scale: 1.05 }
                  }}
                />
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="relative z-10 px-4 py-2 text-gray-700 dark:text-gray-300 transition-colors duration-200"
                  variants={{
                    hover: { color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] rounded-md opacity-0"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.2 }
                    }}
                  />
                  <motion.span className="relative z-10">
                    {item}
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
            {/* <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              whileHover={{
                scale: 1.1,
                rotate: 180,
                transition: { duration: Infinity },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button> */}
          </div>
        </div>
      </nav>
      </header>
    </AnimatePresence>
  );
};

