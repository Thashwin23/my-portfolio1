import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Skills = () => (
  <section id="skills" className="py-5 pb-20 text-white w-full">
    <div className="container mx-auto px-6 lg:px-12">
      <h2 className="text-4xl font-bold mb-12 text-center md:text-left pl-4">
        Technical Skills
      </h2>
      <div className="relative overflow-hidden group">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // Increased duration for a slower scroll
            repeat: Infinity,
          }}
        >
          {[...portfolioData.skills, ...portfolioData.skills].map(
            (skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center space-y-3 w-40 group/item"
                whileHover={{ y: -4, scale: 0.9 }}
              >
                <div className="p-4 bg-slate-700 rounded-full transition-colors duration-300 group-hover/item:bg-[#ac8952]">
                  <div className="text-[#daae69] transition-colors duration-300 group-hover/item:text-white">
                    {skill.icon}
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-300 transition-colors duration-300 group-hover/item:text-neutral-50">
                  {skill.name}
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
