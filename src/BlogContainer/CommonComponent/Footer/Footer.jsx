// import React from "react";
// import logo from "../../constant/logo";
// import ImageElement from "../ImageElement/ImageElement";
// import { Link } from "react-router-dom";
// import { shareUrl } from "../../constant/url";
// import { navigateAction } from "../../utils";

// function Footer(){
//    const { linkedin, insta, twitter } = logo;
//    return(
//      <div className="md:py-12 py-8 md:px-12 px-[15px] bg-linear-[180deg,#000,#1C1C1C]">
//          <div className="container mx-auto">
//             <div className="flex justify-between items-center">
//                <div className="text-white flex md:flex-row flex-col text-[14px]">
//                   <Link to="/privacy-policy" className="md:me-12 mb:mb-0 mb-2" onClick={navigateAction}>Privacy Policy</Link>
//                   <Link to="/terms-and-conditions" onClick={navigateAction}>Terms & Conditions</Link>
//                </div>
//                <div className="flex">
//                   <a href={shareUrl.twitter} target="_blank">
//                      <ImageElement src={twitter} alt={"twitter"} className="w-[22px] h-[22px] opacity-50"/>
//                   </a>
//                   <a href={shareUrl.linkedin} target="_blank" className="ml-5">
//                      <ImageElement src={linkedin} alt={"linkedin"} className="w-[22px] h-[22px] opacity-50"/>
//                   </a>
//                   <a href={shareUrl.insta} target="_blank" className="ml-5">
//                      <ImageElement src={insta} alt={"instagram"} className="w-[22px] h-[22px] opacity-50"/>
//                   </a>
//                </div>
//             </div>
//             <div className="md:text-[20px] text-[14px] max-[400px]:text-[12px] max-[330px]:text-[11px] md:mt-30 mt-[40px] text-center text-[#BBBBBB]">
//                Copyright © 2025 Bhim Digital, Inc. All rights reserved.
//             </div>
//          </div>
//      </div>
//    )
// }

// export default Footer;

import React from "react";
import FooterLanding from "../../../components/FooterLanding";

const Footer = () => {
   return(
      <><FooterLanding /></>
   )
}

export default Footer