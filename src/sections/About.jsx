import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="bg-swimBg w-full h-[65vh] bg-cover bg-no-repeat relative"
    >
      <div className="before:absolute before:w-[50%] md:before:w-[100%] xl:before:w-[70%] before:content-[''] before:bg-pur-300 before:right-0 before:top-0 before:h-full z-0">
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="absolute right-[250px] md:right-0 top-[160px]  md:top-[100px] flex-col items-center justify-center z-5 p-10 text-end text-white"
        >
          <h2 className="relative  font-bold text-4xl before:content-[''] before:absolute before:w-32 before:h-1 before:bg-pur-900 before:bottom-[-15px] before:right-0">
            معلومات عن الاكاديمية
          </h2>
          <p className="w-[400px] sm:w-auto my-5">
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
