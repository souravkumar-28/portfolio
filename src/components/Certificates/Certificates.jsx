import { motion } from "framer-motion";
import certificates from "../../data/certificates";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certificates() {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
      className="bg-black py-32 text-white overflow-hidden"
    >
      <div className="container">

        {/* Heading */}

        <div className="flex items-end justify-between mb-14">

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold"
            >
              Certificates.
            </motion.h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Professional certifications and achievements that strengthen my technical profile.
            </p>

          </div>

          {/* Buttons */}

          <div className="hidden md:flex gap-4">

            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#D6C3A5] hover:text-[#D6C3A5] duration-300"
            >
              <FaChevronLeft className="mx-auto" />
            </button>

            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#D6C3A5] hover:text-[#D6C3A5] duration-300"
            >
              <FaChevronRight className="mx-auto" />
            </button>

          </div>

        </div>

        {/* Slider */}

        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            no-scrollbar
            pb-4
          "
        >

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="
                min-w-[360px]
                max-w-[360px]
                snap-start
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-[#0b0b0b]
                hover:border-[#D6C3A5]
                transition-all
                duration-500
                flex-shrink-0
              "
            >

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    h-52
                    object-cover
                    group-hover:scale-110
                    duration-700
                  "
                />

              </div>

              <div className="p-6">

                <p className="uppercase tracking-[4px] text-xs text-[#D6C3A5]">
                  Certificate
                </p>

                <h3 className="text-2xl font-bold mt-4 leading-snug">
                  {certificate.title}
                </h3>

                <p className="text-gray-500 mt-3">
                  {certificate.organization}
                </p>

                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    mt-6
                    px-6
                    py-3
                    rounded-full
                    border
                    border-white/20
                    hover:border-[#D6C3A5]
                    hover:text-[#D6C3A5]
                    duration-300
                  "
                >
                  View Credential →
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}