// src/pages/Contact.jsx
import React from 'react';
import { 
  MailIcon, 
  GithubIcon, 
  LinkedinIcon, 
  MapPinIcon,
  BookOpenIcon,
  GraduationCapIcon
} from 'lucide-react';

const contactInfo = {
  email: "mohan_gi@hotmail.com",
  location: "Helsinki, Finland",
  github: "https://github.com/girimohan",
  linkedin: "https://www.linkedin.com/in/mohan-giri-37b87a186/",
  education: {
    school: "HAMK University of Applied Sciences",
    degree: "Bachelor in Computer Applications",
    specialization: "Software Development, Data Science, Machine Learning and AI",
    period: "2021 - Present"
  },
  references: [
    {
      name: "Tommi Lahti",
      position: "Teacher Supervisor",
      email: "tommi.lahti@hamk.fi"
    },
    {
      name: "Atte Partanen",
      position: "Internship Supervisor",
      email: "atte.partanen@hamk.fi"
    },
    {
      name: "Suman Dahal",
      position: "Development Manager",
      email: "suman.d.dahal@outlook.com"
    }
  ]
};

const ContactCard = ({ icon: Icon, title, value, link }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-medium text-gray-900">{value}</p>
        )}
      </div>
    </div>
  </div>
);

const ReferenceCard = ({ reference }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">{reference.name}</h3>
      <p className="text-sm text-gray-600">{reference.position}</p>
      <a 
        href={`mailto:${reference.email}`}
        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        {reference.email}
      </a>
    </div>
  </div>
);

export default function Contact() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out for projects, questions, or just to say hello!
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard 
            icon={MailIcon}
            title="Email"
            value={contactInfo.email}
            link={`mailto:${contactInfo.email}`}
          />
          
          <ContactCard 
            icon={MapPinIcon}
            title="Location"
            value={contactInfo.location}
          />
          <ContactCard 
            icon={GithubIcon}
            title="GitHub"
            value="girimohan"
            link={contactInfo.github}
          />
          <ContactCard 
            icon={LinkedinIcon}
            title="LinkedIn"
            value="Mohan Giri"
            link={contactInfo.linkedin}
          />
          <ContactCard 
            icon={GraduationCapIcon}
            title="Education"
            value="HAMK University"
            link="https://www.hamk.fi/en/"
          />
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpenIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Current Education</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">{contactInfo.education.school}</h3>
            <p className="text-gray-600">{contactInfo.education.degree}</p>
            <p className="text-gray-600">{contactInfo.education.specialization}</p>
            <p className="text-sm text-gray-500">{contactInfo.education.period}</p>
          </div>
        </div>

        {/* References Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.references.map((reference, index) => (
              <ReferenceCard key={index} reference={reference} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600">
            Prefer email? Feel free to reach out at{' '}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}