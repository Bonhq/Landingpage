import React from "react";
import curvedline from "../assets/curvedline.svg"; // Adjust the path as necessary
// import accel from "../assets/accel.jpg"; // Adjust the path as necessary
// import accel from "../assets/accel.png"; // Adjust the path as necessary
const accel="https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/accel.png"
// import sequoia from "../assets/sequoia.jpg"; // Adjust the path as necessary
// import sequoia from "../assets/sequoia.png"; // Adjust the path as necessary
const sequoia = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/sequoia.png"
// import alter from "../assets/alter.jpg"; // Adjust the path as necessary
// import alter from "../assets/alter.png"; // Adjust the path as necessary
const alter = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/alter.png"
// import hustleFund from "../assets/hustlefund.jpg"; // Adjust the path as necessary 
// import hustleFund from "../assets/hustlefund.svg"; // Adjust the path as necessary
// import hustleFund from "../assets/hustleFund.png"; // Adjust the path as necessary
const hustleFund = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/hustleFund.png"

// import outsidevc from "../assets/outsidevc.jpg"; // Adjust the path as necessary
// import outsidevc from "../assets/outsidevc.png"; // Adjust the path as necessary
const outsidevc = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/outsidevc.png"
// import uv from "../assets/uv.jpg"; // Adjust the path as necessary
// import uv from "../assets/uv.png"; // Adjust the path as necessary
const uv = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/uv.png"
// import mbaventures from "../assets/mba.jpg"; // Adjust the path as necessary
// import mbaventures from "../assets/mbaventures.png"; // Adjust the path as necessary
const mbaventures = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/mbaventures.png"
// import foundationCapital from "../assets/foundationcapital.jpg"; // Adjust the path as necessary
// import foundationCapital from "../assets/foundationcapital.png"; // Adjust the path as necessary
const foundationCapital = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/foundationCapital.png"
// import inceptionstudio from "../assets/inceptionstudio.jpg"; // Adjust the path as necessary
// import inceptionstudio from "../assets/inceptionstudio.png"; // Adjust the path as necessary
const inceptionstudio = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/inceptionstudio.png"
import leftcorner from "../assets/leftcorner.svg"; // Adjust the path as necessary
import rightcorner from "../assets/rightcorner.svg"; // Adjust the path as necessary
import leftcornerimg from "../assets/leftcornerimg.svg"; // Adjust the path as necessary
import rightcornerimg from "../assets/rightcornerimg.svg"; // Adjust the path as necessary
import rightcornerimg2 from "../assets/rightcornerimg2.svg"; // Adjust the path as necessary
import { Cred } from "../BlogContainer/constant/url";

