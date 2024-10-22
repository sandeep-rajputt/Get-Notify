import React from "react";
import OrangeButton from "../common/OrangeButton";

const Hero = () => {
  return (
    <section>
      <div className="w-full grid grid-cols-[1fr_1fr] pt-20 pb-10">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="/color 2.svg"
              alt="Hero Image"
              className="absolute -top-[50%] -left-[30%] w-[100%] z-0 select-none"
            />
            <div className="relative z-10">
              <p className="flex items-center gap-2">
                <img
                  src="/instant-message.png"
                  alt="instant message"
                  className="w-6 select-none"
                />
                <span className="text-lg font-bold text-dark-purple">
                  Effortless Notifications, Always On Time
                </span>
              </p>
              <h1 className="text-5xl font-bold  mt-4 mb-8">
                <span className="text-main-purple">Get Notify</span>
                <br />
                <span className="mt-2 inline-block text-dark-purple">
                  Simplify Your Life.
                </span>
              </h1>
              <p className="text-purple-text font-normal w-[70%]">
                The simplest way to never miss important tasks, keep your
                schedule organized, and receive timely reminders for everything
                that matters.
              </p>
              <OrangeButton shine={true} className="mt-8">
                Get Started
              </OrangeButton>
            </div>
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <img
            src="/color.svg"
            alt="Hero Image"
            className="absolute -top-[50%] w-[100%] z-0 select-none"
          />
          <img
            src="/color.svg"
            alt="Hero Image"
            className="absolute top-0 w-[100%] z-0 select-none"
          />
          <img src="/hero.png" alt="Hero Image" className="w-[80%] z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
