import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAntdesign, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { calculateExperience } from "./components/helpers/calculateExperience";

export const portfolioData = {
  name: "Thashwin C S",
  roles: [
    "React/Next.js Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  intro: `A passionate developer with ${calculateExperience(
    "2024-04-29"
  )} of experience building modern, responsive web applications using Next.js, React, and Tailwind CSS.`,
  profilePicture: "/assets/profilePhoto.jpg",
  cvPath: "/assets/thashwin-cs-resume.pdf",
  about: `My journey into web development began after graduating from St. Joseph Engineering College with a degree in ECE. A comprehensive 6-month course ignited my passion for coding, leading me to my current role. Now, with ${calculateExperience(
    "2024-04-29"
  )} of hands-on experience, I specialize in creating dynamic user interfaces with Next.js, React, and Ant Design, transforming ideas into seamless digital experiences.`,
  socials: {
    github: "https://github.com/Thashwin23",
    linkedin: "https://www.linkedin.com/in/thashwincs/",
    twitter: "https://www.instagram.com/thashwin_cs/",
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
      sourceUrl: "https://github.com/Thashwin23/mer-dashboard",
    },
    {
      title: "Dairytech Distribution System",
      description:
        "A large-scale management system with an admin dashboard for inventory, dealer workflows, and real-time reporting.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "AntV Charts", "API Integration", "Real-time"],
      sourceUrl: "https://github.com/Thashwin23/Tenera-prod-front-fork",
    },
    {
      title: "Power Supply Analytics Solution",
      description:
        "A conditional monitoring tool with equipment status visualization, geospatial mapping, and advanced analytics.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      tags: ["Next.js", "Mapbox", "Data Visualization", "REST APIs"],
      sourceUrl: "https://github.com/Thashwin23",
    },
  ],
  skills: [
    { name: "React", icon: <FaReact className="w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" /> },
    { name: "Express", icon: <SiExpress className="w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="w-12 h-12" /> },
    { name: "Ant Design", icon: <SiAntdesign className="w-12 h-12" /> },
    { name: "Git", icon: <FaGitAlt className="w-12 h-12" /> },
  ],
  contactImage: "/assets/contact.png",
};
