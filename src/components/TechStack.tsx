import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  { 
    name: 'PHP', 
    icon: <i className="devicon-php-plain colored"></i>, 
    description: 'PHP (Hypertext Preprocessor) est un langage de script open-source utilisé principalement pour le développement côté serveur. Il est idéal pour créer des applications dynamiques telles que les blogs, les forums ou les sites e-commerce.' 
  },
  { 
    name: 'Laravel', 
    icon: <i className="devicon-laravel-plain colored"></i>, 
    description: 'Laravel est un framework PHP élégant et robuste. Il simplifie le développement avec des outils tels que l\'ORM Eloquent, les migrations de base de données et un système de routage clair et puissant.' 
  },
  { 
    name: 'HTML', 
    icon: <i className="devicon-html5-plain colored"></i>, 
    description: 'HTML (HyperText Markup Language) est la base de la structure des pages web. Il permet de définir les en-têtes, les paragraphes, les images, les vidéos et plus encore.' 
  },
  { 
    name: 'CSS', 
    icon: <i className="devicon-css3-plain colored"></i>, 
    description: 'CSS (Cascading Style Sheets) est utilisé pour styliser les éléments HTML. Il offre des possibilités de design infini, des animations fluides aux mises en page responsives.' 
  },
  { 
    name: 'JavaScript', 
    icon: <i className="devicon-javascript-plain colored"></i>, 
    description: 'JavaScript est le langage de programmation principal du web. Il rend les pages interactives grâce à des animations, des validations de formulaires et des appels API asynchrones.' 
  },
  { 
    name: 'Dart', 
    icon: <i className="devicon-dart-plain colored"></i>, 
    description: 'Dart est un langage de programmation développé par Google. Il est principalement utilisé avec Flutter pour créer des applications performantes sur plusieurs plateformes.' 
  },
  { 
    name: 'Flutter', 
    icon: <i className="devicon-flutter-plain colored"></i>, 
    description: 'Flutter est un framework UI de Google. Il permet de créer des applications mobiles, web et desktop avec une base de code unique, tout en offrant des performances élevées.' 
  },
  { 
    name: 'Node.js', 
    icon: <i className="devicon-nodejs-plain colored"></i>, 
    description: 'Node.js est un environnement d\'exécution JavaScript côté serveur. Il est connu pour sa vitesse, sa scalabilité et son efficacité dans les applications temps réel.' 
  },
  { 
    name: 'React.js', 
    icon: <i className="devicon-react-plain colored"></i>, 
    description: 'React.js est une bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques. Il utilise un DOM virtuel pour des performances rapides et une gestion efficace des états.' 
  },
  { 
    name: 'Angular', 
    icon: <i className="devicon-angularjs-plain colored"></i>, 
    description: 'Angular est un framework front-end complet développé par Google. Il est utilisé pour créer des applications web dynamiques grâce à son architecture basée sur les composants.' 
  },
  { 
    name: 'Docker', 
    icon: <i className="devicon-docker-plain colored"></i>, 
    description: 'Docker est une plateforme open-source qui automatise le déploiement des applications dans des conteneurs légers, permettant une portabilité et une isolation maximales.' 
  },
  { 
    name: 'MongoDB', 
    icon: <i className="devicon-mongodb-plain colored"></i>, 
    description: 'MongoDB est une base de données NoSQL orientée documents. Elle est idéale pour stocker des données non structurées et s\'adapte parfaitement aux architectures modernes.' 
  },
  { 
    name: 'Firebase', 
    icon: <i className="devicon-firebase-plain colored"></i>, 
    description: 'Firebase est une plateforme de développement d\'applications mobiles et web proposée par Google. Elle inclut des services comme l\'authentification, la base de données en temps réel et l\'hébergement.' 
  },
  { 
    name: 'MySQL', 
    icon: <i className="devicon-mysql-plain colored"></i>, 
    description: 'MySQL est un système de gestion de bases de données relationnelles open-source. Il est utilisé pour stocker et gérer des données structurées.' 
  },
  { 
    name: 'PostgreSQL', 
    icon: <i className="devicon-postgresql-plain colored"></i>, 
    description: 'PostgreSQL est un système de gestion de bases de données relationnelles avancé. Il supporte des fonctionnalités complexes comme le stockage JSON et la réplication.' 
  },
  { 
    name: 'Figma', 
    icon: <i className="devicon-figma-plain colored"></i>, 
    description: 'Figma est un outil de design collaboratif basé sur le cloud. Il est idéal pour créer des prototypes interactifs et des interfaces utilisateur modernes.' 
  },
  { 
    name: 'Postman', 
    icon: <i className="devicon-postman-plain colored"></i>, 
    description: 'Postman est un outil pour tester les APIs. Il permet de simuler des requêtes HTTP et de valider les réponses pour faciliter le développement et le débogage.' 
  },
  { 
    name: 'TailwindCSS', 
    icon: <i className="devicon-tailwindcss-plain colored"></i>, 
    description: 'TailwindCSS est un framework CSS utilitaire. Il permet de construire des interfaces rapidement en utilisant des classes préconfigurées pour chaque élément.' 
  },
  { 
    name: 'Bootstrap', 
    icon: <i className="devicon-bootstrap-plain colored"></i>, 
    description: 'Bootstrap est un framework CSS populaire. Il fournit des composants prêts à l\'emploi pour créer des designs responsives rapidement.' 
  },
  { 
    name: 'Express.js', 
    icon: <i className="devicon-express-original colored"></i>, 
    description: 'Express.js est un framework léger pour Node.js. Il est utilisé pour construire des APIs et des applications web rapidement et efficacement.' 
  },
  { 
    name: 'Github', 
    icon: <i className="devicon-github-plain "></i>, 
    description: 'GitHub est une plateforme de collaboration et de gestion de code source basée sur Git. Elle est utilisée pour héberger et suivre les versions des projets.' 
  },
  { 
    name: 'Swagger', 
    icon: <i className="devicon-swagger-plain colored"></i>, 
    description: 'Swagger est un outil pour documenter et tester les APIs. Il génère automatiquement une interface utilisateur pour interagir avec les endpoints.' 
  },
  { 
    name: 'TypeScript', 
    icon: <i className="devicon-typescript-plain colored"></i>, 
    description: 'TypeScript est une surcouche de JavaScript qui ajoute des types statiques. Il améliore la lisibilité du code et aide à éviter les erreurs.' 
  },
  { 
    name: 'Next.js', 
    icon: <i className="devicon-nextjs-plain "></i>, 
    description: 'Next.js est un framework React pour le rendu côté serveur. Il offre des performances optimales, un routage dynamique et une préparation statique des pages pour une expérience utilisateur fluide.' 
  },
  
  
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
    <section id='techs' className="py-20">
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