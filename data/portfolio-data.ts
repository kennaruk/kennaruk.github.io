export const portfolioData = {
  personalInfo: {
    name: "Ken Wuttisasiwat",
    title: "Senior Full-Stack Engineer",
    subtitle: "6+ years of experience scaling global SaaS platforms",
    company: "Techgrity",
    location: "Los Angeles, California",
    email: "kennw.dev@gmail.com",
    phone: "+1 (213) 648-9924",
    linkedin: "linkedin.com/in/kennaruk",
    github: "github.com/kennaruk",
    medium: "https://medium.com/@kennw.dev",
    resumeUrl:
      "https://docs.google.com/document/d/1v4eDULp3I0bSNTFtwy2Zn702yDvlxfM8xySx6X-xo1A/edit?tab=t.0",
    profileImage: "/profile.jpg?height=200&width=200",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "ScreenCloud",
      period: "Sep 2021 - Jan 2025",
      location: "Remote",
      highlights: [
        "Architected full-stack solution for 250,000+ active screens globally",
        "Scaled service to 1.2M concurrent users, 5,000 transactions/sec",
        "Contributed to 109% ARR growth from $11M to $23M",
        "Expanded platform support to Samsung Tizen, LG WebOS",
      ],
    },
    {
      title: "IT College Support Services Student Assistant",
      company: "California State University, Fullerton",
      period: "May 2025 - Present",
      location: "Fullerton, California",
      highlights: [
        "Configured and deployed on-premise HPC server for academic use",
        "Automated internal workflows and documentation",
        "Linux server administration and network troubleshooting",
      ],
    },
    {
      title: "Software Engineer",
      company: "Kasikorn Business Technology Group",
      period: "Sep 2020 - Aug 2021",
      location: "Bangkok, Thailand",
      highlights: [
        "Engineered vaccine distribution system for 1.2M concurrent users",
        "Led Flutter application development from concept to production",
        "Managed entire project lifecycle and stakeholder negotiations",
      ],
    },
    {
      title: "Software Engineer",
      company: "London Stock Exchange Group",
      period: "Jun 2019 - Aug 2020",
      location: "London, UK",
      highlights: [
        "Optimized Electron app for 300,000+ global users",
        "Cut load time by 43% (7s to 4s) using advanced optimization",
        "Developed high-performance data visualization for 100,000+ data points",
      ],
    },
    {
      title: "Research Intern",
      company:
        "National Institute of Advanced Industrial Science and Technology",
      period: "Feb 2019 - Mar 2019",
      location: "Tokyo, Japan",
      highlights: [
        "Collaborated on PRAGMA Grid 2019 publication",
        "Researched real-time monitoring for distributed cloud applications",
        "Analyzed overhead and resource impact of monitoring agents",
      ],
    },
    {
      title: "Software Engineer",
      company: "Biosci",
      period: "Jun 2018 - Jan 2019",
      location: "Remote",
      highlights: [
        "Migrated core statistical libraries from on-premise to cloud",
        "Designed AWS serverless architecture (ECS, Lambda, S3, DynamoDB)",
        "Developed full-stack solution using React and Node.js",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Biosci",
      period: "Jun 2017 - Aug 2017",
      location: "Remote",
      highlights: [
        "Developed Firebase (Database, Authenticate, Function) with Javascript to make cross-platform API Calling, Authenticating, and Storing information",
        "Developed website using Node.js, Express.js, EJS, and GSAP",
        "Designed and decided what feature is important for each persona with stakeholders",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Aniccom",
      period: "Jun 2017 - Aug 2017",
      location: "Remote",
      highlights: [
        "Developed desktop application using Python Tkinton with integration of ThaiID reader device using C programming language interacting with DLL library",
        "Developed pawnshop desktop application with cloud service using Javascript, MongoDB, JQuery, AJAX, Bootstrap, CSS and EJS",
        "Developed tractor (TractorOne) retail platform using Node.js, Express.js, MongoDB",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Suitcube AI",
      description:
        "AI pose detection module that automates image capture to find the perfect suit size using Tensorflow.js and PoseNet",
      images: ["/placeholder.svg?height=300&width=500"],
      technologies: [
        "TensorFlow.js",
        "PoseNet",
        "React",
        "TypeScript",
        "Computer Vision",
      ],
      category: "AI/ML",
      year: "2024",
      status: "Live",
      githubUrl: "",
      liveUrl: "https://www.suitcube.com/en/tailor-made-suit-online-new/",
      highlights: [
        "AI pose detection",
        "Automated image capture",
        "Perfect fit algorithm",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "ScreenCloud Player Service",
      description:
        "Mission-critical digital signage platform serving 250,000+ screens globally with 24/7 uptime",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      technologies: [
        "Electron",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Docker",
        "AWS",
        "GraphQL",
      ],
      category: "Full-Stack",
      year: "2024",
      status: "Live",
      highlights: [
        "250,000+ active screens",
        "1.2M concurrent users",
        "5,000 transactions/sec",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Vaccine Distribution System",
      description:
        "Scalable vaccine distribution system for Thai hospitals handling millions of concurrent users",
      images: ["/placeholder.svg?height=300&width=500"],
      technologies: [
        "React",
        "TypeScript",
        "GoLang",
        "CloudFlare",
        "Docker",
        "GCP",
        "LINE API",
      ],
      category: "Healthcare",
      year: "2021",
      status: "Live",
      highlights: [
        "1.2M concurrent users",
        "5,000 transactions/sec",
        "Hospital integration",
      ],
      featured: true,
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: [
        { name: "React/TypeScript", level: 98 },
        { name: "Angular", level: 85 },
        { name: "TailwindCSS", level: 92 },
        { name: "Electron", level: 88 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "GraphQL", level: 90 },
        { name: "Restful", level: 90 },
        { name: "Bash", level: 76 },
        { name: "GoLang", level: 40 },
        { name: "Python", level: 40 },
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 70 },
        { name: "GCP", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD/Jenkins/Github Action/Automation", level: 87 },
      ],
    },
    {
      name: "AI/ML",
      skills: [
        { name: "ChatGPT / Claude APIs", level: 75 },
        { name: "TensorFlow.js", level: 55 },
        { name: "Scikit-learn", level: 50 },
        { name: "LangChain / LangGraph", level: 15 },
      ],
    },
    {
      name: "Mobile & Desktop",
      skills: [
        { name: "Flutter", level: 88 },
        { name: "React Native", level: 67 },
        { name: "Electron", level: 90 },
        { name: "PWA", level: 87 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 92 },
        { name: "DynamoDB", level: 75 },
        { name: "Supabase", level: 75 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Kubernetes", level: 30 },
        { name: "Redis", level: 60 },
      ],
    },
    {
      name: "Languages",
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 98 },
        { name: "Python", level: 65 },
        { name: "Go", level: 65 },
        { name: "C", level: 52 },
        { name: "C++", level: 58 },
        { name: "C#", level: 52 },
        { name: "Bash", level: 68 },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Next.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "Flutter", level: 88 },
      ],
    },
  ],
  achievements: [
    {
      title: "CSTU Soft Skills 2024 Workshop Leader",
      organization: "CSTU",
      year: "2024",
      type: "Leadership",
      description:
        "Designed and led 'Introduction to Cloud' workshop for 25+ students",
      icon: "🎓",
    },
    {
      title: "CSTU Alumni Speaker",
      organization: "CSTU",
      year: "2020",
      type: "Speaking",
      description:
        "Delivered talk on cloud technologies and software engineering career pathways",
      icon: "🎤",
    },
    {
      title: "Thairath Online Hackathon - 2nd Place",
      organization: "Thairath",
      year: "2020",
      type: "Competition",
      description:
        "SCOOP - Invented new UX and features for Thai news platform",
      icon: "🥈",
    },
    {
      title: "Call For Code Hackathon - Semifinalist",
      organization: "IBM",
      year: "2018",
      type: "Competition",
      description:
        "Top 10 from 2500+ teams worldwide with Roo Pai disaster solution platform",
      icon: "🌍",
    },
    {
      title: "Health & Wellness Hackathon - 2nd Place",
      organization: "TU x BBL x TTSA",
      year: "2018",
      type: "Competition",
      description:
        "Voice For Blind - ML solution for medicine expiration recognition",
      icon: "🥈",
    },
    {
      title: "YSetterReality Hackathon - 1st Place",
      organization: "3DSInteractive x Sansiri",
      year: "2018",
      type: "Competition",
      description:
        "Supplier Management Platform - Improved Sansiri workflow efficiency",
      icon: "🥇",
    },
    {
      title: "Kubernetes Certification",
      organization: "LinkedIn Learning",
      year: "2023",
      type: "Certification",
      description: "Completed comprehensive Kubernetes administration course",
      icon: "📜",
    },
    {
      title: "GitHub Arctic Code Vault Contributor",
      organization: "GitHub",
      year: "2020",
      type: "Recognition",
      description:
        "Contributed to open source projects preserved in Arctic Code Vault",
      icon: "❄️",
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Fullerton",
      period: "Expected May 2026",
      location: "Fullerton, California",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Architecture",
        "Advanced Operating Systems",
      ],
      projects: [
        "ML algorithms benchmark on PCOS prediction",
        "Deep Q-learning Tic Tac Toe using TensorFlow.js",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Thammasat University",
      period: "June 2019",
      location: "Bangkok, Thailand",
      honors: "Gold Medal (Highest GPA in graduating class)",
      // note: "Top 3 university in Thailand",
    },
  ],
  expertise: [
    { name: "Full-Stack Development", level: 98 },
    { name: "System Architecture", level: 95 },
    { name: "Team Leadership", level: 92 },
    { name: "AI/ML Integration", level: 65 },
  ],
};
