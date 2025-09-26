import React from "react";
import logo from "../assets/logo2.png";

const Logo = () => {
  return (
    <div className="text-[27px] md:text-[40px] font-[700] flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-[50px] w-[65.82px]" />
      Helping <span className="text-white">MBBS</span>
    </div>
  );
};

export default Logo;
