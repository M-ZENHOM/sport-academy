import React from "react";
import Event from "../components/Event";
import familyBg from "../assets/events/familybanner.jpg";
import footballBg from "../assets/events/football.jpg";
import clenderBg from "../assets/events/event-calendar.jpg";

const LastEvents = () => {
  return (
    <section className="bg-beg-900 py-40 ">
      <h2 className=" relative text-center font-bold text-4xl before:absolute before:content-[''] before:w-[170px] before:bottom-[-10px] before:bg-black before:h-[2px]">
        اخر الاحداث
      </h2>
      <div className="flex-col md:flex-col justify-between items-center mx-auto w-5/6 ">
        <Event
          rounded="rounded-r-full"
          title="فريق المنتخب لكرة القدم"
          des="مباريات كرة القدم لمنتخب دوري أبناء مصر لدور الرعاية والأيتام، تحت رعاية الدكتورة نيفين القباج وزير التضامن الاجتماعي"
          bg={footballBg}
        />
        <Event
          order="order-2"
          orderTwo="order-1"
          rounded="rounded-l-full"
          title="نهائي دوري شبين "
          des="نهائيات دوري أكاديميات سيتي كلوب لكرة القدم فى شبين الكوم"
          bg={familyBg}
        />
        <Event
          rounded="rounded-r-full"
          title="مواعيد الحجز"
          des="نهائيات دوري أكاديميات سيتي كلوب لكرة القدم فى شبين الكوم"
          bg={clenderBg}
        />
      </div>
    </section>
  );
};

export default LastEvents;
