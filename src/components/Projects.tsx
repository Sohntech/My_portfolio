import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: "Threadline",
    description: "Application web de réseau social de tailleurs ",
    image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/n42nbuhcpizq32ajjua8.png",
    tags: ["NodeJs", "Mysql", "ReactJs"],
    github: "https://github.com",
    live: "https://threadline.vercel.app",
  },
  {
    title: "Tsunami web",
    description: "Simulation d'Application de transfert d'argent",
    image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/z9k1hcdikwqiuirhnjct.png",
    tags: ["NodeJs", "Angular", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Application Web Progressive",
    description: "PWA développée avec React et Node.js",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-xl overflow-hidden neon-border bg-white dark:bg-gray-800 cursor-pointer"
            onClick={() => openModal(project)} // Ouvrir le modal sur clic
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal} // Fermer en cliquant à l'extérieur
        >
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur le modal
          >
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-red-500"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {selectedProject.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neon-primary)] hover:underline"
              >
                Code
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neon-primary)] hover:underline"
              >
                Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
