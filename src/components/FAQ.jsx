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
    <section className='py-10 md:py-0 bg-white font-grotesk'>
      <div className='w-full lg:w-[80%] mx-auto px-4 md:px-0'>
        <div className='text-center mb-10 lg:mb-[30px] lg:mt-[200px]'>
          <h2 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-black'>
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
        </div>

        <div className='w-full space-y-2 mb-10'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-200'>
              <button
                className='w-full pb-4 pt-4 lg:py-[30px] flex justify-between items-center text-left '
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
                <div className='-mt-4 pb-6 lg:pb-[36px]'>
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
      <div className='relative py-10 md:py-20  flex flex-col items-center justify-center text-center overflow-hidden'>
        {/* Curved Line Behind CTA */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen mt-12 md:-mt-6 '>
          <img
            src={curvedline2}
            alt='Curved Line Decoration'
            className='w-full h-auto'
          />
        </div>

        {/* CTA Content */}
        <div className='relative z-10 md:mt-[100px]'>
          <h3 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-black lg:leading-[64px] lg:trakeing-[-0.72px] lg:mb-[10px]'>
            TRY CREDGPT
            <br />
            FOR FREE.
          </h3>
          <p className='mb-8 lg:text-[20px] font-normal text-black lg:leading-[30px] lg:trakeing-[0.2px]'>
            See why thousands trust BON and
            <br />
            explore the fastest way forward.
          </p>
          <div className='mt-10 mb-20 w-[240px] lg:w-[340px] lg:h-16 px-2.5 py-4 bg-black inline-flex justify-center items-center gap-2.5 cursor-pointer' onClick={handleRedirect}>
            <div className="text-center justify-start text-white lg:text-[20px] uppercase tracking-[0.2px]">
              try for free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
