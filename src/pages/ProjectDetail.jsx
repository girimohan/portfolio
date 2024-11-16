// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  if (!project) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="text-blue-500 hover:text-blue-600"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Projects
          </button>
          <span className="text-sm text-gray-500">{project.type}</span>
        </div>

        {/* Project Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h1>
                <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${
                  project.category === 'Web Development' ? 'bg-emerald-500' :
                  project.category === 'Machine Learning' ? 'bg-blue-500' :
                  project.category === 'Computer Vision' ? 'bg-green-500' :
                  project.category === 'NLP' ? 'bg-yellow-500' :
                  project.category === 'QA & Testing' ? 'bg-purple-500' :
                  'bg-blue-500'
                }`}>
                  {project.category}
                </span>
              </div>
              
              {/* Project Links */}
              <div className="flex gap-3">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-500 text-white 
                      rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white 
                      rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="p-8">
            {/* Key Highlights */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}