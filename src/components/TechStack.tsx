import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  { name: 'PHP', icon: <i className="devicon-php-plain colored"></i>, description: 'PHP est un langage de script côté serveur utilisé pour créer des sites web dynamiques.' },
  { name: 'Laravel', icon: <i className="devicon-laravel-plain colored"></i>, description: 'Laravel est un framework PHP élégant et puissant pour le développement d\'applications web.' },
  { name: 'HTML', icon: <i className="devicon-html5-plain colored"></i>, description: 'HTML est le langage de balisage utilisé pour structurer le contenu des pages web.' },
  { name: 'CSS', icon: <i className="devicon-css3-plain colored"></i>, description: 'CSS contrôle la présentation et le style des pages web.' },
  { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i>, description: 'JavaScript est un langage de programmation utilisé pour rendre les pages web interactives.' },
  { name: 'Dart', icon: <i className="devicon-dart-plain colored"></i>, description: 'Dart est un langage développé par Google pour créer des applications multiplateformes.' },
  { name: 'Flutter', icon: <i className="devicon-flutter-plain colored"></i>, description: 'Flutter est un framework basé sur Dart pour créer des applications mobiles et web.' },
  { name: 'Node.js', icon: <i className="devicon-nodejs-plain colored"></i>, description: 'Node.js est un environnement d\'exécution pour exécuter JavaScript côté serveur.' },
  { name: 'React.js', icon: <i className="devicon-react-plain colored"></i>, description: 'React est une bibliothèque JavaScript pour construire des interfaces utilisateur.' },
  { name: 'Angular', icon: <i className="devicon-angularjs-plain colored"></i>, description: 'Angular est un framework JavaScript pour construire des applications web riches et dynamiques.' },
  { name: 'Docker', icon: <i className="devicon-docker-plain colored"></i>, description: 'Docker est une plateforme pour créer, déployer et exécuter des conteneurs d\'applications.' },
  { name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored"></i>, description: 'MongoDB est une base de données NoSQL orientée documents.' },
  { name: 'Firebase', icon: <i className="devicon-firebase-plain colored"></i>, description: 'Firebase fournit des outils pour développer des applications mobiles et web rapidement.' },
  { name: 'MySQL', icon: <i className="devicon-mysql-plain colored"></i>, description: 'MySQL est un système de gestion de bases de données relationnelles open-source.' },
  { name: 'PostgreSQL', icon: <i className="devicon-postgresql-plain colored"></i>, description: 'PostgreSQL est une base de données relationnelle puissante et extensible.' },
  { name: 'Figma', icon: <i className="devicon-figma-plain colored"></i>, description: 'Figma est un outil de conception collaborative pour créer des interfaces utilisateur.' },
  { name: 'Postman', icon: <i className="devicon-postman-plain colored"></i>, description: 'Postman est un outil utilisé pour tester et développer des API.' },
  { name: 'Tailwindcss', icon: <i className="devicon-tailwindcss-plain colored"></i>, description: 'Tailwind CSS est un framework utilitaire pour concevoir des interfaces rapidement.' },
  { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored"></i>, description: 'Bootstrap est un framework CSS populaire pour créer des interfaces responsives.' },
  { name: 'Express.js', icon: <i className="devicon-express-original colored"></i>, description: 'Express est un framework Node.js minimaliste pour construire des API et des applications web.' },
  { name: 'Github', icon: <i className="devicon-github-plain colored"></i>, description: 'GitHub est une plateforme pour héberger et collaborer sur des projets de code source.' },
  { name: 'Swagger', icon: <i className="devicon-swagger-plain colored"></i>, description: 'Swagger est un outil pour concevoir, documenter et tester des API.' },
  { name: 'Typescript', icon: <i className="devicon-typescript-plain colored"></i>, description: 'TypeScript est une extension de JavaScript qui ajoute le typage statique.' },
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
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow neon-border cursor-pointer"
            onClick={() => openModal(tech)}
          >
            <span className="text-3xl mb-2">{tech.icon}</span>
            <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
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
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()} // Empêche de fermer en cliquant dans le modal
            >
              <div className="flex justify-between items-center">
                <span className="text-3xl">{selectedTech.icon}</span>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2 text-[var(--neon-primary)]">
                {selectedTech.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedTech.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
