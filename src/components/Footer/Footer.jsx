import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="container py-20">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[8px] text-[#D6C3A5] text-sm">
              Portfolio
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">
              Thanks for
              <br />
              Visiting.
            </h2>

            <p className="text-gray-500 mt-8 max-w-md leading-8">
              Thank you for taking the time to explore my portfolio.
              I'm always open to discussing internships,
              collaborations and exciting opportunities.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-6">

            <a
              href="mailto:sourav280106@gmail.com"
              className="text-xl hover:text-[#D6C3A5] transition"
            >
              📧 sourav280106@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/souravkumar28"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-[#D6C3A5] transition"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/souravkumar-28"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-[#D6C3A5] transition"
            >
              💻 GitHub
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-16"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <h2 className="text-3xl font-bold">
            Sourav
            <span className="text-[#D6C3A5]">.</span>
          </h2>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/souravkumar-28"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D6C3A5] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/souravkumar28"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D6C3A5] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/_sourav___28_"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D6C3A5] transition"
            >
              <FaInstagram />
            </a>

          </div>

          <a
            href="#home"
            className="
            w-12
            h-12
            rounded-full
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:bg-[#D6C3A5]
            hover:text-black
            transition
            "
          >
            <FaArrowUp />
          </a>

        </div>

        <p className="text-center text-gray-600 mt-12 text-sm">
          © 2026 Sourav Kumar. Made with ❤️
        </p>

      </div>

    </footer>
  );
}