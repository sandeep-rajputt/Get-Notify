import React from "react";
import RatingStars from "./RatingStars";

const Testimonial = ({ name, feedback, rating, image }) => {
  return (
    <div className="p-8 h-full rounded-lg bg-white grid grid-rows-[1fr_auto] max-w-[365px]">
      <p className="leading-loose text-purple-text text-base font-light ">
        {feedback}
      </p>

      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 select-none"
          draggable="false"
          src={image}
          alt={name}
        />
        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 mb-1">{name}</h1>
          <RatingStars rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
