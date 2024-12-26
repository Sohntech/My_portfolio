import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Animation bouncy pour l'entrée des éléments
  const bounceIn = {
    initial: { 
      scale: 0,
      opacity: 0,
      x: -1000
    },
    animate: { 
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 1
      }
    }
  };

  // Animation de rebond continue
  const continuousBounce = {
    animate: {
      y: [0, -20, 0],
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Carte animée */}
        <motion.div
          variants={bounceIn}
          initial="initial"
          animate="animate"
          className="relative flex justify-center"
        >
          <motion.div
            variants={continuousBounce}
            animate="animate"
            className={`w-[500px] h-[500px] relative perspective-1000 ${
              isFlipped ? "rotate-y-180" : ""
            } transition-transform duration-1000 transform-style-preserve-3d cursor-pointer`}
            onClick={handleFlip}
          >
            {/* Face avant : Photo */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Face arrière : QR Code */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/v1732463478/mr7ibj6cov01r770ailh.png"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Informations About */}
        <div className="space-y-6">
          <motion.h1
            variants={bounceIn}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold"
          >
            <span className="text-gray-400 text-7xl font-extrabold block">
              Ndiaga LO
            </span>
            <span className="bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text block mt-4">
              Développeur Web/Mobile Fullstack & UI/UX Designer
            </span>
          </motion.h1>

          <motion.p
            variants={bounceIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Passionné par le développement web et mobile, je crée des expériences numériques
            innovantes et immersives. Mon approche combine expertise technique et design
            créatif pour donner vie à des projets uniques.
          </motion.p>

          <motion.div
            variants={bounceIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <motion.a
              href="https://drive.google.com/uc?id=1GSeuxT75mrgHufQPJkx-nEHvMuOMbqzE&export=download"
              download
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2"
              target="_blank"
              variants={continuousBounce}
              animate="animate"
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </motion.a>

            <motion.span
              variants={continuousBounce}
              animate="animate"
              className="text-[var(--neon-primary)] dark:text-[var(--neon-primary)] text-lg"
            >
              Ou cliquez sur la photo pour scanner
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;