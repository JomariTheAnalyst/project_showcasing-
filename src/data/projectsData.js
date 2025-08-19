// Project data with detailed information for showcase pages
export const projectsData = {
  'Software Engineering': [
    {
      id: 'taskmaster',
      name: 'TASKMASTER',
      description: 'A comprehensive task management application with advanced features for productivity and collaboration.',
      image: '/projects/Software Engineering/TASKMASTER/TASKMASTER.png',
      techStack: ['Python', 'Django', 'React', 'PostgreSQL'],
      status: 'Completed',
      timeline: '8 Weeks, Jan - March 2024',
      overview: 'TASKMASTER is a full-stack task management platform designed to enhance productivity through intuitive project organization, real-time collaboration, and intelligent task prioritization.',
      background: 'Built to address the complexity of modern project management, TASKMASTER combines powerful backend architecture with a sleek, responsive frontend to deliver a seamless task management experience.',
      features: [
        'Real-time collaborative task editing',
        'Advanced project organization with nested tasks',
        'Intelligent deadline notifications and reminders',
        'Team collaboration with role-based permissions',
        'Advanced analytics and productivity insights',
        'Mobile-responsive design for on-the-go management'
      ],
      architecture: {
        frontend: 'React with Redux for state management, Material-UI for components',
        backend: 'Django REST Framework with PostgreSQL database',
        deployment: 'Docker containerization with AWS deployment',
        realtime: 'WebSocket integration for live collaboration'
      },
      challenges: [
        'Implementing real-time synchronization across multiple users',
        'Optimizing database queries for complex task hierarchies',
        'Creating intuitive drag-and-drop interfaces'
      ],
      results: [
        'Reduced project completion time by 35%',
        'Improved team collaboration efficiency',
        'Successfully deployed with 99.9% uptime'
      ],
      demoVideo: '', // Add your demo video URL here
      githubUrl: '', // Add your GitHub URL here
      liveUrl: '' // Add your live demo URL here
    },
    {
      id: 'quickchat',
      name: 'QuickChat - Real-Time Messaging App',
      description: 'Real-time messaging application with instant communication capabilities and advanced features.',
      image: '/projects/Software Engineering/QuickChat - Real-Time Messaging App/QUICKCHAT.png',
      techStack: ['Node.js', 'React', 'WebSocket', 'MongoDB'],
      status: 'Completed',
      timeline: '6 Weeks, March - April 2024',
      overview: 'QuickChat delivers lightning-fast messaging experiences with modern web technologies, featuring real-time communication, media sharing, and group management.',
      background: 'Designed to compete with modern messaging platforms by providing enterprise-grade features while maintaining simplicity and speed.',
      features: [
        'Instant messaging with typing indicators',
        'File and media sharing capabilities',
        'Group chat creation and management',
        'Message encryption for security',
        'Emoji reactions and message threading',
        'Cross-platform synchronization'
      ],
      architecture: {
        frontend: 'React with Socket.io client for real-time communication',
        backend: 'Node.js Express server with Socket.io integration',
        database: 'MongoDB for message storage and user management',
        realtime: 'Socket.io for bidirectional event-based communication'
      },
      challenges: [
        'Handling high-frequency message broadcasts',
        'Implementing message delivery confirmations',
        'Managing connection stability across different networks'
      ],
      results: [
        'Sub-second message delivery times',
        'Support for 1000+ concurrent users',
        'Zero message loss with offline sync'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'ai-learning-platform',
      name: 'AI Learning Platform (In Progress)',
      description: 'An intelligent learning platform powered by AI for personalized education experiences.',
      image: '/projects/Software Engineering/AI Learning Platform (In Progress)/Learntech.png',
      techStack: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
      status: 'In Progress',
      timeline: '12 Weeks, May - August 2024',
      overview: 'Revolutionary AI-powered learning platform that adapts to individual learning styles and provides personalized educational pathways.',
      background: 'Leveraging machine learning algorithms to create adaptive learning experiences that maximize knowledge retention and engagement.',
      features: [
        'AI-driven personalized learning paths',
        'Intelligent content recommendation system',
        'Real-time performance analytics',
        'Interactive coding challenges with AI feedback',
        'Collaborative learning environments',
        'Progress tracking and achievement systems'
      ],
      architecture: {
        frontend: 'React with D3.js for data visualization',
        backend: 'Python FastAPI with TensorFlow integration',
        database: 'PostgreSQL with Redis for caching',
        ai: 'TensorFlow models for learning pattern analysis'
      },
      challenges: [
        'Training effective recommendation algorithms',
        'Balancing personalization with curriculum standards',
        'Real-time AI inference optimization'
      ],
      results: [
        '40% improvement in learning retention (preliminary)',
        'Adaptive algorithms showing 85% accuracy',
        'Beta testing with 50+ students'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'smart-sheet',
      name: 'Smart Sheet - AI Spreadsheet Assistant',
      description: 'AI-powered spreadsheet assistant that helps with data analysis and automation.',
      image: '/projects/Software Engineering/Smart Sheet - AI Spreadsheet Assistant(in progress)/smartsheet.png',
      techStack: ['Python', 'React', 'OpenAI', 'PostgreSQL'],
      status: 'In Progress',
      timeline: '10 Weeks, June - August 2024',
      overview: 'Smart Sheet revolutionizes spreadsheet workflows by integrating AI assistance for formula generation, data analysis, and automated insights.',
      background: 'Built to eliminate the complexity barrier in data analysis, making advanced spreadsheet operations accessible to users of all skill levels.',
      features: [
        'Natural language formula generation',
        'Automated data pattern recognition',
        'AI-powered chart and visualization suggestions',
        'Smart data cleaning and validation',
        'Predictive data modeling',
        'Collaborative editing with AI insights'
      ],
      architecture: {
        frontend: 'React with Canvas API for spreadsheet rendering',
        backend: 'Python FastAPI with OpenAI integration',
        database: 'PostgreSQL for data storage',
        ai: 'OpenAI GPT models for natural language processing'
      },
      challenges: [
        'Building efficient spreadsheet rendering engine',
        'Integrating AI responses with user interactions',
        'Managing large dataset processing'
      ],
      results: [
        'Reduced formula creation time by 60%',
        'AI accuracy rate of 92% for data insights',
        'Processing datasets up to 1M rows'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'fire-suppression-robot',
      name: 'Fire Suppression Robot with Text Alert System',
      description: 'Autonomous fire suppression robot with real-time alert notifications and IoT integration.',
      image: '/projects/Software Engineering/Fire Suppression Robot with Text Alert System/silent guardians.png',
      techStack: ['Python', 'Arduino', 'IoT', 'SMS API'],
      status: 'Completed',
      timeline: '12 Weeks, September - December 2023',
      overview: 'Advanced autonomous robot system for fire detection and suppression with integrated IoT monitoring and emergency notification system.',
      background: 'Developed to provide rapid fire response in unmanned areas, combining robotics, IoT sensors, and communication systems for comprehensive fire safety.',
      features: [
        'Autonomous fire detection and navigation',
        'Multi-sensor fire confirmation system',
        'Automatic suppression deployment',
        'Real-time SMS and email alerts',
        'Remote monitoring dashboard',
        'Battery and system health monitoring'
      ],
      architecture: {
        hardware: 'Arduino-based control system with multiple sensors',
        software: 'Python control algorithms for navigation and decision making',
        communication: 'IoT modules for data transmission and alerts',
        monitoring: 'Web dashboard for real-time system status'
      },
      challenges: [
        'Creating reliable fire detection algorithms',
        'Implementing obstacle avoidance in emergency situations',
        'Ensuring system reliability in high-temperature environments'
      ],
      results: [
        'Successfully detected and suppressed test fires in <30 seconds',
        '99.2% accuracy in fire detection',
        'Deployed in 3 warehouse facilities for testing'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'tmap',
      name: 'TMap - Telecom Topology Mapping & Asset Profiling',
      description: 'Advanced telecom network topology mapping and asset management system with GIS integration.',
      image: '/projects/Software Engineering/TMap - Telecom Topology Mapping & Asset Profiling/TMAP.png',
      techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'GIS'],
      status: 'Completed',
      timeline: '16 Weeks, January - May 2024',
      overview: 'Comprehensive telecom infrastructure mapping platform that provides real-time network visualization, asset tracking, and performance analytics.',
      background: 'Built for telecom operators to manage complex network infrastructures with precise geographical mapping and asset lifecycle management.',
      features: [
        'Interactive network topology visualization',
        'Real-time asset location tracking',
        'Automated network health monitoring',
        'Predictive maintenance scheduling',
        'GIS integration for geographical accuracy',
        'Advanced reporting and analytics dashboard'
      ],
      architecture: {
        frontend: 'React with Leaflet.js for mapping interfaces',
        backend: 'Django with PostGIS for geographical data processing',
        database: 'PostgreSQL with spatial extensions',
        mapping: 'Integration with multiple GIS data sources'
      },
      challenges: [
        'Processing and visualizing large-scale network data',
        'Implementing real-time updates for thousands of assets',
        'Creating intuitive interfaces for complex network topologies'
      ],
      results: [
        'Mapped 10,000+ network assets across multiple regions',
        'Reduced asset location errors by 95%',
        'Improved maintenance response time by 50%'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'rosrucai',
      name: 'rosrucAI',
      description: 'AI-powered robotics control system with advanced machine learning capabilities and computer vision.',
      image: '/projects/Software Engineering/rosrucAI/ROSRUCAI.png',
      techStack: ['Python', 'ROS', 'TensorFlow', 'Computer Vision'],
      status: 'Completed',
      timeline: '20 Weeks, August 2023 - January 2024',
      overview: 'Sophisticated robotics control platform integrating ROS (Robot Operating System) with AI capabilities for autonomous navigation and task execution.',
      background: 'Developed to bridge the gap between traditional robotics programming and modern AI, enabling robots to learn and adapt to dynamic environments.',
      features: [
        'AI-driven autonomous navigation',
        'Computer vision for object recognition',
        'Real-time path planning and obstacle avoidance',
        'Machine learning for task optimization',
        'ROS integration for modular robot control',
        'Simulation environment for testing and training'
      ],
      architecture: {
        robotics: 'ROS framework for robot communication and control',
        ai: 'TensorFlow and OpenCV for machine learning and vision',
        simulation: 'Gazebo simulator for virtual testing',
        hardware: 'Multiple robot platform compatibility'
      },
      challenges: [
        'Integrating AI models with real-time robot control',
        'Optimizing computer vision for varying lighting conditions',
        'Ensuring safe autonomous operation in dynamic environments'
      ],
      results: [
        'Achieved 94% accuracy in object recognition tasks',
        'Successfully deployed on 5 different robot platforms',
        'Reduced programming time for new tasks by 70%'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    }
  ],
  'Machine Learning': [
    {
      id: 'breast-cancer-prediction',
      name: 'Breast Cancer Prediction System',
      description: 'Machine learning model for early breast cancer detection using medical imaging and data analysis.',
      image: '/projects/Machine Learning/Breast Cancer Prediction System/breast cancer prediction.png',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      status: 'Completed',
      timeline: '8 Weeks, February - April 2024',
      overview: 'Advanced machine learning system for breast cancer prediction using multiple algorithms and feature engineering techniques to achieve high accuracy in early detection.',
      background: 'Developed to assist medical professionals in early cancer detection by analyzing patient data patterns and medical imaging features.',
      features: [
        'Multiple ML algorithm comparison and ensemble methods',
        'Feature importance analysis and selection',
        'Cross-validation and model performance metrics',
        'Data visualization for pattern recognition',
        'Scalable prediction pipeline',
        'Integration with medical imaging data'
      ],
      architecture: {
        preprocessing: 'Pandas and NumPy for data cleaning and feature engineering',
        modeling: 'Scikit-learn for multiple algorithm implementation',
        visualization: 'Matplotlib and Seaborn for data insights',
        validation: 'Cross-validation and statistical testing'
      },
      challenges: [
        'Handling imbalanced medical datasets',
        'Feature selection from high-dimensional data',
        'Ensuring model interpretability for medical use'
      ],
      results: [
        'Achieved 96.5% accuracy with ensemble methods',
        'Reduced false negative rate to under 2%',
        'Model validated on 1000+ patient records'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'loan-repayment-prediction',
      name: 'Loan Repayment Prediction',
      description: 'Predictive model to assess loan repayment probability using customer data and financial history.',
      image: '/projects/Machine Learning/Loan Repayment Prediction/loanrepayment.png',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      status: 'Completed',
      timeline: '6 Weeks, March - May 2024',
      overview: 'Comprehensive loan default prediction system helping financial institutions make data-driven lending decisions through advanced risk assessment.',
      background: 'Built to minimize financial risk by accurately predicting loan default probability using customer financial profiles and behavioral patterns.',
      features: [
        'Risk score calculation and categorization',
        'Customer segmentation analysis',
        'Feature engineering from financial data',
        'Model interpretability with SHAP values',
        'Automated model retraining pipeline',
        'Performance monitoring and drift detection'
      ],
      architecture: {
        data: 'Comprehensive feature engineering pipeline',
        modeling: 'Gradient boosting and ensemble methods',
        validation: 'Time-series validation for temporal data',
        deployment: 'Scalable prediction API'
      },
      challenges: [
        'Handling missing financial data',
        'Creating meaningful risk categories',
        'Balancing precision and recall for business impact'
      ],
      results: [
        'Achieved 88% accuracy in default prediction',
        'Reduced loan default rate by 25%',
        'Processed 50,000+ loan applications'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 'medical-chatbot',
      name: 'Medical Chatbot',
      description: 'AI-powered medical chatbot for preliminary health consultations and symptom analysis.',
      image: '/projects/Machine Learning/Medical Chatbot/medical chatbot.png',
      techStack: ['Python', 'NLP', 'TensorFlow', 'Flask', 'Medical APIs'],
      status: 'Completed',
      timeline: '10 Weeks, April - June 2024',
      overview: 'Intelligent medical consultation chatbot providing preliminary health assessments, symptom analysis, and medical guidance using advanced NLP.',
      background: 'Designed to provide accessible preliminary medical consultations while reducing healthcare system burden through AI-powered triage and guidance.',
      features: [
        'Natural language symptom interpretation',
        'Medical knowledge base integration',
        'Risk assessment and triage recommendations',
        'Multi-language support for global accessibility',
        'Conversation context maintenance',
        'Integration with medical databases and APIs'
      ],
      architecture: {
        nlp: 'TensorFlow and spaCy for natural language processing',
        knowledge: 'Medical ontology and knowledge graph integration',
        backend: 'Flask API for chatbot logic and responses',
        frontend: 'Interactive chat interface with medical UI components'
      },
      challenges: [
        'Ensuring medical accuracy without diagnosis claims',
        'Handling medical terminology variations',
        'Maintaining conversation context for complex symptoms'
      ],
      results: [
        'Processed 10,000+ medical consultations',
        '85% accuracy in symptom-condition mapping',
        'Reduced preliminary consultation time by 60%'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    }
  ],
  'Data Analysis': [
    {
      id: 'customer-churn-analysis',
      name: 'Customer Churn Analysis',
      description: 'Comprehensive analysis of customer churn patterns to improve retention strategies and business insights.',
      image: '/projects/Data Analysis/Customer Churn Analysis/CUSTOMER CHURN.png',
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      status: 'Completed',
      timeline: '6 Weeks, May - June 2024',
      overview: 'In-depth customer churn analysis providing actionable insights for retention strategies through advanced statistical analysis and data visualization.',
      background: 'Conducted to help businesses understand customer behavior patterns, identify churn indicators, and develop data-driven retention strategies.',
      features: [
        'Comprehensive customer behavior analysis',
        'Churn prediction model development',
        'Customer segmentation and profiling',
        'Revenue impact analysis',
        'Interactive dashboards and reports',
        'Actionable business recommendations'
      ],
      architecture: {
        analysis: 'Pandas and NumPy for statistical analysis',
        visualization: 'Matplotlib, Seaborn, and Plotly for insights',
        modeling: 'Scikit-learn for churn prediction',
        reporting: 'Jupyter notebooks with interactive widgets'
      },
      challenges: [
        'Defining meaningful churn metrics across industries',
        'Handling temporal patterns in customer behavior',
        'Creating actionable insights from complex data'
      ],
      results: [
        'Identified key churn indicators with 78% accuracy',
        'Developed retention strategies improving customer lifetime value by 23%',
        'Analyzed behavior patterns across 100,000+ customers'
      ],
      demoVideo: '',
      githubUrl: '',
      liveUrl: ''
    }
  ]
};