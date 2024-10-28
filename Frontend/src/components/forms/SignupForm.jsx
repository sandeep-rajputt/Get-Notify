import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [characters8, setcharacters8] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [textRed, setTextRed] = useState(false);
  const [remberme, setRemeberme] = useState(true);
  const [subscribe, setSubscribe] = useState(true);
  const [error, setError] = useState("");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setcharacters8(e.target.value.length >= 8);
    setUppercase(e.target.value.match(/[A-Z]/));
    setLowercase(e.target.value.match(/[a-z]/));
    setNumber(e.target.value.match(/[0-9]/));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!characters8 || !uppercase || !lowercase || !number) {
      setTextRed(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md text-purple-text bg-white base:p-10 p-5 shadow-main-purple/95 rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium  mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="font-medium px-3 py-2 placeholder-gray-600/50 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium  mb-1">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-medium px-3 py-2 placeholder-gray-600/50 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          placeholder="Email address"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          className="font-medium px-3 py-2 placeholder-gray-600/50 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          placeholder="Password"
          required
        />
      </div>
      <div className="mb-4">
        <ul>
          <li
            className={`text-sm ${
              characters8
                ? "text-main-purple/90"
                : textRed
                ? "text-red-500"
                : "text-main-purple/50"
            }`}
          >
            At least 8 characters
          </li>
          <li
            className={`text-sm ${
              uppercase
                ? "text-main-purple/90"
                : textRed
                ? "text-red-500"
                : "text-main-purple/50"
            }`}
          >
            At least one uppercase letter
          </li>
          <li
            className={`text-sm ${
              lowercase
                ? "text-main-purple/90"
                : textRed
                ? "text-red-500"
                : "text-main-purple/50"
            }`}
          >
            At least one lowercase letter
          </li>
          <li
            className={`text-sm ${
              number
                ? "text-main-purple/90"
                : textRed
                ? "text-red-500"
                : "text-main-purple/50"
            }`}
          >
            At least one number
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            checked={remberme}
            onChange={(e) => setRemeberme(e.target.checked)}
            className="w-4 h-4 text-main-purple border-gray-300 rounded focus:ring-main-purple"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-purple-text/70"
          >
            Remember me
          </label>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="w-4 h-4 text-main-purple border-gray-300 rounded focus:ring-main-purple"
          />
          <label
            htmlFor="subscribe"
            className="ml-2 text-sm font-medium text-purple-text/70"
          >
            Subscribe to our newsletter
          </label>
        </div>
      </div>
      {error && (
        <p className="text-center text-xs my-5 text-red-500">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-main-purple shadow-main-purple text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin my-1" />
        ) : (
          "Sign up"
        )}
      </button>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-4">
          By signing up, you agree to our{" "}
          <Link
            to="/terms-conditions"
            className="text-main-purple hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            className="text-main-purple hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img
              src="/google.png"
              alt="Google"
              className="w-3.5 mr-2"
              draggable="false"
            />
            Google
          </button>
          <button
            type="button"
            className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img
              src="/github.png"
              alt="Github"
              className="w-3.5 mr-2"
              draggable="false"
            />
            Github
          </button>
        </div>
        <Link
          to="/login"
          className="mt-6 w-full inline-block text-sm text-center hover:underline"
        >
          Already have an account?
          <span className="text-main-purple">Sign in</span>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
