import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -75% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-tight">
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-4">
          <Sidebar activeSection={activeSection} />
        </div>
        <main className="md:col-span-8 md:col-start-5 ">
          <Hero />
          <div className="container mx-auto px-6 lg:px-12">
            <About />
            <Experience />
          </div>
          <Skills />
          <div className="container mx-auto px-6 lg:px-12">
            <Education />
            <Projects />
          </div>

          <div className="container mx-auto px-6 lg:px-12">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
