import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Experience",
    "Contact",
  ];

  return (
    <header
      className={`
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-[1280px]
        rounded-[28px]
        border
        border-white/10
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl"
            : "bg-black/30 backdrop-blur-md"
        }
      `}
    >
      <div className="h-20 grid grid-cols-[180px_1fr_180px] items-center px-10">

        {/* LOGO */}

        <div className="flex items-center">

          <a
            href="#home"
            className="text-[30px] font-bold tracking-tight"
          >
            portfolio
            <span className="text-[#D6C3A5]">.</span>
          </a>

        </div>

        {/* NAV */}

        <nav className="hidden lg:flex justify-center gap-12">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
              uppercase
              tracking-[4px]
              text-[13px]
              text-gray-300
              hover:text-white
              transition
              "
            >
              {item}
            </a>

          ))}

        </nav>

        {/* BUTTON */}

        <div className="flex justify-end">

          <a
            href="/SouravKumarResume.pdf"
            download
            className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            border
            border-[#D6C3A5]/50
            text-[#D6C3A5]
            hover:bg-[#D6C3A5]
            hover:text-black
            transition
            "
          >
            Resume

            <FaDownload size={12} />

          </a>

        </div>

      </div>
    </header>
  );
}