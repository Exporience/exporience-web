// app/page.tsx
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import BackgroundSection from "./components/BackgroundSection";
import ValuesSection from "./components/ValuesSection";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductSection />
        <BackgroundSection />
        <ValuesSection />
        <MissionSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
