import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ImageElement from '../../../../../CommonComponent/ImageElement/ImageElement';
import logo from '../../../../../constant/logo';

function SliderFive() {
  const slides = [
    {id:1, image: "", title: "find and apply for your perfect credit card", desc: 'credit chatbot and agentic applications'},
    {id:2, image: "", title: "pay all your credit card bills at one place", desc:'track and pay all credit card bills in one place. Rewards, credit score, credit builder, and credit optimizer'},
    {id:3, image: "", title: "get lowest interest on credit card debt", desc: 'agents to refi existing credit card debts'},
    {id:4, image: "", title: "instant pre-approved Personal loans", desc:'frictionless personal lending, refi, etc.'},
    {id:5, image: "", title: "auto Management", desc: 'auto loans, refi, insurance, rewards, etc.'},
    {id:6, image: "", title: "student loans", desc: 'refi student debt'},
    {id:7, image: "", title: "mortgage", desc: 'mortgage search, refi'},
  ];

  return (
    <>
      <Swiper
        slidesPerView={4.16}
        centeredSlides={false}
        spaceBetween={15}
        grabCursor={true}
        mousewheel={{
          releaseOnEdges: true,
        }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },  // Mobile
          768: { slidesPerView: 2.16 },  // Tablet
          1024: { slidesPerView: 3.16 }, // Desktop
          1500: { slidesPerView: 4.16 }, // Desktop
        }}
        className="mySwiperCenter"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <ImageElement src={`${logo.futureSliderImage}-${index}.png`} alt={slide.title} className={'w-full'}/>
            <div className='absolute top-0 w-full text-white md:p-[30px] p-[20px] '>
              <div className='md:text-3xl text-[24px] font-semibold mb-[15px]'>
                {slide.title}
              </div>
              <p className='text-base'>{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SliderFive;
