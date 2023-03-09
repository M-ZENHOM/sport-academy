import React from "react";
import ActivityBox from "../components/ActivityBox";
import NewImg from "../assets/events/event-calendar.jpg";
import NewImgTwo from "../assets/events/familybanner.jpg";
import NewImgThree from "../assets/events/football.jpg";
import Intro from "../sections/Intro";
import Head from "../components/Head";
const Activties = () => {
  return (
    <section>
      <Head
        title="الانشطة الرياضية"
        des="الانشطة الرياضية في اكاديمية الشباب"
      />
      <Intro
        high="h-[50vh]"
        title="الانشطة الرياضية"
        btn="اذهب الى الرئيسيه"
        padding="pt-40 md:pb-10"
      />
      <div className="flex flex-col justify-center items-center py-20">
        <ActivityBox
          title="أكاديمية الرياضة للجميع"
          des="اكاديميه سيتى كلوب للرياضه للجميع مع مدربين
            معتمدين من الاتحاد المصري للرياضه للجميع"
          img={NewImg}
        />
        <ActivityBox
          title="أكاديمية الاسكيت"
          des="اكاديمية الاسكيت بسيتى كلوب تحت اشراف
            الكابتن / ادهم محمود"
          img={NewImgTwo}
        />
        <ActivityBox
          title="أكاديمية الملاكمه"
          des="أكاديمية الملاكمه لتطوير المواهب وإكتشاف الأبطال في الملاكمه"
          img={NewImgThree}
        />
      </div>
    </section>
  );
};

export default Activties;
