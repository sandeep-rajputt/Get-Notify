import React from "react";
import About1 from "../components/layout/About1";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-center pt-20 font-bold text-6xl text-main-purple">
          About Us
        </h1>
        <p className="text-center text-purple-text font-normal mt-4 mb-10">
          Home » About Us
        </p>
      </div>
      <About1 />
      <Stats />
      <div className="px-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
