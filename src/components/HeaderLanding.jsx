import React, { useState } from "react";
import bonLogo from "../assets/bon-logo.svg";
import { Menu } from "lucide-react";
import Twitter from "../assets/svg/x.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Instagram from "../assets/svg/instagram.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { shareUrl } from "../BlogContainer/constant/url";

const HeaderLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBlogNavigation = () => {
    navigate("/blog");
  };

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  return (
    <header className='bg-white top-0 z-50 w-full'>
      <div className='w-full px-4 sm:px-6 lg:py-6 xl:py-8 lg:px-[120px]'>
        <div className=' mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div
            className='flex-shrink-0 cursor-pointer'
            onClick={handleHomeNavigation}
          >
            <div className='flex items-center m-4 lg:m-0'>
              <img
                src={bonLogo}
                alt='Bon Logo'
                className='h-6 lg:h-[26px] w-auto lg:w-[114px]'
              />
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className='hidden md:flex items-center space-x-[24px]'>
            <button
              className='text-gray-600 hover:text-black cursor-pointer'
              onClick={handleRedirectX}
            >
              <img src={Twitter} alt='x platform' />
            </button>
            <button
              className='text-gray-600 hover:text-black cursor-pointer'
              onClick={handleRedirectLinkedin}
            >
              <img src={LinkedIn} alt='linked in' />
            </button>
            <button
              className='text-gray-600 hover:text-black cursor-pointer'
              onClick={handleRedirectInstagram}
            >
              <img src={Instagram} alt='instagram' />
            </button>
            <div
              className='ml-[24px] px-6 py-3 rounded-[72px] outline outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5 cursor-pointer'
              onClick={
                location.pathname === "/blog" ||
                location.pathname === "/blog/testing-blog"
                  ? handleHomeNavigation
                  : handleBlogNavigation
              }
            >
              <div className='text-center justify-start text-black text-[20px] font-normal inter-font cursor-pointer'>
                {location.pathname === "/" ? "Blog" : "Home"}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-600 hover:text-gray-900 focus:outline-none p-2'
            >
              {isMenuOpen ? "X" : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden border-t border-gray-100 w-full bg-white'>
          <div className='px-4 pt-2 pb-4 space-y-2'>
            <div className='flex space-x-4'>
              <button
                className='text-gray-600 hover:text-black pointer-cursor'
                onClick={handleRedirectX}
              >
                <img src={Twitter} alt='x platform' />
              </button>
              <button
                className='text-gray-600 hover:text-black'
                onClick={handleRedirectLinkedin}
              >
                <img src={LinkedIn} alt='linked in' />
              </button>
              <button
                className='text-gray-600 hover:text-black'
                onClick={handleRedirectInstagram}
              >
                <img src={Instagram} alt='instagram' />
              </button>
            </div>
            <button
              className='w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium'
              onClick={
                location.pathname === "/blog" ||
                location.pathname === "/blog/testing-blog"
                  ? handleHomeNavigation
                  : handleBlogNavigation
              }
            >
              {location.pathname === "/" ? "Blog" : "Home"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderLanding;
