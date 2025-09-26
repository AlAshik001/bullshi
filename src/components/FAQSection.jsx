import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question:
      "1. How to contact the concerned lecturer to fix time and date for class ?",
    answer:
      "You can reach out to the lecturer through the chat feature or email. Our team will coordinate and confirm the timing.",
  },
  {
    question: "2. Can I ask doubts and subject queries through this chat box ?",
    answer:
      "Yes, the chat box allows you to ask academic doubts. Faculty will respond at the earliest.",
  },
  {
    question: "3. How many students can attend combined lectures?",
    answer:
      "Combined lectures can have up to 10–15 students, depending on the subject and schedule.",
  },
  {
    question:
      "4. If I can't attend the lecture during the fixed time due to any reason , will my money be refunded?",
    answer:
      "Refunds are subject to our cancellation policy. Please contact support to raise a refund request.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-10 py-10">
      {/* Title */}
      <h2 className="text-[35px] font-bold underline underline-offset-4 my-10">
        FAQ’S:
      </h2>

      {/* Questions */}
      <div className="space-y-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-start items-center text-base md:text-[25px] font-medium">
              <span>{faq.question}</span>
              {openIndex === index ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm md:text-[20px]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
