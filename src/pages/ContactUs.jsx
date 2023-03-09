import React from "react";
import Intro from "../sections/Intro";
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
      <div className="w-full bg-white h-fit mx-auto py-20 text-white border-b-2">
        <h2 className="flex mb-20 text-4xl text-pur-900 justify-center items-center md:text-xl">
          ارسل رسالتك عبر البريد الالكتروني
        </h2>
        <form className="flex flex-col mx-auto justify-center items-center h-full space-y-4">
          <input
            className="w-[500px] md:w-[300px] outline-none border-none bg-pur-900 placeholder-white p-4 rounded-md text-end "
            type="text"
            placeholder="الاسم"
            id="name"
          />
          <input
            className="w-[500px] md:w-[300px] outline-none border-none bg-pur-900 placeholder-white p-4 rounded-md text-end "
            type="email"
            placeholder="البريد الالكتروني"
          />
          <textarea
            className="w-[500px] md:w-[300px] outline-none border-none bg-pur-900 placeholder-white h-[200px] p-2 rounded-md resize-none text-end"
            type="text"
            placeholder="رسالتك"
          />
          <button
            type="sumbit"
            onClick={HandleSubmit}
            className="outline-none p-3 w-[200px] bg-pur-900 text-white rounded-md border-[1px]"
          >
            ارسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
