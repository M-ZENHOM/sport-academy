import React from "react";
import Intro from "../sections/Intro";
import { CiInstagram, CiFacebook, CiMail } from "react-icons/ci";
import Head from "../components/Head";
const ContactUs = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Head title="تواصل معنا" des="تواصل معا اكاديمية الشباب" />
      <Intro
        high="h-[50vh]"
        title="تواصل معنا"
        btn="اذهب الى الصفحة الرئيسية"
        padding="pt-40 md:pb-10"
      />

      <div className="w-full bg-pur-900 h-fit mx-auto py-20 text-white">
        <h2 className="flex mb-20 text-4xl justify-center items-center md:text-xl">
          ارسل رسالتك عبر البريد الالكتروني
        </h2>
        <form className="flex flex-col mx-auto justify-center items-center h-full space-y-4">
          <input
            className="w-[500px] md:w-[300px] outline-none border-none bg-beg-900 placeholder-black p-4 rounded-md text-end "
            type="text"
            placeholder="الاسم"
            id="name"
          />
          <input
            className="w-[500px] md:w-[300px] outline-none border-none bg-beg-900 placeholder-black p-4 rounded-md text-end "
            type="email"
            placeholder="البريد الالكتروني"
          />
          <textarea
            className="w-[500px] md:w-[300px] outline-none border-none bg-beg-900 placeholder-black h-[200px] p-2 rounded-md resize-none text-end"
            type="text"
            placeholder="رسالتك"
          />
          <button
            type="sumbit"
            onClick={HandleSubmit}
            className="outline-none p-3 w-[200px] bg-beg-900 text-black rounded-md border-[1px]"
          >
            ارسال
          </button>
        </form>
      </div>
      <div className="bg-beg-900 w-full h-[50vh] border-b-[1px]">
        <div className="w-5/6 flex flex-col justify-center items-center h-full text-2xl mx-auto ">
          <h2 className="mb-20">تواصل معنا عبر وسائل التواصل الاجتماعي</h2>
          <div className="flex justify-center items-center text-6xl mx-auto space-x-20">
            <CiInstagram />
            <CiFacebook />
            <CiMail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
