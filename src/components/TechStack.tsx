import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  { 
    name: 'PHP', 
    icon: <i className="devicon-php-plain colored"></i>, 
    description: 'PHP (Hypertext Preprocessor) est un langage de script open-source utilisé principalement pour le développement côté serveur. Il permet de créer des applications dynamiques et interactives, comme les systèmes de gestion de contenu ou les sites e-commerce.' 
  },
  { 
    name: 'Laravel', 
    icon: <i className="devicon-laravel-plain colored"></i>, 
    description: 'Laravel est un framework PHP élégant et robuste qui simplifie le développement en fournissant des outils comme l\'ORM Eloquent, les migrations de base de données, et le routage clair.' 
  },
  { 
    name: 'HTML', 
    icon: <i className="devicon-html5-plain colored"></i>, 
    description: 'HTML (HyperText Markup Language) est la base de la structure des pages web. Il permet de définir les en-têtes, les paragraphes, les images, les liens et bien plus, en construisant le squelette d\'un site.' 
  },
  { 
    name: 'CSS', 
    icon: <i className="devicon-css3-plain colored"></i>, 
    description: 'CSS (Cascading Style Sheets) permet de styliser les éléments HTML en définissant des couleurs, des polices, des marges, et des animations. Il est essentiel pour créer des designs attrayants et responsives.' 
  },
  { 
    name: 'JavaScript', 
    icon: <i className="devicon-javascript-plain colored"></i>, 
    description: 'JavaScript est un langage de programmation orienté scripts utilisé pour rendre les sites web interactifs. Il est souvent utilisé pour les animations, la validation de formulaires, et les requêtes asynchrones.' 
  },
  { 
    name: 'Dart', 
    icon: <i className="devicon-dart-plain colored"></i>, 
    description: 'Dart est un langage développé par Google, utilisé principalement avec Flutter pour créer des applications multiplateformes performantes.' 
  },
  // Ajoute ici plus de technologies si nécessaire...
];

export const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<{
    name: string;
    description: string;
    icon: JSX.Element;
  } | null>(null);

  const openModal = (tech: typeof technologies[0]) => {
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
  };

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
      >
        Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.1, duration: 0.5 },
          },
        }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: 'spring', stiffness: 300, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => openModal(tech)}
          >
            <span className="text-3xl mb-2">{tech.icon}</span>
            <span className="text-sm text-center text-gray-800 dark:text-gray-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <span className="text-4xl">{selectedTech.icon}</span>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-200">
                {selectedTech.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedTech.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
