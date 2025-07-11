import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourSection from "./FourSection/FourSection";
import FiveSection from "./FiveSection/FiveSection";
import SixSection from "./SixSection/SixSection";


function MainSection(){
   return(
      <div>
         <HeroSection/>
         <SecondSection/>
         <ThirdSection/>
         <FourSection/>
         <FiveSection/>
         <SixSection/>
      </div>
   )
}
export default MainSection;