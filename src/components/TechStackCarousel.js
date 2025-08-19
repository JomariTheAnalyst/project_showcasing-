import React from 'react';
import { motion } from 'framer-motion';

function TechStackCarousel() {
  const techStack = [
    { name: 'Python', icon: '/tech stack/python.png' },
    { name: 'JavaScript', icon: '/tech stack/javascript.png' },
    { name: 'React', icon: '/tech stack/javascript.png' },
    { name: 'Node.js', icon: '/tech stack/nodejs.png' },
    { name: 'Django', icon: '/tech stack/django.png' },
    { name: 'DRF', icon: '/tech stack/drf.png' },
    { name: 'PostgreSQL', icon: '/tech stack/posgres.png' },
    { name: 'MySQL', icon: '/tech stack/mysql.png' },
    { name: 'HTML', icon: '/tech stack/html.png' },
    { name: 'CSS', icon: '/tech stack/css.png' },
    { name: 'Docker', icon: '/tech stack/docker.png' },
    { name: 'Flutter', icon: '/tech stack/flutter.png' },
    { name: 'AWS', icon: '/tech stack/aws.png' },
    { name: 'Git', icon: '/tech stack/git.png' },
    { name: 'VS Code', icon: '/tech stack/vscode.png' },
    { name: 'Cursor', icon: '/tech stack/cursor.png' },
    { name: 'Pandas', icon: '/tech stack/pandas.png' },
    { name: 'NumPy', icon: '/tech stack/numpy.png' },
    { name: 'Scikit-learn', icon: '/tech stack/scikitlearn.png' },
    { name: 'Matplotlib', icon: '/tech stack/matplotlib.png' },
    { name: 'REST API', icon: '/tech stack/rest.png' }
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-16 overflow-hidden border-t border-white/10">
      <div className="mb-8 text-center">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-gradient mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technologies & Tools
        </motion.h3>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A comprehensive toolkit for building modern applications across the full development stack
        </motion.p>
      </div>

      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-32 md:w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-32 md:w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="glass p-4 md:p-6 rounded-xl hover:scale-105 transition-all duration-300 glow-blue">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain tech-icon group-hover:scale-110 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-lg items-center justify-center text-gray-400 text-xs font-medium hidden"
                  >
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>
                  <p className="text-center mt-3 text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Languages', count: '8+' },
          { label: 'Frameworks', count: '12+' },
          { label: 'Databases', count: '6+' },
          { label: 'Cloud Platforms', count: '4+' }
        ].map((stat, index) => (
          <div key={stat.label} className="glass p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-blue mb-2">
              {stat.count}
            </div>
            <div className="text-gray-400 text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStackCarousel;