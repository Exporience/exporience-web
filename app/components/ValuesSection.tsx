// app/components/ValuesSection.tsx
export default function ValuesSection() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Our Values</h2>
      <div className="flex justify-around mt-6">
        {[
          "Quality",
          "Long-term Relationship",
          "Safe Packaging",
          "Secure Payment",
        ].map((value) => (
          <div
            key={value}
            className="w-1/5 bg-gray-200 p-4 rounded-lg text-center"
          >
            <p className="font-bold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
