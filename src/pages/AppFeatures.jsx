import React from "react";
import bullet1 from "../assets/bullet1.png";
import bullet2 from "../assets/bullet2.png";
import playStore from "../assets/playStoreImg.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import JoinUsFooter from "../components/JoinUsFooter";
import Navbar2 from "../components/Navbar2";

const AppFeatures = () => {
  return (
    <section className="px-4 md:px-10 py-10 relative">
      {/* Navbar */}
      <div className="text-gray-700">
        <Navbar2 />
      </div>

      {/* Play Store */}
      <div className="mt-5 md:mt-20 items-center md:px-100 md:mx-35 px-25 gap-6 mb-12  ">
        <img
          src={playStore}
          alt="Get it on Google Play"
          className="h-[80px] md:h-[130px]"
        />
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row items-center justify-around my-12 gap-8 md:text-center ">
        <img src={phone1} alt="App screen" className="w-60 md:w-200" />
        <div className="space-y-7 max-w-md mx-5 md:mr-30">
          <h2 className="text-[28px] md:text-[65px] text-gray-800 text-center font-bold">
            Helping MBBS
          </h2>
          <p className="flex items-start gap-2 text-[18px] md:text-[30px] text-gray-600">
            <img src={bullet1} className="mt-2 w-3 md:w-7 opacity-70" />
            Breaking complex topics into easy concepts to understand
          </p>
          <p className="flex items-start gap-2 text-[18px] md:text-[30px] text-gray-600">
            <img src={bullet1} className="mt-2 w-3 md:w-7 opacity-70" />
            Read up challenging subjects with one-to-one discussion with your
            favorite lecturer
          </p>
          <p className="flex items-start gap-2 text-[18px] md:text-[30px] text-gray-600">
            <img src={bullet1} className="mt-2 w-3 md:w-7 opacity-70" />
            It's Time saving and student-friendly
          </p>
        </div>
      </div>

      {/* Classes */}
      <div className="flex flex-col md:flex-row md:ml-30 items-center justify-around mb-16 md:text-center  gap-8">
        <div className="space-y-6 max-w-md mx-5 ">
          <h2 className="text-[28px] md:text-[65px] text-gray-800 text-center font-bold">
            Classes
          </h2>
          <p className="flex items-start gap-2 text-[18px] md:text-[30px] text-gray-600">
            <img src={bullet2} className="mt-2 w-3 md:w-7 opacity-70" />
            <span>
              <strong>15 minutes class</strong>: Small topics with flow charts,
              exam oriented discussions
            </span>
          </p>
          <p className="flex items-start gap-2 text-[18px] md:text-[30px] text-gray-600">
            <img src={bullet2} className="mt-2 w-3 md:w-7 opacity-70" />
            <span>
              <strong>30 minutes class</strong>: Bigger topics with complex
              concepts for detailed discussion
            </span>
          </p>
        </div>
        <img src={phone2} alt="Class screen" className="w-60 md:w-200" />
      </div>

      {/* Callout */}
      <div className="text-[22px] md:text-[45px] text-gray-700 font-bold mb-16 text-center px-4">
        Important exam questions <br />
        and core concepts revision
      </div>

      {/* Footer */}
      <JoinUsFooter />
    </section>
  );
};

export default AppFeatures;
