import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white base:p-10 p-5 shadow-main-purple/95 rounded-md"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-medium px-3 py-2 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          placeholder="Email address"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="font-medium px-3 py-2 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-main-purple shadow-main-purple text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin my-1" />
        ) : (
          "Log in"
        )}
      </button>
      <div className="mt-4 text-center">
        <Link to="#" className="text-sm text-main-purple hover:underline">
          Forgot your password?
        </Link>
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
          to="/signup"
          className="mt-6 w-full inline-block text-sm text-center hover:underline"
        >
          Don&apos;t have an account?{" "}
          <span className="text-main-purple">Sign up</span>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
