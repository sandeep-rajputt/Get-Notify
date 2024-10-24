import React, { useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, SetLoading] = useState(false);
  const [sucess, setSucess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
      console.log("Form submitted:", {
        name,
        email,
        subject,
        website,
        message,
      });
      setName("");
      setEmail("");
      setSubject("");
      setWebsite("");
      setMessage("");
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 5000);
    }, 2000);
  }

  return (
    <section className="bg-white rounded-lg py-10 w-full mb-10 px-3 shadow-main-purple/95">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-5xl font-bold mb-4 text-dark-purple">
          Leave a message
        </h2>
        <p className="text-center text-purple-text mb-8 max-w-xl">
          Fill up form below, our team will get back soon
        </p>
      </div>
      <form
        className="grid grid-cols-[1fr_1fr] items-center mt-5 max-w-4xl w-full mx-auto gap-y-10 gap-x-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="font-medium px-5 py-4 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-medium px-5 py-4 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="font-medium px-5 py-4 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="font-medium px-5 py-4 placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full"
          />
        </div>
        <div className="w-full col-span-2 ">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="font-medium px-5 py-4  placeholder-gray-600 text-purple-950 border-2 rounded-md border-main-purple/20 focus:border-main-purple focus:outline-none w-full resize-none"
          />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <button
            className={`flex items-center gap-2 bg-gradient-to-r from-[#FF7438] to-[#FF8B59] px-8 py-2 text-base text-white font-semibold rounded-full group w-fit`}
          >
            Send Message
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              <TiArrowRightThick className="transition-transform duration-300 transform group-hover:rotate-0 -rotate-45" />
            )}
          </button>
          {sucess && (
            <p className="text-center mt-5 text-green-500">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
