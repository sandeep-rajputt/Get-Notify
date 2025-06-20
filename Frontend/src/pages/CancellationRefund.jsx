import React from "react";

const CancellationRefund = () => {
  return (
    <div className=" py-12 px-6">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Cancellation & Refund Policies
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Cancellations
          </h2>
          <p className="text-gray-600 mb-4">
            At GetNotify, we value flexibility and customer satisfaction. If you
            wish to cancel your subscription, you can do so at any time by
            visiting your account settings or contacting our support team.
            Please note that cancellations will apply to the next billing cycle,
            and no prorated refunds will be provided for the remaining period of
            your active subscription.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Refund Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to provide a seamless experience with our services.
            However, if you are not satisfied with your purchase, refunds may be
            provided on a case-by-case basis under the following conditions:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>If a technical issue prevented you from using the service.</li>
            <li>If the service was not delivered as described.</li>
            <li>
              Refund requests must be submitted within 7 days of your purchase.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            To request a refund, please contact our support team at{" "}
            <a
              href="mailto:contact@getnotify.in"
              className="text-blue-600"
            >
              contact@getnotify.in
            </a>
            . Refunds are processed back to the original payment method.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Non-refundable Items
          </h2>
          <p className="text-gray-600 mb-4">
            The following items or services are not eligible for a refund:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Partial months of service.</li>
            <li>One-time setup fees.</li>
            <li>Discounted or promotional services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Payment Disputes
          </h2>
          <p className="text-gray-600 mb-4">
            If you believe there has been an error in billing or payment
            processing, please reach out to us immediately at{" "}
            <a
              href="mailto:contact@getnotify.in"
              className="text-blue-600"
            >
              contact@getnotify.in
            </a>
            . We will investigate the issue and work with you to resolve any
            payment disputes promptly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            5. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For any questions or concerns regarding cancellations, refunds, or
            payment processing, please contact our support team at:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
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
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} GetNotify. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefund;
