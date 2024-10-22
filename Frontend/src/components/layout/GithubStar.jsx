import React from "react";
import { FaAngleRight } from "react-icons/fa";

const GithubStar = () => {
  return (
    <div className="flex relative items-center justify-center px-5 my-28">
      <div className="absolute -top-16 right-1/2">
        <p className="text-purple-text w-full bg-main-purple/10 px-2 rounded-full break-keep">
          if you like Get Notify
        </p>
        <div className="relative w-full">
          <img
            src="/downline.svg"
            alt="down line"
            className="absolute transform scale-x-[-1] -right-16 -top-4"
          />
        </div>
      </div>
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
        className="absolute max-w-60 w-full -bottom-7 z-0"
      />
    </div>
  );
};

export default GithubStar;
