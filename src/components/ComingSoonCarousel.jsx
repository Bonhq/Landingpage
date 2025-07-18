import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";

const carouselsun = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselsun.jpg"
const carouselhill = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselhill.png"
const carouselrc = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselrc.png"
const carouselmarriage = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselmarriage.jpg"
const carouselcar = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselcar.jpg"
const carouselgraduate = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselgraduate.jpg"
const carouselfamily = 'https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/carouselfamily.png'
// import Blackcard from '../assets/Blackcard.png'
const Blackcard = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/Blackcard.PNG"
const features = [
  {
    title: "",
    description: "",
    imageSrc: Blackcard,
    imageAlt: "Spacer",
    isSpacerCard: true,
  },
  {
    title: "Pay all your credit card bills at one place",
    description:
      "Track and pay all credit card bills in one place. Rewards, credit score, credit builder, and credit optimizer.",
    imageSrc: carouselhill,
    imageAlt: "Mountain landscape with silhouette",
  },
  {
    title: "Find and apply in one single click",
    description:
      "Credit chatbot and agentic applications.",
    imageSrc: carouselsun,
    imageAlt: "Mountain peak at sunset",
  },
  {
    title: "Get lowest interest on credit card debt",
    description:
      "Approve to roll existing credit card debts into a single lower interest rate.",
    imageSrc: carouselrc,
    imageAlt: "Amusement park ride",
  },
  {
    title: "Instant pre-approved personal loans",
    description:
      "Frictionless personal lending, refi, etc.",
    imageSrc: carouselmarriage,
    imageAlt: "Frictionless personal lending",
  },
  {
    title: "Auto Management",
    description:
      "Auto loans, refi, insurance, rewards, etc.",
    imageSrc: carouselcar,
    imageAlt: "Auto Management",
  },
  {
    title: "Student loans",
    description:
      "Refi student debt",
    imageSrc: carouselgraduate,
    imageAlt: "Student loans",
  },
  {
    title: "Mortgage",
    description:
      "Mortgage search, refi,",
    imageSrc: carouselfamily,
    imageAlt: "Mortgage",
  },
];

const ComingSoonCarousel = () => {
  return (
    <div className="bg-black w-full pl-0 py-[80px] lg:py-[120px] lg:pr-[0px] overflow-hidden">
      <div className="mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-[48px] lg:mb-[72px] tracking-tight text-center">
          COMING SOON...
        </h1>

        <div className="w-full overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            loop={false}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="w-full"
          >
            {features.map((feature, index) => (
              <SwiperSlide
                key={index}
                className={`${feature.isSpacerCard ? '!w-[0px] lg:!w-[130px]' : '!w-[85vw] lg:!w-[400px]'} !h-[600px] lg:!h-[700px] flex-shrink-0 rounded-3xl overflow-hidden relative`}
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10" />
                {!feature.isSpacerCard && (
                  <div className="relative w-full lg:w-[336px] z-20 flex flex-col justify-start h-full p-6 text-white">
                    <h3 className="font-grotesk text-[32px] font-[500] mb-2 leading-[34px]">{feature.title}</h3>
                    <p className="text-base font-grotesk text-white/90 leading-[24px]">{feature.description}</p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </div>
  );
};

export default ComingSoonCarousel;