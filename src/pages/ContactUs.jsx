import React from "react";
import envelope from "../assets/envelopeIcon.png";
import phone from "../assets/phoneIcon.png";
//import logo from "../assets/logo.png";
import FAQSection from "../components/FAQSection";
import JoinUsFooter from "../components/JoinUsFooter";
import Navbar2 from "../components/Navbar2";
const ContactUs = () => {
  return (
    <section className="min-h-screen px-6 md:px-10 py-10 text-gray-800">
      {/**Navbar */}
      <div className="text-gray-700">
        <Navbar2 />
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-[#360753] to-[#723D93] text-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left Contact Info */}
        <div className="space-y-4 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[32px] md:text-[80px] font-400">Contact us</h2>
          <p className="text-[18px] md:text-[30px] text-gray-300">
            Not sure what you need? The team at <strong>HelpingMBBS</strong>{" "}
            will be happy to listen to you
          </p>
          <div className="space-y-4 mt-10 md:mt-20">
            <p className="flex items-center justify-center md:justify-start text-[18px] md:text-[30px] text-gray-300 gap-2">
              <img src={envelope} className="h-6 md:h-9" />{" "}
              helpingmbbs@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start text-[18px] md:text-[30px] text-gray-300 gap-2">
              <img src={phone} className="h-6 md:h-9" /> +91 8825404647
            </p>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="bg-white text-gray-800 rounded-2xl p-6 md:p-10 space-y-6 md:space-y-8 w-full md:w-[700px] shadow-md">
          <h3 className="text-[24px] md:text-[60px] font-semibold text-center md:text-left">
            We’d love to hear <br className="hidden md:block" /> from you!
          </h3>
          <label className="text-[18px] md:text-[30px] text-gray-600 font-400">
            Full Name
          </label>
          <input
            type="text"
            className="w-full h-12 md:h-15 border border-gray-500 rounded-md px-4 py-2"
          />
          <label className="text-[18px] md:text-[30px] text-gray-600 font-400">
            Email
          </label>
          <input
            type="email"
            className="w-full h-12 md:h-15 border border-gray-500 rounded-md px-4 py-2"
          />
          <label className="text-[18px] md:text-[30px] text-gray-600 font-400">
            Your Message
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-500 rounded-md px-4 py-2"
          />
          <button
            type="submit"
            className="bg-[#5C297B] text-white text-[18px] md:text-[30px] px-4 py-2 rounded-2xl hover:bg-purple-800 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <FAQSection />
      {/*Footer */}
      <JoinUsFooter />
    </section>
  );
};

export default ContactUs;
