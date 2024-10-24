import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const GithubStar = () => {
  return (
    <div className="flex relative items-center justify-center px-5 my-28">
      <motion.div
        className="absolute -top-16 right-1/2"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <p className="text-purple-text w-full bg-main-purple/10 px-2 py-0.5 rounded-full break-keep">
          If you like Get Notify
        </p>
        <div className="relative w-full">
          <img
            src="/downline.svg"
            alt="down line"
            draggable="false"
            className="absolute transform scale-x-[-1] -right-16 -top-4 select-none"
          />
        </div>
      </motion.div>

      <a
        href="https://github.com/sandeep-rajputt/Get-Notify"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-purple-text font-bold text-lg flex items-center justify-center z-10"
      >
        ✨ ⭐ Leave a star in Github
        <FaAngleRight className="ml-2 text-xl" />
      </a>

      <img
        src="/github line.svg"
        alt="Highlight line"
        draggable="false"
        className="absolute max-w-60 w-full -bottom-7 z-0 select-none"
      />
    </div>
  );
};

export default GithubStar;
