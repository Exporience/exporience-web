// app/components/MissionSection.tsx
export default function MissionSection() {
  return (
    <div className="w-full bg-white"> {/* Full width white background */}
      <section className="p-8 bg-white text-center font-sans mx-[150px] py-10"> {/* Padding atas bawah 40px */}
        <hr className="border-t border-gray-900 mb-6" /> {/* Garis hitam tipis */}
        <blockquote className="text-4xl font-normal text-gray-900 leading-tight font-league-spartan mb-24">
          “To make Indonesia’s agricultural commodities <br />
          <span className="font-bold"> a cornerstone of the global supply chain,</span><br />
          reaching every country and fostering sustainable growth.”
        </blockquote>

        <ul className="mt-0 text-gray-800 text-sm flex space-x-6 justify-center text-left list-disc pl-6">
          <h3 className="text-xl font-bold mt-0 text-gray-900 font-league-spartan">Our Missions</h3>
          <li className="text-sm">Opening access to broader and profitable markets that will lead to the increase of farmer’s income.</li>
          <li className="text-sm">Ensure exported products meet international quality standards through strict quality control.</li>
          <li className="text-sm">Assist in the preparation of necessary export documents to facilitate the export process.</li>
          <li className="text-sm">Implement sustainable and environmentally friendly business practices throughout the supply chain.</li>
        </ul>

      </section>
    </div>
  );
}
