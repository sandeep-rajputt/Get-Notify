import React, { useEffect } from "react";
import OrangeButton from "../common/OrangeButton";

const Header = () => {
  const location = window.location.pathname;

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
      className={`fixed flex flex-col  w-full transition-all duration-200 ease-out top-0 z-[99999999] ${
        location === "/" ? "pt-5" : "bg-background/70 backdrop-blur shadow "
      }`}
    >
      <div className="flex justify-between w-full items-center p-6 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="w-8" alt="logo" />
            <p className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-[#3F169A] to-[#7F23E9] bg-clip-text text-transparent">
              <span>
                <span>Get</span> <span>Notify</span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-purple-text">
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="px-4 py-2">
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  About Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  Pricing
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  FAQ
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <OrangeButton shine={true}>TRY IT FREE</OrangeButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
