import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  portfolioData,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MenuIcon,
  CloseIcon,
} from "../data";
import { scrollToSection } from "../helpers";

const Sidebar = ({ activeSection }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % portfolioData.roles.length);
    }, 5000); // Change role every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },

    { name: "Contact", href: "#contact" },
  ];

  const NavContent = () => (
    <>
      <div className="text-center relative">
        <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")}>
          <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
            {portfolioData.name}
          </h1>
        </a>
        <div className="text-lg text-blue-400 mb-6 relative z-10 h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.7 }}
            >
              {portfolioData.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <nav className="flex flex-col items-center md:items-center space-y-8 pt-10">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                scrollToSection(e, link.href);
                setMobileMenuOpen(false);
              }}
              className={`text-xl transition-colors duration-300 relative group ${
                isActive
                  ? "text-blue-400 font-bold"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              <span>{link.name}</span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : ""
                }`}
              ></span>
            </a>
          );
        })}
      </nav>
      <div className="mt-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <GithubIcon />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <LinkedinIcon />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <TwitterIcon />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}
        </p>
      </div>
    </>
  );

  return (
    <>
      <aside className="hidden md:flex md:flex-col h-screen bg-black text-white p-8 fixed top-0 left-0 md:w-1/3 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-0 -left-12 w-72 h-72 bg-blue-500 rounded-full mix-blend-lighten filter blur-2xl opacity-25"
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 30, 20, 0],
              scale: [0.7, 0.9, 0.9, 1.2, 0.8],
              backgroundColor: ["#3b82f6", "#6366f1", "#0ea5e9", "#3b82f6"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="absolute top-0 -right-4 w-52 h-52 bg-indigo-500 rounded-full mix-blend-lighten filter blur-2xl opacity-30"
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 30, -10, -20, 0],
              scale: [0.6, 0.9, 0.9, 1.2, 0.8],
              backgroundColor: ["#6366f1", "#0ea5e9", "#3b82f6", "#6366f1"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute bottom-5 left-10 w-52 h-52 bg-indigo-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 25, -10, -15, 0],
              scale: [0.7, 0.9, 0.9, 1.2, 0.8],
              backgroundColor: ["#6366f1", "#0ea5e9", "#3b82f6", "#6366f1"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <NavContent />
        </div>
      </aside>
      <header className="md:hidden bg-gray-300 bg-opacity-30 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          {/* <a href="#" className="text-2xl font-bold text-blue-400">
            {portfolioData.name.split(" ")[0]}
            <span className="text-white">.</span>
          </a> */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none z-50"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
