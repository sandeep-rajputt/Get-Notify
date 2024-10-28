import React from "react";
import ContactUs from "../components/forms/ContactUs";

const Contact = () => {
  return (
    <main className="w-full px-6">
      <div>
        <h1 className="text-center pt-20 font-bold text-6xl text-main-purple">
          Contact Us
        </h1>
        <p className="text-center text-purple-text font-normal mt-4 mb-10">
          Home » Contact Us
        </p>
        <ContactUs />
      </div>
    </main>
  );
};

export default Contact;
