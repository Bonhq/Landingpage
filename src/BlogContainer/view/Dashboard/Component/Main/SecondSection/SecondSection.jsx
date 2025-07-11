import React from "react";
import ImageElement from "../../../../../CommonComponent/ImageElement/ImageElement";
import logo from "../../../../../constant/logo";


function SecondSection(){
   const { bgPattern, bgLayer, secondImg, secondImg2x } = logo;

   return(
      <div className="pt-22 relative overflow-hidden">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${bgPattern})`}}></div>
         <div className="top-0 absolute w-full h-full bg-[auto_110%] bg-[center_top_-5rem] bg-no-repeat" style={{backgroundImage:`url(${bgLayer})`}}></div>
         <div className="container text-center mx-auto relative flex w-full h-full flex-col items-center justify-center">
            {/* <p className="text-xl uppercase tracking-[1px] md:text-[20px] text-[14px] font-semibold">No more searching. No more guessing</p> */}
            <h2 className="md:text-[4.5rem] text-[32px] leading-[1] font-bold mt-6 pb-4 from-black to-[#3B3B3B] bg-gradient-to-b bg-clip-text text-transparent px-lg-0 px-2">from your first credit card to a <br className="lg:block hidden"/> perfect score - BON is built for you.</h2>
            <div className="md:mt-30 mt-[40px] md:mt-14">
               <ImageElement src={secondImg} alt={"section image"} className={`md:block hidden`}/>
               <ImageElement src={secondImg2x} alt={'section image'} className={'w-full md:hidden block '}/>
            </div>
         </div>
      </div>
   )
}

export default SecondSection;