import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing software development,
            AI/ML, data analytics and problem-solving skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                bg-slate-900/50
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-cyan-400/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[320px]
                      lg:h-full
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">

                  <span className="text-cyan-400 text-sm font-medium mb-3">
                    Featured Project
                  </span>

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-slate-800
                          border
                          border-slate-700
                          text-sm
                          text-slate-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        rounded-xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        text-black
                        font-semibold
                        transition
                      "
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;