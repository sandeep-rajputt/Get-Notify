import React from "react";
import SignInForm from "../components/forms/SignInForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto select-none"
            draggable="false"
            src="/logo.svg"
            alt="Brix Templates"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Stay on top of important reminders and never miss a notification.
            Manage your tasks effortlessly and receive updates directly through
            WhatsApp, Telegram, email, and more.
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default Login;
