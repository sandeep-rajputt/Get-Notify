import React from "react";
import OrangeButton from "../common/OrangeButton";
import { Link } from "react-router-dom";

const PcHeader = () => {
  return (
    <div className="flex items-center gap-4 text-purple-text">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/" href="#" className="px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" href="#" className="px-4 py-2">
              About us
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="px-4 py-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/faq" className="px-4 py-2">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="px-4 py-2">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <OrangeButton shine={true}>TRY IT FREE</OrangeButton>
      </div>
    </div>
  );
};

export default PcHeader;
