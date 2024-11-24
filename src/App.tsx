import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode actif par défaut

  // Ajouter automatiquement la classe 'dark' au chargement initial
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="py-20">
          <About />
          <TechStack />
          <Projects />
        </main>

        <footer className="py-8 mt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Sohntech" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" target='_blank'>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ndiaga-l-4a7581139" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" target='_blank'>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ndiagalo259@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" target='_blank'>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
