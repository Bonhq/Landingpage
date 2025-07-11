import React from "react";
import EmailElement from "../../../../../CommonComponent/EmailElement/EmailElement";
import logo from "../../../../../constant/logo";

function HeroSection(){
   return(
      <div className="md:h-screen md-p-0 py-40 bg-linear-[180deg,#000,#1C1C1C]">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${logo.bgPattern})`}}></div>
         <div className="container text-center mx-auto relative flex w-full h-full flex-col items-center justify-center text-white">
            <h1 className="md:text-[5.75rem] text-[32px] leading-[1] md:mx-10 mx-2 md:text-[4.5rem] font-bold my-4">find your perfect credit card in seconds, not weeks.</h1>
            <p className="md:text-2xl text-[16px] px-4">BON is Your personal AI for credit cards - find, apply, and manage with zero effort</p>
            <div className="relative md:mt-18 md:mt-12 mt-6 px-5">
            <EmailElement/>
            </div>
         </div>
      </div>
   )
}

export default HeroSection;