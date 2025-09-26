import React from "react";
import banImg1 from "../assets/banImg1.jpg";
import banImg2 from "../assets/banImg2.jpg";
import banImg3 from "../assets/banImg3.jpg";
import banImg4 from "../assets/banImg4.jpg";
import partImg1 from "../assets/partImg1.png";
import partImg2 from "../assets/partImg2.png";
import partImg3 from "../assets/partImg3.png";

const Banner = () => {
  return (
    <div className="md:my-20 px-[55px]">
      {/* Top section */}
      <div className="bg-gradient-to-b from-[#88EDF6] to-[#EDEDED] mx-auto rounded-3xl px-4 py-10 text-center">
        <h2 className="text-[20px] md:text-3xl font-bold text-black max-w-4xl mx-auto">
          The journey of a thousand miles begins with a single step, and the
          healing journey starts with a commitment to learning and serving.
        </h2>
        <p className="text-black font-300 text-[16px] md:text-[24px] mt-2 mb-8 md:mb-10">
          Sooner or later your work speaks for itself. ...
        </p>
        {/* Circular Highlights */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <div className="bg-[#FCE792] text-black font-[700] text-[11px] md:text-[13px] rounded-full px-3 py-3 w-[60px] h-[60px] md:w-[72px] md:h-[72px] flex items-center justify-center text-center">
            Live Sessions
          </div>
          <img
            src={banImg1}
            className="w-[80px] h-[80px] md:w-[150px] md:h-[140px] rounded-full object-cover"
            alt="Review 4.9 out of 5"
          />
          <img
            src={banImg2}
            className="w-[90px] h-[90px] md:w-[170px] md:h-[170px] rounded-full object-cover"
            alt="Doctor"
          />
          <img
            src={banImg3}
            className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] rounded-full object-cover"
            alt="Doctors"
          />
          <img
            src={banImg4}
            className="w-[90px] h-[90px] md:w-[170px] md:h-[170px] rounded-full object-cover"
            alt="Typing"
          />
          <div className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] bg-white rounded-full flex flex-col items-center justify-center text-[14px] md:text-[20px] font-400 shadow-md">
            50+
            <br />
            Doctors
          </div>
          <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-[#EE9BF9] text-black rounded-full flex items-center justify-center text-[11px] md:text-[13px] px-3 py-3 font-bold">
            Book your slots
          </div>
        </div>
      </div>

      {/* Scroll Down Info Bar */}
      {/* Scroll Down Info Bar */}
      <div className="relative mt-10 flex flex-col md:flex-row items-center justify-between bg-[#06033D] h-auto md:h-[100px] text-white rounded-2xl py-6 px-6 md:px-30 gap-4">
        {/* Left Info */}
        <div className="text-[16px] md:text-[20px] font-500 text-center md:text-left">
          Processing Timing (9 A.M. to 9 P.M.)
        </div>

        {/* Triangle + Scroll Text (centered) */}
        <div className="relative">
          <div
            className="w-0 h-0 
        border-l-[80px] md:border-l-[150px] border-l-transparent 
        border-r-[80px] md:border-r-[150px] border-r-transparent 
        border-t-[60px] md:border-t-[100px] border-t-[#68EE64] 
        relative flex items-center justify-center"
          >
            <div className="absolute top-[-50px] md:top-[-80px] left-1/2 -translate-x-1/2 text-black font-600 text-[16px] md:text-[24px] whitespace-nowrap">
              Scroll down
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-[16px] md:text-[20px] font-500 text-center md:text-right">
          <div>helpingmbbs@gmail.com</div>
          <div>+91 8825404647</div>
        </div>
      </div>

      {/* Participants */}
      <div className="mt-20 flex justify-center">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border-2 border-black bg-white">
          <div className="flex -space-x-4 md:-space-x-2">
            <img
              src={partImg1}
              className="w-[45px] md:h-[45px] rounded-full border"
              alt="User"
            />
            <img
              src={partImg2}
              className="w-[45px] h-[45px] rounded-full border"
              alt="User"
            />
            <img
              src={partImg3}
              className="w-[45px] h-[45px] rounded-full border"
              alt="User"
            />
            <div className="w-[45px] h-[45px] p-3 rounded-full bg-[#1B5A19] text-white flex items-center justify-center font-bold text-lg border-1 border-black">
              +
            </div>
          </div>
          <span className="ml-3 md:text-[18px] font-400">
            1000+ Participants
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
