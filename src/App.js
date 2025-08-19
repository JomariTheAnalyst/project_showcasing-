import React, { useState, useEffect } from 'react';
import './App.css';

// Project data structure - this will be populated dynamically
const projectsData = {
  'Software Engineering': [],
  'Machine Learning': [],
  'Data Analysis': []
};

// Available tech stack icons
const techStackIcons = {
  'Python': '/tech stack/python.png',
  'JavaScript': '/tech stack/javascript.png',
  'React': '/tech stack/javascript.png', // Using JS icon for React
  'Node.js': '/tech stack/nodejs.png',
  'Django': '/tech stack/django.png',
  'DRF': '/tech stack/drf.png',
  'PostgreSQL': '/tech stack/posgres.png',
  'MySQL': '/tech stack/mysql.png',
  'HTML': '/tech stack/html.png',
  'CSS': '/tech stack/css.png',
  'Docker': '/tech stack/docker.png',
  'Flutter': '/tech stack/flutter.png',
  'AWS': '/tech stack/aws.png',
  'Git': '/tech stack/git.png',
  'VS Code': '/tech stack/vscode.png',
  'Cursor': '/tech stack/cursor.png',
  'Pandas': '/tech stack/pandas.png',
  'NumPy': '/tech stack/numpy.png',
  'Scikit-learn': '/tech stack/scikitlearn.png',
  'Matplotlib': '/tech stack/matplotlib.png',
  'REST API': '/tech stack/rest.png'
};

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <div className="aspect-video bg-gray-800 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-full h-full bg-gray-800 items-center justify-center text-gray-400 hidden"
        >
          <span>No Image Available</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {project.name}
        </h3>
        
        {project.description && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
        )}
        
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-800 px-2 py-1 rounded-md">
                  {techStackIcons[tech] && (
                    <img 
                      src={techStackIcons[tech]} 
                      alt={tech}
                      className="w-4 h-4 mr-1"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                  <span className="text-xs text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.status && (
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'In Progress' 
                ? 'bg-yellow-900 text-yellow-300' 
                : 'bg-green-900 text-green-300'
            }`}>
              {project.status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('Software Engineering');
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    // Simulate loading project data
    // In a real implementation, this would fetch from an API or read files
    const loadProjects = () => {
      const sampleProjects = {
        'Software Engineering': [
          {
            name: 'TASKMASTER',
            description: 'A comprehensive task management application with advanced features for productivity and collaboration.',
            image: '/projects/Software Engineering/TASKMASTER/TASKMASTER.png',
            techStack: ['Python', 'Django', 'React', 'PostgreSQL'],
            status: 'Completed'
          },
          {
            name: 'QuickChat - Real-Time Messaging App',
            description: 'Real-time messaging application with instant communication capabilities.',
            image: '/projects/Software Engineering/QuickChat - Real-Time Messaging App/QUICKCHAT.png',
            techStack: ['Node.js', 'React', 'WebSocket', 'MongoDB'],
            status: 'Completed'
          },
          {
            name: 'AI Learning Platform (In Progress)',
            description: 'An intelligent learning platform powered by AI for personalized education experiences.',
            image: '/projects/Software Engineering/AI Learning Platform (In Progress)/Learntech.png',
            techStack: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
            status: 'In Progress'
          },
          {
            name: 'Smart Sheet - AI Spreadsheet Assistant',
            description: 'AI-powered spreadsheet assistant that helps with data analysis and automation.',
            image: '/projects/Software Engineering/Smart Sheet - AI Spreadsheet Assistant(in progress)/smartsheet.png',
            techStack: ['Python', 'React', 'OpenAI', 'PostgreSQL'],
            status: 'In Progress'
          },
          {
            name: 'Fire Suppression Robot with Text Alert System',
            description: 'Autonomous fire suppression robot with real-time alert notifications.',
            image: '/projects/Software Engineering/Fire Suppression Robot with Text Alert System/silent guardians.png',
            techStack: ['Python', 'Arduino', 'IoT', 'SMS API'],
            status: 'Completed'
          },
          {
            name: 'TMap - Telecom Topology Mapping & Asset Profiling',
            description: 'Advanced telecom network topology mapping and asset management system.',
            image: '/projects/Software Engineering/TMap - Telecom Topology Mapping & Asset Profiling/TMAP.png',
            techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'GIS'],
            status: 'Completed'
          },
          {
            name: 'rosrucAI',
            description: 'AI-powered robotics control system with advanced machine learning capabilities.',
            image: '/projects/Software Engineering/rosrucAI/ROSRUCAI.png',
            techStack: ['Python', 'ROS', 'TensorFlow', 'Computer Vision'],
            status: 'Completed'
          }
        ],
        'Machine Learning': [
          {
            name: 'Breast Cancer Prediction System',
            description: 'Machine learning model for early breast cancer detection using medical imaging and data analysis.',
            image: '/projects/Machine Learning/Breast Cancer Prediction System/breast cancer prediction.png',
            techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
            status: 'Completed'
          },
          {
            name: 'Loan Repayment Prediction',
            description: 'Predictive model to assess loan repayment probability using customer data and financial history.',
            image: '/projects/Machine Learning/Loan Repayment Prediction/loanrepayment.png',
            techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
            status: 'Completed'
          },
          {
            name: 'Medical Chatbot',
            description: 'AI-powered medical chatbot for preliminary health consultations and symptom analysis.',
            image: '/projects/Machine Learning/Medical Chatbot/medical chatbot.png',
            techStack: ['Python', 'NLP', 'TensorFlow', 'Flask', 'Medical APIs'],
            status: 'Completed'
          }
        ],
        'Data Analysis': [
          {
            name: 'Customer Churn Analysis',
            description: 'Comprehensive analysis of customer churn patterns to improve retention strategies.',
            image: '/projects/Data Analysis/Customer Churn Analysis/CUSTOMER CHURN.png',
            techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            status: 'Completed'
          }
        ]
      };
      
      setProjects(sampleProjects);
    };

    loadProjects();
  }, []);

  const tabs = ['Software Engineering', 'Machine Learning', 'Data Analysis'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Project Portfolio
            </h1>
            <p className="text-gray-400">
              Showcasing my work across Software Engineering, Machine Learning, and Data Analysis
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                {tab}
                <span className="ml-2 bg-gray-800 text-gray-300 py-1 px-2 rounded-full text-xs">
                  {projects[tab]?.length || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {activeTab}
          </h2>
          <p className="text-gray-400">
            {projects[activeTab]?.length || 0} project{projects[activeTab]?.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeTab]?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {(!projects[activeTab] || projects[activeTab].length === 0) && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-6xl mb-4">📁</div>
            <h3 className="text-xl font-medium text-gray-400 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-500">
              Projects in the {activeTab} category will appear here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;