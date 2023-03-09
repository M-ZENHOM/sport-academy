import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Intro = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className={`${props.high} md:h-auto bg-IntroImg bg-cover `}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`flex md:flex-col justify-center items-center ${props.padding} md:pt-40  mx-auto w-5/6 text-center`}
      >
        <div className="md:order-2 pb-10">
          <h2 className="text-myOrange-900 text-5xl md:text-3xl">
            {props.title}
          </h2>
          <p className="w-[500px] md:w-72 text-2xl md:text-xl text-white my-10">
            {props.des}
          </p>
          <Link to="/" className="bg-white p-5 rounded-xl text-pur-900">
            {props.btn}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
