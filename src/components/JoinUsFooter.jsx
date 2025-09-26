import React from "react";
import logo from "../assets/logo.png";

const JoinUsFooter = () => {
  return (
    <footer className="bg-white py-5 md:py-10 my-5 px-6 md:px-10 text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Logo & Title */}
        <div className="flex items-start gap-3">
          <img
            src={logo}
            alt="Helping MBBS Logo"
            className="w-[40px] h-[30px] md:w-[60px] md:h-[40px]"
          />
          <span className="text-[20px] md:text-[30px] font-400 ">
            Helping MBBS
          </span>
        </div>

        {/* Important Links */}
        <div className="text-center md:text-center space-y-4">
          <h4 className="text-20px md:text-[30px] font-400 ">
            Important Links
          </h4>
          <ul className="space-y-4 text-[15px] md:text-[20px] text-gray-600">
            <li>
              <a href="#app" className="hover:text-gray-800">
                App
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-800">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-center space-y-4">
          <div className="text-[20px] md:text-[30px] font-400">
            Contact Info
          </div>
          <div className="space-y-4 text-[15px] md:text-[20px] text-gray-600">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              helpingmbbs@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 8825404647
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JoinUsFooter;
