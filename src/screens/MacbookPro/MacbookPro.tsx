import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const MacbookPro = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#", active: false },
    { label: "About Us", href: "#", active: true },
    { label: "Join Us", href: "#", active: false },
  ];

  const decorativeCircles = [
    { top: "top-[349px]", left: "left-[42px]", bg: "bg-[#ffffff80]" },
    { top: "top-[349px]", left: "left-[171px]", bg: "bg-[#ffffff66]" },
    { top: "top-[349px]", left: "left-[300px]", bg: "bg-[#ffffff4c]" },
    { top: "top-[349px]", left: "left-[429px]", bg: "bg-[#ffffff33]" },
    { top: "top-[480px]", left: "left-[42px]", bg: "bg-[#ffffff4c]" },
    { top: "top-[480px]", left: "left-[172px]", bg: "bg-[#ffffff33]" },
    { top: "top-[480px]", left: "left-[302px]", bg: "bg-[#ffffff1a]" },
    { top: "top-[611px]", left: "left-[42px]", bg: "bg-[#ffffff26]" },
  ];

  const serviceSteps = [
    {
      icon: "/mask-group.png",
      title: "Our Services",
      description:
        "we would like to lend the helping hand in the process of clearing all the 19 subjects through the four year course. Video lectures on each topic of preferrable subjects at your comfortable time on your finger tips!",
      highlightText: "19 subjects",
    },
    {
      icon: "/mask-group-1.png",
      title: "Our Mission",
      description:
        "Guide through your difficulties and challenges of competency based medical education.",
    },
    {
      icon: "/mask-group-2.png",
      title: "How to use the app",
      description: "",
    },
  ];

  const appSteps = [
    {
      icon: "/mask-group-3.png",
      text: "Log in with your personal credentials",
    },
    {
      icon: "/mask-group-4.png",
      text: "Enter the subject and topic name of your choice",
    },
    {
      icon: "/mask-group-5.png",
      text: "Select your favourite lecturer",
    },
    {
      icon: "/mask-group-6.png",
      text: "Book your slot with date and time through online chat",
    },
  ];

  const socialMediaIcons = [
    { icon: "/mask-group-12.png", label: "Instagram" },
    { icon: "/mask-group-10.png", label: "Facebook" },
    { icon: "/mask-group-11.png", label: "Twitter" },
  ];

  return (
    <div className="bg-[#e9f5ff] w-full min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute top-[302px] left-[2%] right-[2%] h-[842px] rounded-[25px] shadow-[0px_0px_15px_0.5px_#00000040] bg-[linear-gradient(136deg,rgba(33,129,216,0.25)_29%,rgba(226,246,255,0.25)_58%,rgba(14,112,201,0.05)_100%)]" />
      <div className="absolute top-[3511px] left-0 right-0 h-[994px] rounded-[25px] shadow-[0px_0px_15px_0.5px_#00000040] bg-[linear-gradient(136deg,rgba(33,129,216,0.25)_29%,rgba(226,246,255,0.25)_58%,rgba(14,112,201,0.05)_100%)]" />

      {/* Decorative circles */}
      {decorativeCircles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.top} ${circle.left} w-[130px] h-[130px] ${circle.bg} rounded-[65px]`}
        />
      ))}

      {/* Header Navigation */}
      <header className="absolute top-[57px] left-[4%] right-[4%] h-[120px] bg-[#bccbff] rounded-[75px] opacity-45">
        <div className="absolute top-[70px] left-[85px] w-[94px] h-[94px] rounded-[47px] bg-[linear-gradient(106deg,rgba(82,40,207,1)_16%,rgba(255,255,255,0.25)_50%,rgba(82,40,207,1)_90%)]">
          <img
            className="absolute w-[80.00%] h-[58.34%] top-[13.83%] left-[10.00%]"
            alt="Mask group"
            src="/mask-group-9.png"
          />
        </div>

        <div className="absolute top-[91px] left-[205px] w-[435px] [font-family:'Inter',Helvetica] font-medium text-black text-[40px] tracking-[0] leading-[normal]">
          Helping MBBS
        </div>

        <nav className="flex absolute top-[104px] left-[45%] gap-[120px]">
          <Link
            to="/"
            className="[font-family:'Inter',Helvetica] font-normal text-2xl tracking-[0] leading-[normal] text-[#0e70c9] hover:text-[#0e70c9] transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="#"
            className="[font-family:'Inter',Helvetica] font-normal text-2xl tracking-[0] leading-[normal] text-black hover:text-[#0e70c9] transition-colors cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="[font-family:'Inter',Helvetica] font-normal text-2xl tracking-[0] leading-[normal] text-black hover:text-[#0e70c9] transition-colors cursor-pointer"
          >
            Join Us
          </Link>
        </nav>

        <div className="absolute top-[78px] right-[85px] w-[79px] h-[78px] rounded-[39.5px/39px] bg-[linear-gradient(106deg,rgba(82,40,207,1)_16%,rgba(255,255,255,0.25)_50%,rgba(82,40,207,1)_90%)]" />
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute top-[349px] left-[40%] w-[466px] [font-family:'ABeeZee',Helvetica] font-normal text-[#1e6670] text-8xl tracking-[0] leading-[100px] whitespace-nowrap">
          About Us
        </div>

        <div className="absolute top-[796px] left-0 w-[463px] opacity-85 [font-family:'Berlin_Sans_FB-Regular',Helvetica] font-normal text-[#1e666f] text-5xl text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Why It Started?
        </div>

        <div className="absolute top-[890px] left-[70px] w-[977px] opacity-65 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#1e6670] text-4xl tracking-[0] leading-[35px]">
          Too many books both indian and foreign to be covered within a short
          period of time... clinical postings and theory classes taking our
          time..."CBME"stressed out?
        </div>

        <img
          className="absolute top-[391px] right-[5%] w-[641px] h-[753px] object-cover"
          alt="Download free png of"
          src="/download-free-png-of-png-indian-man-pointing-smiling-finger---by.png"
        />
      </section>

      {/* Services Section */}
      <section className="relative">
        {serviceSteps.map((service, index) => {
          const topPositions = ["top-[1406px]", "top-[1998px]", "top-[2447px]"];
          const iconTopPositions = [
            "top-[1500px]",
            "top-[2056px]",
            "top-[2642px]",
          ];
          const iconImageTopPositions = [
            "top-[1530px]",
            "top-[2088px]",
            "top-[2679px]",
          ];
          const contentTopPositions = [
            "top-[1502px]",
            "top-[2096px]",
            "top-[2602px]",
          ];

          return (
            <div key={`service-${index}`}>
              <div
                className={`${topPositions[index]} left-[214px] absolute w-[680px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-[64px] text-center tracking-[0] leading-[60px]`}
              >
                {service.title}
              </div>

              <div
                className={`absolute ${iconTopPositions[index]} left-[119px] w-[202px] h-[202px] bg-[#0e70c9] rounded-[101px]`}
              />

              <img
                className={`absolute ${iconImageTopPositions[index]} left-[156px] w-32 h-32`}
                alt="Mask group"
                src={service.icon}
              />

              {index === 0 && (
                <div
                  className={`absolute ${contentTopPositions[index]} left-[392px] w-[1280px] opacity-75 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[60px]`}
                >
                  <span className="text-[#555563]">
                    we would like to lend the helping hand in the process of
                    clearing all the{" "}
                  </span>
                  <span className="text-[#0629b3]">19 subjects</span>
                  <span className="text-[#555563]">
                    {" "}
                    through the four year course. Video lectures on each topic
                    of preferrable subjects at your comfortable time on your
                    finger tips!
                  </span>
                </div>
              )}

              {index === 1 && (
                <div
                  className={`absolute ${contentTopPositions[index]} left-[390px] w-[1135px] opacity-75 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-5xl tracking-[0] leading-[60px]`}
                >
                  Guide through your difficulties and challenges of competency
                  based medical education.
                </div>
              )}
            </div>
          );
        })}

        {/* App Usage Steps */}
        {appSteps.map((step, index) => {
          const topPositions = [
            "top-[2602px]",
            "top-[2766px]",
            "top-[2981px]",
            "top-[3143px]",
          ];
          const iconTopPositions = [
            "top-[2612px]",
            "top-[2776px]",
            "top-[2987px]",
            "top-[3153px]",
          ];

          return (
            <div key={`step-${index}`}>
              <img
                className={`absolute ${iconTopPositions[index]} left-[412px] w-9 h-9`}
                alt="Mask group"
                src={step.icon}
              />

              <div
                className={`absolute ${topPositions[index]} left-[474px] w-[793px] ${index === 0 ? "rotate-[0.09deg]" : ""} opacity-75 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-5xl tracking-[0] leading-[60px]`}
              >
                {step.text}
              </div>
            </div>
          );
        })}
      </section>

      {/* Journey Section */}
      <section className="relative">
        <div className="absolute top-[3911px] left-[832px] w-[896px] h-[594px] bg-[#0e70c9] rounded-[75px_0px_0px_0px]" />

        <img
          className="absolute top-[3587px] left-[1069px] w-[479px] h-[686px] rounded-[25px] object-cover"
          alt="Rectangle"
          src="/rectangle-206.png"
        />

        <img
          className="absolute top-[3547px] left-[961px] w-[700px] h-[767px] object-cover"
          alt="Main"
          src="/main.png"
        />

        <img
          className="absolute top-[3561px] left-[981px] w-[649px] h-[715px] object-cover"
          alt="White iphone"
          src="/white-iphone-16e-mockup-upper-left-view-label.png"
        />

        <div className="absolute top-[3707px] left-[92px] w-[688px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-8xl text-center tracking-[0] leading-[100px]">
          Your journey awaits
        </div>

        <div className="absolute top-[4224px] left-[92px] w-[688px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-8xl text-center tracking-[0] leading-[100px]">
          Reserve your spot now!
        </div>

        <img
          className="absolute top-[4063px] left-96 w-24 h-24"
          alt="Mask group"
          src="/mask-group-7.png"
        />

        <img
          className="absolute top-[3980px] left-96 w-24 h-24"
          alt="Mask group"
          src="/mask-group-8.png"
        />

        <Button className="absolute top-[4314px] left-[1125px] w-[367px] h-[100px] bg-white rounded-[50px] h-auto">
          <div className="w-[440px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#555563] text-[56px] text-center tracking-[0] leading-[60px]">
            Book Now !
          </div>
        </Button>
      </section>

      {/* CTA Cards */}
      <div className="absolute top-[7326px] left-[131px] w-[614px] h-[706px] bg-[#88edf6] rounded-[25px]" />
      <div className="absolute top-[7326px] left-[1017px] w-[614px] h-[706px] bg-[#88edf6] rounded-[25px]" />

      <div className="absolute top-[7167px] left-[185px] w-[414px] [font-family:'Average',Helvetica] font-normal text-black text-[55px] text-center tracking-[0] leading-[65px]">
        Make your Profile Now!
      </div>

      <div className="absolute top-[7181px] left-[1068px] w-[550px] [font-family:'Average',Helvetica] font-normal text-black text-[55px] text-center tracking-[0] leading-[60px]">
        Create your Account Now!
      </div>

      {/* Footer */}
      <footer className="absolute top-[4742px] left-0 right-0 h-[472px] bg-[#0e70c9]">
        <div className="absolute top-[93px] left-[calc(50.00%_-_797px)] w-[659px] opacity-90 [font-family:'Barlow',Helvetica] font-semibold text-white text-8xl text-center tracking-[0] leading-10">
          Need Help?
        </div>

        <div className="absolute top-[202px] left-[146px] w-[468px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[35px]">
          Contact us, and we'll respond to you promptly
        </div>

        <Button className="absolute top-[324px] left-[264px] w-[244px] h-16 bg-white rounded-[15px] opacity-90 h-auto">
          <div className="absolute top-[339px] left-[135px] w-[468px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[35px]">
            Get in Touch
          </div>
          <img
            className="absolute top-[340px] left-[453px] w-9 h-9 object-cover"
            alt="Right arrow"
            src="/right-arrow.png"
          />
        </Button>

        <div className="absolute top-[76px] left-[813px] w-[392px] opacity-90 [font-family:'Inter',Helvetica] font-semibold text-white text-4xl text-center tracking-[0] leading-[45px] whitespace-nowrap">
          General Enquiries
        </div>

        <div className="absolute top-[146px] left-[737px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-[23px] text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Email
        </div>

        <div className="absolute top-[193px] left-[830px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[45px] whitespace-nowrap">
          helpingmbbs@gmail.com
        </div>

        <div className="absolute top-[268px] left-[740px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-[23px] text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Phone
        </div>

        <div className="absolute top-[314px] left-[785px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[45px] whitespace-nowrap">
          <span className="font-semibold text-white">+91 </span>
          <span className="text-white">8825404647</span>
        </div>

        <div className="absolute top-[79px] left-[1239px] w-[392px] opacity-90 [font-family:'Inter',Helvetica] font-semibold text-white text-4xl text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Social Media
        </div>

        <div className="absolute top-36 left-[1272px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-[23px] text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Instagram
        </div>

        <div className="absolute top-[205px] left-[1270px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-[23px] text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Facebook
        </div>

        <div className="absolute top-[268px] left-[1254px] w-[392px] opacity-80 [font-family:'Inter',Helvetica] font-semibold text-white text-[23px] text-center tracking-[0] leading-[45px] whitespace-nowrap">
          Twitter
        </div>

        {socialMediaIcons.map((social, index) => {
          const topPositions = ["top-[151px]", "top-[212px]", "top-[275px]"];
          return (
            <img
              key={`social-${index}`}
              className={`absolute ${topPositions[index]} left-[1366px] w-[30px] h-[30px]`}
              alt="Mask group"
              src={social.icon}
            />
          );
        })}
      </footer>
    </div>
  );
};
