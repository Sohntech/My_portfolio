import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--neon-primary)] ring-opacity-50">
              <img src="/src/assets/me_enhanced.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--neon-secondary)] rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[var(--neon-primary)] rounded-full opacity-50 blur-2xl"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-extrabold cyber-glitch bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
            >
              Développeur Fullstack & UI/UX Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed"
            >
              Passionné par le développement web et mobile, je crée des expériences numériques innovantes 
              et immersives. Mon approche combine expertise technique et design créatif pour donner vie 
              à des projets uniques et captivants.
            </motion.p>

            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

