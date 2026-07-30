import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFastapi,
  SiMysql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

export const Projects = [
  {
    slug: "esignmo",

    hero: {
      logo: "/project/logo/esignmo.png",
      title: "eSign Mo",
      subtitle: "Sign Language Translation System",
      image: "/project/projectImage/esignmo.png",
      path: "https://esignmo.vercel.app/main/asl",
      github: "",
      bgColor: "linear-gradient(135deg, #0f172a, #1e293b)",

      status: "Live-Vercel",
      role: "Full Stack Developer",
      duration: "4 Months",
      type: "Capstone Project",
    },

    overview: {
      description:
        "eSign Mo is a web-based sign language communication and learning platform designed to bridge the communication gap between deaf and hearing individuals. The system combines AI-powered sign-to-text translation, speech-to-sign translation, interactive learning modules, and assessment tools into a single accessible platform.",

      platform: "Web Application",

      users: ["Deaf Individuals", "Students", "Teachers", "General Public"],
    },

    context: {
      background:
        "Communication barriers remain a major challenge for deaf individuals in schools and public environments. Many existing tools either focus only on translation or only on learning, making accessibility fragmented.",

      problem:
        "There was no single platform that combined communication, education, and assessment for sign language learning while remaining accessible through the web.",

      goal: "Develop a complete web application capable of translating sign language into text, converting speech into sign language, and providing interactive lessons and assessments for learners.",
    },

    responsibilities: [
      "Designed the overall system architecture.",
      "Developed responsive user interfaces using Next.js and TypeScript.",
      "Built REST APIs using FastAPI.",
      "Integrated AI-based sign language recognition.",
      "Designed and managed the database.",
      "Implemented authentication and application logic.",
      "Performed testing, debugging, and deployment.",
    ],

    systemDesign: {
      frontend: ["Next.js", "TypeScript", "Bootstrap", "CSS3"],
      backend: ["FastAPI", "Python"],
      database: ["MySQL"],
      deployment: ["Vercel"],
    },

    engineeringDecisions: [
      {
        title: "Next.js",
        reason:
          "Selected for its modern App Router, excellent performance, and component-based architecture that improves scalability and maintainability.",
      },
      {
        title: "TypeScript",
        reason:
          "Used to improve code reliability through static typing and reduce runtime errors during development.",
      },
      {
        title: "FastAPI",
        reason:
          "Chosen because of its high performance, automatic API documentation, and seamless integration with Python-based AI models.",
      },
      {
        title: "Python",
        reason:
          "Provides a rich ecosystem of libraries for artificial intelligence, computer vision, and machine learning.",
      },
      {
        title: "Bootstrap",
        reason:
          "Enabled rapid UI development while maintaining responsive layouts across different screen sizes.",
      },
    ],

    developmentProcess: [
      {
        title: "Research",
        description:
          "Collected requirements and studied existing sign language translation systems and accessibility standards.",
      },
      {
        title: "Planning",
        description:
          "Designed user flows, wireframes, database structure, and overall system architecture before implementation.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive interfaces using reusable components with Next.js and TypeScript.",
      },
      {
        title: "Backend Development",
        description:
          "Developed RESTful APIs and connected frontend services with FastAPI.",
      },
      {
        title: "AI Integration",
        description:
          "Integrated the sign language recognition model with the backend to enable real-time predictions.",
      },
      {
        title: "Testing",
        description:
          "Performed functional, usability, and integration testing to ensure application reliability.",
      },
      {
        title: "Deployment",
        description:
          "Deployed the application to Vercel and configured the production environment.",
      },
    ],

    features: [
      {
        title: "Sign-to-Text Translation",
        description:
          "Recognizes sign language gestures and converts them into readable text in real time.",
      },
      {
        title: "Speech-to-Sign Translation",
        description:
          "Converts spoken language into sign language, improving communication between hearing and deaf users.",
      },
      {
        title: "Interactive Learning Modules",
        description:
          "Provides guided lessons that help users learn sign language through structured educational content.",
      },
      {
        title: "Assessment & Quiz System",
        description:
          "Allows learners to evaluate their understanding through interactive quizzes and assessments.",
      },
      {
        title: "Responsive Web Interface",
        description:
          "Optimized for desktop and mobile devices to ensure accessibility across different platforms.",
      },
    ],

    technicalChallenges: [
      {
        challenge:
          "Maintaining real-time sign recognition while keeping the application responsive.",
        analysis:
          "Continuous camera input and AI prediction required efficient communication between the frontend and backend.",
        solution:
          "Optimized API communication and prediction flow to minimize unnecessary requests and improve responsiveness.",
        impact:
          "Delivered smoother user interaction and faster prediction results.",
      },
      {
        challenge:
          "Building an intuitive interface for users with different accessibility needs.",
        analysis:
          "The platform needed to remain simple, responsive, and easy to navigate for both hearing and deaf users.",
        solution:
          "Designed a clean interface with consistent navigation and responsive layouts.",
        impact: "Improved usability and accessibility across devices.",
      },
    ],

    lessonsLearned: [
      "Developing scalable full-stack applications using Next.js and FastAPI.",
      "Integrating AI models into real-world web applications.",
      "Designing accessible user interfaces for diverse users.",
      "Improving API architecture and backend communication.",
      "Building reusable components for maintainable codebases.",
    ],

    outcome: {
      deployment: "Vercel",
      achievements: [
        "Successfully completed as a capstone project.",
        "Implemented real-time sign language translation.",
        "Integrated speech-to-sign communication.",
        "Developed interactive learning and assessment modules.",
        "Delivered a fully responsive web application.",
      ],
    },

    roadmap: [
      "Support additional sign languages.",
      "Improve AI recognition accuracy.",
      "Develop a dedicated mobile application.",
      "Enable offline prediction capabilities.",
      "Add user progress tracking and analytics.",
    ],

    reflection:
      "Building eSign Mo strengthened my knowledge of full-stack web development, API design, artificial intelligence integration, and accessibility-focused software engineering. The project also reinforced the importance of writing maintainable code, designing reusable components, and creating solutions that address real-world communication challenges.",

    techStack: [
      {
        icon: RiNextjsFill,
        name: "Next.js",
        color: "#ffffff",
        bgColor: "#000000",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        color: "#ffffff",
        bgColor: "#3178C6",
      },
      {
        icon: FaBootstrap,
        name: "Bootstrap",
        color: "#ffffff",
        bgColor: "#7952B3",
      },
      { icon: FaCss3Alt, name: "CSS3", color: "#ffffff", bgColor: "#2965F1" },
      {
        icon: SiFastapi,
        name: "FastAPI",
        color: "#ffffff",
        bgColor: "#009688",
      },
      { icon: SiPython, name: "Python", color: "#306998", bgColor: "#FFD43B" },
    ],
  },

  // Lomilindol
  {
    slug: "lomilindol",

    hero: {
      logo: "",
      title: "LOMILINDOL",
      subtitle: "Earthquake Monitoring System with Real-Time Alerts",
      image: "/project/projectImage/lomilindol.png",
      path: "/",
      github: "",
      bgColor: "linear-gradient(135deg, #111827, #0f766e)",

      status: "Completed",
      role: "Full Stack Developer",
      duration: "Hackathon Project",
      type: "OpenIT Hackathon",
    },

    overview: {
      description:
        "LOMILINDOL is a web-based earthquake monitoring platform that provides real-time earthquake updates sourced from PHIVOLCS. The system enables users to stay informed through a clean dashboard with live earthquake information and location details.",

      platform: "Web Application",

      users: [
        "General Public",
        "Students",
        "Local Communities",
        "Emergency Response Personnel",
      ],
    },

    context: {
      background:
        "The Philippines experiences frequent earthquakes, making timely and reliable access to earthquake information essential for public awareness and preparedness.",

      problem:
        "Many users rely on multiple sources to obtain earthquake updates, making it difficult to quickly access reliable and centralized information.",

      goal: "Develop a web application that collects and displays real-time earthquake information from PHIVOLCS in an accessible and user-friendly interface.",
    },

    responsibilities: [
      "Designed the user interface.",
      "Developed responsive frontend pages using React.",
      "Built backend APIs with Node.js and Express.js.",
      "Integrated earthquake data from PHIVOLCS through web scraping.",
      "Designed the MySQL database.",
      "Performed testing and debugging.",
      "Presented the project during the OpenIT Hackathon.",
    ],

    systemDesign: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MySQL"],
      deployment: ["Local Development"],
    },

    engineeringDecisions: [
      {
        title: "React",
        reason:
          "Chosen for building reusable UI components and creating a responsive single-page application.",
      },
      {
        title: "Tailwind CSS",
        reason:
          "Enabled rapid UI development with consistent and responsive styling throughout the application.",
      },
      {
        title: "Node.js & Express.js",
        reason:
          "Provided a lightweight backend capable of handling web scraping and API requests efficiently.",
      },
      {
        title: "MySQL",
        reason:
          "Used to store earthquake records and application data in a structured relational database.",
      },
    ],

    developmentProcess: [
      {
        title: "Research",
        description:
          "Studied PHIVOLCS data availability and identified user requirements for earthquake monitoring.",
      },
      {
        title: "Planning",
        description:
          "Designed the application flow, database schema, and dashboard layout.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive interfaces using React and Tailwind CSS.",
      },
      {
        title: "Backend Development",
        description:
          "Implemented REST APIs and developed the web scraping process using Node.js and Express.js.",
      },
      {
        title: "Data Integration",
        description:
          "Fetched earthquake information from PHIVOLCS and displayed it through the dashboard.",
      },
      {
        title: "Testing",
        description:
          "Verified application functionality, responsiveness, and data accuracy.",
      },
      {
        title: "Hackathon Presentation",
        description:
          "Presented the completed solution during the OpenIT Hackathon competition.",
      },
    ],

    features: [
      {
        title: "Real-Time Earthquake Monitoring",
        description:
          "Displays the latest earthquake information collected from PHIVOLCS.",
      },
      {
        title: "Earthquake Details",
        description:
          "Shows earthquake magnitude, location, depth, and occurrence time.",
      },
      {
        title: "Responsive Dashboard",
        description:
          "Provides an intuitive dashboard accessible across desktop and mobile devices.",
      },
      {
        title: "Automated Data Collection",
        description:
          "Uses web scraping to continuously retrieve updated earthquake information.",
      },
    ],

    technicalChallenges: [
      {
        challenge: "Keeping earthquake information updated automatically.",
        analysis:
          "PHIVOLCS does not provide a simple public API for this project, requiring an alternative data retrieval approach.",
        solution:
          "Implemented web scraping to periodically retrieve and process earthquake data.",
        impact:
          "Enabled users to access timely earthquake information from a centralized dashboard.",
      },
      {
        challenge:
          "Maintaining consistent data formatting from scraped content.",
        analysis:
          "Website structure and formatting required additional processing before displaying the information.",
        solution:
          "Implemented data validation and formatting before storing and presenting the results.",
        impact:
          "Improved readability and reliability of displayed earthquake information.",
      },
    ],

    lessonsLearned: [
      "Built a complete full-stack application within a hackathon timeframe.",
      "Learned practical web scraping techniques for real-time information systems.",
      "Improved teamwork and rapid problem-solving skills.",
      "Enhanced experience with React and Express.js.",
      "Applied responsive UI development using Tailwind CSS.",
    ],

    outcome: {
      deployment: "Hackathon Presentation",
      achievements: [
        "Awarded 3rd Place in the OpenIT Hackathon.",
        "Successfully developed a real-time earthquake monitoring platform.",
        "Integrated automated earthquake data retrieval.",
        "Delivered a responsive and user-friendly dashboard.",
      ],
    },

    roadmap: [
      "Interactive earthquake map integration.",
      "Push notifications for significant earthquakes.",
      "User location-based alerts.",
      "Historical earthquake analytics.",
      "Native mobile application.",
    ],

    reflection:
      "LOMILINDOL challenged me to build a complete full-stack application within a limited hackathon schedule. The experience strengthened my ability to develop real-time information systems, work under pressure, and transform publicly available data into a practical solution that improves public awareness and disaster preparedness.",

    techStack: [
      {
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
        color: "#ffffff",
        bgColor: "#06B6D4",
      },
      { icon: FaReact, name: "React", color: "#000000", bgColor: "#61DAFB" },
      { icon: FaNodeJs, name: "Node.js", color: "#ffffff", bgColor: "#339933" },
      {
        icon: SiExpress,
        name: "Express.js",
        color: "#ffffff",
        bgColor: "#000000",
      },
      { icon: SiMysql, name: "MySQL", color: "#ffffff", bgColor: "#4479A1" },
    ],
  },

  // Pt_Finder
  {
    slug: "ptfinder",

    hero: {
      logo: "",
      title: "Pt_Finder",
      subtitle: "Empower Students To Find Jobs In Quezon",
      image: "/project/projectImage/pt-finder.png",
      path: "/",
      github: "",
      bgColor: "linear-gradient(135deg, #111827, #0f766e)",

      status: "In Development",
      role: "Full Stack Developer",
      duration: "Personal Project",
      type: "Web Application",
    },

    overview: {
      description:
        "ptFINDER is a platform designed to connect students with flexible part-time opportunities in Quezon Province, helping them gain experience, earn income, and support their local communities.",

      platform: "Web Application",

      users: ["Students", "Local Employers", "Job Seekers"],
    },

    context: {
      background:
        "Many students in Quezon Province struggle to find flexible part-time work that fits around their class schedules, and local employers often lack an easy way to reach student applicants.",

      problem:
        "There was no centralized platform connecting students looking for part-time work with local businesses that need flexible, short-term help.",

      goal: "Build a web application that matches students with part-time job opportunities in their area, making it easier to search, apply, and connect with local employers.",
    },

    responsibilities: [
      "Designed the overall system architecture.",
      "Developed responsive user interfaces using Next.js and TypeScript.",
      "Designed the database schema for jobs, applicants, and employers.",
      "Implemented job listing and search functionality.",
      "Performed testing and debugging.",
    ],

    systemDesign: {
      frontend: ["Next.js", "TypeScript", "CSS3"],
      backend: ["Node.js"],
      database: ["MySQL"],
      deployment: ["Local Development"],
    },

    engineeringDecisions: [
      {
        title: "Next.js",
        reason:
          "Selected for its App Router, fast page loads, and component-based structure that scales well for a job listing platform.",
      },
      {
        title: "TypeScript",
        reason:
          "Used to catch errors early and keep job and user data consistently typed across the application.",
      },
      {
        title: "MySQL",
        reason:
          "Chosen for reliably storing structured relational data such as job posts, applicants, and employer accounts.",
      },
    ],

    developmentProcess: [
      {
        title: "Research",
        description:
          "Studied the part-time job needs of students in Quezon Province and identified gaps in existing job platforms.",
      },
      {
        title: "Planning",
        description:
          "Designed user flows, database schema, and page layouts for students and employers.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive interfaces for job browsing, search, and application using Next.js and TypeScript.",
      },
      {
        title: "Backend Development",
        description:
          "Developed APIs to handle job postings, applications, and user accounts.",
      },
      {
        title: "Testing",
        description:
          "Tested core flows such as job search, filtering, and application submission.",
      },
    ],

    features: [
      {
        title: "Job Listings",
        description:
          "Displays available part-time job opportunities from local employers in Quezon Province.",
      },
      {
        title: "Job Search & Filtering",
        description:
          "Allows students to search and filter jobs based on location, schedule, and type of work.",
      },
      {
        title: "Student Profiles",
        description:
          "Lets students create profiles to apply for jobs and showcase their availability and skills.",
      },
      {
        title: "Responsive Interface",
        description:
          "Optimized for both desktop and mobile so students can browse and apply on the go.",
      },
    ],

    technicalChallenges: [
      {
        challenge:
          "Designing a data structure flexible enough to handle varied job types and schedules.",
        analysis:
          "Part-time jobs from different employers came with inconsistent formats for hours, pay, and requirements.",
        solution:
          "Normalized the database schema to support flexible job attributes while keeping queries efficient.",
        impact:
          "Made it easier to search and filter jobs consistently across different employers.",
      },
    ],

    lessonsLearned: [
      "Designing relational schemas for marketplace-style platforms.",
      "Building search and filtering features for listing-based applications.",
      "Structuring a Next.js and TypeScript project for maintainability.",
      "Balancing student and employer needs in a single platform.",
    ],

    outcome: {
      deployment: "In Development",
      achievements: [
        "Designed a functional job listing and search system.",
        "Built responsive student-facing pages.",
        "Established a scalable database structure for jobs and applicants.",
      ],
    },

    roadmap: [
      "Add employer dashboard for posting and managing jobs.",
      "Implement in-app messaging between students and employers.",
      "Add application tracking for students.",
      "Deploy to production.",
      "Expand coverage beyond Quezon Province.",
    ],

    reflection:
      "Working on Pt_Finder helped me think through the needs of a two-sided marketplace, from designing a flexible database schema to building a search experience that works for both students and employers.",

    techStack: [
      {
        icon: RiNextjsFill,
        name: "Next.js",
        color: "#ffffff",
        bgColor: "#000000",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        color: "#ffffff",
        bgColor: "#3178C6",
      },
      { icon: FaCss3Alt, name: "CSS3", color: "#ffffff", bgColor: "#2965F1" },
      { icon: SiMysql, name: "MySQL", color: "#ffffff", bgColor: "#4479A1" },
    ],
  },
];
