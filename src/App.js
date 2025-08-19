import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  return (
    <div className="min-h-screen animated-bg">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;