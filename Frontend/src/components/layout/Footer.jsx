import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import OrangeButton from "../common/OrangeButton";
import { GrSend } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

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
    { text: "Home", link: "#" },
    { text: "About us", link: "/about-us" },
    { text: "Pricing", link: "#" },
    { text: "Contact Us", link: "/contact-us" },
  ],
};

const helpAndSupport = {
  heading: "Help & Support",
  links: [
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms & Conditions", link: "#" },
    { text: "Cancellation/Refund Policies.", link: "#" },
    { text: "Faqs", link: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-darker-purple w-full mt-20">
      <div>
        <div className="flex justify-between w-full  p-6 max-w-7xl mx-auto pt-32 text-white/95 my-20">
          <div className="flex flex-col gap-10 max-w-72">
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
                  placeholder="Enter your email"
                  className="text-black focus:outline-none w-full h-full"
                />
                <button className="bg-og p-2 rounded text-white">
                  <GrSend />
                </button>
              </div>
            </div>
          </div>
          <div>{footerLinks(usefulLinks)}</div>
          <div>{footerLinks(helpAndSupport)}</div>
          <div>
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
        <div className="grid grid-cols-[1fr_auto] w-[90%] max-w-6xl mx-auto absolute -top-20 left-1/2 -translate-x-1/2 bg-main-purple rounded-xl p-10 shadow-main-purple">
          <div className="flex flex-col -gap-5">
            <p className="text-3xl font-bold text-white">
              Need support ? contact our team
            </p>
            <div className="flex items-center gap-2 mt-4 font-semibold text-white text-sm ">
              <IoTimeOutline /> Mon - Fri: 9 am to 5 am
            </div>
          </div>
          <div>
            <OrangeButton>getnotify@sandeeprajput.in</OrangeButton>
            <p className="text-sm mt-2 underline text-center text-white">
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
