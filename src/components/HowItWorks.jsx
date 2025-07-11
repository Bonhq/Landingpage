import React from "react";
import { motion } from "framer-motion";

import featureimage2 from "../assets/MasterCards/FeatureImage2.png";
import featureimage4 from "../assets/MasterCards/FeatureImage4.png";
import featureimage25 from "../assets/MasterCards/FeatureImage25.png";
import chasefreedom from '../assets/chasefreedom.png'
import amex6 from '../assets/amex6.png'
import amexgold from '../assets/amexgold.png'
import amexsilver9 from '../assets/amexsilver9.png'
import chasefreedom7 from '../assets/chasefreedom7.png'
import discover from '../assets/discover.png'
import discover8 from '../assets/discover8.png'
import savor14 from '../assets/savor14.png'
import silvercard from '../assets/silvercard.png'
import silvercard11 from '../assets/silvercard11.png'
import venturex from '../assets/venturex.png'
import venturex10 from '../assets/venturex10.png'
import visablue from '../assets/visablue.png'
import visablue12 from '../assets/visablue12.png'
import mobileinterface from '../assets/mobileinterface.png'
import { Cred } from "../BlogContainer/constant/url";

const HowItWorks = () => {
  const handleRedirect = () => {
    window.open(Cred, "_blank");
  };
  return (
    <section className="w-full bg-gray-50 py-[80px] lg:py-12 px-4 lg:pt-[150px] lg:pb-[150px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-grotesk text-[48px] lg:text-[72px] lg:leading-[86px] tracking-[-0.48px] space font-bold text-black">
            HOW IT WORKS?
          </h2>
        </div>

        <div className="flex flex-col justify-start bg-white rounded-3xl px-4 md:p-[70px] mb-4  md:mb-8 min-h-[518px]"
style={{ boxShadow: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)" }}>
          <div className="flex flex-col lg:flex-row h-full items-start gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 mt-10 ">
              <div className="mb-5">
                <span className="font-grotesk text-[20px] font-normal text-black tracking-wider">
                  STEP 1
                </span>
              </div>
              <h3 className="text-[48px] font-grotesk leading-[48px] lg:text-[56px] font-bold text-black mb-0">
                ASK
              </h3>
              <p className="font-grotesk text-black text-base md:text-[20px] traking-[0.2px] max-w-[436px]">
                Type your question. From “best card for groceries” to “what’s a
                good travel card for students”, CredGPT listens and understands
                your needs.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="hidden lg:block">
                <div className="flex flex-col items-center gap-[20px]">
                  <div
                    className="relative bg-gray-900  p-4 text-white w-[180px] h-[180px] flex flex-col bg-center "
                    style={{
                      backgroundImage: `url(${featureimage2})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30  z-0 bg-gradient-to-br from-black/90 to-transparent"></div>

                    <div className="text-white text-[14px] mb-3 z-10 leading-[16px]">
                      Best cashback credit card?
                    </div>
                    <div className="flex-1 flex items-center justify-center mb-3 z-10" />
                    <div
                      className="w-[148px] px-3 py-1.5 bg-white inline-flex justify-center items-center gap-2 z-10 cursor-pointer"
                      onClick={handleRedirect}
                    >
                      <div className="text-center justify-start text-black text-xs font-semibold font-format-Helvetica-Neue uppercase tracking-tight">
                        start chat
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full justify-center">
                    <div
                      className="relative bg-gray-900  p-4 text-white  w-[180px] h-[180px] flex flex-col bg-center bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${featureimage4})`,
                    backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center", }}
                    >
                      <div className="absolute inset-0 bg-black/30 z-0 bg-gradient-to-br from-black/90 to-transparent"></div>
                      <div className="text-white text-[14px] mb-3 z-10 leading-[16px]">
                        Want to travel for free with just points?
                      </div>
                      <div className="flex-1 flex items-center justify-center mb-3 z-10" />
                      <div className="w-[148px] px-3 py-1.5 bg-white inline-flex justify-center items-center gap-2 z-10">
                        <div
                          className="text-center justify-start text-black text-xs font-semibold font-format-Helvetica-Neue uppercase tracking-tight cursor-pointer"
                          onClick={handleRedirect}
                        >
                          start chat
                        </div>
                      </div>
                    </div>

                    <div
                      className="relative bg-gray-900  p-4 text-white  w-[180px] h-[180px] flex flex-col bg-center bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${featureimage25})`,
                    backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center", }}
                    >
                      <div className="absolute inset-0 bg-black/30  z-0 bg-gradient-to-br from-black/90 to-transparent"></div>
                      <div className="text-white text-[14px] mb-3 z-10 leading-[16px]">
                        Want to travel for free with just points?
                      </div>
                      <div className="flex-1 flex items-center justify-center mb-3 z-10" />
                      <div className="w-[148px] px-3 py-1.5 bg-white inline-flex justify-center items-center gap-2 z-10">
                        <div
                          className="text-center justify-start text-black text-xs font-semibold font-format-Helvetica-Neue uppercase tracking-tight cursor-pointer"
                          onClick={handleRedirect}
                        >
                          start chat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden w-auto overflow-hidden mt-7">
                <div
                  className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-3 px-2"
                  style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
                >
                  {[
                    {
                      title: "Best cashback credit card?",
                      img: featureimage2,
                    },
                    {
                      title: "Want to travel for free with just points?",
                      img: featureimage4,
                    },
                    {
                      title: "Want to travel for free with just points?",
                      img: featureimage25,
                    },
                    // {
                    //   title: "Best cashback credit card?",
                    //   img: featureimage2,
                    // },
                    // {
                    //   title: "Want to travel for free with just points?",
                    //   img: featureimage4,
                    // },
                    // {
                    //   title: "Want to travel for free with just points?",
                    //   img: featureimage25,
                    // },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="snap-start relative shrink-0 p-4 text-white flex flex-col w-[180px] h-[180px] bg-center bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${card.img})` }}
                    >
                      <div className="absolute inset-0 bg-black/30 bg-gradient-to-br from-black/90 to-transparent z-0" />
                      <h4 className="font-format-Helvetica-Neue text-white text-sm font-normal mb-3 z-10">
                        {card.title}
                      </h4>
                      <div className="flex-1 flex items-center justify-center mb-3 z-10" />
                      <button className="font-format-Helvetica-Neue bg-white text-black text-xs font-bold px-4 py-2  w-full hover:bg-gray-100 z-10">
                        START CHAT
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-[70px] pt-10 lg:pt-4 mb-4 md:mb-8 md:pb-0 h-[599px] lg:h-[519px]" style={{ boxShadow: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)" }}>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-20 h-full">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-last lg:order-first mt-5 lg:mt-0">
              <div className="w-full h-full md:w-full">
                <img
                  src={mobileinterface}
                  alt="Mobile App Interface"
                  className="w-[481px] h-auto lg:h-[450px] object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] pr-0">
              <div className="mb-3">
                <span className="font-grotesk text-[20px] font-normal text-black tracking-wider">
                  STEP 2
                </span>
              </div>
              <h3 className="font-grotesk text-[48px] lg:text-[56px] leading-[48px] font-bold text-black mb-4">
                GET ANSWERS
              </h3>
              <p className="font-grotesk text-black text-base md:text-lg leading-relaxed">
                CredGPT compares 14,000+ credit cards in real time; across
                rewards, fees, eligibility, and expert reviews and gives you
                clear, unbiased recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl  mb-4 md:mb-8 min-h-[518px]"style={{ boxShadow: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)" }}>
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 p-4 md:p-[70px] mt-4 lg:mt-0">
              <div className="mb-3">
                <span className="font-grotesk text-[20px] font-normal text-black tracking-wider">
                  STEP 3
                </span>
              </div>
              <h3 className="font-grotesk text-[48px] lg:text-[56px] leading-[48px] font-bold text-black mb-4">
                APPLY
              </h3>
              <p className="font-grotesk text-black text-base md:text-lg leading-relaxed">
                Make the next move. Apply directly (via the issuer) or explore
                more. CredGPT is your co-pilot working for you 24/7.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="hidden lg:block relative w-64 h-[366px] mx-auto">
                <div className="absolute top-[10px] left-0 w-full z-10">
                  <img
                    src={visablue}
                    alt="Chase Freedom"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[4px] left-0 w-full z-20">
                  <img
                    src={amexsilver9}
                    alt="Amex Platinum Top"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[77px] left-0 w-full z-30">
                  <img
                    src={discover}
                    alt="Discover"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[155px] -left-[25px] w-[303px] z-40">
                  <img
                    src={amexgold}
                    alt="Amex Gold"
                    className="w-[500px] h-auto object-contain"
                  />
                </div>
                <div className="absolute top-[276px] left-0 w-full z-30">
                  <img
                    src={chasefreedom7}
                    alt="Freedom Unlimited"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[333px] left-0 w-full z-20">
                  <img
                    src={venturex}
                    alt="Venture X"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[400px] left-0 w-full z-10">
                  <img
                    src={silvercard}
                    alt="Amex Platinum Bottom"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="lg:hidden relative w-full max-w-xs mx-auto min-h-[303px] overflow-hidden mb-[-15px]">
                <div className="absolute top-[192px] w-[283px] left-1/2 transform -translate-x-1/2  z-45">
                  <img
                    src={amex6}
                    alt="Amex Gold"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[228px] z-40">
                  <img
                    src={discover8}
                    alt="Discover"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[180px] z-30">
                  <img
                    src={amexsilver9}
                    alt="Amex Platinum"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[133px] z-20">
                  <div className="relative w-full">
                    <img
                      src={visablue12}
                      alt="Sapphire"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="absolute top-[33px] left-1/2 transform -translate-x-1/2 w-[85px] z-10">
                  <img
                    src={savor14}
                    alt="Capital One Savor"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
