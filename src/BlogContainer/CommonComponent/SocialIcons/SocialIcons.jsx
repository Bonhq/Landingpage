import React from "react";
import logo from "../../constant/logo";
import { shareUrl } from "../../constant/url";
import ImageElement from "../ImageElement/ImageElement";

function SocialIcons({ isDarkLogo }){
   const { linkedin, linkedinDark, insta, instaDark, twitter, twitterDark } = logo;

   return(
      <>
         <a href={shareUrl.twitter} target="_blank" className="md:mb-0 mb-8">
            <ImageElement src={isDarkLogo ? twitterDark : twitter} alt="twitter" className={`w-[22px] h-[22px] md:opacity-50 opacity-100 hover:opacity-100`}/>
         </a>
         <a href={shareUrl.linkedin} target="_blank" className="md:ml-5 md:mb-0 mb-8">
         <ImageElement src={isDarkLogo ? linkedinDark : linkedin} alt="twitlinkedinter" className={`w-[22px] h-[22px] md:opacity-50 opacity-100 hover:opacity-100`}/>
         </a>
         <a href={shareUrl.insta} target="_blank" className="md:ml-5 md:mb-0 mb-8">
            <ImageElement src={isDarkLogo ? instaDark : insta} alt="instagram" className={`w-[22px] h-[22px] md:opacity-50 opacity-100 hover:opacity-100`}/>
         </a>
      </>
   )
}

export default SocialIcons;