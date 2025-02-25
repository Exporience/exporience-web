import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import WhatsAppButton from "./components/global/WhatsAppButton";
import HeroAndAboutUs  from "./components/HomePage/HeroAndAboutUsSection";
import { OurValues } from "./components/HomePage/ValuesSection";
import { OurMissionAndVision } from "./components/HomePage/MissionSection";
import CategoriesSection from "./components/HomePage/CategoriesSection";
// import ProductSection from "./components/homepage/ProductSection";

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
        {/* <ProductSection /> */}
        <CategoriesSection/>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}