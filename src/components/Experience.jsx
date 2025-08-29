import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900 text-white p-4">
    <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
      Work Experience
    </h2>
    <div className="relative border-l-2 border-blue-800  md:ml-0 px-2">
      {portfolioData.experience.map((job, index) => (
        <div key={index} className="mb-10 ml-8">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-8 ring-gray-900">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-2xl font-semibold text-white">
            {job.role}
            <span className="text-blue-400 bg-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              {job.dates}
            </span>
          </h3>
          <p className="block mb-2 text-lg font-normal leading-none text-slate-400">
            {job.company}, {job.location}
          </p>
          <ul className="list-outside list-disc mt-4 space-y-2 text-slate-300 text-justify">
            {job.description.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
