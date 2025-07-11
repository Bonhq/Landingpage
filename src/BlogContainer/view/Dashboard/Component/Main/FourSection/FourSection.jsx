import React from "react";
import ImageElement from "../../../../../CommonComponent/ImageElement/ImageElement";
import logo from "../../../../../constant/logo";

function FourSection(){
   const { bgPattern, bgLayer, cardImage, cardImage2x } = logo;

   return(
      <div className="pt-22 pb-8 relative overflow-hidden">
         <div className="top-0 absolute w-full h-full opacity-[.12]" style={{backgroundImage:`url(${bgPattern})`}}></div>
         <div className="absolute bg-cover w-full h-full bg-center bg-no-repeat" style={{backgroundImage:`url(${bgLayer})`}}></div>
         <div className="text-center mx-auto relative flex w-full h-full flex-col items-center justify-center">
            <h2 className="md:px-10 pb-4 px-4 xl:text-[4.5rem] lg:text-[3.8rem] text-[32px] leading-[1] font-bold from-black to-[#3B3B3B] bg-gradient-to-b bg-clip-text text-transparent">master the game of credit cards,<br className="lg:block hidden"/> without doing a thing.</h2>
            <p className="md:px-20 px-4 my-4 text-xl xl:text-[24px] lg:text-[20px] text-[14px] font-medium">imagine 100,000 credit experts working for you - nonstop. they find your best card, manage <br className="lg:block hidden"/> bill payments, boost your score, track spending, and maximize every benefit. all for free.</p>
            <div className="lg:my-12 my-8 w-full">
               <ImageElement src={cardImage} alt={'cars'} className='w-full md:block hidden' />
               <ImageElement src={cardImage2x} alt={'cars'} className='md:hidden block'/>
            </div>
         </div>
      </div>
   )
}

export default FourSection;