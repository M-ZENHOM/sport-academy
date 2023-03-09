import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[50vh] w-5/6 md:w-full bg-white mx-auto">
      <div className="bg-pur-900 w-full h-[40vh] md:h-auto md:py-10 rounded-b-full md:rounded-none">
        <div className="flex flex-row-reverse md:flex-col w-[70%] h-[100%] justify-between mx-auto items-center text-center">
          <div className="flex-col justify-center items-center text-center">
            <h2 className="text-white font-bold text-4xl">اكاديمية الشباب</h2>
            <p className="text-white w-[350px] md:w-auto my-5">
              هو نادي رياضي و إجتماعي لديه 16 فرع في 15 محافظة مختلفة من محافظات
              مصر مابين عامل وتحت االنشاء. هدف سيتي كلوب الأساسي هو جعله المكان
              الأفضل للعائله لتمضية أوقاتهم. فيوفر بيئة صحية و إجتماعية للعائلات
              بمختلف مراحلهم العمرية.
            </p>
            <div className="flex w-[200px] justify-evenly mx-auto">
              <a className="text-white text-4xl hover:text-[#3d1df0] " href="#">
                <AiFillFacebook />
              </a>
              <a className="text-white text-4xl hover:text-[#1d9bf0] " href="#">
                <AiFillTwitterSquare />
              </a>
              <a className="text-white text-4xl hover:text-[#f01db1] " href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="md:mt-20">
            <h2 className="text-white font-bold text-4xl">روابط هامة</h2>
            <div className="flex flex-col justify-around text-right mt-5 h-[15vh] text-white">
              <Link to="/">الرئيسية</Link>
              <Link to="/">سياسة الاستخدام</Link>
              <Link to="/">حجز الاحداث</Link>
              <Link to="/">حجز الملاعب</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col md:text-center justify-around pt-10 md:py-5 font-bold">
        <h2>حقوق الطبع والنشر محفوظة ©</h2>
        <a href="/" className="uppercase">
          Zenhom
        </a>
      </div>
    </footer>
  );
};

export default Footer;
