import React from "react";
import SignupForm from "../components/forms/SignupForm";

const Signup = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
      <div className="max-w-md w-full space-y-8 z-10">
        <div>
          <img
            className="mx-auto h-12 w-auto select-none"
            draggable="false"
            src="/logo.svg"
            alt="Brix Templates"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-text">
            Sign up for Get Notify
          </h2>
          <p className="mt-2 text-center text-sm text-purple-text/70">
            Stay on top of important reminders and never miss a notification.
            Manage your tasks effortlessly and receive updates directly through
            WhatsApp, Telegram, email, and more.
          </p>
        </div>
        <SignupForm />
      </div>
      <img
        src="/color.svg"
        draggable="false"
        alt=""
        className="absolute top-0 -left-1/2 w-full z-0"
      />
      <img
        src="/color.svg"
        draggable="false"
        alt=""
        className="absolute -bottom-10 left-1/2 w-full z-0"
      />
    </div>
  );
};

export default Signup;
