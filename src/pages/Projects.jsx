// src/pages/Projects.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GitBranchIcon, 
  GithubIcon, 
  ExternalLinkIcon, 
  BookOpenIcon,
  ArrowRightIcon  // Add this import
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project/${projectSlug}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl 
        transition-all duration-300 border border-gray-100 hover:translate-y-[-4px]
        cursor-pointer"
    >
      <div className="p-6">
        {/* Category & Type */}
        <div className="flex items-center justify-between mb-3">
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

          <div className="flex items-center space-x-2">
            <BookOpenIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{project.type}</span>
            {project.year && (
              <span className="text-sm text-gray-400">• {project.year}</span>
            )}
          </div>
        </div>
        
        {/* Project Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Technologies */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-50 text-gray-400 text-sm rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Text */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 text-sm font-medium flex items-center">
            View Details
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

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