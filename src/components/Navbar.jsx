import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="backdrop-blur-md bg-white/10 text-white shadow-sm 
                   flex justify-between items-center px-6 py-3 rounded-full z-50 mx-4 md:mx-10 mt-6 relative"
    >
      {/* Logo */}
      <Logo />
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 text-[20px] font-[400]">
        <Link
          to="/about"
          className="cursor-pointer hover:underline hover:text-cyan-300 transition-all duration-150"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer hover:underline hover:text-cyan-300 transition-all duration-150"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer hover:underline hover:text-cyan-300 transition-all duration-150"
        >
          Join Us
        </Link>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <Link to="/join-us">
          <button className="bg-[#23D9E9] cursor-pointer hover:bg-cyan-400 text-black text-[25px] font-600 px-4 py-1.5 rounded-full shadow h-[55px] w-[165px]">
            Career
          </button>
        </Link>
        <Link to="/apps">
          <button className="bg-white/70 cursor-pointer text-black text-[25px] font-600 px-4 py-1.5 rounded-full shadow h-[55px] w-[165px]">
            App
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-3xl text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] right-0 w-full my-5 bg-gradient-to-t from-[#88EDF6] to-[#EDEDED] text-black rounded-xl shadow-lg px-6 py-4 flex flex-col text-center items-center gap-4 text-[18px] font-medium md:hidden z-50 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className=" hover:underline w-full"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className=" hover:underline w-full"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className=" hover:underline w-full"
          >
            FAQs
          </Link>
          <Link
            to="/join-us"
            onClick={() => setIsOpen(false)}
            className=" hover:underline w-full"
          >
            Career
          </Link>
          <Link
            to="/apps"
            onClick={() => setIsOpen(false)}
            className=" hover:underline w-full"
          >
            Apps
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
