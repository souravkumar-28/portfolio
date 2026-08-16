import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co.",
    description:
      "Built backend services using Spring Boot, integrated REST APIs and worked on enterprise software engineering tasks.",
  },
  {
    year: "2025",
    title: "Research Paper Presenter",
    company: "NCCI 2025",
    description:
      "Presented research work at National Conference on Computational Intelligence.",
  },
  {
    year: "2024",
    title: "Campus Ambassador",
    company: "IIT Kharagpur",
    description:
      "Promoted technical events and collaborated with students across multiple colleges.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-32 text-white">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold"
        >
          Experience.
        </motion.h2>

        <p className="text-gray-500 mt-4 max-w-xl">
          My professional journey and leadership experiences.
        </p>

        <div className="mt-20 relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-16 pb-16"
            >

              <div className="absolute left-1 top-2 w-6 h-6 rounded-full bg-[#D6C3A5] border-4 border-black" />

              <span className="text-[#D6C3A5] text-sm tracking-[4px] uppercase">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-white/70 mt-2">
                {item.company}
              </p>

              <p className="text-gray-500 mt-5 leading-8 max-w-2xl">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}