import React from "react";
import Pricing from "../components/sections/Pricing";
import Faqs from "../components/sections/Faqs";
const faqData = [
  {
    question: "What are the different pricing plans for GetNotify?",
    answer:
      "GetNotify offers three pricing plans: Basic Plan (Free), Standard Plan (₹49/month), and Premium Plan (₹199/month). Each plan has different limits for WhatsApp, Telegram, Email, and Instagram reminders.",
  },
  {
    question: "How can I purchase a subscription?",
    answer:
      "You can subscribe by selecting a plan on the pricing page and completing the payment process via Razorpay or other supported payment methods.",
  },
  {
    question: "Can I change my plan after subscribing?",
    answer:
      "Yes, you can upgrade  your plan anytime through your account settings. Choose the plan that best fits your needs.",
  },
  {
    question: "What is the refund policy for GetNotify?",
    answer:
      "You can request a refund within 7 days of purchase by contacting our support team. Refunds are processed as per our Cancellation/Refund Policy.",
  },
  {
    question: "What happens if I exceed my reminder limit for the month?",
    answer:
      "If you exceed your monthly limit, reminders will not be sent until the next billing cycle or until you upgrade your plan for higher limits.",
  },
];

const PricingPage = () => {
  return (
    <main className="w-full px-6">
      <div>
        <h1 className="text-center pt-20 font-bold text-6xl text-main-purple">
          Pricing
        </h1>
        <p className="text-center text-purple-text font-normal mt-4">
          Home » Pricing
        </p>
        <Pricing />
        <Faqs faqsData={faqData} />
      </div>
    </main>
  );
};

export default PricingPage;
