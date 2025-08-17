import React from "react";

// Social Icons
export const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`feather feather-github ${className}`}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
export const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
export const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-twitter"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);
export const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Tech Skill Icons
const JSIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>JavaScript</title>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.82-2.265-2.69-3.412-1.537-.96-3.03-1.815-3.03-3.358 0-.66.315-1.29.9-1.815.63-.562 1.425-.82 2.295-.82.9 0 1.62.21 2.205.63.585.42.945 1.05.945 1.815h-2.145c0-.315-.105-.585-.315-.78-.21-.195-.495-.293-.84-.293-.345 0-.63.098-.87.293-.24.195-.36.45-.36.78 0 .42.225.78.675 1.095.75.525 2.04 1.29 3.87 2.295 1.98.99 3.03 2.19 3.03 3.615 0 .84-.36 1.59-.99 2.175-.63.585-1.515.87-2.64.87-1.215 0-2.22-.33-2.985-.99-.765-.66-1.14-1.515-1.14-2.565h2.145c.035.585.315 1.035.84 1.35.525.315 1.14.472 1.83.472.48 0 .915-.098 1.29-.293.375-.195.563-.48.563-.84.035-.42-.105-.78-.42-1.095zM9.034 12.001c0-.63.42-1.17.99-1.575.57-.405 1.29-.607 2.16-.607.87 0 1.59.202 2.16.607.57.405.855.945.855 1.575v6.09h2.145V12.001c0-1.02-.345-1.882-.99-2.595-.645-.712-1.53-1.065-2.67-1.065-1.14 0-2.025.353-2.67 1.065-.645.713-.99 1.575-.99 2.595v6.09h2.145V12.001z" />
  </svg>
);
const ReactIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>React</title>
    <path d="M12.001 2.001a10.003 10.003 0 0 0-3.32 19.34c.38-.23.79-.41 1.21-.55a10.003 10.003 0 0 1 4.22 0c.42.14.83.32 1.21.55a10.003 10.003 0 0 0-3.32-19.34zM12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm0-15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);
const NextJSIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Next.js</title>
    <path d="M12 0A12 12 0 1 0 24 12 12 12 0 0 0 12 0zm7.18 17.55h-2.34l-4.84-7.67v7.67H9.82V6.45h2.34l4.84 7.67V6.45h2.18v11.1z" />
  </svg>
);
const TailwindIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Tailwind CSS</title>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.68 10.72 14.88 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.32 6.08 15.12 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.12 1.12 2.32 2.4 5.52 2.4 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.12-1.12-2.32-2.4-5.52-2.4z" />
  </svg>
);
const AntDesignIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Ant Design</title>
    <path d="M19.31 4.69a1.5 1.5 0 0 0-2.12 0L12 9.88 6.81 4.69a1.5 1.5 0 0 0-2.12 2.12L9.88 12l-5.19 5.19a1.5 1.5 0 0 0 2.12 2.12L12 14.12l5.19 5.19a1.5 1.5 0 0 0 2.12-2.12L14.12 12l5.19-5.19a1.5 1.5 0 0 0 0-2.12zM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z" />
  </svg>
);
const TSIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>TypeScript</title>
    <path d="M1.5 0h21C23.325 0 24 .675 24 1.5v21c0 .825-.675 1.5-1.5 1.5h-21C.675 24 0 23.325 0 21.5v-21C0 .675.675 0 1.5 0zM12 18V6h2.25v12H12zm-1.5-2.25h-3V18h8.25v-2.25h-3V6H9v9.75z" />
  </svg>
);
const GitIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Git</title>
    <path d="M22.016 10.432c-1.12-.592-2.32-1.024-3.568-1.296v-2.16c1.36-.32 2.64-.848 3.824-1.584a.58.58 0 0 0 .192-1.008L19.2.56a.544.544 0 0 0-.816-.128L13.76 4.16c-1.12.736-2.064 1.696-2.8 2.832l-1.824-1.824a.55.55 0 0 0-.784 0L.416 13.088a.55.55 0 0 0 0 .784l1.824 1.824c-1.136.736-2.096 1.68-2.832 2.8L.24 23.12a.544.544 0 0 0 .128.816l2.912 1.488a.58.58 0 0 0 1.008-.192c.736-1.2 1.264-2.464 1.584-3.824h2.16c.272 1.248.704 2.448 1.296 3.568a.544.544 0 0 0 .672.336l3.52-.8a.576.576 0 0 0 .448-.624c-.224-1.344-.304-2.72-.224-4.096.56-.224 1.104-.512 1.616-.848l5.248 5.248a.55.55 0 0 0 .784 0l2.912-2.912a.55.55 0 0 0 0-.784L17.6 13.6c.336-.512.624-1.056.848-1.616.928.016 1.856.144 2.768.4a.576.576 0 0 0 .624-.448l.8-3.52a.544.544 0 0 0-.336-.672zM4.224 19.776c.624-1.056 1.424-1.984 2.384-2.752l8.368-8.368c.768-.96 1.696-1.76 2.752-2.384l1.328-1.328-1.408-1.408-1.328 1.328c-1.616.992-2.976 2.352-3.968 3.968L4.016 18.16c-1.616 1.008-2.976 2.368-3.968 3.984l-1.328 1.328 1.408 1.408 1.328-1.328c.016 0 .016-.016.032-.016.016 0 .016 0 .016-.016z" />
  </svg>
);
const NodeIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Node.js</title>
    <path d="M11.72 17.526l-3.41 1.968c-.48.276-1.05.04-1.23-.49L.02 1.835C-.16 1.305.21 1.03.69.754l3.41-1.968c.48-.276 1.05-.04 1.23.49l7.06 17.169c.18.53-.21.795-.69 1.065zm.56-17.28L5.22 17.415l-1.68-3.008 7.06-17.17zM12.28.246l3.41 1.968c.48.276.75.846.57 1.376L9.2 20.758c-.18.53-.75.795-1.23.52l-3.41-1.968c-.48-.276-.75-.846-.57-1.376L11.05.73c.18-.53.75-.795 1.23-.484zm-.56 17.28l7.06-17.169-1.68 3.008-7.06 17.17z" />
  </svg>
);
const ExpressIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Express</title>
    <path d="M24 14.88l-2.016-1.152.012-6.48-2.016-1.152L12 0 4.02 4.092 2.004 5.244l.012 6.48L0 14.88l2.016 1.152-.012 6.48 2.016 1.152L12 24l7.98-4.092 2.016-1.152-.012-6.48L24 14.88zM7.056 16.8l-1.8-3.12-1.2 2.4v.72h-1.8V7.2h1.8v3.36l2.4-3.36h2.16l-2.64 3.6 2.64 6H7.056zm5.88-4.92h2.88v1.56h-2.88v2.64h3.24v1.56h-5.04V7.2h5.04v1.56h-3.24v2.52zm8.064 4.92h-1.8V7.2h1.8v9.6z" />
  </svg>
);
const MongoIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>MongoDB</title>
    <path d="M12 0C7.097 0 3.203 4.034 3.203 9.09c0 4.238 2.688 8.132 6.437 9.263v-7.23H7.558V9.09h2.082V7.41c0-2.317 1.22-3.692 3.6-3.692.648 0 1.296.072 1.944.192v2.016h-1.224c-1.152 0-1.368.552-1.368 1.344v1.56h2.7l-.36 2.034h-2.34v7.23c3.75-1.13 6.437-5.025 6.437-9.263C20.797 4.034 16.903 0 12 0z" />
  </svg>
);

