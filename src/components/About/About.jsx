import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-32"
    >
      <div className="container">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold"
        >
          About.
        </motion.h2>

        {/* Content */}

        <div className="grid lg:grid-cols-[420px_1fr] gap-28 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="w-[380px] h-[480px] ">

              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover rounded-3xl"
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-400 uppercase tracking-[6px]">
              Who I Am
            </p>

            <h3 className="text-5xl font-bold mt-5 leading-tight">

              Building Digital Products
              with Modern Technologies.

            </h3>

            <p className="text-gray-400 mt-8 leading-8 text-lg">

              I'm Sourav Kumar, an Information Technology student
              passionate about building scalable backend systems,
              full stack web applications and solving real-world
              problems using Java, Spring Boot, React and modern
              development tools.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-14">

              <div className="border border-white/10 rounded-2xl p-6">

                <h4 className="text-3xl font-bold text-[#D6C3A5]">

                  3+

                </h4>

                <p className="mt-2 text-gray-400">

                  Major Projects

                </p>

              </div>

              <div className="border border-white/10 rounded-2xl p-6">

                <h4 className="text-3xl font-bold text-[#D6C3A5]">

                  Java

                </h4>

                <p className="mt-2 text-gray-400">

                  Primary Language

                </p>

              </div>

              <div className="border border-white/10 rounded-2xl p-6">

                <h4 className="text-3xl font-bold text-[#D6C3A5]">

                  Spring

                </h4>

                <p className="mt-2 text-gray-400">

                  Backend Framework

                </p>

              </div>

              <div className="border border-white/10 rounded-2xl p-6">

                <h4 className="text-3xl font-bold text-[#D6C3A5]">

                  React

                </h4>

                <p className="mt-2 text-gray-400">

                  Frontend

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}