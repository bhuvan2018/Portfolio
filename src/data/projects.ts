import type { Project } from '../types';

export const projectsData: (Project & { features?: string[] })[] = [
  {
    id: 1,
    title: 'Enhancing Image Clarity with Neural Network-Based Denoising Autoencoder (ONGOING)',
    description: 'A Real-Time Noise Reduction',
    longDescription: 'Capable of effectively reconstructing clean images from noisy images.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['Python', 'TensorFLow', 'Keras', 'Pillow'],
    features: [
      'Building a Denoising Model',
      'Noise Reduction',
      'Performance Evaluation'
    ],
    liveDemo: '',
    github: 'https://github.com/bhuvan2018/denoising-autoencoder',
  },
  {
    id: 2,
    title: 'SafeWalk: Ensuring Women Safety in Public Spaces',
    description: 'Web Application built for women safety',
    longDescription: 'SafeWalk: Ensuring Women Safety in Public Spaces a web app built for the safety of women with features like safe routes, SOS alert messages and many more.',
    image: '/safewalk.png',
    technologies: ['React.js', 'Tailwind-CSS', 'Next.js', 'TypeScript', 'Framer-Motion'],
    features: [
      'SOS Alert',
      'Emergency Live Location Sharing',
      'Safety Routes'
    ],
    liveDemo: '',
    github: 'https://github.com/bhuvan2018/women_safety',
  },
  {
    id: 3,
    title: 'TechFusion 2K25',
    description: 'A website built for the Department level IT Fest',
    longDescription: 'Welcome to TechFusion 2K25! This website is designed exclusively for 1st & 2nd-year MCA students of VCET to register for various exciting events in our tech fest.',
    image: '/tech-fusion.png',
    technologies: ['React.js', 'Tailwind-CSS', 'TypeScript','Framer-Motion','GSAP'],
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
    id: 4,
    title: 'Quiz Master',
    description: 'A user friendly website built for quiz practices.',
    longDescription: 'Welcome to Quiz Master Website! This website is designed exclusively for users who wants to upscale their general knowledge on Tech.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    technologies: ['React.js', 'Tailwind-CSS', 'JavaScript', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB'],
    features: [
      'Intuitive User Friendly Website',
      'Quiz Registration',
      'Quiz Contests with Countdown Timer',
      'Quiz Dashboard',
      'Contact Me'
    ],
    liveDemo: '',
    github: 'https://github.com/bhuvan2018/quiztastic-dash',
  },
  {
    id: 5,
    title: 'Pic-to-Toon - Cartoonify Your Memories (ONGOING)',
    description: 'A user-friendly app built for transforming your photos into delightful cartoons.',
    longDescription: 'Welcome to Pic-to-Toon! This website lets you transform your photos into delightful cartoons with ease.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    technologies: ['Flet', 'Python', 'TensorFlow', 'Flask', 'Docker', 'OpenCV', 'Pillow'],
    features: [
      'User-friendly interface',
      'Easy photo upload and cartoonization',
      'Customizable effects',
      'High-quality cartoon outputs',
    ],
    liveDemo: '',
    github: 'https://github.com/bhuvan2018/Pic-to-Toon',
  },
  {
    id: 6,
    title: 'IoT Enabled Smart Fuel Flow Meter',
    description: 'An IoT-enabled Smart Fuel Flow Meter to efficiently monitor and manage fuel usage.',
    longDescription: 'Our IoT-enabled Smart Fuel Flow Meter provides real-time, accurate fuel measurements during refueling, enhancing transaction efficiency and preventing fraud.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    technologies: ['Arduino', 'IoT', 'C++', 'Flow Sensors', 'ESP32 MCU', 'LCD Display'],
    features: [
      'Compatibility with Various Fuel Types',
      'Real-Time Data Acquisition and Display',
      'Portability and Calibration',
    ],
    liveDemo: '',
    github: 'https://github.com/bhuvan2018/Smart-Fuel-Flow-Meter',
  },
];