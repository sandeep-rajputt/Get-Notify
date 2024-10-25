import React, { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import PcHeader from "./PcHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const location = window.location.pathname;
  const { width } = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (location === "/") {
        const header = document.querySelector(".fixed");
        if (window.scrollY > 20) {
          header.classList.add("bg-background/70", "backdrop-blur", "shadow");
          header.classList.remove("pt-5");
        } else {
          header.classList.remove(
            "bg-background/70",
            "backdrop-blur",
            "shadow"
          );
          header.classList.add("pt-5");
        }
      }
    });
  }, []);

  return (
    <header
      className={`fixed flex flex-col w-full transition-all duration-200 ease-out top-0 z-[99999999] ${
        location === "/" ? "pt-5" : "bg-background/70 backdrop-blur shadow "
      }`}
    >
      <div className="main-header flex justify-between w-full items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="w-8" alt="logo" />
          <p className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-[#3F169A] to-[#7F23E9] bg-clip-text text-transparent">
            <span>
              <span>Get</span> <span>Notify</span>
            </span>
          </p>
        </div>

        {width > 969 ? <PcHeader /> : <MobileHeader />}
      </div>
    </header>
  );
};

export default Header;
