import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" py-12 px-6">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to GetNotify! We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and protect your information when using our services.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect personal information such as your name, email address,
            phone number, and payment details when you sign up and use our
            services. We also gather usage data like IP addresses, device
            information, and browser types to enhance your experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use your information to provide reminders, process payments, and
            improve our services. Your data helps us deliver notifications via
            WhatsApp, Telegram, and email, while also ensuring seamless
            transactions through Razorpay.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Security
          </h2>
          <p className="text-gray-600 mb-4">
            All payments made via GetNotify are securely processed by Razorpay,
            which complies with industry-standard encryption to safeguard your
            financial data. We do not store your payment information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, update, or delete your personal
            information at any time. You can also opt-out of promotional
            communications or disable cookies via your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Changes to the Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. Changes will be
            communicated via our website, and your continued use of our services
            signifies your acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this policy, feel free to reach us:
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

export default PrivacyPolicy;
