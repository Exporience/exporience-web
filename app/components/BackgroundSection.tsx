// app/components/BackgroundSection.tsx
export default function BackgroundSection() {
  return (
    <section className="px-[150px] py-12 bg-white"> 
      <hr className="border-t border-gray-900 mb-6" />
      <div className="flex items-start mb-8 items-stretch"> {/* Use items-stretch to make sure both sections are same height */}
      <div className="w-1/3 relative">
  <div className="bg-[#1A1515] text-white p-6 rounded-lg shadow-lg h-60 relative">
    <div className="absolute bottom-0 left-0 p-6">
      <p className="font-semibold text-base">Pertiwi Kusuma Wardani</p>
      <p className="text-sm opacity-75">(Founder of Experience)</p>
    </div>
  </div>
</div>

        <div className="w-2/3 pl-12">
          <h2
            className="text-4xl font-bold text-[#252420]"
            style={{ fontFamily: "League Spartan, sans-serif" }}
          >
            Background
          </h2>
          <p className="mt-4 text-[#252420] leading-relaxed text-lg text-justify">
            Indonesian benefits from exceptional geographical conditions and
            substantial natural resources. Recognizing this potential, we identify
            a significant economic opportunity to support local farmers. Our commitment
            lies in leveraging these advantages by offering services that connect
            Indonesian farmers with domestic and international buyers. Through an
            innovative and sustainable approach, we aim to enhance the quality of life
            for farmers, broaden their market access, and foster inclusive economic
            growth. We believe that comprehensive support for this sector can
            generate a substantial positive impact on the national economy and the
            well-being of society.
          </p>
        </div>
      </div>
    </section>
  );
}
