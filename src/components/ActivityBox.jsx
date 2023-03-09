import React from "react";

const ActivityBox = (props) => {
  return (
    <div className="w-[1000px] h-[300px] flex md:flex-col-reverse md:w-[300px] md:my-10 bg-white shadow-xl mb-5 md:mt-40 hover:scale-[1.1] transition-all duration-700 hover:rounded-2xl">
      <div className="text-black flex flex-col text-right justify-start p-10">
        <h2 className="font-bold text-3xl md:text-xl mb-5 ">{props.title}</h2>
        <p className="text-xl md:text-sm">{props.des}</p>
        <button className="text-right mt-5 text-pur-900 font-bold ">
          المزيد
        </button>
      </div>
      <img className="w-[600px]" src={props.img} alt="logo" />
    </div>
  );
};

export default ActivityBox;
