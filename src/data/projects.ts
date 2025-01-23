import type { Project } from '../types';

export const projectsData: (Project & { features?: string[] })[] = [
  {
    id: 1,
    title: 'Real-Time IoT-Enabled Denoising Autoencoder for Enhanced Surveillance and Security Monitoring',
    description: 'A Real-Time Noise Reduction',
    longDescription: 'Capable of effectively reconstructing clean images from noisy inputs captured through IoT devices',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['Python', 'TensorFLow', 'Keras', 'Pillow'],
    features: [
      'Building a Denoising Model',
      'Noise Reduction',
      'Performance Evaluation'
    ],
    liveDemo: 'https://example.com/ecommerce',
    github: 'https://github.com/johndoe/ecommerce',
  },
  {
    id: 2,
    title: 'SafeWalk: Ensuring Women Safety in Public Spaces',
    description: 'Web Application built for women safety',
    longDescription: 'Web Application built for the safey of women',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'FramerMotion'],
    features: [
      'SOS Alert',
      'Emergency Live Location Sharing',
      'Safety Routes'
    ],
    liveDemo: 'https://example.com/taskmanager',
    github: 'https://github.com/bhuvan2018/women_safety',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with interactive maps',
    longDescription: 'An interactive weather dashboard that provides detailed weather information and forecasts using modern visualization techniques and real-time data updates.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    technologies: ['React', 'D3.js', 'OpenWeather API'],
    features: [
      'Interactive weather maps',
      '7-day forecast',
      'Location-based alerts',
      'Historical data analysis'
    ],
    liveDemo: 'https://example.com/weather',
    github: 'https://github.com/johndoe/weather',
  },
];