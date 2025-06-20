import React from "react";
import BlueButton from "./BlueButton";
import OrangeButton from "./OrangeButton";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const PricingCard = ({ data }) => {
  return (
    <div
      className={`w-full h-full grid grid-rows-[auto_auto_auto_1fr_auto] p-12 gap-7 max-w-96 rounded-xl ${
        data.planName === "Standard Plan"
          ? "bg-main-purple text-white"
          : "bg-white"
      }`}
    >
      <div>
        <img
          src={data.image}
          alt={data.planName}
          className="select-none"
          draggable="false"
        />
      </div>
      <div>
        <p
          className={`text-xl font-bold  ${
            data.planName === "Standard Plan"
              ? "text-white"
              : "text-dark-purple"
          }`}
        >
          {data.planName}
        </p>
        <p className="text-base leading-8">{data.disc}</p>
      </div>
      <div className="my-5">
        <p className="flex items-end">
          <span
            className={`text-5xl font-bold  ${
              data.planName === "Standard Plan"
                ? "text-white"
                : "text-main-purple"
            }`}
          >
            ₹{data.price}
          </span>
          <span>/month</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {data.includes.map((item, index) => (
          <div
            key={index}
            className={`text-lg flex ${
              data.planName === "Standard Plan"
                ? "text-white"
                : "text-purple-text"
            }`}
          >
            <div className="inline-block h-full">
              <div
                className={`w-fit h-fit p-1 rounded-full flex items-center justify-center border mr-2 ${
                  item.tick
                    ? data.planName !== "Standard Plan"
                      ? "border-emerald-500"
                      : "border-white"
                    : data.planName !== "Standard Plan"
                    ? "border-red-500/50"
                    : "border-white"
                }`}
              >
                {item.tick ? (
                  <MdOutlineDone
                    className={`inline-block ${
                      item.tick
                        ? data.planName !== "Standard Plan"
                          ? "text-emerald-500"
                          : "text-white"
                        : "text-red-500/50"
                    }`}
                  />
                ) : (
                  <IoClose
                    className={`inline-block ${
                      item.tick
                        ? data.planName !== "Standard Plan"
                          ? "text-emerald-500"
                          : "text-white"
                        : data.planName !== "Standard Plan"
                        ? "text-red-500/50"
                        : "text-white"
                    }`}
                  />
                )}
              </div>
            </div>
            <p className={`${!item.tick && "line-through"}`}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        {data.planName !== "Standard Plan" ? (
          <BlueButton className="text-lg">Buy Now</BlueButton>
        ) : (
          <OrangeButton className="text-lg">Buy Now</OrangeButton>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
