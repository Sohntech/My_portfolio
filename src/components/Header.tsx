import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {

  return (
    <AnimatePresence>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
            >
              Sohntech
            </motion.div>

            {/* Menu et Dark Mode */}
            <div className="flex items-center space-x-6">
              {/* Liens */}
              <div className="hidden sm:flex items-center space-x-8">
                {['about', 'techs', 'projects'].map((item) => (
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
                        hover: { opacity: 0.8, scale: 1.05 },
                      }}
                    />
                    <motion.a
                      href={`#${item}`}
                      className="relative z-10 px-4 py-2 text-gray-700 dark:text-gray-300 transition-colors duration-200"
                      variants={{
                        hover: {
                          color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                        },
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] rounded-md opacity-0"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 0.2 },
                        }}
                      />
                      <motion.span className="relative z-10">{item.charAt(0).toUpperCase() + item.slice(1)}</motion.span>
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              {/* Bouton Dark Mode */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-[var(--neon-primary)] focus:outline-none focus:ring"
                whileHover={{
                  scale: 1.1,
                  rotate: 180,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>
    </AnimatePresence>
  );
};
