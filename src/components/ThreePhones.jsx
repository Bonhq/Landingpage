import React from "react";
import MobilePhone from "../assets/svg/mobile.svg"
import MobilePhone2 from "../assets/svg/mobile2.svg"
import CredGPTvideo from '../assets/CredGPTvideo.mp4'

const ThreePhones = () => {
  const svgString = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1419" height="605" viewBox="0 0 1419 605" fill="none">
      <path d="M2 604C2 604 111.202 291.914 282.968 228.466C439.919 170.491 705.493 299.281 705.493 299.281C705.493 299.281 969.82 439.153 1130.16 385.117C1309.09 324.819 1424 1 1424 1" stroke="url(#paint0_linear_2626_542)" stroke-width="3"/>
      <defs>
        <linearGradient id="paint0_linear_2626_542" x1="2.00002" y1="606.146" x2="1409.2" y2="25.1194" gradientUnits="userSpaceOnUse">
          <stop stop-color="#35C759" stop-opacity="0.04"/>
          <stop offset="0.495192" stop-color="#35C759"/>
          <stop offset="1" stop-color="#35C759" stop-opacity="0.04"/>
        </linearGradient>
      </defs>
    </svg>
  `);
  return (
    <>
      <div
        className='w-full bg-contain bg-center bg-no-repeat bg-black flex items-center justify-between flex-col py-[80px] lg:py-[120px]'
        style={{ backgroundImage: `url('data:image/svg+xml,${svgString}')` }}
      >
        <div className="text-center text-white text-[48px] lg:text-[72px] font-bold uppercase leading-[40px] lg:leading-[64px] tracking-[-0.48px] lg:tracking-[-0.72px]">
          Ask. Compare. Apply.
        </div>
        <div className="mt-[48px] lg:mt-[80px] flex items-center justify-center flex-row -ml-44">
          <div className="max-w-[121px] max-h-[246px] sm:max-w-[240px] sm:max-h-[590px] lg:max-w-[340px] lg:max-h-[690px] z-10" >
            <img src={MobilePhone} alt='mobile img' className="object-cover ml-44"  />
          </div>
          {/* <div className="max-w-[131px] max-h-[265px] sm:max-w-[267px] sm:max-h-[575px] lg:max-w-[367px] lg:max-h-[745px] z-20" >
            <img src={MobilePhone} alt='mobile img' className="object-cover ml-22"  />
          </div> */}
        <div className="relative max-w-[131px] max-h-[265px] sm:max-w-[267px] sm:max-h-[575px] lg:max-w-[367px] lg:max-h-[745px] z-20">
  <img src={MobilePhone} alt="mobile img" className="object-cover ml-22" />

  <div className="absolute top-[3%]  left-[73%] sm:left-[39%] sm:rounded-[30px] rounded-[20px] lg:left-[30%] w-[88%] h-[95%] lg:rounded-[50px] overflow-hidden">
    <video
      src={CredGPTvideo}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>

          <div className="max-w-[121px] max-h-[246px] sm:max-w-[240px] sm:max-h-[590px] lg:max-w-[340px] lg:max-h-[690px] z-10" >
            <img src={MobilePhone2} alt='mobile img' className="object-cover"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePhones;
