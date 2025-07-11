import React, { useState } from "react";
import axios from "axios";
import url from "../../constant/url";

function EmailElement(){
   const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const fetchApi = async (email) => {
      try {
        const response = await axios.post(url.earlyAccess, { email },
          { headers: { "Content-Type": "application/json" } });
        setMessage("Thank you for joining the Bon waitlist! Stay tuned for updates :)");
        console.log(response.data);
      } catch (error) {
        setMessage("Failed to submit.");
        console.error(error);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (email.trim()) fetchApi(email);
      else setMessage("Please enter a valid email.");
    };
   return(
      <>
      {message ? <p className="form-message w-full">{message}</p> : <form onSubmit={handleSubmit} className="md:rounded-full md:border md:border-[#ffffff52] mx-5">
            <input type="email"  
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="md:border-[0px] outline-[0px] md:py-0 py-2 px-5 md:w-sm w-full font-extralight rounded-full border border-[#ffffff52]" placeholder="Enter your email address" 
            required/>
            <button type="submit" className="md:w-auto w-full bg-white text-black font-medium md:px-10 px-8 py-3 rounded-full md:text-[20px] text-[14px] cursor-pointer md:mt-0 mt-5">Get early access</button>
         </form> }
      </>
   )
}

export default EmailElement;