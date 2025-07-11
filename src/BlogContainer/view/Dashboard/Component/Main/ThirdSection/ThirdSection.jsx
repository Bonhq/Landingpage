import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import logo from "../../../../../constant/logo";

function ThirdSection(){
   const { bgPattern, bgLayer } = logo;

   
   return(
      <div className="lg:py-32 md:py-22 py-20 relative overflow-hidden bg-linear-[180deg,#000,#1C1C1C]">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${bgPattern})`}}></div>
         <div className="top-0 absolute w-full h-full bg-center bg-no-repeat" style={{backgroundImage:`url(${bgLayer})`}}></div>
         <div className="container lg:px-0 md:px-12 px-[15px] text-left mx-auto relative w-full h-full text-white">
            <div className="animated-text ">
               <ScrollAnimation/>
            </div>
         </div>
      </div>
   )
}

export default ThirdSection;