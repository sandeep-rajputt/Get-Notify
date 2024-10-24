import React, { useEffect } from "react";
import OrangeButton from "../common/OrangeButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Parent variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
};

// Child variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
    <motion.header
      className={`fixed flex flex-col w-full transition-all duration-200 ease-out top-0 z-[99999999] ${
        location === "/" ? "pt-5" : "bg-background/70 backdrop-blur shadow "
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between w-full items-center p-6 max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <img src="/logo.svg" className="w-8" alt="logo" />
          <p className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-[#3F169A] to-[#7F23E9] bg-clip-text text-transparent">
            <span>
              <span>Get</span> <span>Notify</span>
            </span>
          </p>
        </motion.div>

        <div className="flex items-center gap-4 text-purple-text">
          <nav>
            <ul className="flex gap-4">
              <motion.li variants={itemVariants}>
                <Link to="/" href="#" className="px-4 py-2">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/about-us" href="#" className="px-4 py-2">
                  About us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#" className="px-4 py-2">
                  Pricing
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#" className="px-4 py-2">
                  FAQ
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/contact-us" className="px-4 py-2">
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </nav>
          <motion.div variants={itemVariants}>
            <OrangeButton shine={true}>TRY IT FREE</OrangeButton>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
