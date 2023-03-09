import React from "react";
import Slider from "../components/Slider";

const Services = () => {
  return (
    <section className="flex-col items-center justify-center w-full h-140 bg-beg-900 mx-auto pt-10">
      <div className="text-center">
        <h2 className="relative font-bold text-4xl text-black before:absolute before:content-[''] before:w-[140px] before:bottom-[-10px] before:bg-black before:h-[2px]">
          الخدمات
        </h2>
        <p className="text-xl text-black my-5 text-center px-2 w-[500px] md:w-auto m-auto">
          يهتم سيتي كلوب بتقديم التسهيلات و البرامج المختلفة للأعضائنا، فيعمل
          على توفير خدمات و أنشطة و تجارب إستثنائية للأعضاء
        </p>
      </div>
      <Slider />
    </section>
  );
};

export default Services;
