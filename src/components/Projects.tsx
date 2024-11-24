import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: "Threadline",
    description: "Application web de réseau social de tailleurs.",
    image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/n42nbuhcpizq32ajjua8.png",
    tags: ["NodeJs", "MySQL", "ReactJS"],
    github: "https://github.com",
    live: "https://threadline.vercel.app",
  },
  {
    title: "Tsunami web",
    description: "Simulation d'application de transfert d'argent.",
    image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/z9k1hcdikwqiuirhnjct.png",
    tags: ["NodeJs", "Angular", "MongoDB"],
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
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
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
            onClick={() => openModal(project)}
          >
            <div className="relative h-56 overflow-hidden">
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-5xl w-full mx-4 md:mx-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-red-500"
              onClick={closeModal}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover rounded-t-lg"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <div className="p-8">
              <motion.h3
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProject.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedProject.description}
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--neon-primary)] hover:underline text-xl"
                >
                  Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--neon-primary)] hover:underline text-xl"
                >
                  Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
