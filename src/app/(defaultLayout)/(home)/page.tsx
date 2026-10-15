import AboutSection from "@/components/Mainlayout/Home/AboutUsSection";
import CourtBookingSection from "@/components/Mainlayout/Home/CourtBookingSection";
import Hero from "@/components/Mainlayout/Home/Hero";
import ParallaxBanner from "@/components/Mainlayout/Home/ParallaxSection";
import TickerBar from "@/components/Mainlayout/Home/TickerBar";

const page = () => {
  return (
    <div>
      <Hero/>
      <TickerBar/>
      <CourtBookingSection/>
      <ParallaxBanner/>
      <AboutSection/>
    </div>
  );
};

export default page;
