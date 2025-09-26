import React from "react";
import Banner from "./Banner";
import bodyImg1 from "../assets/bodyImg1.jpg";
import bodyImg2 from "../assets/bodyImg2.jpg";
import bodyImg3 from "../assets/bodyImg3.jpg";
import bodyImg4 from "../assets/bodyImg4.jpg";
import docCToA from "../assets/cToA.jpg";

const Body = () => {
  return (
    <>
      {/*Banner */}
      <Banner />
      {/* Journey */}
      <section className="mx-auto py-10 space-y-14">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative overflow-hidden py-10 px-4 md:px-8 w-full">
            {/* Pink Circle */}
            <div className="absolute top-[100px] left-[-60px] w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-red-100 rounded-full z-0"></div>
            {/* Green Circle */}
            <div className="absolute bottom-[40px] left-[60%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-green-200 rounded-full z-0"></div>

            {/* Content */}
            <div className="relative z-10 mx-2 md:mx-3 my-4 text-center space-y-4">
              <h1 className="text-[24px] md:text-[45px] font-600 leading-tight text-black">
                <span className="decoration-2">
                  Struggling to pass MBBS Exams?
                </span>
                <br />
                You’re <span className="text-[#2975D8]">not alone</span>
              </h1>

              <p className="text-gray-700 text-[18px] md:text-[30px] font-500">
                Meet Rahul, a medical student who tried everything—but nothing
                worked. Until he{" "}
                <span className="text-[#2975D8]">found us</span>.
              </p>

              <button className="bg-[#06033D] text-white px-6 py-3 rounded-full text-[18px] md:text-[30px] font-500 hover:bg-[#24206A] transition">
                Start Learning Now!
              </button>
            </div>
          </div>

          {/* Image  */}
          <img
            src={bodyImg1}
            alt="Student stressed"
            className="w-full md:w-1/2 max-w-[90%] h-auto md:h-[600px] rounded-2xl mx-auto md:mx-10"
          />
        </div>

        {/* 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <img
            src={bodyImg2}
            alt="Confused student"
            className="w-full md:w-1/2 max-w-[90%] h-auto md:h-[600px] rounded-2xl mx-auto md:mx-10"
          />

          {/* Text Content */}
          <div className="space-y-6 text-center px-4 md:mx-25">
            <h1 className="text-[24px] md:text-[45px] font-600 leading-tight text-black">
              Why MBBS Feels Hard?
            </h1>

            <ul className="space-y-4 text-center">
              <li className="text-red-600 md:pl-5 text-[20px] md:items-start md:text-[30px] font-500 flex items-center gap-2 md:gap-0 justify-center">
                ❌{" "}
                <span className="text-gray-800">
                  Too many books, too little time
                </span>
              </li>

              <li className="text-red-600 text-[18px] md:text-[30px] font-500 flex items-center gap-2 justify-center relative">
                ❌
                <span className="text-gray-800 relative z-10">
                  Confusing medical jargon
                </span>
                {/* Purple background circle */}
                <span className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-purple-200 rounded-full z-0"></span>
              </li>

              <li className="text-red-600 text-[18px] md:text-[30px] font-500 flex items-center gap-2 justify-center">
                ❌{" "}
                <span className="text-gray-800">
                  No structured revision plan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3*/}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="space-y-6 text-center px-4 md:mx-5">
            <h1 className="text-[22px] md:text-[45px] font-600 leading-tight text-black">
              Then he found our website
              <span className="text-[#2975D8]"> Helping MBBS</span> — a smarter
              way to study
            </h1>

            <ul className="space-y-4 text-center mx-4 md:mx-20">
              <li className="text-[18px] md:text-[30px] font-500 flex items-center justify-center gap-2">
                ✅ Short, clear video lectures
              </li>
              <li className="text-[18px] md:text-[30px] font-500 flex items-center justify-center gap-2 relative">
                <span className="z-10">✅ Smart revision techniques</span>
                {/* Yellow circle */}
                <span className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-[#FFF0B0] rounded-full z-0"></span>
              </li>
              <li className="text-[18px] md:text-[30px] font-500 flex items-center justify-center gap-2">
                ✅ MCQs & Mock Tests
              </li>
              <li className="text-[18px] md:text-[30px] font-500 flex items-center justify-center gap-2">
                ✅ Mentor Support
              </li>
            </ul>
          </div>

          {/* Image  */}
          <img
            src={bodyImg3}
            alt="Confused student"
            className="w-full md:w-1/2 max-w-[90%] h-auto md:h-[600px] rounded-2xl mx-auto md:mx-10"
          />
        </div>

        {/* 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 space-y-0 md:space-y-2">
          {/* Image  */}
          <img
            src={bodyImg4}
            alt="Student stressed"
            className="w-full md:w-1/2 max-w-[90%] h-auto md:h-[600px] rounded-2xl mx-auto md:mx-10"
          />

          {/* Content */}
          <div className="relative overflow-hidden py-10 px-4 md:px-8">
            {/* Circle */}
            <div className="absolute top-[100px] right-[-60px] w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-[#F4B28E] rounded-full z-0"></div>

            {/* Text Content */}
            <div className="relative z-10 mx-2 md:mx-3 my-4 text-center space-y-4">
              <h1 className="text-[22px] md:text-[45px] font-600 leading-tight text-black">
                Then everything changed, he passed all the exams with
                <span className="text-[#2975D8]"> great marks</span>
              </h1>

              <p className="text-gray-700 text-[18px] md:text-[30px] font-500">
                “This platform made complex topics simple for me!” <br />
                “Cleared my exams after failing twice. Best decision ever!” –
                Rahul
              </p>

              <button className="bg-[#06033D] text-white px-6 py-3 rounded-full text-[18px] md:text-[30px] font-500 mx-auto md:mx-10 hover:bg-[#24206A] transition">
                Start Your Journey!
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*Why us*/}
      <section className="px-4 py-16 rounded-2xl mx-auto">
        <h2 className="text-center text-[40px] md:text-[65px] font-bold mb-12 leading-tight">
          Why us?
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 mx-4 md:mx-10 my-10 md:my-20">
          <div className="bg-[#D1FAF3] p-6 md:p-8 rounded-2xl w-full md:w-[450px]">
            <h3 className="text-[24px] md:text-[35px] font-600 mb-2">
              01 Learn with Great Instructors
            </h3>
            <p className="text-[16px] md:text-[20px] text-gray-700 leading-relaxed">
              Experienced Lecturers for every topic. Learn tougher topics within
              minutes.
            </p>
          </div>

          <div className="bg-[#D1FAF3] p-6 md:p-8 rounded-2xl w-full md:w-[450px]">
            <h3 className="text-[24px] md:text-[35px] font-600 mb-2">
              02 Mock test every month
            </h3>
            <p className="text-[16px] md:text-[20px] text-gray-700 leading-relaxed">
              Conducting mock tests consistently makes students confident.
            </p>
          </div>
        </div>

        <h2 className="text-center text-[40px] md:text-[65px] font-bold mb-12 leading-tight">
          Our impact in numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border rounded-2xl mx-4 md:mx-10 py-10 md:py-15">
          <div>
            <p className="text-[30px] md:text-[50px] font-bold">95%</p>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Pass rate
            </p>
          </div>
          <div>
            <p className="text-[30px] md:text-[50px] font-bold">1000+</p>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Students Helped
            </p>
          </div>
          <div>
            <p className="text-[30px] md:text-[50px] font-bold">15%</p>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Score Improvement
            </p>
          </div>
          <div>
            <p className="text-[30px] md:text-[50px] font-bold">1000+</p>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Practice Questions
            </p>
          </div>
        </div>
      </section>
      {/*Call to Action */}
      <section className="px-4 md:px-6 py-12 md:py-16 mx-4 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-[28px] md:text-[45px] font-600 leading-tight text-black">
            The harder you’ll work for something, the greater you will feel when
            you’ll <span className="text-[#2975D8]">achieve it</span>
          </h2>

          <p className="text-gray-700 text-[20px] md:text-[30px] font-500">
            “You don't have to be brilliant to be a{" "}
            <span className="text-[#2975D8]">Doctor</span>”
          </p>

          {/* Stats Card */}
          <div className="flex flex-wrap justify-around gap-4 mt-4 bg-[#06033D] rounded-3xl px-4">
            <div className="text-white px-4 py-6 text-center w-[60px] md:w-auto">
              <p className="text-[23px] md:text-[40px] font-bold">50+</p>
              <p className="text-[12px] md:text-[20px]">Doctors</p>
            </div>
            <div className="text-white px-4 py-6 text-center border-x md:border-x-2 border-white w-[80px] md:w-[250px]">
              <p className="text-[23px] md:text-[40px] font-bold">
                15<span className="text-[12px] md:text-[20px]">mins</span>
              </p>
              <p className="text-[12px] md:text-[20px]">Class</p>
            </div>
            <div className="text-white px-4 py-6 text-center w-[60px] md:w-auto">
              <p className="text-[23px] md:text-[40px] font-bold">
                30<span className="text-[12px] md:text-[20px]">mins</span>
              </p>
              <p className="text-[12px] md:text-[20px]">Class</p>
            </div>
          </div>

          <button className="bg-[#06033D] text-white px-6 py-3 my-6 md:my-10 rounded-full text-[22px] md:text-[30px] font-500 hover:bg-[#24206A] transition">
            Download Now!
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={docCToA}
            alt="Doctor"
            className="rounded-2xl md:rounded-tl-4xl md:rounded-br-4xl md:border-[#39A7C9] md:border-b-[20px] md:border-r-[20px] h-[300px] md:h-[550px] w-[90%] md:w-[550px]"
          />
        </div>
      </section>
    </>
  );
};

export default Body;
