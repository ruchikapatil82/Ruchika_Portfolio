export const portfolioData = {
  personal: {
    name: "Ruchika Patil",
    fullName: "Ruchika Dilip Patil",
    title: "Full Stack Web Developer | React & MERN Specialist",
    tagline: "Engineering Responsive Web Applications with Clean Code, Modern Architecture & High Academic Merit.",
    about:
      "I am a Computer Engineering student with a strong foundation in full-stack web development and core software principles. From securing a 90.71 CGPA in my Computer Engineering Diploma to completing an intensive Full Stack internship at Sumago Infotech, I focus on turning complex challenges into clean, accessible, and high-performance digital products.",
    location: "Maharashtra, India",
    status: "Open to Full Stack & React Opportunities",
    email: "Patilruchika578@gmail.com",
    phone: "+91 9607290893",
    github: "https://github.com/ruchikapatil82",
    linkedin: "https://www.linkedin.com/in/ruchika-patil",
    photo: "/ruchika-patil.jpg",
    resumeUrl: "/resume.pdf",
    interests: ["Travelling", "Listening to Music", "Gardening"],
  },

  stats: [
    { label: "Diploma Merit", value: "90.71", unit: "CGPA", note: "SSVPS Polytechnic, Dhule" },
    { label: "Class X Board", value: "87.80%", unit: "Merit", note: "Shree Ekvira Devi Vidyalay" },
    { label: "Industry Internship", value: "Sumago", unit: "Infotech", note: "Full Stack React / MERN" },
    { label: "Key Recognitions", value: "2", unit: "Honors", note: "Best Performer & Curious Catalyst" },
  ],

  skills: {
    programming: [
      { name: "C Language", note: "Data Structures & Core Logic", icon: "Code2" },
      { name: "Java", note: "Object-Oriented Programming", icon: "Cpu" },
      { name: "Python", note: "Scripting & Backend Frameworks", icon: "Terminal" },
      { name: "JavaScript (ES6+)", note: "Asynchronous JS & DOM", icon: "Braces" },
    ],
    frontend: [
      { name: "React.js", note: "Components, Hooks & State Management", icon: "Atom", featured: true },
      { name: "HTML5 & CSS3", note: "Semantic Structure & Modern Layouts", icon: "FileCode" },
      { name: "JavaScript", note: "Interactive Client Logic", icon: "Code2" },
      { name: "Responsive Design", note: "Mobile-First & Cross-Browser", icon: "Smartphone" },
    ],
    backend: [
      { name: "Node.js", note: "Server-side Runtime", icon: "Server" },
      { name: "Express.js", note: "RESTful Routing & Middleware", icon: "Layers" },
      { name: "Django", note: "Python Web Architecture", icon: "Layers" },
      { name: "REST APIs", note: "CRUD Endpoints & Integration", icon: "Network" },
    ],
    database: [
      { name: "MongoDB", note: "NoSQL Document Store", icon: "Database" },
      { name: "DBMS / Relational", note: "Structured Query & Schema Design", icon: "HardDrive" },
      { name: "SQLite", note: "Embedded Relational DB", icon: "HardDrive" },
    ],
    tools: [
      { name: "Git & GitHub", note: "Version Control & Repositories", icon: "GitBranch" },
      { name: "VS Code", note: "Primary Engineering Workspace", icon: "Laptop" },
      { name: "Figma", note: "UI/UX & Wireframing (Actively Learning)", icon: "Figma", isLearning: true },
    ],
    concepts: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Model-View-Controller (MVC)",
      "Database Management Systems (DBMS)",
    ],
  },

  projects: [
    {
      id: "museum-web",
      title: "Museum Website",
      category: "Full Stack Web Application",
      featured: true,
      tag: "MERN Stack",
      description:
        "A comprehensive full-stack web project built using React.js for the dynamic front-end and Node.js/Express.js with MongoDB on the backend to present museum exhibits, visitor information, and cultural collections through an intuitive interface.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      highlights: [
        "Dynamic exhibit exploration and categorized cultural archives",
        "Express.js RESTful API endpoints for structured content handling",
        "Clean, responsive layout designed for high visitor engagement",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Featured Full Stack Project",
    },
    {
      id: "obe-attainment",
      title: "CO Attainment Calculation System",
      category: "Python & Academic Data",
      featured: true,
      tag: "Python / Django",
      description:
        "An automated academic calculation system focused on Course Outcome (CO) attainment analysis, student assessment processing, and target-level gap evaluations for engineering accreditation standards.",
      techStack: ["Python", "Django", "SQLite", "HTML", "CSS", "Pandas"],
      highlights: [
        "Automated attainment formula computation eliminating manual calculation errors",
        "Excel/database integration for seamless institutional assessment ingestion",
        "Detailed analytical reporting dashboard for engineering accreditation",
      ],
      github: "https://github.com/Amansk101/co",
      liveDemo: null,
      statusBadge: "Open Source Repository",
    },
    {
      id: "vaultnest",
      title: "VaultNest — Password Manager",
      category: "Security & Web App",
      featured: true,
      tag: "Flask & Cryptography",
      description:
        "A secure credential management web platform that enables users to store, categorize, and retrieve sensitive passwords safely using cryptographic hashing and authenticated sessions.",
      techStack: ["Python", "Flask", "SQLite", "Werkzeug", "Jinja2", "HTML/CSS/JS"],
      highlights: [
        "Cryptographic password hashing powered by Werkzeug security protocols",
        "Session authentication with protected routes and safe credential storage",
        "Intuitive web interface with instant credential copying and category filters",
      ],
      github: "https://github.com/ruchikapatil82/VaultNest",
      liveDemo: null,
      statusBadge: "Verified GitHub Project",
    },
    {
      id: "student-attendance",
      title: "Student Attendance Management System",
      category: "Desktop & Database Application",
      featured: false,
      tag: "Python & SQLite",
      description:
        "A structured desktop software application designed for educational institutions to record daily attendance, maintain student demographic records, and export summary logs.",
      techStack: ["Python", "Tkinter", "SQLite3"],
      highlights: [
        "Relational student ledger with search, add, update, and delete actions",
        "Daily attendance logs backed by persistent SQLite storage",
        "User-friendly GUI engineered for fast data entry",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Desktop Application",
    },
  ],

  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "Sumago Infotech",
      location: "Nashik, Maharashtra",
      period: "Jun 2 – Aug 27",
      technology: "React.js / MERN Stack",
      description:
        "Worked on web development projects using React.js. Gained hands-on practical exposure to full-stack web development workflows, component lifecycles, REST API consumption, and team development milestones.",
      achievements: [
        "Honored with 'Best Performer of the Month (July)' for outstanding dedication and technical execution",
        "Conferred the 'Curious Catalyst Award' at the official Sumago Infotech Valedictory Function",
        "Earned the official Full Stack Web Development Certificate upon successful project delivery",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Computer Engineering",
      institution: "R.C. Patel Institute of Technology (RCPIT)",
      location: "Shirpur, Maharashtra",
      period: "Current (Direct Second Year)",
      score: "Coursework in Progress",
      scoreLabel: "B.E. Degree",
      badge: "Degree",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "SSVPS Polytechnic",
      location: "Dhule, Maharashtra",
      period: "Completed",
      score: "90.71 CGPA",
      scoreLabel: "Academic Distinction",
      badge: "Top Merit",
    },
    {
      degree: "Class X (Secondary School Certificate)",
      institution: "Shree Ekvira Devi Vidyalay",
      location: "Dhule, Maharashtra",
      period: "2023",
      score: "87.80%",
      scoreLabel: "High First Class",
      badge: "Board Exam",
    },
  ],

  // Real Photographic Proof & Official Honors
  achievementGallery: [
    {
      id: "best-performer",
      title: "Best Performer of the Month (July)",
      issuer: "Sumago Infotech, Nashik",
      date: "July",
      type: "Top Performance Honor",
      image: "/best-performer.jpg",
      caption: "Gold SCOPE Medal awarded at Sumago Infotech during the Full Stack Web Development Internship.",
      badge: "Gold Medal Award",
      highlight: "Highest consistency and rapid delivery on React.js project milestones.",
    },
    {
      id: "curious-catalyst",
      title: "Curious Catalyst Award",
      issuer: "Sumago Infotech Valedictory Function",
      date: "August Valedictory",
      type: "Valedictory Distinction",
      image: "/curious-catalyst.png",
      caption: "Felicitation ceremony on stage receiving the trophy and certificate at the official Industrial Training Valedictory.",
      badge: "Stage Felicitation",
      highlight: "Special recognition for exceptional learning curiosity, proactive problem solving, and initiative.",
    },
  ],

  otherCertifications: [
    {
      title: "Full Stack Web Development Certificate",
      issuer: "Sumago Infotech, Nashik",
      type: "Internship Certificate",
      date: "Aug 2024",
    },
    {
      title: "Runner-Up — C++ Coding Competition",
      issuer: "College Level Programming Contest",
      type: "Competitive Coding",
      date: "College Contest",
    },
    {
      title: "Hackathon Participation Certificate",
      issuer: "Technical Hackathon Committee",
      type: "Hackathon",
      date: "Technical Event",
    },
    {
      title: "AI Tools Workshop Certificate",
      issuer: "Technical Workshop Series",
      type: "Technical Workshop",
      date: "Workshop Certification",
    },
    {
      title: "C++ Coding Competition Certificate",
      issuer: "Departmental Committee",
      type: "Programming Contest",
      date: "Certificate of Merit",
    },
    {
      title: "Britain X Lecture Series Certificate",
      issuer: "International Lecture Series",
      type: "Academic Participation",
      date: "Lecture Series",
    },
  ],
}
