"use client";

export default function CoffeeBeansPage() {
  return (
    <section className="relative w-full h-auto max-w-7xl mx-auto p-8">
      <h2 className="text-4xl xl:text-[64px] xl:pt-[50px] xl:pb-[50px] font-semibold text-center text-black pb-[20px]">
        Our <span className="text-[#182989]">Coffee Beans</span>
      </h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <div>
          <img
            src="/images/RobustBeans.png"
            alt="Robust Beans"
            className="w-full h-auto"
          />
        </div>

        {/* Text Description Section */}
        <div>
          <p className="text-[20px] text-gray-700">
            Our roasted coffee beans are carefully selected and expertly roasted
            to bring out their full flavor potential. Each bean is a culmination
            of quality sourcing, precise roasting profiles, and meticulous
            attention to detail, ensuring a rich and aromatic experience in
            every cup.
          </p>
          <br />
          <p className="text-[20px] text-gray-700">
            Whether you prefer light, medium, or dark roasts, our beans offer a
            wide range of flavors—from bright, fruity, and floral notes to bold,
            chocolatey, and smoky undertones. Perfect for brewing methods
            ranging from espresso to pour-over, these roasted beans deliver
            exceptional taste and freshness.
          </p>
        </div>
      </div>

      {/* Coffee Menu in Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Arabika Menu */}
        <div className="border border-[#8B4513] p-6 bg-transparent rounded-lg">
          <h4 className="text-2xl font-semibold text-black mb-4 text-center">
            ARABIKA
          </h4>
          <ul className="text-lg text-gray-700 text-center">
            <li>Luwak - $32.9</li>
            <li>Wine - $19.2</li>
            <li>Yellow/Kuning - $16.1</li>
            <li>Peaberry - $14.8</li>
            <li>Honey - $13.3</li>
            <li>Natural - $12.6</li>
            <li>Fullwash - $12.6</li>
            <li>Arabika Spesial - $9.4</li>
          </ul>
        </div>

        {/* House Blend Menu */}
        <div className="border border-[#8B4513] p-6 bg-transparent rounded-lg">
          <h4 className="text-2xl font-semibold text-black mb-4 text-center">
            HOUSE BLEND
          </h4>
          <ul className="text-lg text-gray-700 text-center">
            <li>Full Arabika - $11.9</li>
            <li>80/20 - $11.3</li>
            <li>70/30 - $10.9</li>
            <li>60/40 - $10.6</li>
            <li>50/50 - $10.1</li>
            <li>40/60 - $9.5</li>
            <li>30/70 - $9.4</li>
            <li>20/80 - $9.1</li>
          </ul>
        </div>

        {/* Other Coffee Menu */}
        <div className="border border-[#8B4513] p-6 bg-transparent rounded-lg">
          <h4 className="text-2xl font-semibold text-black mb-4 text-center">
            OTHER
          </h4>
          <ul className="text-lg text-gray-700 text-center">
            <li>Robusta Fine - $9.9</li>
            <li>Robusta Higland - $9.9</li>
            <li>Robusta Premium - $8.8</li>
            <li>Robusta Lanang - $9.9</li>
            <li>Kopi Jowo - $9.9</li>
            <li>Ekselsa - $9.9</li>
            <li>Wine Robusta - $9.9</li>
            <li>Robusta Asalan - $7.6</li>
          </ul>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-4 italic text-center">
        *Special Price Min. 10Kg
      </p>
    </section>
  );
}
