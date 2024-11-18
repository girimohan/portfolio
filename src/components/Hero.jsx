import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, DownloadIcon, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const skills = [
    { name: 'Computer Vision', color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'Machine Learning', color: 'bg-green-50 text-green-700 border-green-100' },
    { name: 'PyTorch', color: 'bg-orange-50 text-orange-700 border-orange-100' },
    { name: 'Python', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { name: 'Data Analysis', color: 'bg-purple-50 text-purple-700 border-purple-100' },
    { name: 'NLP', color: 'bg-pink-50 text-pink-700 border-pink-100' },
    { name: 'Flask', color: 'bg-gray-50 text-gray-700 border-gray-100' },
    { name: 'PowerBI', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  ];

  const featuredProjects = [
    { 
      name: 'Smart Parking Assistant', 
      link: '/project/smart-parking-assistant',
      description: 'Computer Vision & NLP powered parking system',
      tech: 'PyTorch · YOLOv5 · Rasa'
    },
    { 
      name: 'Surface Blister Detection', 
      link: '/project/surface-blister-detection-system',
      description: 'Real-time defect detection system',
      tech: 'OpenCV · Deep Learning · Django'
    },
    { 
      name: 'Call Volume Prediction', 
      link: '/project/call-volume-prediction',
      description: 'Time series forecasting system',
      tech: 'ARIMA · SARIMA-X · Python'
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content (spans 7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              Helsinki, Finland
            </div>

            {/* Header Section */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
                <span className="block text-gray-900">Mohan Giri</span>
                <span className="block text-blue-600 mt-2">ML Engineer & Developer</span>
              </h1>
              
              {/* Enhanced Bio Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                {/* Professional Summary */}
                <div className="border-l-4 border-blue-500 pl-4 mb-6">
                  <p className="text-lg text-gray-700">
                    Machine Learning Engineer & Full Stack Developer completing Bachelor's in Computer Applications 
                    at HAMK (December 2024). Specialized in developing AI solutions with real-world impact.
                  </p>
                </div>

                {/* Key Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-600 mb-2">Thesis Project</h3>
                    <p className="text-sm text-gray-600">
                      Smart Parking Assistant
                      <span className="block mt-1 text-gray-500">
                        • YOLOv5 Vehicle Detection (97.9% accuracy)
                        • Rasa Chatbot Integration
                        • Real-time Processing Pipeline
                      </span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-600 mb-2">Industry Experience</h3>
                    <p className="text-sm text-gray-600">
                      Surface Blister Detection System
                      <span className="block mt-1 text-gray-500">
                        • OpenCV & YOLOv5 Implementation
                        • Django Web Application
                        • Real-time Analysis System
                      </span>
                    </p>
                  </div>
                </div>

                {/* Technical Focus */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">TECHNICAL EXPERTISE</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/60 rounded text-xs text-gray-600">Computer Vision</span>
                    <span className="px-2 py-1 bg-white/60 rounded text-xs text-gray-600">Deep Learning</span>
                    <span className="px-2 py-1 bg-white/60 rounded text-xs text-gray-600">Python</span>
                    <span className="px-2 py-1 bg-white/60 rounded text-xs text-gray-600">Django</span>
                    <span className="px-2 py-1 bg-white/60 rounded text-xs text-gray-600">React</span>
                  </div>
                </div>

                {/* Current Status */}
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Available for ML Engineer, Developer & Data Science roles</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`${skill.color} px-4 py-2 rounded-full text-sm font-medium 
                      border transition-transform hover:scale-105 cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Featured Projects</h3>
              <div className="grid gap-4">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.name}
                    to={project.link}
                    className="group block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                      hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-500">{project.description}</p>
                        <p className="text-xs text-gray-400 font-mono">{project.tech}</p>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 
                        transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 
                  text-white font-medium hover:bg-blue-700 transition-all shadow-sm 
                  hover:shadow-blue-100 hover:shadow-lg hover:-translate-y-0.5 duration-200"
              >
                View All Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="/images/mohan_cv_new.pdf"
                download="mohan_cv.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white 
                  text-gray-700 font-medium hover:bg-gray-50 transition-all border 
                  border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 
                  duration-200"
              >
                Download CV
                <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/girimohan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohan-giri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohan_gi@hotmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Code Preview (spans 5 columns) */}
          <div className="lg:col-span-5 relative">
            {/* Profile Image */}
            <div className="relative mb-6">
              <img
                //src="/images/mo_dv.jpg"
                src={`${process.env.PUBLIC_URL}/images/mohan.jpg`}
                alt="Mohan Giri"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl border-2 border-white
                  transform hover:-rotate-2 transition-all duration-300"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-200 
              transform hover:-rotate-1 transition-transform duration-200">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">smart_parking.py</span>
                <div className="w-16"></div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-gray-900 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="space-y-3">
                  <span className="text-gray-400"># Smart Parking Detection System</span>
                  <br />
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> torch</span>
                  <br />
                  <span className="text-[#ff79c6]">from</span>
                  <span className="text-gray-100"> models.yolo </span>
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> YOLOv5</span>
                  <br />
                  <span className="text-[#ff79c6]">from</span>
                  <span className="text-gray-100"> rasa.core </span>
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> Agent</span>
                  <br /><br />
                  <span className="text-[#50fa7b]">class</span>
                  <span className="text-[#8be9fd]"> ParkingAssistant</span>
                  <span className="text-gray-100">:</span>
                  <br />
                  <span className="text-gray-100 ml-4">def </span>
                  <span className="text-[#50fa7b]">__init__</span>
                  <span className="text-gray-100">(self):</span>
                  <br />
                  <span className="text-gray-100 ml-8">self.detector = YOLOv5()</span>
                  <br />
                  <span className="text-gray-100 ml-8">self.chatbot = Agent.load(</span>
                  <span className="text-[#f1fa8c]">'models/dialogue'</span>
                  <span className="text-gray-100">)</span>
                  <br />
                  <span className="text-gray-100 ml-8">self.precision = </span>
                  <span className="text-[#bd93f9]">0.979</span>
                  <br /><br />
                  <span className="text-gray-100 ml-4">def </span>
                  <span className="text-[#50fa7b]">process_frame</span>
                  <span className="text-gray-100">(self, frame):</span>
                  <br />
                  <span className="text-gray-400 ml-8"># Real-time detection</span>
                  <br />
                  <span className="text-gray-100 ml-8">spaces = self.detector(frame)</span>
                  <br />
                  <span className="text-gray-100 ml-8">return self._analyze_spaces(spaces)</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-yellow-600/10 to-pink-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;