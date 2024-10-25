import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";

const FaqBox = ({ data, toggle, index, selected }) => {
  return (
    <div
      className={`w-full grid grid-cols-[auto_1fr_auto] rounded-md bg-white p-5 md:gap-5 gap-2 overflow-hidden transition-[height] duration-1000 ease-in-out h-fit shadow-light-purple`}
    >
      <div>
        <FaCircleQuestion className="text-main-purple md:text-2xl text-xl md:mt-0 mt-0.5" />
      </div>
      <p className="font-bold md:text-xl text-md text-dark-purple">
        {data.question}
      </p>
      <button onClick={() => toggle(index)}>
        {selected ? (
          <FaMinus className="text-2xl" />
        ) : (
          <MdOutlineAdd className="text-2xl" />
        )}
      </button>
      {selected && <p className="col-start-2">{data.answer}</p>}
    </div>
  );
};

export default FaqBox;
