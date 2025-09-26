import React from "react";
import aboutHero from "../assets/aboutHero.png";
import Aicon from "../assets/Aicon.png";
import Navbar2 from "./Navbar2";

const AboutHeader = () => {
  return (
    <section className="relative">
      {/* Navbar */}
      <div className="md:px-10 text-gray-700">
        <Navbar2 />
      </div>

      {/* Header Image & Title */}
      <div className="relative bg-gradient-to-b from-[#7AEDF8] to-[#F0EDED] md:px-6 mx-6 rounded-2xl">
        <img
          src={aboutHero}
          alt="Smiling doctor"
          className="mx-auto max-h-[600px] px-6 relative z-10  object-contain"
        />
        {/* Text */}
        <h1 className="absolute top-1/4 left-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold text-black">
          <div className="  flex flex-row text-[60px] md:text-[150px]">
            <img src={Aicon} className="mt-25 h-15 md:h-30" />
            <div className="mt-25 md:mt-20">bout Us</div>
          </div>
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-center text-[20px] md:text-[45px] mt-6 font-800 text-gray-800 mx-6 px-4">
        Too many books both Indian and foreign to be covered within a short
        period of time... clinical postings and theory classes taking our
        time... “CBME” stressed out?
      </p>
    </section>
  );
};

export default AboutHeader;
