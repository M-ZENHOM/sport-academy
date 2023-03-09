import React from "react";

const Slide = (props) => {
  return (
    <div className="w-[340px] h-[350px] sm:w-[260px] m:h-[300px] md:mx-auto  bg-pur-900 text-end">
      <img className="h-[200px] w-full" src={props.img} alt="" />
      <div className="p-5">
        <h2 className="font-bold text-white text-2xl">{props.title}</h2>
        <p className="text-white mt-3 sm:text-sm">{props.des}</p>
      </div>
    </div>
  );
};

export default Slide;
