import React from "react";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Services from "../sections/Services";
import Branding from "../sections/Branding";
import LastEvents from "../sections/LastEvents";
import Head from "../components/Head";

const Home = () => {
  return (
    <>
      <Head title="الرئيسية" des="اكاديمية الشباب الرياضية" />
      <Intro
        high="h-[110vh]"
        title="بنبي نادي بنبي جيل"
        des="يهتم سيتي كلوب بتقديم التسهيلات و البرامج المختلفة للأعضائنا، فيعمل
            على توفير خدمات و أنشطة و تجارب إستثنائية للأعضاء"
        btn=" اشترك بالبريد الالكتروني"
        padding="pt-80 md:pb-10"
      />
      <About />
      <Services />
      <Branding />
      <LastEvents />
    </>
  );
};

export default Home;
