// src/components/Projects.jsx
import React, { useState } from 'react';
import { GitBranchIcon, GithubIcon, ExternalLinkIcon, BookOpenIcon } from 'lucide-react';

const projects = [
  {
    title: "Smart Parking Assistant",
    category: "Machine Learning",
    description: "Intelligent parking management system combining YOLOv5l-based computer vision with Rasa chatbot interface. Achieved 97.9% detection precision and 92% intent recognition.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Implemented transfer learning with synthetic data augmentation on PKLot dataset",
      "Integrated Flask REST API for video processing",
      "Created Streamlit web interface for real-time monitoring"
    ],
    technologies: [
      "Python", "PyTorch", "Rasa", "Flask", "Streamlit", "OpenCV", "YOLO"
    ],
    type: "Thesis Project"
  },
  {
    title: "Surface Blister Detection System",
    category: "Computer Vision",
    description: "Comprehensive system for detecting and classifying blisters in color-coated metal surfaces using dual-approach solution.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Implemented traditional machine vision (OpenCV) and deep learning (YOLOv5)",
      "Developed Django web application for real-time detection",
      "Created comparison system with standard images"
    ],
    technologies: [
      "Python", "Django", "YOLO", "OpenCV", "PyTorch", "Bootstrap"
    ],
    type: "Industry Project"
  },
  {
    title: "Tree Species Identification",
    category: "Computer Vision",
    description: "Computer vision system for automated tree species identification using YOLOv5 deep learning model. Achieved 96.9% precision in Nordic tree species.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Trained model on five Nordic tree species",
      "Created interactive web interface for real-time detection",
      "Implemented species classification system"
    ],
    technologies: [
      "PyTorch", "YOLOv5", "Python", "Gradio", "Computer Vision"
    ],
    type: "Research Project"
  },
  {
    title: "Real-Time Speech Sentiment Analysis",
    category: "NLP",
    description: "Real-time speech sentiment analysis system integrating Wav2Vec2 and RoBERTa deep learning models.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Implemented audio processing pipeline",
      "Developed speech-to-text conversion system",
      "Created visualization capabilities for sentiment analysis"
    ],
    technologies: [
      "Deep Learning", "NLP", "PyTorch", "Transformers", "Signal Processing"
    ],
    type: "Research Project"
  },
  {
    title: "Call Volume Prediction System",
    category: "Data Science",
    description: "Developed call volume prediction system integrating external factors using Finnish weather API and calendar events data.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Implemented ARIMA and SARIMA-X models",
      "Created interactive visualization dashboard",
      "Integrated multiple external data sources"
    ],
    technologies: [
      "Python", "Pandas", "Scikit-learn", "Time Series Analysis", "API Integration"
    ],
    type: "Industry Project"
  },
  {
    title: "E-commerce Testing Framework",
    category: "QA & Testing",
    description: "Implemented automated testing framework for Verkkokauppa.com e-commerce platform using Robot Framework and Selenium.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Developed comprehensive test cases for critical user flows",
      "Automated product search and cart functionality testing",
      "Implemented checkout process validation",
      "Created reusable test components for common functionalities"
    ],
    technologies: [
      "Robot Framework", "Selenium", "Python", "Web Testing", "Test Automation"
    ],
    type: "Testing Project"
  },
// Update this project object in your projects array:
{
    title: "Basic Gym Website",
    category: "Web Development",
    description: "A beginner web development project - a responsive gym website with membership information, class schedules, and contact form.",
    image: "/api/placeholder/800/600",
    highlights: [
      "Implemented responsive design using Bootstrap",
      "Created interactive navigation menu",
      "Designed pricing cards for membership plans",
      "Built trainer profiles section",
      "Integrated Google Maps for location"
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Bootstrap", "PHP"
    ],
    type: "Learning Project",
    links: {
      demo: "https://girimohan.github.io/project-web/index.html",
      github: "https://github.com/girimohan/project-web"
    },
    year: "2021"
}
];

const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl 
      transition-all duration-300 border border-gray-100 hover:translate-y-[-4px]">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Demo Link Overlay */}
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
              transition-all duration-300 flex items-center justify-center opacity-0 
              group-hover:opacity-100"
          >
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium 
              text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <ExternalLinkIcon className="w-4 h-4" />
              View Live Demo
            </span>
          </a>
        )}
  
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${
            project.category === 'Web Development' ? 'bg-emerald-500' :
            project.category === 'Full Stack' ? 'bg-indigo-500' :
            project.category === 'QA & Testing' ? 'bg-purple-500' :
            project.category === 'Machine Learning' ? 'bg-blue-500' :
            project.category === 'Computer Vision' ? 'bg-green-500' :
            project.category === 'NLP' ? 'bg-yellow-500' :
            'bg-blue-500'
          }`}>
            {project.category}
          </span>
        </div>
  
        {/* Learning Project Badge */}
        {project.type === "Learning Project" && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              Learning Project
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{project.type}</span>
            {project.year && (
              <span className="text-sm text-gray-400">• {project.year}</span>
            )}
          </div>
          
          {/* Project Links */}
          <div className="flex space-x-2">
            {project.links?.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        {/* Project Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Project Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <GitBranchIcon className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies */}
        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full 
                  hover:bg-gray-100 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
  
        {/* Demo Link Button */}
        {project.links?.demo && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-2 bg-emerald-50 
                text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors gap-2 
                font-medium"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              View Live Website
            </a>
          </div>
        )}
  
        {/* Learning Project Note */}
        {project.type === "Learning Project" && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">
              This was one of my first web development projects, focused on learning fundamental web technologies.
            </p>
          </div>
        )}
      </div>
    </div>
  );

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            A collection of my work in Machine Learning, Computer Vision, and Full Stack Development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}