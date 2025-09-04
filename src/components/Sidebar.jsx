import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { portfolioData } from "../data";
import { scrollToSection } from "./helpers/scrollFunction";

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
        <div className="text-lg text-[rgb(219,189,133)] mb-6 relative z-10 h-8">
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
      <nav className="flex flex-col items-center space-y-8 pt-14">
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
                  ? "text-[#dbbd85] font-bold"
                  : "text-slate-300  hover:text-[#dbbd85]"
              }`}
            >
              <span>{link.name}</span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dbbd85] transition-all duration-300 group-hover:w-full ${
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
            className="text-slate-500  hover:text-[rgb(219,189,133)] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500  hover:text-[rgb(219,189,133)] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500  hover:text-[rgb(219,189,133)] transition-colors duration-300"
          >
            <FaInstagram size={24} />
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
      <aside className="hidden md:flex md:flex-col h-screen bg-black text-white p-8 fixed top-0 left-0 md:w-[25%] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute bottom-5 left-10 w-52 h-52 bg-[#e7d6b9] rounded-full mix-blend-lighten filter blur-2xl opacity-20"
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 30, -10, -20, 0],
              scale: [0.6, 0.9, 0.9, 1.2, 0.8],
              backgroundColor: [
                "#DE752A",
                "#CBF065",
                "#A53CC2",
                "#18A2E7", // Back to soft gold
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute top-0 -right-4  w-52 h-52 bg-indigo-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 25, -10, -15, 0],
              scale: [0.7, 0.9, 0.9, 1.2, 0.8],
              backgroundColor: [
                "#BD1430",
                "#F7B711",
                "#8A24E3",
                "#448018", // Back to soft gold
              ],
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
      <header className="md:hidden bg-[#f7d6aa] bg-opacity-40 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none z-50"
          >
            {isMobileMenuOpen ? (
              <IoIosCloseCircleOutline size={30} />
            ) : (
              <IoMdMenu size={30} />
            )}
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-hidden`}
        >
          {/* --- Animated Background --- */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute bottom-5 left-10 w-52 h-52 bg-[#e7d6b9] rounded-full mix-blend-lighten filter blur-2xl opacity-20"
              animate={{
                x: [0, -15, 0, 15, 0],
                y: [0, 30, -10, -20, 0],
                scale: [0.6, 0.9, 0.9, 1.2, 0.8],
                backgroundColor: [
                  "#DE752A",
                  "#CBF065",
                  "#A53CC2",
                  "#18A2E7", // Back to soft gold
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                delay: 2,
              }}
            />

            <motion.div
              className="absolute top-0 -right-4  w-52 h-52 bg-indigo-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
              animate={{
                x: [0, -15, 0, 15, 0],
                y: [0, 25, -10, -15, 0],
                scale: [0.7, 0.9, 0.9, 1.2, 0.8],
                backgroundColor: [
                  "#BD1430",
                  "#F7B711",
                  "#8A24E3",
                  "#448018", // Back to soft gold
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                delay: 2,
              }}
            />
          </div>

          {/* --- Navigation Links --- */}
          <nav className="flex flex-col items-center mb-10 space-y-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-lg text-slate-300 hover:text-[#E5C07B] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* --- Social Icons --- */}
          <div className="flex justify-center space-x-6 relative z-10">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#ebce98] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#ebce98] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={portfolioData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#ebce98] transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
