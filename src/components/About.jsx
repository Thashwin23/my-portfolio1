import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../data";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-[#2f2e2e] mt-8 text-white p-6 overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -100,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-72 flex justify-center items-center w-64 h-64 lg:h-72 relative shadow-2xl border-4 border-[#ac8952] rounded-full overflow-hidden"
        >
          <img
            src={portfolioData.profilePicture}
            alt={portfolioData.name}
            className="w-72 h-72 lg:w-80 lg:h-80 object-cover absolute bottom-[-40px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 100,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-2/3 text-justify"
        >
          <p className="text-lg text-slate-200 leading-relaxed">
            {portfolioData.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
