import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import CoffeeBeansPage from "../components/CoffeeBeans/CoffeeBeans";


export default function Home() {
  return (
    <>
      <Header />
      <main
        className="pt-[70px]"
        style={{
        //   backgroundImage: "url('/images/lines-background.png')",
          minHeight: "100vh",
          width: "100vw",
          backgroundSize: "110%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-70px 660px",
        }}
      >
        <Banner/>
        <CoffeeBeansPage/>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}