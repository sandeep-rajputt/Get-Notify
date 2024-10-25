import React from "react";
import Card from "../common/Card";
import {
  FaWhatsapp,
  FaClock,
  FaRedo,
  FaEnvelope,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const cardsData = [
  {
    heading: "WhatsApp Reminders",
    disc: "Receive reminders directly on WhatsApp, ensuring you never miss an important task or message.",
    color: "green",
    icon: <FaWhatsapp className="text-white text-3xl" />,
  },
  {
    heading: "Scheduled Reminders",
    disc: "Set reminders for specific times, so you're always on top of your important events and deadlines.",
    color: "cyan",
    icon: <FaClock className="text-white text-3xl" />,
  },
  {
    heading: "Recurring Reminders",
    disc: "Create daily, weekly, or monthly reminders, so you never forget recurring tasks or commitments.",
    color: "orange",
    icon: <FaRedo className="text-white text-3xl" />,
  },
  {
    heading: "Email Reminders",
    disc: "Get reminders sent straight to your inbox, ensuring you never miss an important update.",
    color: "purple",
    icon: <FaEnvelope className="text-white text-3xl" />,
  },
  {
    heading: "Telegram Reminders",
    disc: "Stay informed with reminders delivered directly to your Telegram, wherever you are.",
    color: "blue",
    icon: <FaTelegram className="text-white text-3xl" />,
  },
  {
    heading: "Instagram Reminders",
    disc: "Receive reminders via Instagram notifications, so you're always up to date.",
    color: "pink",
    icon: <FaInstagram className="text-white text-3xl" />,
  },
];

const Features = () => {
  return (
    <section className="flex flex-col py-20 gap-16">
      <div className="flex flex-col items-center">
        <h2 className="text-center md:text-5xl text-4xl font-bold mb-4 text-dark-purple">
          Features
        </h2>
        <p className="text-center text-purple-text mb-8 w-full md:max-w-full max-w-lg">
          Get Notify offers a suite of powerful features to help you never
          forget any important Task.
        </p>
      </div>
      <div className="grid xl:grid-cols-[1fr_1fr_1fr] md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-10">
        {cardsData.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
      </div>
    </section>
  );
};

export default Features;
