import React, { useEffect } from "react";
import OrangeButton from "../common/OrangeButton";

const Header = () => {
  const location = window.location.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (location === "/") {
        const header = document.querySelector(".fixed");
        if (window.scrollY > 20) {
          header.classList.add(
            "bg-background/50",
            "backdrop-blur-sm",
            "shadow"
          );
          header.classList.remove("pt-5");
        } else {
          header.classList.remove(
            "bg-background/50",
            "backdrop-blur-sm",
            "shadow"
          );
          header.classList.add("pt-5");
        }
      }
    });
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-200 ease-out ${
        location === "/" ? "pt-5" : "bg-background/50 backdrop-blur-sm shadow "
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo/transparent.png" className="w-6" alt="logo" />
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
                  FAQ
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  Contact Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="px-4 py-2">
                  Sign In
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
