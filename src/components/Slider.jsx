import React, { useRef } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import goverImg from "../assets/goverment.jpg";
import KidsArea from "../assets/KidsArea.jpg";
import Mo2tmarat from "../assets/Mo2tmarat.jpg";
import msgad from "../assets/msgad.jpg";
import Slide from "./Slide";
import { useInView } from "framer-motion";

const Slider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Swiper
      ref={ref}
      freeMode={true}
      pagination={{
        clickable: true,
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
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper w-5/6  sm:mx-auto pb-10"
    >
      <SwiperSlide>
        <Slide
          title="المبني الحكومي"
          des="  مبني يقدم خدمات السجل المدني والتسجيل العقاري ومكتب الأستثمارات
            لأعضاء سيتي كلوب"
          img={goverImg}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="منطقة الاطفال"
          des=" منطقة مجهزة بأفضل الألعاب ومؤمنة تماماً للعب أطفالنا في سعادة وأمان "
          img={KidsArea}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="قاعة المؤتمرات "
          des="قاعة مجهزة بأفضل المعدات الصوتية والبصرية وبأفضل تكنولوجيا عالمية لتنظيم مؤتمرات دولية ومحلية."
          img={Mo2tmarat}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="المسجد"
          des="متاح لكل الاعضاء في كل الصلوات"
          img={msgad}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="قاعة المؤتمرات "
          des="قاعة مجهزة بأفضل المعدات الصوتية والبصرية وبأفضل تكنولوجيا عالمية لتنظيم مؤتمرات دولية ومحلية."
          img={Mo2tmarat}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="المبني الحكومي"
          des="  مبني يقدم خدمات السجل المدني والتسجيل العقاري ومكتب الأستثمارات
            لأعضاء سيتي كلوب"
          img={goverImg}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
