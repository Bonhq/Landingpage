import { Link, useNavigate } from "react-router-dom";
import logo from "../../constant/logo";
import ImageElement from "../ImageElement/ImageElement";
import { shareUrl } from "../../constant/url";
import { navigateAction } from "../../utils";

const TermsFooter = () => {
   const { linkedin, insta, twitter, siteLogo } = logo;
   const navigate = useNavigate();

   
    return <div className="flex justify-center bg-[#000] py-30">
        <div className="container md:px-15 px-4">
            <div className="Logo pb-8">
                <ImageElement src={siteLogo} alt="Logo" onClick={() => navigateAction(`/`, navigate)} />
            </div>
            <div className="text-[#bbb] text-base">
                <p>Bon is a members-only mobile application that provides users with rewards for making timely credit card payments. By using the Bon app, users acknowledge and agree to the Terms of Service and Privacy Policy, which outline the conditions of participation in the rewards program, eligibility criteria, and the handling of personal and financial information.<br /><br />
                    Bon is not affiliated with, endorsed by, or sponsored by any credit card issuer or financial institution. Rewards earned through Bon are provided solely by Bon and are subject to the company's discretion and applicable laws and regulations. Bon does not provide any financial, legal, or credit counseling advice, and users are encouraged to consult with their own financial advisors or credit card issuers for any questions or concerns regarding their credit card accounts or financial situation.<br />
                    Bon reserves the right to modify, suspend, or terminate the rewards program at any time without prior notice. The use of Bon and participation in the rewards program is entirely at the user's own risk, and Bon shall not be liable for any damages, losses, or injuries arising from the use of the app or participation in the program.<br /><br />
                    By using Bon, users must comply with all applicable laws and regulations, and any fraudulent, abusive, or unauthorized use of the app or rewards program may result in the termination of the user's account and forfeiture of any earned rewards.<br /><br />
                    Note that certain Bon product features listed are currently in development and will be available soon.
                </p>
            </div>
            <div className="text-[#fff] text-sm text-bold my-15">
                <Link to="/privacy-policy" className={`mr-4 ${window.location.pathname.includes("/privacy-policy") ? "underline" : ""}`} onClick={navigateAction}>PRIVACY POLICY</Link>
                <Link  to="/terms-and-conditions" className={`${window.location.pathname.includes("/terms-and-conditions") ? "underline" : ""}`} onClick={navigateAction}>TERMS AND CONDITIONS</Link>
            </div>
            <div className="md:flex justify-between items-center">
                <div className="md:text-[20px] text-[14px] max-[400px]:text-[12px] max-[330px]:text-[11px] text-center text-[#BBBBBB]">
                    Copyright © 2025 Bhim Digital, Inc. All rights reserved.
                </div>
                <div className="flex justify-center md:mt-0 mt-4">
                  <a href={shareUrl.twitter} target="_blank">
                     <ImageElement src={twitter} alt={"twitter"} className="w-[22px] h-[22px] opacity-50"/>
                  </a>
                  <a href={shareUrl.linkedin} target="_blank" className="ml-5">
                     <ImageElement src={linkedin} alt={"linkedin"} className="w-[22px] h-[22px] opacity-50"/>
                  </a>
                  <a href={shareUrl.insta} target="_blank" className="ml-5">
                     <ImageElement src={insta} alt={"instagram"} className="w-[22px] h-[22px] opacity-50"/>
                  </a>
               </div>
            </div>
        </div>
    </div>
}

export default TermsFooter;