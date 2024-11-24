import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Carte animée */}
        <div className="relative flex justify-center">
          <div
            className={`w-[500px] h-[500px] relative transform-style-3d transition-transform duration-700 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleFlip}
          >
            {/* Face avant : Photo */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png"
                  alt="Profile"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>

            {/* Face arrière : QR Code */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/v1732463478/mr7ibj6cov01r770ailh.png"
                  alt="QR Code"
                  className="w-fit h-fit object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Informations About */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
          >
            <span className="text-gray-400 text-7xl font-extrabold">Ndiaga LO</span>
            <br />
            <br />
            Développeur Web/Mobile Fullstack & UI/UX Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Passionné par le développement web et mobile, je crée des expériences numériques
            innovantes et immersives. Mon approche combine expertise technique et design
            créatif pour donner vie à des projets uniques.
          </motion.p>

          <motion.a
            href="https://drive.google.com/uc?id=1GSeuxT75mrgHufQPJkx-nEHvMuOMbqzE&export=download"
            download
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2 hover:opacity-90 transition-opacity"
            target="_blank"
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
