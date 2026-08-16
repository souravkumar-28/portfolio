import { motion } from "framer-motion";

const skillGroups = [
  {
    no: "01",
    title: "Backend Development",
    desc: "Building scalable APIs and enterprise applications.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "REST API",
      "MySQL",
      "Oracle",
    ],
  },
  {
    no: "02",
    title: "Frontend Development",
    desc: "Creating responsive and modern user interfaces.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    no: "03",
    title: "Tools & Platforms",
    desc: "Development workflow and deployment tools.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Firebase",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-40"
    >
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold"
        >
          Skills.
        </motion.h2>

        <p className="text-gray-500 mt-6 text-lg max-w-2xl">
          Technologies and tools I use to design,
          develop and deploy modern software.
        </p>

        <div className="mt-24 space-y-20">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[120px_1fr] gap-10 border-t border-white/10 pt-12"
            >

              {/* Left */}

              <div>

                <h1 className="text-6xl font-black text-[#D6C3A5]/40">
                  {group.no}
                </h1>

              </div>

              {/* Right */}

              <div>

                <h3 className="text-3xl font-semibold">
                  {group.title}
                </h3>

                <p className="text-gray-500 mt-4 max-w-xl leading-8">
                  {group.desc}
                </p>

                <div className="flex flex-wrap gap-4 mt-10">

                  {group.skills.map((skill) => (

                    <motion.div
                      key={skill}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                      }}
                      className="
                        px-6
                        py-3
                        rounded-full
                        border
                        border-white/10
                        bg-[#0b0b0b]
                        hover:border-[#D6C3A5]
                        hover:text-[#D6C3A5]
                        transition-all
                        duration-300
                      "
                    >
                      {skill}
                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}