// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react';

const Hero = () => {
  const skills = [
    { name: 'Python', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { name: 'Data Analysis', color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'Machine Learning', color: 'bg-green-50 text-green-700 border-green-100' },
    { name: 'SQL', color: 'bg-purple-50 text-purple-700 border-purple-100' },
    { name: 'PowerBI', color: 'bg-orange-50 text-orange-700 border-orange-100' },
    { name: 'Web Development', color: 'bg-pink-50 text-pink-700 border-pink-100' },
  ];

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900">Mohan Giri</span>
                <span className="block text-blue-600 mt-2">Data Engineer & Developer</span>
              </h1>
              
              {/* Bio with Background */}
              <div className="relative mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Final-year Computer Applications student specializing in Software Development, 
                  Data Science, and Machine Learning. Passionate about transforming complex data 
                  into actionable insights.
                </p>
              </div>
            </div>

            {/* Skills */}
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 
                  text-white font-medium hover:bg-blue-700 transition shadow-sm 
                  hover:shadow-md hover:-translate-y-0.5 duration-200"
              >
                View Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white 
                  text-gray-700 font-medium hover:bg-gray-50 transition border 
                  border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 
                  duration-200"
              >
                Download CV
                <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Code Preview */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">data_analysis.py</span>
                <div className="w-16"></div> {/* Spacer for alignment */}
              </div>

              {/* Code Content */}
              <div className="p-4 bg-gray-900 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="space-y-2">
                  <span className="text-gray-400"># Data Analysis Pipeline</span>
                  <br />
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> pandas </span>
                  <span className="text-[#ff79c6]">as</span>
                  <span className="text-gray-100"> pd</span>
                  <br />
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> numpy </span>
                  <span className="text-[#ff79c6]">as</span>
                  <span className="text-gray-100"> np</span>
                  <br />
                  <span className="text-[#ff79c6]">from</span>
                  <span className="text-gray-100"> sklearn.model_selection </span>
                  <span className="text-[#ff79c6]">import</span>
                  <span className="text-gray-100"> train_test_split</span>
                  <br /><br />
                  <span className="text-[#50fa7b]">class</span>
                  <span className="text-[#8be9fd]"> DataAnalyzer</span>
                  <span className="text-gray-100">:</span>
                  <br />
                  <span className="text-gray-100 ml-4">def </span>
                  <span className="text-[#50fa7b]">__init__</span>
                  <span className="text-gray-100">(self, data):</span>
                  <br />
                  <span className="text-gray-100 ml-8">self.data = data</span>
                  <br /><br />
                  <span className="text-gray-100 ml-4">def </span>
                  <span className="text-[#50fa7b]">preprocess</span>
                  <span className="text-gray-100">(self):</span>
                  <br />
                  <span className="text-gray-400 ml-8"># Handle missing values</span>
                  <br />
                  <span className="text-gray-100 ml-8">self.data = self.data.fillna(</span>
                  <span className="text-[#bd93f9]">0</span>
                  <span className="text-gray-100">)</span>
                  <br /><br />
                  <span className="text-gray-100 ml-8">return self.data</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-pink-600/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;