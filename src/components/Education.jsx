import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../data";

const EducationEntry = ({ edu }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="mb-10 ml-8">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#ac8952] rounded-full -left-4 ring-8 ring-gray-800">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.134 4.134a.75.75 0 01.75-.75h8.232a.75.75 0 010 1.5H5.884a.75.75 0 01-.75-.75zM6 6.5a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 6.5zM3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10zM3.75 12a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zM3 15a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 15z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -30,
        }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
        <p className="text-lg font-normal text-slate-400">{edu.institution}</p>
        <p className="text-lg font-semibold text-[#ac8952]">{edu.score}</p>
      </motion.div>
    </div>
  );
};

const Education = () => (
  <section id="education" className="py-10 bg-gray-800 text-white p-6">
    <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
      Education
    </h2>
    <div className="relative border-l-2 border-[#6e5326] ml-4 md:ml-0">
      {portfolioData.education.map((edu, index) => (
        <EducationEntry key={index} edu={edu} />
      ))}
    </div>
  </section>
);

export default Education;
