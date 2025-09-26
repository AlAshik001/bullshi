import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-6 px-4 md:px-0 relative">
      {/* Top row */}
      <div className="flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Helping MBBS Logo"
            className="w-15 md:w-30 md:mt-3 h-auto"
          />
          <div className={`text-[25px] md:text-[60px] md:font-bold`}>
            Helping MBBS
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-20 text-sm md:text-[30px] underline underline-offset-4  font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About us
          </Link>
          <Link to="/join-us" className="hover:underline">
            Career
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-3xl ">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center w-full bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0]  rounded-lg py-4 px-6 flex flex-col space-y-4 text-[20px] font-medium text-gray-600 absolute right-0  top-16 z-50 ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About us
          </Link>
          <Link
            to="/join-us"
            onClick={() => setIsOpen(false)}
            className="hover:underline underline-offset-4"
          >
            Career
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
