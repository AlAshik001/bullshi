import React from "react";
import aboutBullet1 from "../assets/aboutBullet1.png";
import aboutBullet2 from "../assets/aboutBullet2.png";
import aboutBullet3 from "../assets/aboutBullet3.png";
import aboutPhone1 from "../assets/aboutPhone1.png";
import aboutPhone2 from "../assets/aboutPhone2.png";
import bullet1 from "../assets/bullet1.png";
import JoinUsFooter from "./JoinUsFooter";
import aboutFootImg from "../assets/aboutFootImg.jpg";

const AboutBody = () => {
  return (
    <section className="px-10 md:px-10 lg:px-10 py-12 space-y-16">
      {/* Our Services */}
      <div className="flex items-start gap-5 md:gap-10 md:px-10">
        <div className="rounded-full w-[150px] bg-[#88EDF6] mt-12 md:mt-10">
          <img
            src={aboutBullet1}
            className="w-50 md:w-25 md:p-2 p-1 opacity-80"
          />
        </div>
        <div>
          <h3 className="text-[25px] md:text-[45px] font-bold md:mb-8 text-gray-800">
            Our Services
          </h3>
          <p className="text-gray-600 text-[18px] md:text-[25px] mt-1">
            We would like to lend the helping hand in the process of clearing
            all the{" "}
            <span className="text-blue-600 cursor-pointer">19 subjects</span>{" "}
            through the four-year course. Video lectures on each topic of
            preferable subjects at your comfortable time on your fingertips!
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex items-start gap-5 md:gap-10 md:px-10">
        <div className="rounded-full w-[60px]  md:w-[100px] bg-[#88EDF6] mt-12 md:mt-10">
          <img
            src={aboutBullet2}
            className="w-50 md:w-25 md:p-3 p-1 opacity-80"
          />
        </div>
        <div>
          <h3 className="text-[25px] md:text-[45px] font-bold md:mb-8 text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-600 text:[18px] md:text-[25px] mt-1">
            Guide through your difficulties and challenges of competency-based
            medical education.
          </p>
        </div>
      </div>

      {/* How to use the app */}
      <div className="flex items-start gap-5 md:gap-10 md:px-10">
        <div className="rounded-full md:w-[100px] bg-[#88EDF6] mt-12 md:mt-10">
          <img
            src={aboutBullet3}
            className="w-15 md:w-25 md:p-3 p-1 opacity-70"
          />
        </div>
        <div>
          <h3 className="text-[25px] md:text-[45px] mb:mb-8 font-bold text-gray-800">
            How to use the app
          </h3>
          <div className="mt-2 md:space-y-10 text-[18px] md:text-[25px] text-gray-600">
            <div className="flex flex:col gap-3">
              <img src={bullet1} className="h-3 md:h-6 mt-2 opacity-70" />
              <span>Log in with your personal credentials</span>
            </div>
            <div className="flex flex:col gap-3">
              <img src={bullet1} className="h-3 md:h-6 mt-2 opacity-70" />
              <span>Enter the subject and topic name of your choice</span>
            </div>
            <div className="flex flex:col gap-3">
              <img src={bullet1} className="h-3 md:h-6 mt-2 opacity-70" />
              <span>Select your favourite lecturer</span>
            </div>
            <div className="flex flex:col gap-3">
              <img src={bullet1} className="h-3 md:h-6 mt-2 opacity-70" />
              <span>Book your slot with date and time through online chat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 text-center">
        <div>
          <h4 className="font-semibold text-[25px] md:text-[45px] text-gray-800 mb-5">
            Make your <br></br> Profile Now!
          </h4>
          <div className="bg-[#006B66] rounded-2xl mx-auto md:h-[350px] md:w-[300px]">
            <img
              src={aboutPhone1}
              alt="Profile screen"
              className="h-90 md:h-100 object-cover overflow-hidden "
            />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[25px] md:text-[45px] text-gray-800 mb-4">
            Create your <br></br> Account Now!
          </h4>
          <div className="bg-[#006B66] rounded-2xl mx-auto md:pt-8 md:h-[350px] md:w-[300px]">
            <img
              src={aboutPhone2}
              alt="Account screen"
              className="mx-auto rouded-2xl py-2 w-40 h-60 md:w-50 md:h-70 "
            />
          </div>
        </div>
      </div>
      {/*Footer*/}
      <JoinUsFooter />
      {/*Footer Image */}
      <img
        src={aboutFootImg}
        className="w-full md:h-[500px] rounded-3xl object-cover"
      />
    </section>
  );
};

export default AboutBody;
