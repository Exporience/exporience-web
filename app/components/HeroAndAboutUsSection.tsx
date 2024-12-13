import Image from "next/image";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export function HeroAndAboutUs() {
  return (
    <section id="product" className="bg-transparent relative px-[36px]">
      <div>
        <Image
          src="/images/Hero.png"
          alt="exporience"
          width={0}
          height={650}
          sizes="100vh"
          className="w-full object-cover pt-[38px] rounded-[100px]"
        />
      </div>
      <div className="relative pt-[68px]">
        <h2
          className={`${leagueSpartan.className} text-6xl font-semibold text-gray-800 text-center`}
        >
          About Exporience
        </h2>
        <p className="text-gray-700 mt-4 text-[20px] text-center text-justify">
          Exporience is a company dedicated to enhancing the export experience
          for Indonesian farmers by leveraging the nation's rich natural
          resources and favorable geographical conditions. With a focus on
          connecting local farmers to domestic and international buyers,
          Exporience aims to broaden market access, improve farmers' incomes,
          and foster sustainable economic growth. The company ensures that
          exported agricultural commodities meet international quality
          standards through rigorous sorting, sanitation, and quality control
          processes. Guided by its vision to position Indonesia's agricultural
          products as a cornerstone of the global supply chain, Exporience
          also emphasizes environmentally friendly practices and the
          preparation of essential export documents to streamline the process.
        </p>
      </div>
    </section>
  );
}