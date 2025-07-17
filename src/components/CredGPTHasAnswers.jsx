import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// import standford from "../assets/stanford.jpg";
// import standford from "../assets/standford.png";
const standford = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/standford.png"
// import ucberkley from "../assets/ucberkley.jpg";
// import ucberkley from "../assets/ucberkley.png";
const ucberkley = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/ucberkley.png"
// import fico from "../assets/fico.jpg";
// import fico from "../assets/fico.png";
const fico = "https://bon-app-public.s3.us-west-1.amazonaws.com/landingpagemedia/landingpagemedia/fico.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import { Cred } from "../BlogContainer/constant/url";

// export const Cards = [
//   {
//     image: featureimage1,
//     text: "Best first credit card? Let’s find the best one for you.",
//     color: "#471208",
//   },
//   {
//     image: featureimage2,
//     text: "Best cashback credit card?",
//     color: "#054343",
//   },
//   {
//     image: featureimage3,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage4,
//     text: "Want to travel for free with just points?",
//     color: "#4C6C0B",
//   },
//   {
//     image: featureimage5,
//     text: "Want to travel for free with just points?",
//     color: "#772D1B",
//   },
//   {
//     image: featureimage6,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage30,
//     text: "Want to travel for free with just points?",
//     color: "#432805",
//   },

//   {
//     image: featureimage8,
//     text: "Want to travel for free with just points?",
//     color: "#844F66",
//   },
//   {
//     image: featureimage9,
//     text: "Want to travel for free with just points?",
//     color: "#053743",
//   },
//   {
//     image: featureimage10,
//     text: "Want to travel for free with just points?",
//     color: "#62270E",
//   },
//   {
//     image: featureimage11,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage12,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage13,
//     text: "Want to travel for free with just points?",
//     color: "#5B2907",
//   },
//   {
//     image: featureimage14,
//     text: "Want to travel for free with just points?",
//     color: "#063E54",
//   },
//   {
//     image: featureimage15,
//     text: "Want to travel for free with just points?",
//     color: "#9BB2BC",
//   },
//   {
//     image: featureimage16,
//     text: "Want to travel for free with just points?",
//     color: "#0E5B53",
//   },
//   {
//     image: featureimage17,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage18,
//     text: "Want to travel for free with just points?",
//     color: "#05431B",
//   },
//   {
//     image: featureimage19,
//     text: "Want to travel for free with just points?",
//     color: "#5D560D",
//   },
//   {
//     image: featureimage20,
//     text: "Want to travel for free with just points?",
//     color: "#533B0A",
//   },
//   {
//     image: featureimage21,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage22,
//     text: "Want to travel for free with just points?",
//     color: "#0E4E68",
//   },
//   {
//     image: featureimage23,
//     text: "Want to travel for free with just points?",
//     color: "#663413",
//   },
//   {
//     image: featureimage24,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage25,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage26,
//     text: "Want to travel for free with just points?",
//     color: "#7B3019",
//   },
//   {
//     image: featureimage27,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage28,
//     text: "Want to travel for free with just points?",
//     color: "#3D7303",
//   },
//   {
//     image: featureimage29,
//     text: "Want to travel for free with just points?",
//     color: "#053143",
//   },
//   {
//     image: featureimage7,
//     text: "Want to travel for free with just points?",
//     color: "#054317",
//   },
// ];
export const Cards = [
    {
        id: 1,
        question: "First credit card? Let’s find the best one.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage1.png",
    },
    {
        id: 2,
        question: "Want max cashback? Let’s explore your options.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage2.png",
    },
    {
        id: 3,
        question: "Can I travel free with points? Show me how.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage3.png",
    },
    {
        id: 4,
        question: "Need a card fast? Let’s find the easiest one.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage4.png",
    },
    {
        id: 5,
        question: "Which banks approve cards fastest? Let’s talk.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage5.png",
    },
    {
        id: 6,
        question: "Want instant approval? Let’s find the right card.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage6.png",
    },
    {
        id: 7,
        question: "What credit score do you need? Ask Bon.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage7.png",
    },
    {
        id: 8,
        question: "Thinking of a Chase card? Let’s check if you qualify.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage8.png",
    },
    {
        id: 9,
        question: "Got a 580 score? Let’s see your options.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage9.png",
    },
    {
        id: 10,
        question: "How fast can you get a card? Let’s find out.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage10.png",
    },
    {
        id: 11,
        question: "Confused about income checks? Let’s explain.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage11.png",
    },
    {
        id: 12,
        question: "No credit history? Let’s find an easy approval.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage12.png",
    },
    {
        id: 13,
        question: "Best bank card? Let’s compare them.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage13.png",
    },
    {
        id: 14,
        question: "Easier with your bank? Let’s chat.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage14.png",
    },
    {
        id: 15,
        question: "What’s the lowest credit limit? Let’s check.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage15.png",
    },
    {
        id: 16,
        question: "Need a card ASAP? Let’s see how fast.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage16.png",
    },
    {
        id: 17,
        question: "Bad credit? Let’s find a bank that approves.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage17.png",
    },
    {
        id: 18,
        question: "Need a card anyone can get? Bon can help.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage18.png",
    },
    {
        id: 19,
        question: "Struggling to get approved? Let’s fix that.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage19.png",
    },
    {
        id: 20,
        question: "Want a $2,000 limit? Ask Bon AI.",
        image: 'https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage20.png',
    },
    {
        id: 21,
        question: "What’s a fresh start card? Let’s explore.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage21.png",
    },
    {
        id: 22,
        question: "Which score guarantees approval? Let’s find out.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage22.png",
    },
    {
        id: 23,
        question: "$5,000 limit with bad credit? Let’s check.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage23.png",
    },
    {
        id: 24,
        question: "Easiest unsecured card? Let’s find the best.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage24.png",
    },
    {
        id: 25,
        question: "What’s the #1 card to get? Let’s compare.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage25.png",
    },
    {
        id: 26,
        question: "Easy to get Target card? Let’s see.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage26.png",
    },
    {
        id: 27,
        question: "Does Walmart offer a card? Let’s check.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage27.png",
    },
    {
        id: 28,
        question: "Got a 600 score? Let’s see your cards.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage28.png",
    },
    {
        id: 29,
        question: "Can 500 score get approved? Let’s find out.",
        image: "https://bon-app-public.s3.us-west-1.amazonaws.com/webappmedia/webappmedia/FeatureImage29.png",
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
    <div className="w-full flex flex-col items-center justify-center bg-white  py-6 mt-16 md:mt-0  lg:py-16 mb-[40px] lg:mb-24">
      <h2 className="w-full text-center text-[48px] mx-10 md:w-[80%] lg:w-[90%] leading-[40px] lg:leading-[68px] lg:text-[72px] font-bold text-black mb-10">
        GOT QUESTIONS ABOUT CREDIT CARDS? CREDGPT HAS ANSWERS.
      </h2>
      <div className="relative w-full flex items-center justify-center overflow-hidden pl-6 ">
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
          loop={false}
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
                  {card.question}
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
        <div className="flex lg:w-[60%] items-center justify-between md:gap-12 ">
          <img
            src={standford}
            alt="Stanford"
            className="w-[93px] h-[25px] lg:w-[187px] lg:h-[60px]"
          />
          <img
            src={fico}
            alt="FICO"
            className="w-[50px] h-[18px] lg:w-[110px] lg:h-[40px] ml-12"
          />

          <img
            src={ucberkley}
            alt="UC Berkeley"
            className="w-[140px] h-[40px] lg:w-[260px] lg:h-[80px] lg:mt-3 ml-4 lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CredGPTHasAnswers;
