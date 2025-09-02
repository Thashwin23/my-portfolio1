import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import MouseFollower from "./components/Spotlight";

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
    <div className="bg-gray-900 font-body leading-tight tracking-tight">
      <MouseFollower />
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
