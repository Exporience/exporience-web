// app/components/MissionSection.tsx
export default function MissionSection() {
  return (
    <section className="p-8 bg-white text-center">
      <blockquote className="text-2xl italic font-semibold text-gray-800">
        "To make Indonesia’s agricultural commodities a cornerstone of the
        global supply chain..."
      </blockquote>
      <h3 className="text-3xl font-bold mt-6">Our Missions</h3>
      <ul className="mt-4 text-gray-700 space-y-2">
        <li>
          Opening access to broader and profitable markets that will lead to the
          increase of farmer’s income.
        </li>
        <li>
          Ensure exported products meet international quality standards...
        </li>
        <li>Assist in the preparation of necessary export documents...</li>
        <li>
          Implement sustainable and environmentally friendly business
          practices...
        </li>
      </ul>
    </section>
  );
}
