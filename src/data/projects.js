// src/data/projects.js

export const projects = [
    {
        title: "Smart Parking Assistant",
        category: "Machine Learning",
        description: "An intelligent parking management system combining YOLOv5l-based computer vision with Rasa chatbot interface. Achieved 97.9% detection precision in vehicle detection and 92% intent recognition accuracy in chatbot interactions.",
        highlights: [
          "Trained YOLOv5l model using PKLot dataset with transfer learning from COCO weights",
          "Applied synthetic data augmentation for varying lighting conditions",
          "Developed Flask REST API for video stream processing",
          "Created Streamlit dashboard for parking space monitoring",
          "Implemented Rasa chatbot for handling parking inquiries",
          "Built data pipeline for processing and analyzing parking patterns",
        ],
        technologies: [
          "Python", "PyTorch", "YOLO", "Rasa", "Flask", "Streamlit", "OpenCV", 
          "REST APIs", "TensorFlow", "Pandas", "NumPy", "Git", 
        ],
        type: "Thesis Project",
        links: {
            github: "https://github.com/girimohan/smartparking"
          },
        year: "2024",
        duration: "6 months",
        role: "Lead Developer"
    },
    {
        title: "Surface Blister Detection System",
        category: "Computer Vision",
        description: "Led the development of a comprehensive system for detecting and classifying blisters in color-coated metal surfaces at HAMK Smart. Implemented dual-approach solution using traditional machine vision and deep learning for robust detection.",
        highlights: [
          "Developed dual-approach detection system using OpenCV and YOLOv5",
          "Created Django web application for real-time detection and analysis",
          "Implemented comparison system with standard reference images",
          "Built automated reporting system for defect analysis",
          "Achieved 95% detection accuracy in production environment",
        ],
        technologies: [
          "Python", "Django", "YOLOv5", "OpenCV", "PyTorch", "Bootstrap",
          "REST APIs"
        ],
        type: "Internship",
        links: {
            github: "https://github.com/hamk-uas/blister-detection-system"
          },
        year: "2024",
        duration: "6 months",
        role: "Machine Learning Engineer Intern",
        organization: "HAMK Smart"
    },
    
    {
        title: "Tree Species Identification System",
        category: "Computer Vision",
        description: "Developed and implemented a computer vision system for automated tree species identification using YOLOv5 deep learning model. Achieved 96.9% precision in identifying five Nordic tree species (Birch, Maple, Pine, Rowan, Spruce).",
        highlights: [
          "Trained YOLOv5 model on custom dataset of Nordic trees",
          "Implemented data augmentation for environmental variations",
          "Created interactive Gradio web interface for real-time detection",
          "Developed species identification guide",
          "Achieved 96.9% precision across different lighting conditions"
        ],
        technologies: [
          "PyTorch", "YOLOv5", "Python", "Gradio", "OpenCV", 
          "TensorFlow", "FastAPI"
        ],
        type: "Research Project",
        year: "2024",
        duration: "4 months",
        role: "Computer Vision Engineer"
    },
    {
        title: "Real-Time Speech Sentiment Analysis",
        category: "NLP",
        description: "Developed a real-time speech sentiment analysis system integrating Wav2Vec2 for speech recognition and RoBERTa for sentiment analysis. Created comprehensive pipeline for audio processing and sentiment visualization.",
        highlights: [
          "Integrated Wav2Vec2 model for speech-to-text conversion",
          "Implemented RoBERTa model for sentiment classification",
          "Created real-time audio processing pipeline",
          "Built interactive visualization dashboard",
        ],
        technologies: [
          "PyTorch", "Transformers", "Wav2Vec2", "RoBERTa", 
          "Signal Processing", "Streamlit",
        ],
        type: "Research Project",
        year: "2024",
        duration: "3 months",
        role: "NLP Engineer"
    },
    {
        title: "2048 Game AI Implementation",
        category: "Machine Learning",
        description: "Developed an AI that can play the 2048 game using heuristic rules and expectimax algorithm. Implemented multiple heuristic strategies and combined them with expectimax algorithm to optimize game performance.",
        highlights: [
            "Implemented multiple heuristic strategies including empty tile, monotonicity, and pattern matching",
            "Developed expectimax algorithm to handle probabilistic game states",
            "Combined heuristics with expectimax for optimized decision making",
            "Conducted performance analysis over 100 simulation runs",
            "Achieved higher score with 70% games reaching 2048 tile",
            "Optimized algorithm for improved execution speed and memory usage"
        ],
        technologies: [
            "Python",
            "NumPy",
            "Expectimax Algorithm",
            "Heuristic Programming",
            "Game Theory",
            "Performance Analysis"
        ],
        type: "College Project",
        year: "2024",
        duration: "2 weeks",
        role: "AI Developer",
        features: {
            heuristics: [
                "Empty tile maximization",
                "Monotonicity patterns",
                "Corner prioritization",
                "Merge opportunity detection"
            ],
            algorithms: [
                "Expectimax with depth-3 search",
                "Probabilistic state evaluation",
                "Combined heuristic-expectimax approach"
            ],
            performance: {
                averageScore: "XXXX",
                maxTileReached: "2048",
                successRate: "70%",
                simulationRuns: 100
            }
        },
    },
    {
        title: "Call Volume Prediction",
        category: "Data Science",
        description: "Collaborated with Finnish tech company Cinia Oy to develop call volume prediction system integrating external factors from Finnish weather API and calendar events data.",
        highlights: [
          "Implemented ARIMA and SARIMA-X models for time series prediction",
          "Integrated external factors using Finnish weather API and calendar events",
          "Created interactive visualization dashboard for trend analysis",
          "Developed automated data pipeline for continuous model updates",
          "Achieved 85% prediction accuracy for daily call volumes"
        ],
        technologies: [
          "Python", "Pandas", "Scikit-learn", "Time Series Analysis", 
          "API Integration", "Streamlit", "Plotly", "SQLite"
        ],
        type: "Industry Project",
        year: "2023",
        duration: "5 months",
        role: "Project Developer",
        organization: "Cinia Oy"
    },
    {
        title: "E-commerce Testing Framework",
        category: "QA & Testing",
        description: "Implemented automated testing framework for Verkkokauppa.com e-commerce platform using Robot Framework and Selenium. Focused on critical user flows including product search, cart functionality, and checkout process.",
        highlights: [
          "Created automated test suites for critical user flows",
          "Implemented data-driven testing approach",
          "Developed reusable test components",
          "Automated product search and cart functionality testing",
          "Implemented checkout process validation",
          "Set up cross-browser compatibility testing"
        ],
        technologies: [
          "Robot Framework", "Selenium", "Python", "Jenkins", 
          "Git", "HTML/CSS Selectors", "XPath"
        ],
        type: "Testing Project",
        year: "2022",
        duration: "College Project",
        role: "Test Automation Engineer"
    },
    {
        title: "Automated Invoice Processing System",
        category: "RPA & Automation",
        description: "Developed an automated system to process paper invoices using UiPath and Robot Framework. The system extracts data from PDF invoices, validates financial information, and stores it in MySQL database for further processing.",
        highlights: [
            "Implemented PDF data extraction using UiPath OCR capabilities",
            "Developed validation system for IBAN and reference numbers",
            "Created automated line item sum verification against total amount",
            "Built Robot Framework process for CSV data processing and database operations",
            "Implemented comprehensive error handling and reporting system",
            "Integrated with existing electronic invoice management system"
        ],
        technologies: [
            "UiPath",
            "Robot Framework",
            "MySQL",
            "Python",
            "OCR",
            "CSV Processing",
            "PDF Handling",
            "Data Validation"
        ],
        type: "Industry Project",
        year: "2022",
        duration: "4 months",
        role: "RPA Developer",
        technicalFeatures: {
            uipath: [
                "PDF invoice reading",
                "OCR data extraction",
                "CSV file generation",
                "Data standardization"
            ],
            robotFramework: [
                "IBAN validation",
                "Reference number verification",
                "Sum validation",
                "Database operations"
            ],
            database: [
                "Invoice storage",
                "Status tracking",
                "Error logging",
                "Approval workflow integration"
            ]
        },
        validations: [
            "IBAN number verification",
            "Reference number checking",
            "Line item sum validation",
            "Total amount verification"
        ],
        outcomes: [
            "Reduced manual processing time by 80%",
            "Improved accuracy in invoice processing",
            "Enhanced error detection and reporting",
            "Streamlined approval workflow"
        ],
    },
    {
        title: "Electricity Sales Analytics System",
        category: "Data Science",
        description: "Built comprehensive ETL pipeline and analytics solution for electricity sales company, processing customer data and electricity pricing information to create actionable business insights using PowerBI.",
        highlights: [
            "Designed and implemented ETL pipeline using SQL Server Integration Services",
            "Created staging database for data preprocessing and quality checks",
            "Developed data transformation logic for sales and pricing analysis",
            "Built PowerBI dashboards for strategic decision making",
            "Implemented data quality monitoring and correction systems",
            "Created automated reporting system for price change analysis"
        ],
        technologies: [
            "SQL Server",
            "SSIS",
            "PowerBI",
            "Python",
            "CSV Processing",
            "Database Design",
            "ETL Pipeline",
            "Data Modeling"
        ],
        type: "Data Analysis Project",
        year: "2022",
        duration: "3 months",
        role: "Data Engineer",
        implementation: {
            dataSources: [
                "Customer database (CompanyLtd)",
                "Electricity prices (CSV)",
                "Sales contracts data",
                "Daily price fluctuations"
            ],
            etlProcess: [
                "Data extraction from multiple sources",
                "Data cleaning and transformation",
                "Quality validation and correction",
                "Loading to staging database",
                "View creation for reporting"
            ],
            powerBIReports: [
                "Price trend analysis",
                "Sales channel performance",
                "Profitability analysis",
                "Customer contract analysis",
                "Strategic pricing recommendations"
            ]
        },
        dataModeling: {
            staging: "Designed for initial data landing",
            warehouse: "Star schema for analytical queries",
            views: "Optimized for PowerBI consumption"
        },
        
    },
    {
        title: "Election Machine",
        category: "Full Stack",
        description: "Developed a web-based election machine application using Java Servlets and JSP, following MVC architecture. Implemented secure voting system with admin and user functionalities.",
        highlights: [
            "Implemented MVC architecture using Java Servlets and JSP",
            "Created MySQL database with ResultSet implementations",
            "Built REST APIs for candidate and question management",
            "Developed secure authentication system",
            "Implemented admin dashboard for election management",
            "Created responsive user interface using Bootstrap"
        ],
        technologies: [
            "Java",
            "Servlets",
            "JSP",
            "MySQL",
            "REST API",
            "Bootstrap",
            "Maven",
            "JavaDoc"
        ],
        type: "College Project",
        year: "2022",
        duration: "3 weeks",
        role: "Full Stack Developer",
        teamSize: 4,
        implementation: {
            frontend: "JSP, Bootstrap, JavaScript",
            backend: "Java Servlets, MySQL",
            testing: "JUnit, Integration Testing",
            documentation: "JavaDoc, Project Documentation"
        },
        methodologies: [
            "Scrum",
            "MVC Architecture",
            "Agile Development",
            "Version Control (Git)"
        ],
        features: {
            user: [
                "Candidate registration",
                "Question answering system",
                "Result visualization",
                "Profile management"
            ],
            admin: [
                "Question management",
                "Candidate management",
                "Election statistics",
                "System configuration"
            ]
        },
        links: {
            github: "https://github.com/girimohan/emc-rest"
        }
    },
    {
        title: "Basic Gym Website",
        category: "Web Development",
        description: "First web development project - a responsive gym website showcasing membership plans, class schedules, and trainer profiles. Implemented using Bootstrap framework for responsive design.",
        highlights: [
          "Created responsive layout using Bootstrap",
          "Designed interactive navigation menu",
          "Built membership pricing cards",
          "Developed trainer profile section",
          "Integrated Google Maps location"
        ],
        technologies: [
          "HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Git"
        ],
        type: "Learning Project",
        links: {
          demo: "https://girimohan.github.io/project-web/index.html",
          github: "https://github.com/girimohan/project-web"
        },
        year: "2021",
        duration: "2-3 weeks",
        role: "Frontend Developer"
    },
];