import { motion } from "framer-motion";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-32"
    >
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Projects.
        </motion.h2>

        <p className="text-gray-500 mt-5 text-lg">
          A selection of projects I've built using modern technologies.
        </p>

        <div className="mt-20 space-y-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="
                border border-white/10
                rounded-[32px]
                overflow-hidden
                bg-[#0b0b0b]
                hover:border-[#D6C3A5]
                transition-all
                duration-500
              "
            >

              <div className="grid lg:grid-cols-[520px_1fr]">

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[280px] object-cover rounded-t-[32px]"
                  />

                </div>

                {/* Content */}

                <div className="p-8 lg:p-10">

                  <p className="uppercase tracking-[5px] text-[#D6C3A5] text-xs">

                    Featured Project

                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold">

                    {project.title}

                  </h3>

                  <p className="text-gray-400 mt-4 leading-7 text-[15px]">

                    {project.description}

                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          border border-white/10
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          text-gray-300
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="flex gap-5 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        px-6
                        py-3
                        rounded-full
                        bg-white
                        text-black
                        hover:bg-[#D6C3A5]
                        transition
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="
                        px-6
                        py-3
                        rounded-full
                        border
                        border-white/20
                        hover:border-[#D6C3A5]
                      "
                    >
                      Live Demo
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