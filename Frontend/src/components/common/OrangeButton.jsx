import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

const OrangeButton = ({
  children,
  shine = false,
  className = "",
  handleClick = () => {},
}) => {
  if (shine) {
    return (
      <button
        onClick={handleClick}
        className={`relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-[#FF7438] to-[#FF8B59] px-8 py-2 text-base text-white font-semibold rounded-full group ${className}`}
      >
        <p className="absolute bg-gradient-to-r w-full from-[#ffffff00] to-[#ffffff32] -top-[50%]  rotate-6 h-[200%] animate-shine"></p>
        <span>{children}</span>
        <TiArrowRightThick className="transition-transform duration-300 transform group-hover:rotate-0 -rotate-45" />
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 bg-gradient-to-r from-[#FF7438] to-[#FF8B59] px-8 py-2 text-base text-white font-semibold rounded-full group ${className}`}
    >
      {children}
      <TiArrowRightThick className="transition-transform duration-300 transform group-hover:rotate-0 -rotate-45" />
    </button>
  );
};

export default OrangeButton;
