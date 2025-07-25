import type { Project } from '../types';
export const projectsData: (Project & { features?: string[] })[] = [
  {
    id: 1,
    title: 'Enhancing Image Clarity with Neural Network-Based Denoising Autoencoder',
    description: 'Face Deblurring Web App',
    longDescription: 'A deep learning-powered face deblurring system utilizing a CBAM-enhanced U-Net architecture combined with VGG16-based perceptual loss. Integrated with advanced post-processing techniques (CLAHE, unsharp masking, and non-local means denoising) and deployed as an interactive web application with a user-friendly interface.',
    image: '/main_ui.png',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Three.js', 'DaisyUI', 'Docker', 'Lightning AI'],
    features: [
      'CBAM-enhanced U-Net Model for Deblurring',
      'VGG16-based Perceptual Loss',
      'Post-processing with CLAHE, Unsharp Masking & Denoising',
      'Interactive Web Interface with Three.js & DaisyUI',
      'Dockerized Deployment with NGINX',
      'Supports Real-time Image Upload and Processing'
    ],
    github: 'https://github.com/bhuvan2018/Enhancing_Image_Clarity_Denoising_Autoencoder'
},

  {
    id: 2,
    title: 'Automated News Article Classification using ML (HACKATHON PROJECT)',
    description: 'Interactive Text Classification with Flet',
    longDescription: 'An NLP-based system that classifies news articles into categories using tokenization, lemmatization, and BERT vectorization with a Flet-powered user interface.',
    image: '/anac.png',
    technologies: ['Flet', 'Python', 'Machine Learning', 'NLP', 'BERT'],
    features: [
      'News Text Preprocessing',
      'BERT-based Text Vectorization',
      'Category Prediction with ML Models',
      'Interactive UI with Flet',
      'Real-time Input & Output',
      'Text Cleaning and Tokenization'
    ],
    github: 'https://github.com/bhuvan2018/news_article_classification'
  },
  {
    id: 3,
    title: 'SafeWalk: Ensuring Women Safety in Public Spaces',
    description: 'Web App built for women safety',
    longDescription: 'SafeWalk: Ensuring Women Safety in Public Spaces a web app built for the safety of women with features like safe routes, SOS alert messages and many more.',
    image: '/safewalk.png',
    technologies: ['React.js', 'Framer-Motion','Tailwind-CSS'],
    features: [
      'SOS Alert',
      'Emergency Live Location Sharing',
      'Safety Routes'
    ],
    github: 'https://github.com/bhuvan2018/safe_walk-App',
  },
  {
    id: 4,
    title: 'TechFusion 2K25',
    description: 'A website built for the Department level IT Fest',
    longDescription: 'Welcome to TechFusion 2K25! This website is designed exclusively for 1st & 2nd-year MCA students of VCET to register for various exciting events in our tech fest.',
    image: '/tech-fusion.png',
    technologies: ['React.js', 'Tailwind-CSS', 'Framer-Motion'],
    features: [
      'Intuitive User Friendly Website',
      'Explore events',
      'Registration of events',
      'Contact Me'
    ],
    liveDemo: 'https://techfusion2k25.netlify.app',
    github: 'https://github.com/bhuvan2018/TechFusion2K25',
  },
  {
    id: 5,
    title: 'Quiz Master',
    description: 'A user friendly website built for quiz practices.',
    longDescription: 'Welcome to Quiz Master Website! This website is designed exclusively for users who wants to upscale their general knowledge on Tech.',
    image: '/Main.png',
    technologies: ['React.js', 'Tailwind-CSS', 'Express.js', 'Node.js', 'MongoDB'],
    features: [
      'Intuitive User Friendly Website',
      'Quiz Registration',
      'Quiz Contests with Countdown Timer',
      'Quiz Dashboard',
      'Contact Me'
    ],
    github: 'https://github.com/bhuvan2018/quiztastic-dash',
  },
  {
    id: 6,
    title: 'Pic-to-Toon - Cartoonify Your Memories',
    description: 'A user-friendly app built for transforming your photos into delightful cartoons.',
    longDescription: 'Welcome to Pic-to-Toon! This website lets you transform your photos into delightful cartoons with ease.',
    image: '/PTT.png',
    technologies: ['Flet', 'Python', 'Docker'],
    features: [
      'User-friendly interface',
      'Easy photo upload and cartoonization',
      'Customizable effects',
      'High-quality cartoon outputs',
    ],
    github: 'https://github.com/bhuvan2018/Pic-to-Toon',
  },
  {
    id: 7,
    title: 'Real-Time IoT Enabled Smart Fuel Flow Meter',
    description: 'An IoT-enabled Smart Fuel Flow Meter to efficiently monitor and manage fuel usage.',
    longDescription: 'Our IoT-enabled Smart Fuel Flow Meter provides real-time, accurate fuel measurements during refueling, enhancing transaction efficiency and preventing fraud.',
    image: '/fuel2.jpg',
    technologies: ['Arduino', 'C++', 'Flow Sensor', 'ESP32 MCU', 'LCD Display'],
    features: [
      'Compatibility with Various Fuel Types',
      'Real-Time Data Acquisition and Display',
      'Portability and Calibration',
    ],
    github: 'https://github.com/bhuvan2018/Smart-Fuel-Flow-Meter',
  },
];
