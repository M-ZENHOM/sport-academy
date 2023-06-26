import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="bg-swimBg w-full h-[65vh] bg-cover bg-no-repeat relative before:z-0 before:absolute before:w-[50%] md:before:w-[100%] xl:before:w-[70%] before:content-['']   before:bg-pur-300 before:right-0 before:top-0 before:h-full before:z-1"
    >
      <div className="w-full max-w-[1360px] mx-auto ">
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex flex-col items-end justify-start text-end z-55 sm:p-4 px-8 text-white absolute right-[30px] z-55 "
        >
          <h2 className="relative  font-bold text-4xl before:content-[''] before:absolute before:w-32 before:h-1 before:bg-pur-900 before:bottom-[-15px] before:right-0 mt-20 sm:mt-0">
            معلومات عن الاكاديمية
          </h2>
          <p className="w-[400px] sm:w-auto my-5 text-2xl sm:text-[15px]">
            الاكاديمية هو نادي رياضي و إجتماعي لديه 16 فرع في 15 محافظة مختلفة
            من محافظات مصر مابين عامل وتحت الانشاء. هدف سيتي كلوب الأساسي هو
            جعله المكان الأفضل للعائله لتمضية أوقاتهم. فيوفر بيئة صحية و
            إجتماعية للعائلات بمختلف مراحلهم العمرية. يوفر سيتي كلوب مجموعة
            مختلفة و كبيرة من الخدمات حيث يهتم بالمرأه و الرجل و إهتمامتهم و
            مواهب الأطفال و تحقيق أهدافهم و أحلامهم
          </p>
          <Link to="عن-النادي" className="bg-white text-black p-4 rounded-lg">
            معرفة المزيد
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
