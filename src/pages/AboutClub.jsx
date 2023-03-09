import React from "react";
import logoImg from "../assets/logo.png";
import Head from "../components/Head";
import Intro from "../sections/Intro";

const AboutClub = () => {
  return (
    <section>
      <Head title="عن النادي" />
      <Intro
        high="h-[50vh]"
        title="ما هي اكاديمية الشباب؟"
        des="اعرف اكثر عن الاكاديمية"
        btn="اذهب الى الرئيسيه"
        padding="pt-32 md:pb-10"
      />
      <div className="flex md:flex-col justify-between items-center mx-auto w-5/6">
        <img className="w-[600px] md:mt-40" src={logoImg} alt="logo" />
        <div className="flex flex-col justify-center items-end py-20 text-right">
          <h2 className="text-4xl font-bold text-black">عن الاكاديمية</h2>
          <p className="w-[800px] md:w-auto mt-10 text-xl">
            أندية الاكاديمية هي أول أندية ذكية رياضية اجتماعية ترفيهية في ١٥
            مدينة مصرية، الهدف الرئيس من إنشاء الاكاديمية هو إعادة إحياء فكرة
            النادي الاجتماعي وتأسيس فكرة تمضية الوقت في النادي مع العائلة
            والأصدقاء لما فيه من خدمات اجتماعية رياضية ثقافية ترفيهية تخدم جميع
            أفراد الأسرة على إختلاف إهتماماتهم. كانت البيئة الصحية السليمة
            الآمنة هي هدف أندية الاكاديمية ودافعها لممارسة الأنشطة الاجتماعية
            والرياضية وشغل أوقات الفراغ في أمان وبفاعلية أكبر. كما يسعى سيتي
            كلوب لتطوير مواهب أبناءنا في كل الألعاب والرياضات وتقديم لاعبين
            محترفين للمنتخبات المصرية وتحقيق بطولات وميداليات ترفع العلم المصري
            على منصات التتويج. الاكاديمية هو أول نادي سمارت في مصر، يقدم خدماته
            بشكل ألكتروني ويُمَكّن أعضاءه من الحصول على خدماته عبر الموقع
            والتطبيق، مثل: الاشتراك ودفع التجديد السنوي والاشتراك في الأكاديميات
            والبوابة الألكترونية
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutClub;
