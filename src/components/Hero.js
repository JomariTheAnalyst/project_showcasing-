import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="text-gradient-blue">Jomari</span>
            <br />
            <span className="text-gradient">The Analyst</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-stack developer and data scientist crafting innovative solutions at the intersection of 
            <span className="text-blue-400 font-semibold"> software engineering</span>, 
            <span className="text-purple-400 font-semibold"> machine learning</span>, and 
            <span className="text-green-400 font-semibold"> data analysis</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://github.com/JomariTheAnalyst"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub
            </a>
            
            <a
              href="mailto:roco.jomari1@gmail.com"
              className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-1.17.519-2.427.87-3.748 1.029 1.348-.808 2.383-2.089 2.871-3.617-1.262.748-2.657 1.292-4.142 1.585-1.191-1.27-2.888-2.064-4.766-2.064-3.607 0-6.53 2.924-6.53 6.53 0 .512.058 1.009.17 1.487-5.426-.272-10.234-2.871-13.447-6.821-.562.965-.884 2.087-.884 3.284 0 2.264 1.152 4.263 2.905 5.434-1.07-.034-2.078-.328-2.96-.818v.082c0 3.165 2.25 5.807 5.237 6.407-.548.149-1.125.229-1.721.229-.422 0-.832-.041-1.232-.118.833 2.601 3.249 4.494 6.114 4.546-2.238 1.754-5.057 2.801-8.123 2.801-.528 0-1.048-.031-1.56-.092 2.889 1.852 6.319 2.933 10.007 2.933 12.009 0 18.568-9.943 18.568-18.568 0-.282-.006-.564-.018-.845 1.275-.919 2.381-2.067 3.254-3.378z"/>
              </svg>
              Get In Touch
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="glass p-6 rounded-2xl max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col space-y-3 text-gray-300">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">github.com/JomariTheAnalyst</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-1.17.519-2.427.87-3.748 1.029 1.348-.808 2.383-2.089 2.871-3.617-1.262.748-2.657 1.292-4.142 1.585-1.191-1.27-2.888-2.064-4.766-2.064-3.607 0-6.53 2.924-6.53 6.53 0 .512.058 1.009.17 1.487-5.426-.272-10.234-2.871-13.447-6.821-.562.965-.884 2.087-.884 3.284 0 2.264 1.152 4.263 2.905 5.434-1.07-.034-2.078-.328-2.96-.818v.082c0 3.165 2.25 5.807 5.237 6.407-.548.149-1.125.229-1.721.229-.422 0-.832-.041-1.232-.118.833 2.601 3.249 4.494 6.114 4.546-2.238 1.754-5.057 2.801-8.123 2.801-.528 0-1.048-.031-1.56-.092 2.889 1.852 6.319 2.933 10.007 2.933 12.009 0 18.568-9.943 18.568-18.568 0-.282-.006-.564-.018-.845 1.275-.919 2.381-2.067 3.254-3.378z"/>
                </svg>
                <span className="text-sm">roco.jomari1@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;