import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'PHP', icon:  <i className="devicon-php-plain colored"></i>},
  { name: 'Laravel', icon:  <i className="devicon-laravel-plain colored"></i>},
  { name: 'HTML', icon: <i className="devicon-html5-plain colored" /> },
  { name: 'CSS', icon: <i className="devicon-css3-plain colored" /> },
  { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored" /> },
  { name: 'Dart', icon: <i className="devicon-dart-plain colored" /> },
  { name: 'Flutter', icon: <i className="devicon-flutter-plain colored" /> },
  { name: 'Node.js', icon: <i className="devicon-nodejs-plain colored" /> },
  { name: 'React.js', icon: <i className="devicon-react-plain colored" /> },
  { name: 'Angular', icon: <i className="devicon-angularjs-plain colored"></i>},
  { name: 'Docker', icon: <i className="devicon-docker-plain colored" /> },
  { name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored" /> },
  { name: 'Firebase', icon: <i className="devicon-firebase-plain colored" /> },
  { name: 'MySQL', icon: <i className="devicon-mysql-plain colored" /> },
  { name: 'PostgreSQL', icon: <i className="devicon-postgresql-plain colored" /> },
  { name: 'Figma', icon: <i className="devicon-figma-plain colored" /> },
  { name: 'Postman', icon: <i className="devicon-postman-plain colored" /> },
  { name: 'Tailwindcss', icon: <i className="devicon-tailwindcss-plain colored" /> },
  { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored" /> },
  { name: 'Express.js', icon: <i className="devicon-express-original colored" /> },
  { name: 'Github', icon: <i className="devicon-github-plain colored" /> },
  { name: 'Swagger', icon: <i className="devicon-swagger-plain colored" /> },
  { name: 'Typescript', icon: <i className="devicon-typescript-plain colored" /> },

];

export const TechStack: React.FC = () => {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)] text-transparent bg-clip-text"
      >
        Technologies
      </motion.h2>

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
  );
};
