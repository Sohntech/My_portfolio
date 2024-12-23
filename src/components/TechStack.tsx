import React from 'react'; import { motion } from 'framer-motion';

const technologies = [ { name: 'PHP/Laravel', icon: '🐘' }, { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' }, { name: 'JavaScript', icon: '⚡' }, { name: 'Dart/Flutter', icon: '📱' }, { name: 'Node.js', icon: '🟢' }, { name: 'React', icon: '⚛️' }, { name: 'Angular', icon: '🅰️' }, { name: 'Docker', icon: '🐳' }, { name: 'MongoDB', icon: '🍃' }, { name: 'Firebase', icon: '🔥' }, { name: 'MySQL', icon: '🐬' }, { name: 'PostgreSQL', icon: '🐘' }, { name: 'Figma', icon: '🎨' }, ];

export const TechStack: React.FC = () => { return ( <section className="py-20"> <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text" > Technologies </motion.h2>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="tech-grid"
  >
    {technologies.map((tech, index) => (
      <motion.div
        key={tech.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow neon-border"
      >
        <span className="text-3xl mb-2">{tech.icon}</span>
        <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
      </motion.div>
    ))}
  </motion.div>
</section>
); };