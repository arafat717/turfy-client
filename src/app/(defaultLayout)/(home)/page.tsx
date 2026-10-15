import AboutSection from "@/components/Mainlayout/Home/AboutUsSection";
import CourtBookingSection from "@/components/Mainlayout/Home/CourtBookingSection";
import Hero from "@/components/Mainlayout/Home/Hero";
import ParallaxBanner from "@/components/Mainlayout/Home/ParallaxSection";
import TickerBar from "@/components/Mainlayout/Home/TickerBar";
import WhatWeOffer from "@/components/Mainlayout/Home/WhatWeOffer";

const page = () => {
  return (
    <div>
      <Hero/>
      <TickerBar/>
      <CourtBookingSection/>
      <WhatWeOffer/>
      <ParallaxBanner/>
      <AboutSection/>
    </div>
  );
};

export default page;
