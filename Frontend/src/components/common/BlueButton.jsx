import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

const BlueButton = ({ children, className = "" }) => {
  return (
    <button
      className={`flex transition-colors duration-300 items-center gap-2 bg-transparent border border-main-purple hover:bg-main-purple px-8 py-2 text-base text-white font-semibold rounded-full group ${className}`}
    >
      <span className="text-main-purple transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <TiArrowRightThick className="transition-all duration-300 text-main-purple transform group-hover:rotate-0 group-hover:text-white -rotate-45" />
    </button>
  );
};

export default BlueButton;
