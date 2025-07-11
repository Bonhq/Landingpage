import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import curvedline2 from "../assets/curvedline2.svg"; // Adjust the path as necessary
import { Cred } from "../BlogContainer/constant/url";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "Is CredGPT free to use?",
      answer:
        "Yes — it's completely free. No credit card needed. No hidden fees.",
    },
    {
      question: "Does CredGPT recommend specific banks or brands?",
      answer:
        "CredGPT provides unbiased recommendations based on your specific needs and credit profile.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your data is encrypted and secure. We follow industry-standard security practices to protect your information.",
    },
    {
      question: "Is this safe? Will it affect my credit score?",
      answer:
        "Using CredGPT for recommendations does not affect your credit score. Only actual credit applications may impact your score.",
    },
    {
      question: "How do I get featured or collaborate with Bon?",
      answer:
        "Contact our team through our official channels to discuss partnership opportunities.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleRedirect = () => {
    window.open(Cred, "_blank");
  };


  return (
    <section className='py-20 sm:py-32 bg-white font-grotesk'>
      <div className='w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-14'>
        <div className='text-center mb-16 lg:mb-[80px] lg:mt-[200px]'>
          <h2 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-black leading-[64px]'>
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
        </div>

        <div className='space-y-4 mb-16'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-200'>
              <button
                className='w-full pb-4 lg:py-[40px] flex justify-between items-center text-left '
                onClick={() => toggleQuestion(index)}
              >
                <span className='text-lg lg:text-[24px] font-normal text-black pr-4'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform cursor-pointer ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openQuestion === index && (
                <div className='pb-6 lg:pb-[56px]'>
                  <p className='text-gray-600 leading-relaxed  lg:text-[22px] leading-light'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Final CTA */}
      {/* Final CTA */}
      <div className='relative mt-24 py-20 flex flex-col items-center justify-center text-center overflow-hidden'>
        {/* Curved Line Behind CTA */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen lg:mt-16'>
          <img
            src={curvedline2}
            alt='Curved Line Decoration'
            className='w-full h-auto'
          />
        </div>

        {/* CTA Content */}
        <div className='relative z-10 lg:mt-[200px]'>
          <h3 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-black lg:leading-[64px] lg:trakeing-[-0.72px] lg:mb-[32px]'>
            TRY CREDGPT
            <br />
            FOR FREE.
          </h3>
          <p className='mb-8 lg:text-[20px] font-normal text-black lg:leading-[30px] lg:trakeing-[0.2px]'>
            See why thousands trust BON and
            <br />
            explore the fastest way forward.
          </p>
          <div className='lg:w-[340px] lg:h-16 px-2.5 py-4 bg-black inline-flex justify-center items-center gap-2.5 cursor-pointer' onClick={handleRedirect}>
            <div className="lg:w-[207px] lg:h-[18px] text-center justify-start text-white lg:text-[20px] uppercase tracking-[0.2px]">
              try for free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