const Hero = () => {
  const handleRedirect = () => {
    window.open(Cred, "_blank");
  };
  return (
    <section className='relative bg-white sm:pt-24 sm:pb-32 md:pt-14 md:pb-40 overflow-hidden'>
      <div
        style={{ boxShadow: "0px 6px 18px 0px rgba(0, 0, 0, 0.12)" }}
        className='hidden lg:flex absolute bg-white top-[35%] -left-10 w-[220px] h-[300px] rotate-[25deg] shadow-2xl z-10 overflow-hidden items-center justify-center'
      >
        <img
          src={leftcornerimg}
          alt='Left Corner Decoration'
          className='w-[207px] ml-12 h-[200px] object-cover'
        />
      </div>

      <div
        style={{ boxShadow: "0px 6px 18px 0px rgba(0, 0, 0, 0.12)" }}
        className='hidden lg:flex absolute bg-white top-[35%] -right-10 w-[220px] h-[300px] rotate-[-15deg] shadow-2xl z-10 overflow-hidden items-center justify-center'
      >
        <img
          src={rightcornerimg2}
          alt='Right Corner Decoration'
          className='w-[207px] h-full object-cover rotate-[20deg] mr-12'
        />
      </div>

      {/* <img
        src={leftcorner}
        style={{ transform: 'rotate(-45deg)', objectFit: 'cover' }} 
        alt="Left Corner Decoration"  
        className="absolute top-[40%]  shadow-2xl left-0 w-44 h-4w-44  z-10"
      />
      <img
      
      style={{ transform: 'rotate(-15deg)', objectFit: 'cover' }} src={rightcorner}
        alt="Right Corner Decoration"
        className="absolute top-[40%] right-0 w-44 h-44  z-10"
      />
   */}
      <div className='w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='font-grotesk pt-20 md:pt-0 text-[38px] lg:text-[72px] leading-[36px] lg:leading-[68px] font-bold text-black mb-3 lg:mb-8'>
          MEET CREDGPT: YOUR AI ASSISTANT FOR CREDIT CARDS
        </h1>

        <p className='font-grotesk text-center text-sm lg:text-lg leading-[20px] lg:leading-[28px] tracking-[0.14px] lg:tracking-[0.2px] text-black  mx-auto mb-6 lg:mb-12 lg:w-[70%]'>
          CredGPT finds the perfect credit card for you, personalized to your
          needs. Ask anything, from rewards to approvals to what's hurting your
          score. It's your credit, finally simplified.
        </p>

        <div className='lg:mb-16 relative w-full'>
          {/* <a className="font-grotesk inline-block text-[20px] bg-black w-[340px] h-[64px] text-white pb -1 px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-200 font-semibold text-lg">
            TRY FOR FREE
          </a>   */}
          <div className='lg:w-[340px] w-[240px] lg:h-16 px-2.5 py-4 bg-black inline-flex justify-center items-center gap-2.5 cursor-pointer' onClick={handleRedirect}>
            <div className='lg:w-[207px] lg:h-[18px] text-center justify-start text-white lg:text-[20px] uppercase tracking-[0.2px]'>
              try for free
            </div>
          </div>
          <img
            src={curvedline}
            alt='Decorative Curved Line'
            className='hidden lg:block absolute -top-[70px] left-1/2 -translate-x-1/2 w-[99vw] max-w-none z-0 opacity-50 pointer-events-none'
          />
        </div>

        <div className='space-y-8 mt-[40px] lg:mt-[155px] flex flex-col items-center justify-center text-center'>
          <p className='font-grotesk text-xs lg:text-base text-[#555555] italic font-[300]'>
            Backed and trusted by
          </p>

          <div className='flex flex-wrap justify-center w-full gap-0 md:gap-10 '>
            <div
              className='flex flex-col w-[33%] md:w-full gap-0 md:gap-3 px-4 items-center
                    relative pointer-events-auto
                    after:pointer-events-none
                    after:absolute after:top-0 after:right-0
                    after:w-px after:h-full
                    after:bg-gradient-to-b
                    after:from-transparent after:via-black/40 after:to-transparent
                    md:after:hidden'
            >
              <p className='font-grotesk text-xs lg:text-base text-[#555555] italic font-light'>
                VC funds
              </p>

              <div className='flex flex-col md:flex-row flex-wrap justify-center items-start lg:items-center lg:gap-16 gap-5 mt-[20px] lg:mt-0'>
                <img
                  src={hustleFund}
                  alt='Hustle Fund'
                  className='h-[12px] lg:h-8'
                />
                <img src={alter} alt='Alter' className='h-[16px] lg:h-10' />
                <img
                  src={outsidevc}
                  alt='Outside VC'
                  className='h-[12px] lg:h-8'
                />
                <img
                  src={uv}
                  alt='Union Ventures'
                  className='h-[14px] lg:h-9 -ml-4 md:-ml-10 '
                />
                <img
                  src={mbaventures}
                  alt='MB Ventures'
                  className='h-[17px] lg:h-14 lg:-ml-10'
                />
              </div>
            </div>

            <div
              className='flex flex-col w-[33%] md:w-full gap-0 md:gap-3 px-4 items-center
                    relative pointer-events-auto
                    after:pointer-events-none
                    after:absolute after:top-0 after:right-0
                    after:w-px after:h-full
                    after:bg-gradient-to-b
                    after:from-transparent after:via-black/40 after:to-transparent
                    md:after:hidden'
            >
              <p className='text-xs lg:text-base text-[#555555] italic font-grotesk font-light'>
                Scouts
              </p>

              <div className='flex flex-col md:flex-row flex-wrap justify-center items-start lg:items-center lg:gap-14 gap-5 mt-[20px] lg:mt-0 '>
                <img src={sequoia} alt='Sequoia' className='h-[18px] lg:h-16' />
                <img src={accel} alt='Accel' className='h-[18px] lg:h-14' />
              </div>
            </div>

            <div className='flex flex-col w-[33%] md:w-full gap-0 md:gap-3 px-4 items-start lg:items-center'>
              <p className='text-xs lg:text-base text-[#555555] italic font-grotesk font-light'>
                Startup programs
              </p>

              <div className='flex flex-col md:flex-row flex-wrap justify-center items-start lg:items-center lg:gap-16 gap-5 mt-[20px] lg:mt-0'>
                <img
                  src={foundationCapital}
                  alt='Foundation Capital'
                  className='h-[14px] lg:h-8'
                />
                <img
                  src={inceptionstudio}
                  alt='Inception Studio'
                  className='h-[14px] lg:h-8'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
