import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <div className="aspect-square rounded-2xl border-4 border-gray-200 overflow-hidden neon-border">
            <img
              src="https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold  bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
          >
            <span className='text-gray-400 text-7xl font-extrabold'>Ndiaga LO</span> <br /><br />
            Développeur Web/Mobile Fullstack & UI/UX Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Passionné par le développement web et mobile, je crée des expériences numériques innovantes 
            et immersives. Mon approche combine expertise technique et design créatif pour donner vie 
            à des projets uniques.
          </motion.p>

          <motion.a
            href="https://res.cloudinary.com/drxouwbms/image/upload/v1732391039/ychxwc4zfwqixahlpuct.pdf" 
            download
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Télécharger mon CV</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};