import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-32"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-[#D6C3A5]">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-5">
            Let's Build Something.
          </h2>

          <p className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg leading-8">
            I'm always open to internships,
            freelance opportunities and exciting
            software engineering projects.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <a
            href="mailto:sourav280106@gmail.com"
            className="
            glass
            rounded-3xl
            p-10
            hover:border-[#D6C3A5]
            transition
            "
          >

            <FaEnvelope className="text-5xl text-[#D6C3A5]"/>

            <h3 className="text-2xl mt-6 font-semibold">

              Email

            </h3>

            <p className="text-gray-400 mt-4">

              sourav280106@gmail.com

            </p>

          </a>

          <a
            href="https://github.com/souravkumar-28"
            target="_blank"
            className="
            glass
            rounded-3xl
            p-10
            hover:border-[#D6C3A5]
            transition
            "
          >

            <FaGithub className="text-5xl text-[#D6C3A5]"/>

            <h3 className="text-2xl mt-6 font-semibold">

              GitHub

            </h3>

            <p className="text-gray-400 mt-4">

              github.com/souravkumar-28

            </p>

          </a>

          <a
            href="https://www.linkedin.com/in/souravkumar28/"
            target="_blank"
            className="
            glass
            rounded-3xl
            p-10
            hover:border-[#D6C3A5]
            transition
            "
          >

            <FaLinkedin className="text-5xl text-[#D6C3A5]"/>

            <h3 className="text-2xl mt-6 font-semibold">

              LinkedIn

            </h3>

            <p className="text-gray-400 mt-4">

              linkedin.com/in/souravkumar28

            </p>

          </a>

        </div>

      </div>
    </section>
  );
}