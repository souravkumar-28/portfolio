import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6C3A5]/5 blur-[180px]" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 text-center px-6 pt-8">

        {/* HELLO */}

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="uppercase tracking-[12px] text-[#D6C3A5] text-sm md:text-base mb-8"
        >
          Hello,
        </motion.p>

        {/* NAME */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            font-black
            text-white
            leading-none
            tracking-[-4px]
            text-[68px]
            sm:text-[90px]
            md:text-[130px]
            lg:text-[170px]
            xl:text-[120px]
          "
        >
          Sourav Kumar
        </motion.h1>

        {/* DESIGNATION */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="
            mt-10
            uppercase
            tracking-[8px]
            text-[#D6C3A5]
            text-sm
            md:text-lg
          "
        >
          Software Engineer
        </motion.h2>

        {/* TECH STACK */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-6
            text-gray-400
            tracking-[5px]
            uppercase
            text-xs
            md:text-base
          "
        >
          Java • Spring Boot • React • Docker
        </motion.p>

        {/* SCROLL */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-24"
        >
          <p className="uppercase tracking-[8px] text-gray-500 text-xs">
            Scroll
          </p>

          <div className="mt-3 text-[#D6C3A5] text-4xl">
            ↓
          </div>
        </motion.div>

      </div>
    </section>
  );
}