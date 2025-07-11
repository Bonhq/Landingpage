import React from "react";
import ImageElement from "../../../../../CommonComponent/ImageElement/ImageElement";
import EmailElement from "../../../../../CommonComponent/EmailElement/EmailElement";
import logo from "../../../../../constant/logo";

function SixSection(){
   const { bgPattern, sixImg, sixImg2x } = logo;



   return(
      <div className="pt-22 relative overflow-hidden">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${bgPattern})`}}></div>
         <div className="text-center mx-auto relative flex w-full h-full flex-col items-center justify-center">
            <h2 className="md:text-[4.5rem] text-[32px] leading-[1] font-bold from-black to-[#3B3B3B] bg-gradient-to-b bg-clip-text text-transparent px-8">credit is changing.<br/> be the first to experience it.</h2>
            <div className="relative md:mt-18 md:mt-12 mt-6 px-5">
                  <div className="form-edit"><EmailElement/></div>
            </div>

            <div className="mt-10 w-full ">
               <ImageElement src={sixImg} alt={"section image"} className={'w-full lg:block hidden '}/>
               <ImageElement src={sixImg2x} alt={'section image'} className={'w-full lg:hidden block '}/>
            </div>
         </div>
      </div>
   )
}

export default SixSection;