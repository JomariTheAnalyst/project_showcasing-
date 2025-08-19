import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import TechStackCarousel from './TechStackCarousel';
import Hero from './Hero';
import ProjectGrid from './ProjectGrid';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('Software Engineering');
  const navigate = useNavigate();

  const tabs = ['Software Engineering', 'Machine Learning', 'Data Analysis'];

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 nav-blur border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 md:space-x-8 py-4">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 md:px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 glass rounded-lg glow-blue"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">
                  {tab}
                  <span className="ml-2 bg-white/20 text-white py-1 px-2 rounded-full text-xs">
                    {projectsData[tab]?.length || 0}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Projects Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            {activeTab}
          </h2>
          <p className="text-gray-300 text-lg">
            {projectsData[activeTab]?.length || 0} project{projectsData[activeTab]?.length !== 1 ? 's' : ''} showcasing innovation and technical excellence
          </p>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <ProjectGrid 
            key={activeTab}
            projects={projectsData[activeTab] || []} 
            onProjectClick={handleProjectClick}
          />
        </AnimatePresence>

        {/* Empty State */}
        {(!projectsData[activeTab] || projectsData[activeTab].length === 0) && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-500 text-6xl mb-4 float">📁</div>
            <h3 className="text-2xl font-medium text-gray-300 mb-4">
              No projects yet
            </h3>
            <p className="text-gray-500 text-lg">
              Projects in the {activeTab} category will appear here.
            </p>
          </motion.div>
        )}
      </main>

      {/* Tech Stack Carousel - After Projects */}
      <TechStackCarousel />
    </div>
  );
}

export default Portfolio;