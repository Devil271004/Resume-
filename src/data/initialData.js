export const initialResumeData = {
  personal: {
    name: "Prince Raj",
    role: "Full Stack & AI Developer | CS Undergraduate",
    tagline: "Computer Science undergraduate with strong foundations in Java, DSA, Web Development, and AI software engineering.",
    location: "Parul University, Vadodara, Gujarat",
    email: "prince271004@gmail.com",
    phone: "+91 7033883377",
    github: "https://github.com/Devil271004",
    linkedin: "https://linkedin.com/in/prince-raj-b1b994302",
    website: "https://github.com/Devil271004",
    status: "Open to AI & Full Stack Opportunities",
    avatar: "/prince-raj-profile.jpg",
    bio: "Computer Science undergraduate with strong foundations in Java, Data Structures & Algorithms, Object-Oriented Programming, and Full-Stack Development. Experienced in building scalable web applications and AI-powered software using React, Next.js, Node.js, and cloud technologies. Passionate about solving real-world engineering problems through clean, efficient, and reliable software."
  },

  stats: [
    { label: "LeetCode Solved", value: "150+" },
    { label: "B.Tech CGPA", value: "6.74" },
    { label: "Hackathons", value: "4+" },
    { label: "Projects Shipped", value: "3+" }
  ],

  experience: [
    {
      id: "exp-1",
      role: "SIH Finalist & Hackathon Competitor",
      company: "Smart India Hackathon (SIH) 2025",
      location: "India",
      period: "2025",
      type: "Nationally Recognized",
      description: "Selected as a Finalist in Smart India Hackathon 2025, solving real-world government & industry challenges.",
      highlights: [
        "Finalist in Smart India Hackathon (SIH) 2025 — nationally recognized government hackathon.",
        "Participated in Guidewire DEVTrails Hackathon and OdooXParulUniversity Hackathon 2026.",
        "Solved 150+ Data Structures & Algorithms problems on LeetCode specializing in Arrays, Trees, Graphs, Dynamic Programming, and Hashing."
      ],
      technologies: ["Java", "Python", "Data Structures", "Algorithms", "React", "Node.js"]
    },
    {
      id: "exp-2",
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code 2026",
      location: "Remote",
      period: "2026",
      type: "Open Source",
      description: "Selected as an open-source contributor in GirlScript Summer of Code 2026.",
      highlights: [
        "Contributed to open-source software repositories, resolving issues and submitting pull requests.",
        "Collaborated with mentors and international developers using Git and GitHub workflows."
      ],
      technologies: ["Git", "GitHub", "JavaScript", "React", "Open Source"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "AI Employee Assistant",
      category: "AI & Machine Learning",
      shortDesc: "AI-powered HR assistant using LangChain, OpenAI API, and Retrieval-Augmented Generation (RAG).",
      fullDesc: "Built an AI-powered HR assistant using LangChain, OpenAI API, and Retrieval-Augmented Generation (RAG) to answer employee queries from company documents. Implemented document retrieval pipeline from company policy files using vector search. Reduced response latency through prompt optimization and efficient embedding strategies. Integrated a conversational interface enabling natural language interactions for employee support.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "LangChain", "OpenAI API", "RAG", "Vector Search"],
      github: "https://github.com/Devil271004",
      demo: "https://github.com/Devil271004",
      featured: true
    },
    {
      id: "proj-2",
      title: "Code-Z — Web Development Solutions Platform",
      category: "Full Stack & Web",
      shortDesc: "Full-stack web platform built using React, Next.js, and REST APIs to showcase web development solutions.",
      fullDesc: "Developed a full-stack web platform using React, Next.js, and REST APIs to showcase web development solutions and services. Implemented reusable UI components and client-side routing for a seamless user experience. Improved application performance using server-side rendering and code optimization techniques. Managed version control and collaborative development using Git and GitHub branching workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Next.js", "REST APIs", "Node.js", "JavaScript"],
      github: "https://github.com/Devil271004",
      demo: "https://github.com/Devil271004",
      featured: true
    },
    {
      id: "proj-3",
      title: "AryaEngineering — Company Portfolio Website",
      category: "Full Stack & Web",
      shortDesc: "Responsive company portfolio website developed for a manufacturing client to expand their online reach.",
      fullDesc: "Designed and developed a responsive company portfolio website to help a manufacturing client establish an online presence and reach more customers. Optimized page performance and SEO, improving Lighthouse performance score and reducing page load time. Implemented reusable components and responsive layouts ensuring compatibility across desktop, tablet, and mobile devices. Deployed production-ready application for real client usage using Git and GitHub workflows.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Layout"],
      github: "https://github.com/Devil271004",
      demo: "https://github.com/Devil271004",
      featured: true
    }
  ],

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "CS Fundamentals & Core",
      items: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Object-Oriented Programming (OOP)", level: 92 },
        { name: "REST APIs", level: 88 },
        { name: "Operating Systems & Computer Networks", level: 82 },
        { name: "Database Management Systems (DBMS)", level: 85 }
      ]
    },
    {
      category: "Frameworks & Web Tech",
      items: [
        { name: "React", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Node.js & Express", level: 85 },
        { name: "FastAPI", level: 80 }
      ]
    },
    {
      category: "Databases, Cloud & Tools",
      items: [
        { name: "PostgreSQL & MongoDB", level: 85 },
        { name: "AWS & Vercel", level: 80 },
        { name: "Git & GitHub Actions", level: 88 },
        { name: "VS Code, Postman, Linux", level: 90 }
      ]
    },
    {
      category: "AI Technologies",
      items: [
        { name: "OpenAI API & Claude API", level: 88 },
        { name: "LangChain & RAG Workflows", level: 85 },
        { name: "Vector Search & Embeddings", level: 82 }
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Parul University",
      period: "08/2024 - 04/2028",
      details: "CGPA: 6.74. Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Design & Analysis of Algorithms."
    },
    {
      id: "edu-2",
      degree: "12th Standard (BSEB)",
      institution: "High School Lal Bigha",
      period: "04/2023",
      details: "BSEB Board. Percentage: 76%"
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "08 2025"
    },
    {
      id: "cert-2",
      title: "AI Agent Development using Agentforce",
      issuer: "GeeksforGeeks & Salesforce Workshop",
      date: "2025"
    }
  ]
};
