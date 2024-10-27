import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import OrangeButton from "../common/OrangeButton";
import { GrSend } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import validEmail from "../../utils/validEmail";
import { RiLoader2Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import axios from "axios";

const footerLinks = (data) => {
  return (
    <>
      <p className="text-xl font-bold tracking-normal bg-clip-text mb-10">
        {data.heading}
      </p>
      <ul className="flex flex-col gap-3">
        {data.links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link} className="text-lg">
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const usefulLinks = {
  heading: "Useful Links",
  links: [
    { text: "Home", link: "/" },
    { text: "About us", link: "/about-us" },
    { text: "Pricing", link: "/pricing" },
    { text: "Contact Us", link: "/contact-us" },
  ],
};

const helpAndSupport = {
  heading: "Help & Support",
  links: [
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms & Conditions", link: "/terms-conditions" },
    { text: "Cancellation/Refund Policies.", link: "/cancellation-refund" },
    { text: "Faqs", link: "/faq" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!validEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
    setBtnDisabled(true);
    setInputDisabled(true);
    setLoading(true);

    await axios
      .post("/api/subscribe", {
        email,
      })
      .finally(() => {
        setSucess(true);
        setLoading(false);
        setInputDisabled(false);
        setEmail("");
        setTimeout(() => {
          setBtnDisabled(false);
          setSucess(false);
        }, 3000);
      });
  }

  return (
    <footer className="relative bg-darker-purple w-full mt-20">
      <div>
        <div className="grid 2xl:grid-cols-[auto_auto_auto_auto] md:grid-cols-[1fr_1fr] 2xl:justify-between justify-center w-full 2xl:gap-1 gap-20  p-6 max-w-7xl mx-auto pt-32 text-white/95 my-20">
          <div className="flex flex-col w-fit justify-self-end  gap-10 md:max-w-72 max-w-full">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                className="w-8"
                alt="logo select-none"
                draggable="false"
              />
              <p className="text-3xl font-extrabold tracking-tighter bg-clip-text">
                <span>
                  <span>Get</span> <span>Notify</span>
                </span>
              </p>
            </div>
            <p>
              GetNotify helps you stay on top of important tasks and messages
              with reminders sent through WhatsApp, Telegram, email, and more!
            </p>
            <div>
              <div className="bg-white w-full grid grid-cols-[1fr_auto] p-2 rounded gap-2">
                <input
                  type="email"
                  value={email}
                  disabled={inputDisabled}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="text-black focus:outline-none w-full h-full"
                />
                <button
                  disabled={btnDisabled}
                  onClick={handleClick}
                  className="bg-og p-2 rounded text-white"
                >
                  {loading ? (
                    <RiLoader2Line className="animate-spin" />
                  ) : sucess ? (
                    <TiTick />
                  ) : (
                    <GrSend />
                  )}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  Invalid Email Address
                </p>
              )}
            </div>
          </div>
          <div className="w-fit ">{footerLinks(usefulLinks)}</div>
          <div className="w-fit md:justify-self-end md:mr-10 mr-0 justify-self-start">
            {footerLinks(helpAndSupport)}
          </div>
          <div className="md:w-fit w-full">
            <p className="text-xl font-bold tracking-normal bg-clip-text mb-10">
              Contact us
            </p>
            <div>
              <div className="flex items-center gap-3 mt-4 font-medium text-white">
                <div>
                  <div className="w-fit h-fit border border-white/30 rounded-full p-3">
                    <TfiLocationPin />
                  </div>
                </div>
                <div>
                  <p>Reach us</p>
                  <p>Bhiwani, Haryana</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 font-medium text-white">
                <div>
                  <div className="w-fit h-fit border border-white/30 rounded-full p-3">
                    <FaWhatsapp />
                  </div>
                </div>
                <div>
                  <p>Whatsapp</p>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 font-medium text-white">
                <div>
                  <div className="w-fit h-fit border border-white/30 rounded-full p-3">
                    <MdOutlineMailOutline />
                  </div>
                </div>
                <div>
                  <p>Mail us</p>
                  <p>getnotify@sandeeprajput.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-[1fr_auto]  xl:w-[90%] w-[710px] xl:max-w-6xl max-w-[90%] mx-auto absolute -top-20 left-1/2 -translate-x-1/2 bg-main-purple rounded-xl md:p-10 p-5 shadow-main-purple md:gap-0 gap-5">
          <div className="flex flex-col md:gap-2">
            <p className="xl:text-3xl md:text-xl text-lg md:text-start text-center font-bold text-white">
              Need support ? contact our team
            </p>
            <div className="flex items-center md:justify-start justify-center gap-2 font-semibold text-white md:text-sm text-xs ">
              <IoTimeOutline /> Mon - Fri: 9 am to 5 am
            </div>
          </div>
          <div className="flex flex-col items-center">
            <OrangeButton
              handleClick={() => {
                window.location.href = "mailto:getnotify@sandeeprajput.in";
              }}
              className="xl:text-base md:text-sm text-xs"
            >
              getnotify@sandeeprajput.in
            </OrangeButton>
            <p className="text-xs mt-2 underline text-center text-white">
              Read The FAQ
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/15 h-[0.1px]"></div>
      <div>
        <p className="text-center text-white text-sm py-4">
          © Copyrights 2024 GetNotify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
