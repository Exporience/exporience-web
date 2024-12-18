import React from "react";
import Image from "next/image";

export default function HeroAndAboutSection() {
  return (
    <section className="relative w-full h-auto xl:px-[36px]">
      {/* Hero Image */}
      <div className="w-full h-auto">
        <Image
          src="/images/hero_440px.png"
          alt="Hero Image for Mobile"
          width={440}
          height={200}
          priority
          className="block md:hidden w-full rounded-[40px] pt-4 px-2"
        />
        <Image
          src="/images/hero.png"
          alt="Hero Image for Desktop"
          width={1280}
          height={600}
          priority
          className="hidden md:block w-full object-cover pt-[38px] rounded-[100px]"
        />
      </div>

      {/* About Section */}
      <div className="px-4 pt-8 md:px-[72px] md:pt-[36px]">
        <h1 className="text-[28px] font-['League_Spartan'] font-bold text-black text-center md:text-6xl">
          About <span className="text-[#182989]"> Exporience </span>
        </h1>
        <p className="text-[16px] text-gray-700 leading-[24px] text-justify mt-4 md:text-[20px] md:leading-[28px] font-['League_Spartan']">
        Exporience is a company dedicated to enhancing the export experience for Indonesian farmers by leveraging the nation's rich natural resources and favorable geographical conditions. With a focus on connecting local farmers to domestic and international buyers, Exporience aims to broaden market access, improve farmers' incomes, and foster sustainable economic growth. The company ensures that exported agricultural commodities meet international quality standards through rigorous sorting, sanitation, and quality control processes. Guided by its vision to position Indonesia's agricultural products as a cornerstone of the global supply chain, Exporience also emphasizes environmentally friendly practices and the preparation of essential export documents to streamline the process.
        </p>
      </div>
    </section>
  );
}