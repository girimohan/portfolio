
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  GithubIcon, 
  LinkedinIcon, 
  DownloadIcon, 
  CheckCircle,
  Briefcase,
  Mail, 
  MapPin,
  ExternalLinkIcon,
  Code,
  Cpu,  // Changed from ChipIcon
  Brain,
  MonitorIcon,  // For development
  DatabaseIcon  // For data engineering
} from 'lucide-react';

// Professional Skills Structure
const skillCategories = [
  {
    category: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Computer Vision", level: "Advanced", color: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "PyTorch/YOLOv5", level: "Advanced", color: "bg-orange-50 text-orange-700 border-orange-100" },
      { name: "Deep Learning", level: "Advanced", color: "bg-purple-50 text-purple-700 border-purple-100" }
    ]
  },
  {
    category: "Development",
    icon: Code,
    skills: [
      { name: "Python", level: "Advanced", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
      { name: "Django/Flask", level: "Intermediate", color: "bg-green-50 text-green-700 border-green-100" },
      { name: "React", level: "Intermediate", color: "bg-pink-50 text-pink-700 border-pink-100" }
    ]
  },
  {
    category: "Data Engineering",
    icon: DatabaseIcon,
    skills: [
      { name: "SQL/Databases", level: "Intermediate", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
      { name: "Data Analysis", level: "Advanced", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
      { name: "PowerBI", level: "Intermediate", color: "bg-violet-50 text-violet-700 border-violet-100" }
    ]
  }
];

// Key Projects with Impact
const featuredProjects = [
  { 
    name: 'Smart Parking Assistant',
    link: '/project/smart-parking-assistant',
    description: 'Thesis Project',
    tech: 'PyTorch · YOLOv5 · Rasa',
    impact: 'Achieved 97.9% detection accuracy in real-world conditions',
    type: 'ML Research'
  },
  { 
    name: 'Surface Blister Detection',
    link: '/project/surface-blister-detection-system',
    description: 'Industry Project',
    tech: 'OpenCV · YOLOv5 · Django',
    impact: 'Automated quality control for industrial applications',
    type: 'Computer Vision'
  },
  { 
    name: 'Call Volume Prediction',
    link: '/project/call-volume-prediction',
    description: 'Industry Project',
    tech: 'Time Series · ARIMA · Python',
    impact: 'Enhanced resource allocation through predictive analytics',
    type: 'Data Science'
  }
];

// Professional Achievements
const achievements = [
  {
    title: "Industry Experience",
    description: "Developed ML solutions for real industrial applications during internship at HAMK Smart"
  },
  {
    title: "Project Success",
    description: "Led development of Smart Parking Assistant with 97.9% detection accuracy"
  },
  {
    title: "Technical Expertise",
    description: "Proficient in Python, ML frameworks, and web technologies with practical implementation"
  }
];

// Value Propositions
const valueProps = [
  "Strong foundation in both ML/AI and full-stack development",
  "Experience with real-world industry projects and implementations",
  "Quick learner with proven ability to deliver results",
  "Passionate about creating practical AI solutions"
];
const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Content (spans 7 columns) */}
          <div className="lg:col-span-7 space-y-8 lg:sticky lg:top-24">
            {/* Status and Location */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Helsinki, Finland
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Available from Feb 2025
              </div>
            </div>

            {/* Header Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Mohan Giri</span>
                <span className="block text-blue-600 mt-2">ML Engineer & Developer</span>
              </h1>
            </div>

            {/* Enhanced Bio */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-lg text-gray-700">
                Computer Applications graduate from HAMK, specializing in Machine Learning and Full Stack Development. 
                Successfully delivered two industry projects: a Smart Parking System achieving 97.9% accuracy 
                and a Surface Blister Detection system for quality control. Strong foundation in Python, 
                Machine Learning frameworks, and web technologies with practical experience in implementing 
                end-to-end solutions.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Skills Categories */}
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-blue-600" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`${skill.color} px-3 py-2 rounded-lg text-sm 
                          border transition-all hover:scale-[1.02] cursor-default`}
                      >
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-xs opacity-75">{skill.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Featured Projects
              </h3>
              <div className="grid gap-4">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.name}
                    to={project.link}
                    className="group bg-white rounded-xl border border-gray-200 p-4 
                      hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                          {project.name}
                        </h4>
                        <p className="text-sm text-blue-600">{project.description}</p>
                        <p className="text-sm text-gray-600">{project.impact}</p>
                        <p className="text-xs text-gray-400 font-mono">{project.tech}</p>
                      </div>
                      <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 
                        transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-4">Why Work With Me</h3>
              <ul className="space-y-3">
                {valueProps.map((prop, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs and Social */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Link
                  to="/projects"
                  className="flex-1 text-center px-6 py-3 rounded-lg bg-blue-600 text-white 
                    font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg 
                    hover:-translate-y-0.5 duration-200"
                >
                  View All Projects
                </Link>
                <a
                  href="/images/Giri_Mohan_CV.pdf"
                  download
                  className="flex-1 text-center px-6 py-3 rounded-lg bg-white text-gray-700 
                    font-medium hover:bg-gray-50 transition-all border border-gray-200 
                    shadow-sm hover:shadow-lg hover:-translate-y-0.5 duration-200"
                >
                  Download CV
                </a>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/girimohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
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
          </div>
{/* Right Column - Visual Elements (spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/images/mopic2.JPG`}
                alt="Mohan Giri"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl border-2 border-white"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent" />
              
              {/* Optional: Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 
                shadow-lg border border-white">
                <p className="text-sm font-medium text-gray-900">
                  Open to Opportunities
                </p>
              </div>
            </div>

            {/* Code Preview */}
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
                  <span className="text-gray-100 ml-8">self.precision = </span>
                  <span className="text-[#bd93f9]">0.979</span>
                  <br /><br />
                  <span className="text-gray-100 ml-4">def </span>
                  <span className="text-[#50fa7b]">process_frame</span>
                  <span className="text-gray-100">(self, frame):</span>
                  <br />
                  <span className="text-gray-400 ml-8"># Real-time detection</span>
                  <br />
                  <span className="text-gray-100 ml-8">return self.detector(frame)</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">Let's Connect!</h3>
              <p className="text-gray-600 mb-4">
                I'm excited to discuss how my skills in ML and development can contribute to your team's success.
              </p>
              <a
                href="mailto:mohan_gi@hotmail.com"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 
                  text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
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