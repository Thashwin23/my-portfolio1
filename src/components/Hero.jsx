import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { scrollToSection } from "./helpers/scrollFunction";
import Fireworks from "./FireWorks";

const Hero = () => {
  const name = portfolioData.name.split("");

  const [showFireworks, setShowFireworks] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDownloadClick = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 2000); // Animation lasts 1.5s, hide after 2s
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 4000); // Show message for 4s
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 relative overflow-hidden bg-cover bg-center "
      style={{
        backgroundImage: "url('/assets/generated-image.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700/80 to-gray-900"></div>
      <div className="max-w-4xl z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 font-['Orbitron']"
          style={{ textShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          {portfolioData.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            View My Work
          </a>
          <a
            href={portfolioData.cvPath}
            download
            onClick={handleDownloadClick}
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download CV
            <div className="hidden lg:block">
              <Fireworks isActive={showFireworks} size="small" />
            </div>
          </a>
        </motion.div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 lg:hidden">
          <Fireworks isActive={showFireworks} size="large" />
        </div>
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="absolute top-10 left-1/4 lg:top-auto lg:bottom-10 lg:left-[60%] md:left-[40%] -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg border border-blue-500/50"
            >
              <p className="text-sm lg:text-lg">
                Thank you for downloading my CV!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
