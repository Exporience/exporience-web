import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import WhatsAppButton from "./components/global/WhatsAppButton";
import HeroAndAboutUs  from "./components/homepage/HeroAndAboutUsSection";
import { OurValues } from "./components/homepage/ValuesSection";
import { OurMissionAndVision } from "./components/homepage/MissionSection";
import ProductSection from "./components/homepage/ProductSection";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="pt-[70px]"
        style={{
          backgroundImage: "url('/images/lines-background.png')",
          minHeight: "100vh",
          width: "100vw",
          backgroundSize: "110%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-70px 660px",
        }}
      >
        <HeroAndAboutUs />
        <OurValues />
        <OurMissionAndVision />
        <ProductSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}