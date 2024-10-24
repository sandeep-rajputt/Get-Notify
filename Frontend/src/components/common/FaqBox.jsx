import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";

const FaqBox = ({ data, toggle, index, selected }) => {
  const height = selected ? "h-auto" : "h-[68px]";
  return (
    <div
      className={`w-full grid grid-cols-[auto_1fr_auto] rounded-md bg-white p-5 gap-5 overflow-hidden transition-[height] duration-1000 ease-in-out ${height} shadow-light-purple`}
    >
      <div>
        <FaCircleQuestion className="text-main-purple text-2xl" />
      </div>
      <p className="font-bold text-xl text-dark-purple">{data.question}</p>
      <button onClick={() => toggle(index)}>
        {selected ? (
          <FaMinus className="text-2xl" />
        ) : (
          <MdOutlineAdd className="text-2xl" />
        )}
      </button>
      <p className="col-start-2">{data.answer}</p>
    </div>
  );
};

export default FaqBox;
