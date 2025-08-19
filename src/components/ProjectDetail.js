import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // Find project across all categories
    let foundProject = null;
    Object.values(projectsData).forEach(categoryProjects => {
      const proj = categoryProjects.find(p => p.id === projectId);
      if (proj) foundProject = proj;
    });
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/'); // Redirect if project not found
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass p-8 rounded-2xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading project...</p>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'background', label: 'Background', icon: '🎯' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'challenges', label: 'Challenges', icon: '🧩' },
    { id: 'results', label: 'Results', icon: '📈' },
    { id: 'demo', label: 'Demo', icon: '🎬' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="btn-secondary mb-8 px-6 py-3 rounded-xl font-medium flex items-center gap-3 group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </div>
                <div className="text-gray-400">•</div>
                <div className="text-gray-400">{project.timeline}</div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-6">
                {project.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="glass px-4 py-2 rounded-lg text-sm text-gray-300 border border-white/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 rounded-xl font-medium flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-6 py-3 rounded-xl font-medium flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-2xl overflow-hidden glow">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center text-gray-400 hidden">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <span>Project Preview</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 nav-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'glass text-white glow-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <span>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            {renderSection(activeSection, project)}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function renderSection(section, project) {
  switch (section) {
    case 'overview':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            📋 Project Overview
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>
      );

    case 'background':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            🎯 Background & Motivation
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.background}
            </p>
          </div>
        </div>
      );

    case 'features':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            ⚡ Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features?.map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'architecture':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            🏗️ Technical Architecture
          </h2>
          {project.architecture && (
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.architecture).map(([key, value]) => (
                <motion.div
                  key={key}
                  className="glass p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: Object.keys(project.architecture).indexOf(key) * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-gray-300">{value}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      );

    case 'challenges':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            🧩 Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges?.map((challenge, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-yellow-500/20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-lg">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'results':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            📈 Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.results?.map((result, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-green-500/20 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'demo':
      return (
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
            🎬 Project Demonstration
          </h2>
          {project.demoVideo ? (
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
              <iframe
                src={project.demoVideo}
                title="Project Demo"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Demo Video Coming Soon</h3>
                <p className="text-gray-500">A comprehensive demonstration video will be available here</p>
              </div>
            </div>
          )}
          
          {/* Additional Demo Links */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Live Application
                    </h3>
                    <p className="text-gray-400">Experience the project in action</p>
                  </div>
                </div>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      Source Code
                    </h3>
                    <p className="text-gray-400">Explore the implementation details</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      );

    default:
      return <div>Section not found</div>;
  }
}

export default ProjectDetail;