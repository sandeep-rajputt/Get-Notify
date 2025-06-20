import React from "react";

const TermsConditions = () => {
  return (
    <div className=" py-12 px-6">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Terms & Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to GetNotify! By signing up for our services, you agree to
            comply with the terms outlined in this document. Please read them
            carefully before proceeding with registration.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Account Creation
          </h2>
          <p className="text-gray-600 mb-4">
            When you sign up on GetNotify, you are required to provide your
            name, email address, and create a password. This information is used
            for account management and to ensure you receive notifications
            accurately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Personal Information
          </h2>
          <p className="text-gray-600 mb-4">
            After signing up, you may add additional personal details like your
            WhatsApp number, Telegram ID, email, or Instagram ID. These are used
            to send reminders and notifications across these platforms. We
            respect your privacy and ensure that all information you provide is
            kept confidential.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Payment & Refunds
          </h2>
          <p className="text-gray-600 mb-4">
            Payments for our services are processed securely via Razorpay. If
            you have any issues or require a refund, please contact our team
            using the{" "}
            <a href="/contact-us" className="text-blue-600">
              Contact Us
            </a>{" "}
            form or via email at{" "}
            <a
              href="mailto:contact@getnotify.in"
              className="text-blue-600"
            >
              contact@getnotify.in
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            5. User Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">
            You are responsible for keeping your login information safe and
            ensuring your account details are up to date. Any misuse or
            unauthorized access should be reported immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            6. Changes to the Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to update these terms at any time. Any changes
            will be communicated via our website or email. Continued use of the
            service implies your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            7. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For any questions or concerns about these terms, feel free to
            contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Email:{" "}
              <a
                href="mailto:contact@getnotify.in"
                className="text-blue-600"
              >
                contact@getnotify.in
              </a>
            </li>
            <li>Phone: +91 1234567890</li>
            <li>Address: Delhi, India</li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} GetNotify. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
