import React from "react";
import fotImg from "../assets/fotImg1.jpg";
import instaLogo from "../assets/instaLogo.png";
import fbLogo from "../assets/fbLogo.png";
import xLogo from "../assets/xLogo.png";

const Footer = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-8">
      <div className="mx-4 md:mx-10">
        <h1 className="text-[40px] md:text-[80px] font-500 mb-8 md:mb-16 text-center md:text-left">
          Contact us
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center lg:items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-start">
            <div className="rounded-lg overflow-hidden">
              <img
                src={fotImg}
                alt="Team meeting"
                className="w-[90%] mx-auto md:w-[450px] h-auto md:h-[550px] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-1/2">
            <p className="text-[18px] md:text-[25px] font-600 text-gray-600 mb-8 md:mb-12 py-6 text-center leading-relaxed border-b border-gray-300">
              If you have any questions or any general enquiries
              <br className="hidden md:block" />
              contact us with these platforms
            </p>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              {/* General Enquiries */}
              <div className="flex-1 px-2 md:pl-4">
                <h3 className="text-[18px] md:text-[20px] font-600 text-gray-800 mb-4 md:mb-6">
                  General Enquiries
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-[16px] md:text-[18px] font-800 text-gray-600">
                      Email
                    </h4>
                    <p className="text-gray-600 font-600 text-[15px] md:text-[16px]">
                      helpingmbbs@gmail.com
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[16px] md:text-[18px] font-800 text-gray-600">
                      Phone
                    </h4>
                    <p className="text-gray-600 font-600 text-[15px] md:text-[16px]">
                      +91 8825404647
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-200"></div>

              {/* Social Media */}
              <div className="flex-1 px-2">
                <h3 className="text-[18px] md:text-[20px] font-600 text-gray-800 mb-4 md:mb-6">
                  Social Media
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={instaLogo}
                      alt="Instagram"
                      className="h-[20px] w-[20px] opacity-60"
                    />
                    <span className="text-gray-600 text-[15px] md:text-[16px]">
                      Instagram
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={fbLogo}
                      alt="Facebook"
                      className="h-[20px] w-[20px] opacity-60"
                    />
                    <span className="text-gray-600 text-[15px] md:text-[16px]">
                      Facebook
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={xLogo}
                      alt="Twitter"
                      className="h-[20px] w-[20px] opacity-60"
                    />
                    <span className="text-gray-600 text-[15px] md:text-[16px]">
                      Twitter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
