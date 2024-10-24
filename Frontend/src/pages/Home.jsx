import React from "react";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import Faqs from "../components/sections/Faqs";
import GithubStar from "../components/layout/GithubStar";
const faqsData = [
  {
    question: "What is GetNotify?",
    answer:
      "GetNotify is a powerful reminder and notification service that helps you stay organized by sending timely reminders through various platforms like WhatsApp, Email, and Telegram.",
  },

  {
    question: "Can I customize my reminders?",
    answer:
      "Yes! GetNotify allows you to customize your reminders with personalized messages and set specific times for delivery to fit your needs.",
  },
  {
    question: "Is there a mobile app for GetNotify?",
    answer:
      "Currently, GetNotify is accessible through any web browser. We are working on a mobile app for even easier access and management of your reminders.",
  },
  {
    question: "What if I forget my account password?",
    answer:
      "If you forget your password, simply click on the 'Forgot Password?' link on the login page, and follow the instructions to reset it.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via the 'Contact Us' page on our website, or email us directly at getnotify@sandeeprajput.in for any inquiries or assistance.",
  },
];

const Home = () => {
  return (
    <main className="px-6">
      <Hero />
      <GithubStar />
      <Features />
      <Pricing />
      <Testimonials />
      <Faqs faqsData={faqsData} />
    </main>
  );
};

export default Home;
