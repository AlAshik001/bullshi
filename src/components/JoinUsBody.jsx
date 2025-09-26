import React from "react";
import formBg from "../assets/aboutFormBg.jpg";

const JoinUsBody = () => {
  return (
    <section className="px-6 py-17 md:px-20 bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-2xl md:text-[70px] md:mx-2 mx-auto font-semibold mb-8 w-fit">
        Want to Work With us?
      </h2>
      {/* Form layout */}
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* Labels  */}
        <div className="hidden md:flex flex-col space-y-15 mt-20 text-[35px] md:w-1/2 font-semibold text-right">
          <div>Doctor Name:</div>
          <div>Subject:</div>
          <div>Registration number:</div>
          <div>State Council:</div>
          <div>Years of Teaching Experience:</div>
          <div>Upload Certificates:</div>
        </div>

        {/* Form */}
        <div
          className="w-full md:w-1/2 p-6 md:p-20 rounded-4xl bg-cover bg-center opacity-80 bg-no-repeat space-y-6 md:space-y-13 h-auto md:h-[800px]"
          style={{ backgroundImage: `url(${formBg})` }}
        >
          <input
            type="text"
            placeholder="Doctor Name"
            className="w-full bg-transparent px-4 py-2 rounded-2xl border-3 h-12 md:h-15 text-lg md:text-2xl focus:outline-none placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent px-4 py-2 rounded-2xl border-3 h-12 md:h-15 text-lg md:text-2xl focus:outline-none placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Registration number"
            className="w-full bg-transparent px-4 py-2 rounded-2xl border-3 h-12 md:h-15 text-lg md:text-2xl focus:outline-none placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="State Council"
            className="w-full bg-transparent px-4 py-2 rounded-2xl border-3 h-12 md:h-15 text-lg md:text-2xl focus:outline-none placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Years of Teaching Experience"
            className="w-full bg-transparent px-4 py-2 rounded-2xl border-3 h-12 md:h-15 text-lg md:text-2xl focus:outline-none placeholder:text-gray-500"
          />
          {/* Upload Field */}
          <select className="w-full px-4 py-2 rounded-2xl border-3 bg-transparent h-12 md:h-15 text-lg md:text-2xl bg-opacity-70 focus:outline-none text-gray-500">
            <option>Upload Certificates</option>
          </select>
        </div>
      </div>

      {/* text */}
      <div className="mt-10 md:my-20 text-center space-y-10 md:space-y-20">
        <p className="text-[25px] md:text-[55px] font-medium">
          Easier way to spend your time usefully.
        </p>
        <p className="text-[25px] md:text-[55px] font-medium">
          More exposure to different prototypes of students <br /> from various
          colleges and universities.
        </p>
      </div>
    </section>
  );
};

export default JoinUsBody;
