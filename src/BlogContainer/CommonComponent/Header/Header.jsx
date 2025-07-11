// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ImageElement from "../ImageElement/ImageElement";
// import SocialIcons from "../SocialIcons/SocialIcons";
// import logo from "../../constant/logo";

// function Header({ isDarkLogo = false, isPolicy }){
//    const [isActive, setIsActive] = useState(false);
//    const [scrolled, setScrolled] = useState(false);
//    const { siteLogo, siteLogoDark, menuBar, menuDark, close } = logo;
//    const showDarkBtn = isDarkLogo ? isPolicy ? false : true : false;

//    const handleClick = () => setIsActive(!isActive)
//    const handleScroll = () => setScrolled(window.scrollY > 20)

//   useEffect(()=>{
//       window.addEventListener('scroll', handleScroll);

//       return ()=>{
//          window.removeEventListener('scroll', handleScroll)
//       };
//    }, []);

//    return(
//       <div className={`absolute w-full px-5 z-10 ${isDarkLogo ? "border-b-2 border-[#00000029] py-[32px]" : "pt-[32px] md:pt-[40px]"}`}>
//          <div className="container mx-auto">
//             <div className="relative flex items-center justify-between">
//                <div className="">
//                   <div className="Logo">
//                      <Link to="/">
//                         <ImageElement src={isDarkLogo ? siteLogoDark : scrolled ? siteLogoDark : siteLogo} alt="Logo" />
//                      </Link>
//                   </div>
//                </div>
//                <div className="">
//                   <div className={`${isActive ? "flex" : "hidden"} md:flex  items-center md:static fixed top-0 w-full left-0 md:flex-row flex-col md:bg-transparent bg-black md:h-auto h-full md:justify-start justify-center`}>
//                      <div className="flex md:flex-row flex-col">
//                       <SocialIcons isDarkLogo={isDarkLogo} />
//                      </div>
//                      <Link to={showDarkBtn ? "/" : "/blog"} className={`md:ms-10 rounded-full px-[24px] py-1 text-[20px] border ${(!isActive && isDarkLogo) ? 'text-black border border-[#00000052] hover:bg-black hover:text-white' : scrolled ? 'text-black border border-[#000] hover:bg-black hover:text-white' : 'text-white border-[#ffffff52] hover:bg-white hover:text-black'}`}>{showDarkBtn ? "Home" : "Blog"}</Link>
//                      <button className="md:hidden absolute top-8 right-4" type="button" onClick={handleClick}>
//                         <ImageElement src={close} alt={'xmark'} className={'w-[24px] h-[24px] opacity-50'}/>
//                      </button>
//                   </div>
//                 <button type="button" className="md:hidden"  onClick={handleClick}>
//                   <ImageElement src={isDarkLogo ? menuDark : menuBar} alt={'menu bar'}/>
//                </button>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Header;

import React from "react";
import HeaderLanding from "../../../components/HeaderLanding";

const Header = () => {
  return (
    <>
      <HeaderLanding />
    </>
  );
};

export default Header;
