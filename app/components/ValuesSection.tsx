// app/components/ValuesSection.tsx
export default function ValuesSection() {
  return (
    <section className="px-[150px] py-12 bg-white">
      <hr className="border-t border-gray-900 mb-6" />
      <h2 className="text-4xl font-semibold text-center mb-8 tracking-wide font-[League Spartan] text-black">Our Values</h2>
      <div className="grid grid-cols-4 gap-8">
        {[
          { label: "Quality" },
          { label: "Long-term Relationship" },
          { label: "Safe Packaging" },
          { label: "Secure Payment" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 rounded-lg"
          >
            <div className="w-[280px] h-[320px] bg-gray-300 rounded-lg mb-4"></div>
            <p className="text-lg font-medium tracking-tight font-[League Spartan] text-black">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
