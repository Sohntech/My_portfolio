import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Download } from 'lucide-react';

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const PulsingBorder = ({ children }) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0px var(--neon-primary)",
          "0 0 20px var(--neon-primary)",
          "0 0 0px var(--neon-primary)"
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimationControls();

  const startRotationAnimation = async () => {
    while (true) {
      await controls.start({
        rotateY: [0, 360],
        transition: { duration: 20, ease: "linear" }
      });
    }
  };

  useEffect(() => {
    startRotationAnimation();
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Particules d'arrière-plan animées en permanence */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle, var(--neon-primary) 0%, transparent 10%)",
            "radial-gradient(circle, var(--neon-secondary) 0%, transparent 10%)",
            "radial-gradient(circle, var(--neon-primary) 0%, transparent 10%)"
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Carte animée */}
        <FloatingElement delay={1}>
          <div className="relative flex justify-center">
            <motion.div
              animate={controls}
              className={`w-[500px] h-[500px] relative perspective-1000 cursor-pointer`}
              onClick={handleFlip}
            >
              <PulsingBorder>
                <motion.div 
                  className="absolute w-full h-full backface-hidden"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, type: "spring", damping: 20 }}
                >
                  <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border">
                    <motion.img
                      src="https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute w-full h-full backface-hidden"
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.8, type: "spring", damping: 20 }}
                >
                  <div className="rounded-2xl border-4 border-gray-200 overflow-hidden neon-border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <motion.img
                      src="https://res.cloudinary.com/drxouwbms/image/upload/v1732463478/mr7ibj6cov01r770ailh.png"
                      alt="QR Code"
                      className="w-full h-full object-contain"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [0.95, 1.05, 0.95],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              </PulsingBorder>
            </motion.div>
          </div>
        </FloatingElement>

        {/* Informations About */}
        <div className="space-y-6">
          <FloatingElement delay={0.5}>
            <h1 className="text-4xl font-bold">
              <motion.span 
                className="text-gray-400 text-7xl font-extrabold block"
                animate={{
                  color: ["#9CA3AF", "var(--neon-primary)", "#9CA3AF"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Ndiaga LO
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text block mt-4"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Développeur Web/Mobile Fullstack & UI/UX Designer
              </motion.span>
            </h1>
          </FloatingElement>

          <FloatingElement delay={1}>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Passionné par le développement web et mobile, je crée des expériences numériques
              innovantes et immersives. Mon approche combine expertise technique et design
              créatif pour donner vie à des projets uniques.
            </motion.p>
          </FloatingElement>

          <FloatingElement delay={1.5}>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://drive.google.com/uc?id=1GSeuxT75mrgHufQPJkx-nEHvMuOMbqzE&export=download"
                download
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-black dark:text-white font-medium space-x-2"
                target="_blank"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0px var(--neon-primary)",
                    "0 0 30px var(--neon-primary)",
                    "0 0 0px var(--neon-primary)"
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Télécharger mon CV</span>
              </motion.a>

              <motion.span
                className="text-[var(--neon-primary)] dark:text-[var(--neon-primary)] text-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Ou cliquez sur la photo pour scanner
              </motion.span>
            </div>
          </FloatingElement>
        </div>
      </motion.div>
    </section>
  );
};

export default About;