export const portfolioData = {
  name: "Thashwin C S",
  roles: [
    "React/Next.js Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  intro:
    "A passionate developer with 1.5 years of experience building modern, responsive web applications using Next.js, React, and Tailwind CSS.",
  profilePicture: "/assets/profilePhoto.jpg",
  cvPath: "/assets/thashwin-cs-resume.pdf",
  about:
    "My journey into web development began after graduating from St. Joseph Engineering College with a degree in ECE. A comprehensive 6-month course ignited my passion for coding, leading me to my current role. Now, with 1.5 years of hands-on experience, I specialize in creating dynamic user interfaces with Next.js, React, and Ant Design, transforming ideas into seamless digital experiences.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  experience: [
    {
      role: "Frontend Engineer",
      company: "Tikanga Private Limited",
      location: "Mangaluru, Karnataka",
      dates: "April 2024 — Present",
      description: [
        "Contributed to a hyperlocal foodtech & offers e-commerce platform, focusing on the merchant dashboard, analytics, and real-time offer workflows.",
        "Developed for a large-scale dairytech distribution management system, building the admin dashboard, inventory, and dealer/order workflows.",
        "Engineered a conditional monitoring & analytics solution for the power supply department, creating equipment status visualizations and geospatial mapping.",
        "Designed and built responsive dashboards and UIs using Next.js, React, Tailwind CSS, Ant Design, Mapbox, and AntV Charts.",
        "Led end-to-end frontend execution, including API integrations, workflow optimization, and complex logic implementation for efficiency.",
        "Collaborated with stakeholders to translate business needs into user-friendly digital solutions.",
        "Improved processing speeds by up to 60% and delivered high-performance, intuitive interfaces across multiple industries.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering (ECE)",
      institution: "St. Joseph Engineering College",
      score: "8.25 CGPA",
    },
    {
      degree: "PUC (PCMC)",
      institution: "Ambika Padavi Poorva Vidyalaya",
      score: "89.5%",
    },
    {
      degree: "SSLC",
      institution: "Udaya English Medium School",
      score: "81.92%",
    },
  ],
  projects: [
    {
      title: "Foodtech & E-commerce Platform",
      description:
        "A hyperlocal platform featuring a merchant dashboard, analytics, and real-time offer workflows with QR-based redemptions.",
      imageUrl:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "React", "Ant Design", "Tailwind CSS"],
      sourceUrl: "#",
    },
    {
      title: "Dairytech Distribution System",
      description:
        "A large-scale management system with an admin dashboard for inventory, dealer workflows, and real-time reporting.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "AntV Charts", "API Integration", "Real-time"],
      sourceUrl: "#",
    },
    {
      title: "Power Supply Analytics Solution",
      description:
        "A conditional monitoring tool with equipment status visualization, geospatial mapping, and advanced analytics.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      tags: ["Next.js", "Mapbox", "Data Visualization", "REST APIs"],
      sourceUrl: "#",
    },
  ],
  skills: [
    { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
    { name: "Next.js", icon: <NextJSIcon className="w-12 h-12" /> },
    { name: "Node.js", icon: <NodeIcon className="w-12 h-12" /> },
    { name: "Express", icon: <ExpressIcon className="w-12 h-12" /> },
    { name: "MongoDB", icon: <MongoIcon className="w-12 h-12" /> },
    { name: "JavaScript", icon: <JSIcon className="w-12 h-12" /> },
    { name: "TypeScript", icon: <TSIcon className="w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <TailwindIcon className="w-12 h-12" /> },
    { name: "Ant Design", icon: <AntDesignIcon className="w-12 h-12" /> },
    { name: "Git", icon: <GitIcon className="w-12 h-12" /> },
  ],
  contactImage: "/assets/contact.png",
};
