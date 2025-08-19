import React from 'react';
import { motion } from 'framer-motion';

function ProjectGrid({ projects, onProjectClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
          index={index}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  );
}

function ProjectCard({ project, onClick, index, variants }) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden project-card card-3d cursor-pointer group"
      variants={variants}
      onClick={() => onClick(project)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video bg-gray-800 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center text-gray-400 hidden">
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <span className="text-sm">Project Preview</span>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="glass p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 flex-1">
            {project.name}
          </h3>
          <div className={`ml-3 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
            project.status === 'Completed' 
              ? 'status-completed text-white' 
              : 'status-progress text-white'
          }`}>
            {project.status}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, techIndex) => (
                <motion.div 
                  key={techIndex} 
                  className="glass px-3 py-1 rounded-lg text-xs text-gray-300 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.div>
              ))}
              {project.techStack.length > 4 && (
                <div className="glass px-3 py-1 rounded-lg text-xs text-gray-400 border border-white/10">
                  +{project.techStack.length - 4} more
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Timeline */}
        {project.timeline && (
          <div className="flex items-center text-xs text-gray-400 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.timeline}
          </div>
        )}
        
        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
            View Details
          </span>
          <div className="transform group-hover:translate-x-1 transition-transform duration-300">
            <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectGrid;