import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  /* ... votre tableau de technologies ... */
];

export const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<{
    name: string;
    description: string;
    icon: JSX.Element;
  } | null>(null);

  const openModal = (tech: typeof technologies[0]) => setSelectedTech(tech);
  const closeModal = () => setSelectedTech(null);

  // Animation de rebond pour l'entrée des éléments
  const bounceVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.3
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8
      }
    }
  };

  // Animation du titre
  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="py-20">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
      >
        Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={bounceVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-lg hover:shadow-2xl cursor-pointer dark:text-white"
            onClick={() => openModal(tech)}
          >
            <motion.span 
              className="text-3xl mb-2"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
              {tech.icon}
            </motion.span>
            <p className="text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ 
                scale: 0,
                opacity: 0,
                y: 100
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              exit={{ 
                scale: 0,
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.2
                }
              }}
              className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8 }}
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              >
                ×
              </motion.button>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5
                  }
                }}
              >
                <motion.span 
                  className="text-4xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {selectedTech.icon}
                </motion.span>
                <motion.h3 
                  className="text-2xl font-bold mt-4 dark:text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  {selectedTech.name}
                </motion.h3>
                <motion.p 
                  className="mt-2 dark:text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  {selectedTech.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStack;