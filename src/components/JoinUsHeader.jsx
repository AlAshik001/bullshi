import React from "react";
import bgImage from "../assets/aboutHeader.jpg";
import Navbar2 from "./Navbar2";

const JoinUsHeader = () => {
  return (
    <header
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />
      {/* Navbar */}
      <div className="text-white md:px-10">
        <Navbar2 />
      </div>
      {/* Center Text */}
      <div className="relative z-10 flex md:pt-30 items-start justify-center h-full">
        <h1 className="text-white text-5xl md:text-[120px] font-bold drop-shadow-lg">
          Join to us<span className="text-white">!</span>
        </h1>
      </div>
    </header>
  );
};

export default JoinUsHeader;
