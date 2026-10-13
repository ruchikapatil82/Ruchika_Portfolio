export const portfolioData = {
  personal: {
    name: "Ruchika Dilip Patil",
    title: "Full Stack Developer | React Developer",
    tagline: "Building Seamless Web Experiences with Clean Code & Modern Design.",
    about:
      "I am a Computer Engineering student passionate about web development and creating user-friendly digital experiences. I have hands-on experience in full-stack development using React and the MERN stack. I enjoy building practical projects, learning new technologies, and transforming ideas into responsive and interactive web applications.",
    location: "Maharashtra, India",
    status: "Open to Full Stack & React Opportunities",
    email: "ruchikapatil82@gmail.com", // Aap apna exact email yahan update kar sakte hain
    github: "https://github.com/ruchikapatil82",
    linkedin: "https://www.linkedin.com/in/ruchika-patil", // Aap apna LinkedIn URL yahan update kar sakte hain
    resumeUrl: "#resume", // Aap apna Google Drive link ya local /resume.pdf yahan daal sakte hain
  },

  stats: [
    { label: "Academic Record", value: "90.35%", note: "Merit in Engineering Coursework" },
    { label: "Practical Projects", value: "4+", note: "MERN, Django & Python" },
    { label: "Internship", value: "Sumago Infotech", note: "Full Stack Development" },
    { label: "Awards & Honors", value: "7+", note: "Coding & Performance Awards" },
  ],

  skills: {
    languages: [
      { name: "C", level: "Core", icon: "Code2" },
      { name: "C++", level: "Competitive / OOP", icon: "Cpu" },
      { name: "Python", level: "Scripting / Backend", icon: "Terminal" },
      { name: "JavaScript", level: "Modern ES6+", icon: "Braces" },
    ],
    frontend: [
      { name: "React.js", level: "Components & Hooks", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: "DOM & Async", icon: "Code" },
      { name: "HTML5", level: "Semantic Markup", icon: "FileCode" },
      { name: "CSS3", level: "Modern Layouts", icon: "Palette" },
      { name: "Responsive Web Design", level: "Mobile First", icon: "Smartphone" },
    ],
    backend: [
      { name: "Node.js", level: "Runtime", icon: "Server" },
      { name: "Express.js", level: "Server & Middleware", icon: "Layers" },
      { name: "REST APIs", level: "CRUD Architecture", icon: "Network" },
    ],
    database: [
      { name: "MongoDB", level: "NoSQL Database", icon: "Database" },
      { name: "SQLite", level: "Relational DB", icon: "HardDrive" },
    ],
    tools: [
      { name: "Git", level: "Version Control", icon: "GitBranch" },
      { name: "GitHub", level: "Collaboration & Repos", icon: "Github" },
      { name: "VS Code", level: "Primary IDE", icon: "Laptop" },
      { name: "Figma", level: "UI/UX Design", isLearning: true, icon: "Figma" },
    ],
  },

  projects: [
    {
      id: "museum-web",
      title: "Museum Website",
      category: "Full Stack",
      featured: true,
      description:
        "A full-stack web application designed to present museum information, exhibits, and related cultural content through an organized, accessible, and user-friendly interface.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      highlights: [
        "Interactive exhibit catalog with categorized digital displays",
        "Clean, responsive UI with smooth navigation for visitors",
        "Backend RESTful API endpoints for dynamic content management",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Active Project",
    },
    {
      id: "obe-attainment",
      title: "OBE Attainment Management System",
      category: "Academic & Data",
      featured: true,
      description:
        "An academic management system designed to simplify Course Outcome (CO) attainment calculations, manage assessment data, and analyze attainment gaps against target levels.",
      techStack: ["Python", "Django", "SQLite", "Pandas", "Excel Integration"],
      highlights: [
        "Automated Course Outcome (CO) percentage calculations",
        "Pandas-driven Excel data parsing and gap analysis",
        "Clear institutional reporting dashboard for engineering accreditation",
      ],
      github: "https://github.com/Amansk101/co",
      liveDemo: null,
      statusBadge: "Open Source Repo",
    },
    {
      id: "vaultnest",
      title: "VaultNest — Password Manager",
      category: "Security & Web",
      featured: true,
      description:
        "A beginner-friendly password management web application that allows users to securely manage stored credentials through a clean interface with authentication and password hashing.",
      techStack: ["Python", "Flask", "SQLite", "Werkzeug", "Jinja2", "HTML/CSS/JS"],
      highlights: [
        "Secure credential storage using Werkzeug cryptographic password hashing",
        "User session authentication and protected dashboard routes",
        "Intuitive credential addition, retrieval, and categorization",
      ],
      github: "https://github.com/ruchikapatil82/VaultNest",
      liveDemo: null,
      statusBadge: "Verified Repo",
    },
    {
      id: "student-attendance",
      title: "Student Attendance Management System",
      category: "Desktop & Database",
      featured: false,
      description:
        "A database-backed desktop application for efficiently maintaining student academic records and recording daily attendance with structured logs.",
      techStack: ["Python", "Tkinter", "SQLite3"],
      highlights: [
        "Structured student profile records with search and filter capabilities",
        "Daily attendance ledger with automated summary calculations",
        "Reliable SQLite relational storage with error handling",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Desktop App",
    },
  ],

  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Sumago Infotech",
      period: "Internship Program",
      technology: "React / MERN Stack",
      description:
        "Completed an intensive full-stack development internship focusing on practical industry web development with React and the MERN stack. Designed responsive user interfaces, built backend API integration, and collaborated on project milestones.",
      achievements: [
        "Awarded 'Best Performer of the Month' for dedication and rapid technical delivery",
        "Honored with 'Curious Catalyst' recognition during the Sumago Infotech Valedictory",
        "Successfully received the Full Stack Development Internship Certificate",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.) — Computer Engineering",
    pathway: "Direct Second Year (DSE)",
    institution: "R.C. Patel Institute of Technology (RCPIT)",
    location: "Shirpur, Maharashtra, India",
    achievement: "90.35%",
    achievementLabel: "Academic Aggregate / Coursework Merit",
    focusAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Web Technologies & Frameworks",
      "Database Management Systems",
    ],
  },

  achievements: [
    {
      title: "Best Performer of the Month",
      issuer: "Sumago Infotech",
      type: "Award",
      icon: "Trophy",
      detail: "Recognized for outstanding technical performance and commitment during full stack internship.",
    },
    {
      title: "Curious Catalyst Award",
      issuer: "Sumago Infotech Valedictory",
      type: "Honor",
      icon: "Sparkles",
      detail: "Awarded during the internship valedictory for exceptional curiosity, learning agility, and initiative.",
    },
    {
      title: "Runner-up — C++ Coding Competition",
      issuer: "Coding Challenge",
      type: "Competition",
      icon: "Medal",
      detail: "Secured runner-up position in competitive C++ problem solving and algorithmic coding.",
    },
    {
      title: "Full Stack Internship Certificate",
      issuer: "Sumago Infotech",
      type: "Certification",
      icon: "Award",
      detail: "Official completion certification for hands-on full stack web development with React & MERN.",
    },
    {
      title: "C++ Coding Competition Certificate",
      issuer: "Technical Committee",
      type: "Certificate",
      icon: "FileCheck",
      detail: "Certificate of merit honoring performance and problem-solving skills in C++ programming.",
    },
    {
      title: "Britain X Lecture Participation",
      issuer: "Britain X Lecture Series",
      type: "Participation",
      icon: "GraduationCap",
      detail: "Certificate of active participation in the international academic lecture session.",
    },
    {
      title: "Technical Participation Certificate",
      issuer: "Academic Technical Symposium",
      type: "Participation",
      icon: "CheckCircle2",
      detail: "Certificate acknowledging active participation in technical events and seminars.",
    },
  ],
}
