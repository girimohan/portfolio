// src/data/services.js
export const services = [
    {
      id: 1,
      title: "Technical Writing & Documentation",
      icon: "FileText",  // Lucide icon name
      description: "Professional technical writing services for reports, documentation, and research papers.",
      offerings: [
        "Research paper structuring and formatting",
        "Technical documentation for products/services",
        "Business reports and analysis documents",
        "API and software documentation"
      ],
      details: "Utilizing my experience in technical writing and research, I help clients create clear, well-structured documents that effectively communicate complex information.",
      deliverables: [
        "Well-structured documents in your preferred format",
        "Professional formatting and citations",
        "Multiple revision rounds",
        "Source files and references"
      ],
      idealFor: [
        "Students working on thesis",
        "Businesses needing technical documentation",
        "Researchers requiring paper formatting",
        "Professionals needing report writing assistance"
      ]
    },
    {
      id: 2,
      title: "Data Visualization & Analysis",
      icon: "LineChart",
      description: "Custom data visualization and analysis services using Python's powerful libraries.",
      offerings: [
        "Custom charts and graphs using Matplotlib/Seaborn",
        "Interactive visualizations with Plotly",
        "Statistical analysis and reporting",
        "Dashboard creation with PowerBI"
      ],
      details: "Transform your data into compelling visual stories. Using advanced Python tools and libraries, I create custom visualizations that help you understand and present your data effectively.",
      deliverables: [
        "High-quality visualization files",
        "Source code for reproducibility",
        "Detailed analysis reports",
        "Interactive dashboard links"
      ],
      idealFor: [
        "Businesses needing data insights",
        "Researchers visualizing results",
        "Students working with data",
        "Anyone needing custom charts/graphs"
      ]
    },
    {
      id: 3,
      title: "Research & Analysis Support",
      icon: "Search",
      description: "Comprehensive research assistance and analysis support for academic and business needs.",
      offerings: [
        "Literature review and research planning",
        "Methodology development",
        "Data analysis and interpretation",
        "Research paper structuring"
      ],
      details: "Supporting your research journey from initial planning to final presentation. I help you develop robust methodologies and present your findings effectively.",
      deliverables: [
        "Research summaries and outlines",
        "Methodology documentation",
        "Analysis reports",
        "Presentation materials"
      ],
      idealFor: [
        "Graduate students",
        "Academic researchers",
        "Business analysts",
        "Research teams"
      ]
    },
    {
      id: 4,
      title: "Content Development & Editing",
      icon: "Edit",
      description: "Professional content development and editing services for various purposes.",
      offerings: [
        "Article and blog post writing",
        "Technical content creation",
        "Content editing and proofreading",
        "SEO optimization"
      ],
      details: "Creating engaging and accurate content tailored to your needs. Whether it's technical articles, blog posts, or business content, I ensure quality and clarity.",
      deliverables: [
        "Original content in desired format",
        "Edited and proofread documents",
        "SEO-optimized content",
        "Multiple revision rounds"
      ],
      idealFor: [
        "Business owners",
        "Content managers",
        "Technical writers",
        "Marketing teams"
      ]
    },

    // Add these to your services array in src/data/services.js

{
    id: 5,
    title: "Data Science & AI Solutions",
    icon: "Database", // Lucide icon
    description: "End-to-end data science solutions for businesses - from data preprocessing to model deployment.",
    offerings: [
      "Data preprocessing and cleaning",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning model development",
      "Predictive analytics",
      "Business insights and recommendations",
      "Model deployment and monitoring"
    ],
    details: "Leverage data-driven insights for your business growth. I help organizations harness the power of their data through advanced analytics and machine learning solutions. From initial data preprocessing to final model deployment, I provide comprehensive data science services tailored to your business needs.",
    deliverables: [
      "Clean and processed datasets",
      "Detailed analysis reports",
      "Custom ML models",
      "Performance metrics and insights",
      "Implementation documentation",
      "Maintenance guidelines"
    ],
    idealFor: [
      "Businesses seeking data-driven decisions",
      "Companies needing predictive analytics",
      "Organizations with data processing needs",
      "Startups building ML-powered features",
      "Businesses wanting to automate predictions"
    ],
    expertise: [
      {
        area: "Data Processing",
        tools: ["Python", "Pandas", "NumPy", "SQL"]
      },
      {
        area: "Machine Learning",
        tools: ["Scikit-learn", "TensorFlow", "PyTorch"]
      },
      {
        area: "Visualization",
        tools: ["Matplotlib", "Seaborn", "PowerBI"]
      },
      {
        area: "Deployment",
        tools: ["Flask", "FastAPI", "Docker"]
      }
    ]
  },
  {
    id: 6,
    title: "Web Development Solutions",
    icon: "Code", // Lucide icon
    description: "Custom web development services from personal portfolios to full-scale web applications.",
    offerings: [
      "Portfolio websites",
      "Business websites",
      "Web applications",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration"
    ],
    details: "Transform your web presence with custom development solutions. Whether you need a professional portfolio, business website, or complex web application, I provide end-to-end development services using modern technologies and best practices.",
    deliverables: [
      "Responsive website/application",
      "Source code",
      "Documentation",
      "Deployment setup",
      "Training and support",
      "Maintenance guide"
    ],
    idealFor: [
      "Professionals needing portfolios",
      "Small businesses",
      "Startups",
      "E-commerce ventures",
      "Organizations needing web apps"
    ],
    expertise: [
      {
        area: "Frontend",
        tools: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
      },
      {
        area: "Backend",
        tools: ["Python", "Django", "Flask", "Node.js"]
      },
      {
        area: "Database",
        tools: ["MySQL", "PostgreSQL", "MongoDB"]
      },
      {
        area: "Tools",
        tools: ["Git", "Docker", "AWS", "Heroku"]
      }
    ],
    features: {
      portfolio: [
        "Professional design",
        "Mobile responsiveness",
        "Project showcasing",
        "Blog integration",
        "Contact forms",
        "SEO optimization"
      ],
      webApps: [
        "User authentication",
        "Database integration",
        "API development",
        "Real-time features",
        "Admin dashboard",
        "Analytics integration"
      ]
    },
    process: [
      "Requirements gathering",
      "Design mockups",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance support"
    ]
  }
  ];