import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const projects = {
  applications: [
    {
      title: "Threadline",
      description: "Application web de réseau social de tailleurs.",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/n42nbuhcpizq32ajjua8.png",
      tags: ["NodeJs", "MySQL", "ReactJS"],
      live: "https://threadline.vercel.app",
    },
    {
      title: "Sparkline",
      description: "Landing page de la startup Sparkline.",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1742057927/Screenshot_2025-03-15_at_16.58.17_iy8fsq.png",
      tags: ["ReactJS", "TailwindCSS", "javascript"],
      live: "https://www.sparkline.sn/",
    },
  ],
  design: [
    {
      title: "8 Mars",
      description: "Création d'une affiche pour la journée de la femme.",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/t_wide/v1742072123/WhatsApp_Image_2025-03-08_at_17.32.36_imxa8c.jpg",
      tags: ["canva", "8 mars", "Sparkline"],
      live: "https://res.cloudinary.com/drxouwbms/image/upload/v1742072123/WhatsApp_Image_2025-03-08_at_17.32.36_imxa8c.jpg",
    },
    {
      title: "Ramadan",
      description: "Création d'une affiche pour le ramadan",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/t_wide/v1742072125/WhatsApp_Image_2025-03-03_at_10.27.05_kgsko4.jpg",
      tags: ["Canva", "Ramadan", "Sparkline"],
      live: "https://res.cloudinary.com/drxouwbms/image/upload/v1742072125/WhatsApp_Image_2025-03-03_at_10.27.05_kgsko4.jpg",
    },
    {
      title: "Makeup",
      description: "Création d'une affiche pour un salon de beauté",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/t_wide/v1742072118/WhatsApp_Image_2024-12-15_at_20.40.41_jxixop.jpg",
      tags: ["Canva", "Fashion", "Design"],
      live: "https://res.cloudinary.com/drxouwbms/image/upload/v1742072118/WhatsApp_Image_2024-12-15_at_20.40.41_jxixop.jpg",
    },
    {
      title: "Nails",
      description: "Création d'une affiche pour un salon de pédicure et manucure", 
      image: "https://res.cloudinary.com/drxouwbms/image/upload/t_wide/v1742072122/WhatsApp_Image_2024-12-15_at_21.45.41_hbevxf.jpg",
      tags: ["Canva", "Nails", "Design"],
      live: "https://res.cloudinary.com/drxouwbms/image/upload/v1742072122/WhatsApp_Image_2024-12-15_at_21.45.41_hbevxf.jpg",
    },
  ]
};

export const Projects: React.FC = () => {
  interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    live?: string;
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'applications' | 'design'>('applications');

  const openModal = (project: Project) => {
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
        className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Mes Projets
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'applications'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'design'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Créations Graphiques
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects[activeTab].map((project, index) => (
          <motion.div
            key={`${activeTab}-${project.title}`}
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
            className="relative mx-4 md:mx-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-3xl w-full max-h-[80vh] overflow-y-auto"
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
              className="w-full h-auto rounded-t-lg"
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
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--neon-primary)] hover:underline text-xl"
                  >
                    Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--neon-primary)] hover:underline text-xl"
                  >
                    Voir la réalisation
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};