import React from "react";
import SliderFive from "./SliderFive";
import logo from "../../../../../constant/logo";

function FiveSection(){
   return(
      <div className="md:py-32 py-18 relative overflow-hidden bg-linear-[180deg,#000,#1C1C1C]">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${logo.bgPattern})`}}></div>
         <div className="lg:pl-48 md:pl-12 pl-[15px] md:pe-0 pe-[15px] md:text-left text-center mx-auto relative w-full h-full text-white">
            {/* <p className="md:text-xl text-[14px] uppercase ">All powered by AI.</p> */}
            <h2 className="md:text-[4.5rem] text-[32px] leading-[1] font-bold mt-3 pb-3 from-[#fff] to-[#CFCFCF] bg-gradient-to-b bg-clip-text text-transparent">BON is building the smartest<br className="lg:block hidden"/> AI ever for credit- and it<br className="lg:block hidden"/> works for you.</h2>
         </div>
         <div className="md:mt-15 mt-10 lg:pl-48 md:pl-12 pl-[15px] md:pe-0 pe-[15px]">
            <SliderFive/>
         </div>
      </div>
   )
}

export default FiveSection;