import React from "react";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import Faqs from "../components/sections/Faqs";
import GithubStar from "../components/layout/GithubStar";

const Home = () => {
  return (
    <main className="px-6">
      <Hero />
      <GithubStar />
      <Features />
      <Pricing />
      <Testimonials />
      <Faqs />
    </main>
  );
};

export default Home;
