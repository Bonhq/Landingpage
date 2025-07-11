import React from "react";
import HeaderLanding from "../components/HeaderLanding";
import Hero from "../components/Hero";
import ThreePhones from "../components/ThreePhones";
import FAQ from "../components/FAQ";
import FooterLanding from "../components/FooterLanding";
import CredGPTHasAnswers from "../components/CredGPTHasAnswers";
import ComingSoonCarousel from "../components/ComingSoonCarousel";
import HowItWorks from "../components/HowItWorks";

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <HeaderLanding />
      <Hero />
      <CredGPTHasAnswers />
      <ThreePhones />
      <HowItWorks />
      <ComingSoonCarousel />
      <FAQ />
      <FooterLanding />
    </div>
  );
};
export default LandingPage;
