import React from "react";
import bonlogo from "../assets/bon-logo-white.svg"; // Adjust the path as necessary
import Xwhite from "../assets/svg/xwhite.svg";
import Linkedin from "../assets/svg/linkedinwhite.svg";
import Instagram from "../assets/svg/instagramwhite.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { shareUrl } from "../BlogContainer/constant/url";

const FooterLanding = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleRedirectX = () => {
    window.open(shareUrl?.twitter, "_blank");
  };

  const handleRedirectLinkedin = () => {
    window.open(shareUrl?.linkedin, "_blank");
  };

  const handleRedirectInstagram = () => {
    window.open(shareUrl?.insta, "_blank");
  };

  const handleBlogNavigation = () => {
    if (location?.pathname !== "/blog") {
      navigate("/blog");
    }
  };

  const handleTandCNavigation = () => {
    navigate("/terms-and-conditions");
  };

  const handlePrivacyPolicyNavigation = () => {
    navigate("/privacy-policy");
  };

  const handleRedirectCred = () => {
    window.open("https://credgpt.boncredit.ai/", "_blank");
  };

  return (
    <footer className='bg-black text-white py-10 px-4 md:px-20 lg:py-[72px] lg:px-[120px]'>
      <div className='flex w-full justify-between items-center mb-8 lg:mb-0'>
        {/* Social Links */}
      </div>
      <div className='flex  justify-between gap-12'>
        {/* Left Section - Company Info */}
        <div className='space-y-6 w-[60%] flex flex-col lg:w-[63%] gap-5'>
          {/* Logo */}
          <div
            className='flex items-center cursor-pointer'
            onClick={handleHomeNavigation}
          >
            <img src={bonlogo} alt='Bon Logo' className=' w-auto' />
          </div>

          {/* Description */}
          <div className='space-y-4 lg:text-[20px] text-white lg:leading-[30px]'>
            <p className='lg:mb-[32px] lg:mt-[42px]'>
              {" "}
              BON is a new kind of credit platform built to reward good
              financial habits, not exploit them. We don't issue credit cards.
              We don't sell your data. Instead, we create tools that help Gen Z
              in America make smarter decisions starting with CredGPT, your
              personal AI guide to credit cards.
            </p>
            <p className='lg:mb-[32px]'>
              CredGPT is trained on thousands of credit cards, expert reviews,
              and real user feedback to simplify your choices and help you find
              what fits clearly and quickly.
            </p>

            <p className='lg:mb-[32px]'>
              We're proudly independent, driven by transparency, and backed by a
              team from Stanford, UC Berkeley, and MIT.
            </p>

            <p className=''>
              At BON, we believe financial products should work for you, not the
              other way around.
            </p>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className='lg:pl-12 flex flex-col gap-6 space-y-6 lg:mb-[65px]'>
          <div className='flex space-x-4 items-center'>
            <button
              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
              onClick={handleRedirectX}
            >
              {/* <Twitter className="h-5 w-5" /> */}
              <img src={Xwhite} alt='x platform' />
            </button>
            <button
              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
              onClick={handleRedirectLinkedin}
            >
              {/* <Linkedin className="h-5 w-5" /> */}
              <img src={Linkedin} alt='linkedin platform' />
            </button>
            <button
              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
              onClick={handleRedirectInstagram}
            >
              {/* <Instagram className="h-5 w-5" /> */}
              <img src={Instagram} alt='instagram' />
            </button>
          </div>
          <div className='space-y-0 flex flex-col'>
            <div
              className={`  block mb-3 lg:text-[20px] text-white lg:leading-[30px] lg:mb-[42px] lg:mt-[42px] ${location?.pathname !== '/blog' ? 'hover:text-gray-300 transition-colors cursor-pointer' : 'none' } `}
              onClick={handleBlogNavigation}
            >
              Blogs
            </div>
            {/* <div className=' hover:text-gray-300 transition-colors block mb-3 lg:text-[20px] text-white lg:leading-[30px] lg:mb-[42px] cursor-pointer'>
              Press & Media
            </div> */}
            <div
              className=' hover:text-gray-300 transition-colors block mb-3 lg:text-[20px] text-white lg:leading-[30px] lg:mb-[42px] cursor-pointer'
              onClick={handleRedirectCred}
            >
              CredGPT
            </div>
            <div
              className=' hover:text-gray-300 transition-colors block mb-3 lg:text-[20px] text-white lg:leading-[30px] lg:mb-[42px] cursor-pointer'
              onClick={handlePrivacyPolicyNavigation}
            >
              Privacy Policy
            </div>
            <div
              className=' hover:text-gray-300 transition-colors block lg:text-[20px] text-white lg:leading-[30px] cursor-pointer'
              onClick={handleTandCNavigation}
            >
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <p className='text-[#BBB] text-sm lg:text-[20px] m-4 lg:leading-[30px] lg:m-[16px]'>
          Copyright © 2025 Bhim Digital, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterLanding;
