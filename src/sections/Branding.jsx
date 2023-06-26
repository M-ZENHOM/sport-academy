import React from "react";
import brandImg from "../assets/branding/Ar-logo-track-02.jpg";
import brandTwoImg from "../assets/branding/CIB-NEW-LOGO-2020.png";
import brandThreeImg from "../assets/branding/Cosmos.png";
import brandFourImg from "../assets/branding/download-2.png";
import brandFiveImg from "../assets/branding/efinance-final-logo.jpg";
import brandSixImg from "../assets/branding/fawry-logo-en-last.png";
import brandSevenImg from "../assets/branding/Partner-07-1.png";
import Marquee from "react-fast-marquee";
const Branding = () => {
  const brandingLogos = [
    brandImg,
    brandTwoImg,
    brandThreeImg,
    brandFourImg,
    brandFiveImg,
    brandSixImg,
    brandSevenImg,
  ];
  return (
    <Marquee
      pauseOnHover={true}
      speed={70}
      className="bg-[#fff] rounded-xl bg-opacity-30 my-4"
    >
      {brandingLogos.map((b, i) => (
        <img key={i} className="w-[250px] h-[100px] ml-8" src={b} alt="" />
      ))}
    </Marquee>
  );
};

export default Branding;
