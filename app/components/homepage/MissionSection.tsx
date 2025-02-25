export function OurMissionAndVision() {
  return (
    <div className="clear-both w-full pt-[68px]">
      <section className="text-center font-sans pt-10">
        <hr className="border-t border-gray-900 mb-6" />
        <blockquote className="text-[64px] max-sm:text-4xl font-light text-gray-900 leading-tight font-league-spartan mb-24">
          “To make Indonesia’s agricultural commodities <br />
          <span className="font-bold text-[#182989]">
            a cornerstone of the global supply chain,
          </span>
          <br />
          reaching every country and fostering <br /> sustainable growth.”
        </blockquote>
        <div className="w-full py-10 bg-[#F1EFE7] flex items-center justify-center px-[14px] xl:h-[250px]">
          <ul className="text-gray-800 text-sm flex max-md:flex-col space-x-6 justify-center text-left list-disc md:pl-6 max-md:px-5">
            <h3 className="text-[32px] xl:text-[40px] font-bold mt-0 text-gray-900 font-league-spartan max-md:mb-5">
              Our <br /> <br /> <span className="text-[#182989]"> Missions </span>
            </h3>
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-[60px] md:px-6">
              <div className="text-gray-800 text-left">
                <li className="text-[18px] leading-relaxed">
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
  );
}