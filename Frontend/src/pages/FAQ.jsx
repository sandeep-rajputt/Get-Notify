import React from "react";
import Faqs from "../components/sections/Faqs";

const faqData = [
  {
    question: "What is GetNotify?",
    answer:
      "GetNotify is a reminder and notification service that helps you stay organized by sending timely reminders through WhatsApp, Email, Telegram, and more. It's perfect for personal or business use, allowing you to manage important tasks and events efficiently.",
  },
  {
    question: "How do I sign up for GetNotify?",
    answer:
      "You can sign up for GetNotify by providing your name, email, and creating a password. Once registered, you can add your WhatsApp, Telegram, Email, and other accounts to receive reminders across multiple platforms.",
  },
  {
    question: "What platforms are supported for reminders?",
    answer:
      "GetNotify supports reminders through WhatsApp, Email, Telegram, and Instagram. You can also integrate other platforms in the future as we continue expanding our services.",
  },
  {
    question: "Can I schedule recurring reminders?",
    answer:
      "Yes, with GetNotify, you can schedule daily, weekly, or monthly recurring reminders. This feature is available in all plans.",
  },
  {
    question: "Is GetNotify secure?",
    answer:
      "Yes, GetNotify uses encrypted communication and follows industry-standard security practices to protect your personal data and ensure secure reminder transmissions.",
  },
  {
    question: "How can I contact support for issues?",
    answer:
      "You can contact our support team by emailing contact@getnotify.in or filling out the contact form on the website. Our team is available from Mon - Fri: 9 am to 5 pm for assistance.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, if you're not satisfied with the service, you can request a refund within 7 days of purchasing a plan. Please contact our support team to initiate the refund process.",
  },
  {
    question: "How do I upgrade  my plan?",
    answer:
      "You can easily upgrade  your plan through your account settings. Choose the plan that best fits your needs, whether it’s for more reminders or advanced features.",
  },
  {
    question: "How can I manage my reminder limits?",
    answer:
      "Your plan comes with different reminder limits. If you exceed your limit, you can either wait for the next billing cycle or upgrade your plan to a higher tier to continue sending reminders.",
  },
  {
    question: "Is there a mobile app for GetNotify?",
    answer:
      "Currently, GetNotify is a web-based service, but we are working on a mobile app for both Android and iOS to provide more convenience for our users.",
  },
];

const FAQ = () => {
  return (
    <main className="w-full px-6">
      <div>
        <h1 className="text-center pt-20 font-bold text-6xl text-main-purple">
          FAQ
        </h1>
        <p className="text-center text-purple-text font-normal mt-4">
          Home » FAQ
        </p>

        <Faqs faqsData={faqData} />
      </div>
    </main>
  );
};

export default FAQ;
