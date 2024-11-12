// app/components/BackgroundSection.tsx
export default function BackgroundSection() {
  return (
    <section id="about" className="p-8 bg-white">
      <h2
        className="text-3xl font-bold text-black"
        style={{ fontFamily: "League Spartan, sans-serif" }}
      >
        Background
      </h2>
      <p className="mt-4 text-black">
        Indonesian benefits from exceptional geographical conditions and
        substantial natural resources...
      </p>
      <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg">
        <p className="font-bold">Pertiwi Kusuma Wardani</p>
        <p className="text-sm">Founder of Experience</p>
      </div>
    </section>
  );
}
