import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

// Composant Particule
const Particle = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] rounded-full"
    style={{ x, y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: y - 100,
    }}
    transition={{
      duration: 2,
      ease: "easeOut",
    }}
  />
);

export const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    // Ajouter des particules lors du flip
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 500,
      y: Math.random() * 500,
    }));
    setParticles([...particles, ...newParticles]);
    
    // Nettoyer les particules après l'animation
    setTimeout(() => {
      setParticles(particles => 
        particles.filter(p => p.id < Date.now() - 2000)
      );
    }, 2000);
  };

  const bounceAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const textAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Particules d'arrière-plan */}
      <AnimatePresence>
        {particles.map(particle => (
          <Particle key={particle.id} x={particle.x} y={particle.y} />
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Carte animée */}
        <div className="relative flex justify-center">
          <motion.div
            {...bounceAnimation}
            whileHover="hover"
            className={`w-[500px] h-[500px] relative perspective-1000 ${
              isFlipped ? "rotate-y-180" : ""
            } transition-transform duration-1000 transform-style-preserve-3d cursor-pointer`}
            onClick={handleFlip}
          >
            {/* Face avant : Photo */}
            <motion.div 
              className="absolute w-full h-full backface-hidden"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
            >
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/t_crop/v1742057511/WhatsApp_Image_2025-03-13_at_12.18.06_jcpiyw.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Face arrière : QR Code */}
            <motion.div 
              className="absolute w-full h-full backface-hidden"
              animate={{ rotateY: isFlipped ? 0 : -180 }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
            >
              <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/drxouwbms/image/upload/v1742057394/Portfolio_Ndiaga_mil4mc.png"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Informations About */}
        <div className="space-y-6">
          <motion.div custom={0} variants={textAnimation} initial="initial" animate="animate">
            <h1 className="text-4xl font-bold">
              <motion.span 
                className="text-gray-400 text-7xl font-extrabold block"
                whileHover={{
                  scale: 1.05,
                  color: "var(--neon-primary)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Ndiaga LO
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text block mt-4"
                whileHover={{ scale: 1.02 }}
              >
                Développeur Web/Mobile Fullstack & UI/UX Designer
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            custom={1}
            variants={textAnimation}
            initial="initial"
            animate="animate"
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Passionné par le développement web et mobile, je crée des expériences numériques
            innovantes et immersives. Mon approche combine expertise technique et design
            créatif pour donner vie à des projets uniques.
          </motion.p>

          <motion.div
            custom={2}
            variants={textAnimation}
            initial="initial"
            animate="animate"
            className="flex items-center space-x-4"
          >
            <motion.a
              href="https://drive.google.com/file/d/1UbRBk9xCghXvTeOL6835SDiYb4XHIVz3/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2 hover:opacity-90 transition-all"
              target="_blank"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px var(--neon-primary)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Voir mon CV</span>
            </motion.a>

            <motion.span
              className="text-[var(--neon-primary)] dark:text-[var(--neon-primary)] text-lg"
              whileHover={{ scale: 1.05 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                }
              }}
            >
              Ou cliquez sur la photo pour scanner
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

