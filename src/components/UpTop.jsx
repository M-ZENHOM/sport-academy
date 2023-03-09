import React, { useEffect, useState } from "react";
import { AiOutlineUpCircle } from "react-icons/ai";
import * as Scroll from "react-scroll";

const UpTop = () => {
  const ScrollTop = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const ScrollHandle = () => {
      window.scrollY < 500 && setScroll(false);
      window.scrollY >= 800 && setScroll(true);
    };
    window.addEventListener("scroll", ScrollHandle);
    return () => window.addEventListener("scroll", ScrollHandle);
  }, []);
  return (
    <div
      onClick={() => {
        ScrollTop();
      }}
      className={`${
        isScroll
          ? "fixed right-10 bottom-10 text-black text-4xl p-2 text-center cursor-pointer hover:scale-[1.1]"
          : "hidden"
      }`}
    >
      <AiOutlineUpCircle />
    </div>
  );
};

export default UpTop;
