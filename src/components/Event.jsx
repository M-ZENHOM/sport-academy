import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Event = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex md:flex-col items-center justify-evenly mt-20 "
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div
        className={`w-[500px] md:w-[400px] md:mb-10 h-[300px] bg-black ${props.rounded} bg-cover ${props.order} md:order-1 md:${props.Margin}`}
        style={{ backgroundImage: `url(${props.bg})` }}
      />
      <div
        className={`flex-col text-end items-center ${props.orderTwo} md:order-2`}
      >
        <h2 className="font-bold text-2xl">{props.title}</h2>
        <p className="w-[300px] text-xl my-4">{props.des}</p>
        <button
          className=" relative text-[#1264b2] font-bold before:content-[''] before:absolute before:right-0 before:bottom-[-2px]
         before:w-0 before:h-[1px] before:bg-[#1264b2] before:transition-all hover:before:w-full"
        >
          اعرف المزيد عن كل الجديد
        </button>
      </div>
    </div>
  );
};

export default Event;
