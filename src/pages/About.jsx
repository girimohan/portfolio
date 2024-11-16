// src/pages/About.jsx
import React from 'react';
import { BookOpenIcon, CodeIcon, ServerIcon, DatabaseIcon, WrenchIcon } from 'lucide-react';

const skillsData = {
  machineLearning: {
    title: "Machine Learning & AI",
    level: "Advanced",
    skills: [
      "PyTorch", "Computer Vision", "OpenCV", "Rasa Framework", "NLP", 
      "Scikit-learn", "Pandas", "NumPy", "Time Series Analysis", 
      "TensorFlow", "Keras", "YOLO", "Object Detection"
    ]
  },
  development: {
    title: "Development",
    level: "Advanced",
    skills: [
      "Python", "Flask", "Django", "Streamlit", "RESTful APIs", 
      "Java", "HTML/CSS", "JavaScript", "PHP", "Git", "React"
    ]
  },
  dataAnalysis: {
    title: "Data Analysis",
    level: "Advanced",
    skills: [
      "Statistical Analysis", "PowerBI", "Data Visualization", 
      "Excel", "Matplotlib", "Seaborn", "Librosa"
    ]
  },
  databases: {
    title: "Databases",
    level: "Intermediate",
    skills: [
      "MySQL", "SQLite", "PostgreSQL", "NoSQL", "Neo4j"
    ]
  },
  tools: {
    title: "Tools & Other",
    level: "Advanced",
    skills: [
      "SCRUM", "Jira", "Confluence", "Git", "AWS Cloud Foundation", 
      "Robot Framework", "Selenium"
    ]
  }
};

const certifications = [
  {
    title: "Data Analyst in PowerBI",
    organization: "DataCamp",
    date: "Oct 2023",
    description: "Advanced Data Analyst Course in PowerBI"
  },
  {
    title: "AWS Academy Cloud Foundation",
    organization: "Amazon",
    date: "Sept 2023",
    description: "AWS Architecture, Cloud, Core Services, Pricing, Support"
  }
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Finnish", level: "Intermediate" }
];

const SkillCard = ({ title, level, skills }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <span className={`px-2 py-1 rounded-full text-sm ${
        level === "Advanced" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
      }`}>
        {level}
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-gray-100 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CertificationCard = ({ cert }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
    <BookOpenIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
    <div>
      <h3 className="font-medium text-gray-900">{cert.title}</h3>
      <p className="text-sm text-gray-500">{cert.organization} • {cert.date}</p>
      <p className="text-sm text-gray-600 mt-1">{cert.description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Final-year Computer Applications student at HAMK, specializing in
            Software Development, Data Science, Machine Learning and AI. Led
            successful ML projects including Smart Parking Assistant, Surface Blister
            Detection System, and Call Volume Prediction.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(skillsData).map((skillGroup) => (
              <SkillCard key={skillGroup.title} {...skillGroup} />
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
                <span className="font-medium text-gray-900">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}