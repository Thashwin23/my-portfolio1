import { GithubIcon, portfolioData } from "../data";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => (
  <div className="relative h-[300px] w-full rounded-xl shadow-xl group overflow-hidden">
    <img
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-20 "
      src={project.imageUrl}
      alt={project.title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
    <div className="relative h-full flex flex-col justify-end p-6">
      <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-700 ease-in-out transform group-hover:translate-y-[-190px]">
        {project.title}
      </h3>
      <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-700 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-80">
        <p className="mb-2 text-lg text-slate-200">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-700 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          <FaGithub className="w-5 h-5" /> Source Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900 text-white p-6">
    <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
      My Projects
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
