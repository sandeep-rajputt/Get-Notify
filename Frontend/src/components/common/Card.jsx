import React from "react";

// Color mapping
const colorMap = {
  green: {
    from: "from-[#22B02A]",
    to: "to-[#32E575]",
    shadow: "0px 10px 50px -10px rgba(34, 176, 42, 0.5)",
  },
  blue: {
    from: "from-[#007BFF]",
    to: "to-[#4285F4]",
    shadow: "0px 10px 50px -10px rgba(0, 123, 255, 0.5)",
  },
  orange: {
    from: "from-[#FF7438]",
    to: "to-[#FF8B59]",
    shadow: "0px 10px 50px -10px rgba(255, 116, 56, 0.5)",
  },
  purple: {
    from: "from-[#9C27B0]",
    to: "to-[#BA68C8]",
    shadow: "0px 10px 50px -10px rgba(156, 39, 176, 0.5)",
  },
  red: {
    from: "from-[#DC3545]",
    to: "to-[#F15B6C]",
    shadow: "0px 10px 50px -10px rgba(220, 53, 69, 0.5)",
  },
  pink: {
    from: "from-[#E83E8C]",
    to: "to-[#F48FB1]",
    shadow: "0px 10px 50px -10px rgba(232, 62, 140, 0.5)",
  },
  cyan: {
    from: "from-[#00BCD4]",
    to: "to-[#4DD0E1]",
    shadow: "0px 10px 50px -10px rgba(0, 188, 212, 0.5)",
  },
};

const Card = ({ data }) => {
  const selectedColor = colorMap[data.color] || colorMap.green;
  return (
    <div className="max-w-[365px] p-12 bg-white rounded-xl flex flex-col gap-5">
      <div className="flex justify-center items-center py-4">
        <div
          className={`p-4 bg-gradient-to-r ${selectedColor.from} ${selectedColor.to} rounded-full`}
          style={{ boxShadow: selectedColor.shadow }}
        >
          <div>{data.icon}</div>
        </div>
      </div>
      <h3 className="text-center text-lg font-bold text-dark-purple">
        {data.heading}
      </h3>
      <p className="text-center text-base font-light leading-8">{data.disc}</p>
    </div>
  );
};

export default Card;
