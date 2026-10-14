export const portfolioData = {
  personal: {
    name: "Ruchika Patil",
    fullName: "Ruchika Dilip Patil",
    title: "Full Stack Engineer & React Specialist",
    tagline: "Engineering thoughtful, resilient web applications with modern architecture, clean code, and measured aesthetics.",
    about:
      "I am a Computer Engineering scholar focused on full-stack web development and scalable software design. Having earned a 90.71 CGPA in my Computer Engineering Diploma at SSVPS and completed a rigorous 12-week industrial full-stack training at Sumago Infotech, I engineer applications that balance technical rigor with refined user experiences.",
    location: "Maharashtra, India",
    status: "Available for Full-Time & Internship Roles",
    email: "Patilruchika578@gmail.com",
    phone: "+91 9607290893",
    github: "https://github.com/ruchikapatil82",
    linkedin: "https://www.linkedin.com/in/ruchika-patil",
    photo: "/ruchika-patil.jpg",
    resumeUrl: "/resume.pdf",
    interests: ["Travelling", "Listening to Music", "Gardening"],
  },

  stats: [
    { label: "Diploma Merit", value: "90.71", unit: "CGPA", note: "SSVPS Polytechnic, Dhule — Top Academic Tier" },
    { label: "Secondary Board", value: "87.80%", unit: "Merit", note: "Shree Ekvira Devi Vidyalay — High First Class" },
    { label: "Industrial Training", value: "12", unit: "Weeks", note: "Sumago Infotech — Full Stack React / MERN" },
    { label: "Official Honors", value: "4", unit: "Verified", note: "Gold Medal, State Runner-Up & Valedictory Awards" },
  ],

  skills: {
    programming: [
      { name: "JavaScript (ES6+)", note: "Asynchronous JS, DOM, Event Loop", level: "Advanced" },
      { name: "C++", note: "OOP, Pointers, Algorithmic Problem Solving", level: "Competition Runner-Up" },
      { name: "C Language", note: "Memory Model, Data Structures", level: "Foundational" },
      { name: "Python", note: "Scripting, Django & Flask Frameworks", level: "Proficient" },
      { name: "Java", note: "Object-Oriented Design & Classes", level: "Intermediate" },
    ],
    frontend: [
      { name: "React.js", note: "Hooks, Component Architecture, State", level: "Primary Specialization", featured: true },
      { name: "HTML5 & Semantic Web", note: "Accessibility (a11y), SEO-first Markup", level: "Expert" },
      { name: "CSS3 & Responsive Design", note: "Flexbox, Grid, Fluid Typography, Micro-animations", level: "Expert" },
      { name: "Modern Build Tooling", note: "Vite, npm, Bundlers", level: "Proficient" },
    ],
    backend: [
      { name: "Node.js", note: "Server-side Runtime & Event-Driven I/O", level: "Proficient" },
      { name: "Express.js", note: "RESTful Routing, Middleware Pipelines", level: "Proficient" },
      { name: "Django", note: "MTV Architecture, ORM, Admin Tools", level: "Practical Application" },
      { name: "REST APIs", note: "Endpoint Design, JSON Serialization, CRUD", level: "Advanced" },
    ],
    database: [
      { name: "MongoDB", note: "Document Store, Collections, Aggregation", level: "Proficient" },
      { name: "SQLite", note: "Relational Queries, Schema Integrity", level: "Proficient" },
      { name: "DBMS Concepts", note: "Normalization, ACID Properties, Foreign Keys", level: "Academic Rigor" },
    ],
    tools: [
      { name: "Git & GitHub", note: "Branches, Commits, Versioning, Collaboration", level: "Daily Workflow" },
      { name: "VS Code", note: "Primary IDE & Debugging Environment", level: "Primary Tool" },
      { name: "Figma", note: "Wireframing, Component Layouts & UI Prototyping", level: "Actively Learning UI/UX", isLearning: true },
    ],
    concepts: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Model-View-Controller (MVC)",
      "RESTful API Architecture",
      "Relational Database Normalization",
    ],
  },

  projects: [
    {
      id: "museum-web",
      title: "The Times Gallery — Museum Web Application",
      tagline: "Full-stack cultural exhibit portal with dynamic ticketing & administrative member management.",
      category: "Full Stack Web Application",
      featured: true,
      tag: "MERN Stack",
      images: [
        {
          url: "/project-museum-home.png",
          caption: "Public Visitor Portal — Exhibition Schedules, Timings (9:00 AM – 6:00 PM), and Ticket Booking Interface",
        },
        {
          url: "/project-museum-admin.png",
          caption: "Administrative Management Dashboard — Live Membership Records, Passes, and Real-time Action Ledgers",
        },
      ],
      description:
        "A full-stack web application designed for cultural institutions to showcase exhibitions, facilitate online ticket reservations, and manage museum memberships through a centralized administrative dashboard.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
      highlights: [
        "Architected responsive front-end interface in React.js with modular component structure",
        "Constructed Express.js REST API layer handling member inquiries, pass bookings, and exhibit schedules",
        "Developed administrative table interface with live membership ledger showing visitor names and status",
        "Engineered MongoDB schema structures ensuring seamless data persistence across user requests",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Verified Full Stack Project",
    },
    {
      id: "vaultnest",
      title: "VaultNest — Cryptographic Credential Vault",
      tagline: "Secure password management platform with cryptographic hashing and authenticated session storage.",
      category: "Security & Web Application",
      featured: true,
      tag: "Python / Flask & Security",
      images: [
        {
          url: "/project-vaultnest.png",
          caption: "VaultNest Authentication & Account Onboarding — Dynamic Password Strength Verification & Match Detection",
        },
      ],
      description:
        "A focused security web application built to safeguard digital credentials. Provides users with an intuitive vault interface protected by cryptographic hashing, session tokens, and client-side password strength validation.",
      techStack: ["Python", "Flask", "SQLite", "Werkzeug", "Jinja2", "HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Implemented cryptographic password hashing utilizing Werkzeug security protocols",
        "Designed real-time interactive password strength meter evaluating length and character entropy",
        "Built protected session routing preventing unauthorized credential access and injection vulnerabilities",
        "Packaged in a minimalist, distraction-free authentication layout with confirmation matching",
      ],
      github: "https://github.com/ruchikapatil82/VaultNest",
      liveDemo: null,
      statusBadge: "Verified GitHub Repository",
    },
    {
      id: "obe-attainment",
      title: "CO Attainment Calculation System",
      tagline: "Automated academic accreditation calculation engine processing course outcome attainment gaps.",
      category: "Academic & Data Engineering",
      featured: true,
      tag: "Python / Django",
      images: [],
      description:
        "An automated computational system developed for engineering departments to calculate Course Outcome (CO) attainment percentages, aggregate assessment evaluations, and generate gap analyses aligned with engineering accreditation requirements.",
      techStack: ["Python", "Django", "SQLite", "Pandas", "Excel Integration", "HTML/CSS"],
      highlights: [
        "Replaced manual spreadsheet calculations with automated algorithmic threshold evaluations",
        "Integrated Pandas dataframes for processing bulk student internal and external exam marks",
        "Structured departmental reporting outputs identifying attainment gaps against target benchmark levels",
      ],
      github: "https://github.com/Amansk101/co",
      liveDemo: null,
      statusBadge: "Open Source Repository",
    },
    {
      id: "student-attendance",
      title: "Student Attendance Management System",
      tagline: "Database-backed desktop software for structured student records and daily roll-call accounting.",
      category: "Desktop & Database Application",
      featured: false,
      tag: "Python & SQLite",
      images: [],
      description:
        "A standalone desktop application engineered for academic recordkeeping, enabling faculty to maintain student profiles, record daily classroom attendance, and query historical attendance percentages.",
      techStack: ["Python", "Tkinter", "SQLite3"],
      highlights: [
        "Developed full CRUD operations for student admission records and contact details",
        "Implemented persistent SQLite relational schemas ensuring reliable attendance session logs",
        "Designed an efficient GUI workflow streamlining high-volume daily roll-call logging",
      ],
      github: "https://github.com/ruchikapatil82",
      liveDemo: null,
      statusBadge: "Desktop Software",
    },
  ],

  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "Sumago Infotech",
      division: "Sumago Center of Practical Excellence (SCOPE)",
      location: "Nashik, Maharashtra",
      period: "02 June 2025 – 22 August 2025",
      duration: "12 Weeks (Completed)",
      certificateNo: "25080334",
      technology: "React.js / MERN Stack",
      description:
        "Completed a 12-week comprehensive industrial training program focused on practical web engineering using React.js. Built real-world component hierarchies, managed application state, integrated backend RESTful services, and collaborated under industry engineering mentorship.",
      deliverables: [
        "Engineered responsive user interfaces and modular components utilizing React.js hooks and state patterns",
        "Built end-to-end web workflows integrating client interfaces with Node.js and Express.js backend services",
        "Awarded 'Best Performer of the Month (July)' with official Gold SCOPE Medal for technical delivery and consistency",
        "Conferred the 'Curious Catalyst Award' at the official Valedictory Function for proactive learning and problem-solving initiative",
        "Successfully earned official Certificate of Completion (No. 25080334) verified via QR authentication",
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
      scoreDetail: "Focusing on Advanced Algorithms, Web Engineering, and System Architecture",
      badge: "Current Degree",
      current: true,
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "SSVPS's B.S. Deore Polytechnic",
      location: "Dhule, Maharashtra",
      period: "Completed",
      score: "90.71 CGPA",
      scoreDetail: "Graduated with Academic Distinction; Runner-Up in State-Level C++ Programming Contest",
      badge: "Academic Distinction",
      current: false,
    },
    {
      degree: "Class X (Secondary School Certificate)",
      institution: "Shree Ekvira Devi Vidyalay",
      location: "Dhule, Maharashtra",
      period: "Passing Year: 2023",
      score: "87.80%",
      scoreDetail: "High First Class with distinction in Mathematics and Science foundations",
      badge: "Board Merit",
      current: false,
    },
  ],

  // 4 Primary Real Photographic Proofs (Clickable Full-Size Lightbox Gallery)
  verifiedProofGallery: [
    {
      id: "scope-react-cert",
      title: "Certificate of Completion — Full Stack Development Using React",
      issuer: "Sumago Center of Practical Excellence (SCOPE) / Sumago Infotech",
      category: "Official Certificate",
      date: "02 June 2025 – 22 August 2025",
      image: "/certificate-sumago-react.png",
      badge: "12 Weeks Industrial Training",
      certificateNo: "25080334",
      signatories: "Mrs. Nilam Bodke (L&D Head) & Mrs. Sonali Adhav-Gorade (CEO)",
      caption:
        "Official Certificate of Completion awarded to Ruchika Dilip Patil for successful completion of 12 Weeks Industrial Training on 'Full Stack Development Using React' at SCOPE. Verified via official QR code & Certificate No. 25080334.",
      aspect: "landscape",
    },
    {
      id: "cpp-runnerup-cert",
      title: "State Level C++ Codeathon '26 — Runner Up Certificate",
      issuer: "SSVPS's Bapusaheb Shivajirao Deore Polytechnic, Dhule",
      category: "Competition Award",
      date: "14th February 2026",
      image: "/certificate-cpp-runnerup.jpg",
      badge: "State Level Contest",
      signatories: "Prof. S.A. Hire (Principal), Ms. C.S. Patil, Ms. M.L. Manikhedkar, Ms. R.M. Dhatrak",
      caption:
        "Official Certificate of Achievement certifying that Ruchika Dilip Patil secured Runner Up in the State Level C++ Quiz & Programming Contest 'C++ Codeathon'26', organized by the Department of Computer Engineering.",
      aspect: "landscape",
    },
    {
      id: "curious-catalyst-award",
      title: "Curious Catalyst Award — Valedictory Stage Felicitation",
      issuer: "Sumago Infotech Valedictory Function",
      category: "Stage Felicitation",
      date: "Valedictory Ceremony",
      image: "/curious-catalyst.png",
      badge: "Valedictory Distinction",
      signatories: "Conferred on stage by Executive Mentors & Leadership",
      caption:
        "Stage felicitation ceremony of Ruchika Dilip Patil receiving the Curious Catalyst Award Trophy and Certificate on stage during the official Industrial Training Valedictory Function at Sumago Infotech.",
      aspect: "landscape",
    },
    {
      id: "best-performer-july",
      title: "Best Performer of the Month (July) — Gold Medal Honor",
      issuer: "Sumago Infotech / SCOPE",
      category: "Performance Honor",
      date: "July 2025",
      image: "/best-performer.jpg",
      badge: "Gold SCOPE Medal",
      signatories: "Sumago Center of Practical Excellence",
      caption:
        "Gold SCOPE Medal held in hand in front of active React IDE code monitor, awarded to Ruchika Dilip Patil for highest technical milestone velocity and dedication during the July internship tenure.",
      aspect: "portrait",
    },
  ],

  otherCertifications: [
    {
      title: "Hackathon Participation Certificate",
      issuer: "Technical Hackathon Committee",
      type: "Competitive Event",
      date: "College Symposium",
    },
    {
      title: "AI Tools Workshop Certificate",
      issuer: "Technical Workshop Series",
      type: "Practical Workshop",
      date: "Emerging Tech Series",
    },
    {
      title: "Britain X International Lecture Series Certificate",
      issuer: "Britain X Lecture Series",
      type: "Academic Participation",
      date: "International Technical Session",
    },
  ],
}
