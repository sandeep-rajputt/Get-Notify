import React from "react";
import PricingCard from "../common/PricingCard";

const PricingData = [
  {
    planName: "Basic Plan",
    image: "/Basic Plan.svg",
    price: "0",
    disc: "Ideal for Occasional Users.",
    includes: [
      { text: "5 WhatsApp Reminders", tick: true },
      { text: "500 Telegram Reminders", tick: true },
      { text: "500 Instagram Reminders", tick: true },
      { text: "500 Email Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "Also Remind Images", tick: false },
      { text: "Also Remind Video", tick: false },
    ],
  },

  {
    planName: "Standard Plan",
    image: "/Standard Plan.png",
    price: "49",
    disc: "Great for Everyday Use.",
    includes: [
      { text: "100 WhatsApp Reminders", tick: true },
      { text: "1000 Telegram Reminders", tick: true },
      { text: "1000 Instagram Reminders", tick: true },
      { text: "1000 Email Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "Also Remind Images", tick: true },
      { text: "Also Remind Video", tick: false },
    ],
  },
  {
    planName: "Premium Plan",
    image: "/Premium Plan.svg",
    price: "199",
    disc: "Best Value for Power Users.",
    includes: [
      { text: "500 WhatsApp Reminders", tick: true },
      { text: "1000 Telegram Reminders", tick: true },
      { text: "3000 Instagram Reminders", tick: true },
      { text: "3000 Email Reminders", tick: true },
      { text: "Daily reminders", tick: true },
      { text: "Weekly reminders", tick: true },
      { text: "Monthly reminders", tick: true },
      { text: "One Time reminder", tick: true },
      { text: "Also Remind Images", tick: true },
      { text: "Also Remind Video", tick: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-36">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-5xl font-bold mb-4 text-dark-purple">
          Best plans, pay what you use
        </h2>
        <p className="text-center w-full text-purple-text mb-8 max-w-2xl">
          Flexible Plans, Pay As You Go. Choose the plan that fits your needs
          and get the notification credits you need!
        </p>
      </div>
      <div>
        <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center gap-10 mt-10">
          {PricingData.map((card, index) => {
            return <PricingCard key={index} data={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
