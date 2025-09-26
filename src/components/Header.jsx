import React from "react";
import doctorImage from "../assets/doc.hero.home.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="relative  text-white h-auto mb-15 md:h-[700px] overflow-hidden">
        {/* Navbar*/}
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-full pr-0 md:pr-[520px]">
          <div className="flex-1 bg-[#06033D] pt-40 pb-25 md:pt-[250px] px-6 md:px-12 md:rounded-br-3xl md:rounded-tr-3xl h-full">
            <p className="text-[20px] md:text-[45px] text-[#23D9E9] leading-relaxed font-500">
              Welcome to “Helping MBBS.com” we take immense pleasure in helping
              you in your journey to achieve the milestone “MBBS”.
            </p>
          </div>
          {/* Image */}
          <div className="hidden md:block absolute right-0 top-0 h-full z-10">
            <img
              src={doctorImage}
              alt="Doctor studying"
              className="h-full object-cover w-[500px] rounded-bl-3xl rounded-tl-3xl"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
