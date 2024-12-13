import Image from "next/image";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function ExporiencePage() {
  return (
    <div
    >
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

      <section className="flex flex-col items-center px-[36px] pt-[68px] w-full h-auto relative z-[3]">
        <hr className="w-full border-t border-black" />
        <h2 className="w-[190px] font-[League Spartan] text-[40px] font-semibold text-black text-justify leading-[37px] my-[70px]">
          Our Values
        </h2>
        <div className="flex flex-row items-center justify-between w-[1280px] h-auto">
          {[
            { label: "Quality", width: "64px", height: "17px" },
            { label: "Long-term Relationship", width: "209px", height: "35px" },
            { label: "Safe Packaging", width: "133px", height: "17px" },
            { label: "Secure Payment", width: "137px", height: "17px" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[10px] w-[271px]"
            >
              <div className="w-[271px] h-[170px] bg-[#D9D9D9] rounded-[30px]"></div>
              <p
                className="font-[League Spartan] text-[20px] font-medium text-black text-justify"
                style={{
                  width: item.width,
                  height: item.height,
                  lineHeight: "18px",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="clear-both w-full pt-[68px]">
        <section className="text-center font-sans pt-10">
          <hr className="border-t border-gray-900 mb-6" />
          <blockquote className="text-[64px] font-light text-gray-900 leading-tight font-league-spartan mb-24">
            “To make Indonesia’s agricultural commodities <br />
            <span className="font-bold">
              a cornerstone of the global supply chain,
            </span>
            <br />
            reaching every country and fostering <br /> sustainable growth.”
          </blockquote>
          <div className="w-full h-[209px] bg-[#F1EFE7] flex items-center justify-center">
            <ul className="text-gray-800 text-sm flex space-x-6 justify-center text-left list-disc pl-6">
              <h3 className="text-[32px] font-bold mt-0 text-gray-900 font-league-spartan">
                Our <br /> Missions
              </h3>
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                <div className="text-gray-800 text-left">
                  <li className="text-[18px] leading-relaxed font-glacial-indifference">
                    Opening access to broader and profitable markets that will
                    lead to the increase of farmers' income.
                  </li>
                </div>
                <div className="text-gray-800 text-left">
                  <li className="text-[18px] leading-relaxed">
                    Ensure exported products meet international quality
                    standards through strict quality control.
                  </li>
                </div>
                <div className="text-gray-800 text-left">
                  <li className="text-[18px] leading-relaxed">
                    Assist in the preparation of necessary export documents to
                    facilitate the export process.
                  </li>
                </div>
                <div className="text-gray-800 text-left">
                  <li className="text-[18px] leading-relaxed">
                    Implement sustainable and environmentally friendly business
                    practices throughout the supply chain.
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}