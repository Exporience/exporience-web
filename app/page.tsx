import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { HeroAndAboutUs } from "./components/HeroAndAboutUsSection";
import { OurValues } from "./components/ValuesSection";
import { OurMissionAndVision } from "./components/MissionSection";

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
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}