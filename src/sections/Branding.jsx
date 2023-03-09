import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImg from "../assets/branding/Ar-logo-track-02.jpg";
import brandTwoImg from "../assets/branding/CIB-NEW-LOGO-2020.png";
import brandThreeImg from "../assets/branding/Cosmos.png";
import brandFourImg from "../assets/branding/download-2.png";
import brandFiveImg from "../assets/branding/efinance-final-logo.jpg";
import brandSixImg from "../assets/branding/fawry-logo-en-last.png";
import brandSevenImg from "../assets/branding/Partner-07-1.png";
const Branding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Swiper
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 80,
          centeredSlides: true,
        },
        820: {
          slidesPerView: 2,
          spaceBetween: 200,
          centeredSlides: true,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper flex justify-center items-center w-5/6 py-10"
    >
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandTwoImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandThreeImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandFourImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandFiveImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandSixImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[200px] h-[100px]" src={brandSevenImg} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Branding;
