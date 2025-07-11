import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import standford from "../assets/stanford.jpg";
import ucberkley from "../assets/ucberkley.jpg";
import fico from "../assets/fico.jpg";
import featureimage1 from "../assets/MasterCards/FeatureImage1.png";
import featureimage2 from "../assets/MasterCards/FeatureImage2.png";
import featureimage3 from "../assets/MasterCards/FeatureImage3.png";
import featureimage4 from "../assets/MasterCards/FeatureImage4.png";
import featureimage5 from "../assets/MasterCards/FeatureImage5.png";
import featureimage6 from "../assets/MasterCards/FeatureImage6.png";
import featureimage7 from "../assets/MasterCards/FeatureImage7.png";
import featureimage8 from "../assets/MasterCards/FeatureImage8.png";
import featureimage9 from "../assets/MasterCards/FeatureImage9.png";
import featureimage10 from "../assets/MasterCards/FeatureImage10.png";
import featureimage11 from "../assets/MasterCards/FeatureImage11.png";
import featureimage12 from "../assets/MasterCards/FeatureImage12.png";
import featureimage13 from "../assets/MasterCards/FeatureImage13.png";
import featureimage14 from "../assets/MasterCards/FeatureImage14.png";
import featureimage15 from "../assets/MasterCards/FeatureImage15.png";
import featureimage16 from "../assets/MasterCards/FeatureImage16.png";
import featureimage17 from "../assets/MasterCards/FeatureImage17.png";
import featureimage18 from "../assets/MasterCards/FeatureImage18.png";
import featureimage19 from "../assets/MasterCards/FeatureImage19.png";
import featureimage20 from "../assets/MasterCards/FeatureImage20.png";
import featureimage21 from "../assets/MasterCards/FeatureImage21.png";
import featureimage22 from "../assets/MasterCards/FeatureImage22.png";
import featureimage23 from "../assets/MasterCards/FeatureImage23.png";
import featureimage24 from "../assets/MasterCards/FeatureImage24.png";
import featureimage25 from "../assets/MasterCards/FeatureImage25.png";
import featureimage26 from "../assets/MasterCards/FeatureImage26.png";
import featureimage27 from "../assets/MasterCards/FeatureImage27.png";
import featureimage28 from "../assets/MasterCards/FeatureImage28.png";
import featureimage29 from "../assets/MasterCards/FeatureImage29.png";
import featureimage30 from "../assets/MasterCards/FeatureImage30.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import { Cred } from "../BlogContainer/constant/url";

export const Cards = [
  {
    image: featureimage1,
    text: "Best first credit card? Let’s find the best one for you.",
    color: "#471208",
  },
  {
    image: featureimage2,
    text: "Best cashback credit card?",
    color: "#054343",
  },
  {
    image: featureimage3,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage4,
    text: "Want to travel for free with just points?",
    color: "#4C6C0B",
  },
  {
    image: featureimage5,
    text: "Want to travel for free with just points?",
    color: "#772D1B",
  },
  {
    image: featureimage6,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage30,
    text: "Want to travel for free with just points?",
    color: "#432805",
  },

  {
    image: featureimage8,
    text: "Want to travel for free with just points?",
    color: "#844F66",
  },
  {
    image: featureimage9,
    text: "Want to travel for free with just points?",
    color: "#053743",
  },
  {
    image: featureimage10,
    text: "Want to travel for free with just points?",
    color: "#62270E",
  },
  {
    image: featureimage11,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage12,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage13,
    text: "Want to travel for free with just points?",
    color: "#5B2907",
  },
  {
    image: featureimage14,
    text: "Want to travel for free with just points?",
    color: "#063E54",
  },
  {
    image: featureimage15,
    text: "Want to travel for free with just points?",
    color: "#9BB2BC",
  },
  {
    image: featureimage16,
    text: "Want to travel for free with just points?",
    color: "#0E5B53",
  },
  {
    image: featureimage17,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage18,
    text: "Want to travel for free with just points?",
    color: "#05431B",
  },
  {
    image: featureimage19,
    text: "Want to travel for free with just points?",
    color: "#5D560D",
  },
  {
    image: featureimage20,
    text: "Want to travel for free with just points?",
    color: "#533B0A",
  },
  {
    image: featureimage21,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage22,
    text: "Want to travel for free with just points?",
    color: "#0E4E68",
  },
  {
    image: featureimage23,
    text: "Want to travel for free with just points?",
    color: "#663413",
  },
  {
    image: featureimage24,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage25,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage26,
    text: "Want to travel for free with just points?",
    color: "#7B3019",
  },
  {
    image: featureimage27,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage28,
    text: "Want to travel for free with just points?",
    color: "#3D7303",
  },
  {
    image: featureimage29,
    text: "Want to travel for free with just points?",
    color: "#053143",
  },
  {
    image: featureimage7,
    text: "Want to travel for free with just points?",
    color: "#054317",
  },
];

