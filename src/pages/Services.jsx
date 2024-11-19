// src/pages/Services.jsx
import React, { useState } from 'react';
import { services } from '../data/services';
import { 
  FileText, 
  LineChart, 
  Search, 
  Edit, 
  Mail, 
  ArrowRight, 
  CheckCircle,
  Database,
  Code
} from 'lucide-react';

// Icon mapping object
const iconMap = {
  FileText,
  LineChart,
  Search,
  Edit,
  Database,
  Code
};

// ServiceCard Component
const ServiceCard = ({ service, onSelect }) => {
  const Icon = iconMap[service.icon];

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
        border border-gray-100 overflow-hidden cursor-pointer"
      onClick={() => onSelect(service)}
    >
      <div className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* Key Features List */}
        <ul className="space-y-2">
          {service.offerings.slice(0, 3).map((offering, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{offering}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <button className="mt-4 text-blue-500 font-medium flex items-center text-sm hover:text-blue-600">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

// ServiceDetails Component
const ServiceDetails = ({ service, onClose }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Overview Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">{service.details}</p>
            </div>

            {/* Services Offered Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.offerings.map((offering, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Section - Conditional */}
            {service.deliverables && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Get</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Expertise Section - Conditional */}
            {service.expertise && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.expertise.map((exp, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">{exp.area}</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, i) => (
                          <span key={i} className="px-2 py-1 bg-white text-sm text-gray-600 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ideal For Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideal For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.idealFor.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Start Your Project</h3>
              <p className="text-gray-600 mb-4">
                Ready to transform your ideas into reality? Let's discuss your project requirements 
                and create a customized solution that meets your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:mohan_gi@hotmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
                <button
                  onClick={onClose}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 
                    text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Other Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Component
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging expertise in data science, web development, and technical writing to deliver 
            high-quality solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <ServiceDetails 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </div>
    </div>
  );
}