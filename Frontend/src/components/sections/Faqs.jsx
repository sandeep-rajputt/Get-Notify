import React, { useState } from "react";
import FaqBox from "../common/FaqBox";
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

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  function toggle(index) {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  return (
    <section className="py-20 px-10">
      <div>
        <h2 className="text-center text-5xl font-bold mb-4 text-dark-purple">
          FAQ - Frequently Asked Questions
        </h2>
        <p className="mx-auto text-purple-text mb-20 max-w-2xl text-center">
          GetNotify aims to provide you with all the information you need. Here
          are some common questions we receive from our users. If you have any
          additional inquiries, feel free to reach out!
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {faqsData.map((faq, index) => {
          return (
            <FaqBox
              key={index}
              data={faq}
              toggle={toggle}
              index={index}
              selected={selected === index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
