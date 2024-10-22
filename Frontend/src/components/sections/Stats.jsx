import React from "react";

const Stats = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl text-dark-purple font-bold leading-tight  ">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-purple-text md:mt-8">
            GetNotify helps you stay on top of important reminders,
            notifications, and tasks—keeping your life organized and
            stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                450+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Reminder sent
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Each month across all platforms
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                20+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Users worldwide
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Trusting us to keep their lives organized
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                6k+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Reminders Sent
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Every day, we help people stay on top of their tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
