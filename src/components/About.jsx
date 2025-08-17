import React from "react";
import { portfolioData } from "../data";

const About = () => (
  <section id="about" className="py-20 bg-gray-800 text-white p-6">
    <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
      About Me
    </h2>
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/3 flex-shrink-0 flex justify-center items-center">
        <img
          src={portfolioData.profilePicture}
          alt={portfolioData.name}
          className="rounded-full w-64 h-64 lg:w-72 lg:h-72 object-top shadow-2xl border-4 border-blue-400"
        />
      </div>
      <div className="lg:w-2/3 text-center lg:text-left">
        <p className="text-lg text-slate-300 leading-relaxed">
          {portfolioData.about}
        </p>
      </div>
    </div>
  </section>
);

export default About;