const CredGPTHasAnswers = () => {
  const containerRef = useRef(null);
  const [cards] = useState(Cards);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
  const container = containerRef.current;

  const handleScroll = () => {
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault(); // Prevent default vertical scrolling
    container.scrollBy({
      left: e.deltaY,
    });
  };

  container?.addEventListener("scroll", handleScroll);
  container?.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    container?.removeEventListener("scroll", handleScroll);
    container?.removeEventListener("wheel", handleWheel);
  };
}, []);


  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setIsEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRedirect = () => {
    window.open(Cred, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-6 lg:py-16 mb-[40px] lg:mb-24">
      <h2 className="w-full text-center text-[48px] mx-10 md:w-[80%] lg:w-[79%] leading-[40px] lg:leading-[68px] lg:text-[72px] font-bold text-black mb-10">
        GOT QUESTIONS ABOUT CREDIT CARDS? CREDGPT HAS ANSWERS.
      </h2>
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        {/* <div
          ref={containerRef}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory space-x-6 px-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="snap-start shrink-0 w-[180px] h-[180px]  overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <img
                src={card.image}
                alt="Card"
                className="absolute inset-0 w-full h-full object-cover brightness-[60%] "
              />
              <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black via-transparent to-transparent z-10" />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <p className="text-white text-sm font-medium font-format-Helvetica-Neue">
                  {card.text}
                </p>
                <button className="w-[148px] bg-white text-sm font-bold px-2 py-1 font-format-Helvetica-Neue cursor-pointer" onClick={handleRedirect}>
                  START CHAT
                </button>
              </div>
            </motion.div>
          ))}
        </div> */}
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="w-full overflow-hidden px-4"
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="snap-start shrink-0 !w-[180px] !h-[180px]  overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <img
                src={card.image}
                alt="Card"
                className="absolute inset-0 w-full h-full object-cover brightness-[60%] "
              />
              <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black via-transparent to-transparent z-10" />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <p className="text-white text-sm font-medium font-format-Helvetica-Neue">
                  {card.text}
                </p>
                <button className="w-[148px] bg-white text-sm font-bold px-2 py-1 font-format-Helvetica-Neue cursor-pointer" onClick={handleRedirect}>
                  START CHAT
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10 mt-16">
        <p className="text-[#BBBBBB] text-sm italic">Built by people from</p>
        <div className="flex lg:w-[60%] items-center justify-between gap-5 md:gap-12 ">
          <img
            src={standford}
            alt="Stanford"
            className="w-[93px] h-[20px] lg:w-[187px] lg:h-[40px]"
          />
          <img
            src={fico}
            alt="FICO"
            className="w-[56px] h-[20px] lg:w-auto lg:h-auto"
          />

          <img
            src={ucberkley}
            alt="UC Berkeley"
            className="w-[102px] h-[20px] lg:w-[187px] lg:h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CredGPTHasAnswers;
