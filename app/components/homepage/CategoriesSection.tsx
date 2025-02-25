"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function CategoriesSection() {
  return (
    <section
      id="categories-section"
      className="font-['League_Spartan'] p-8 xl:w-full xl:h-auto xl:max-w-none mx-auto"
    >
      {/* Title */}
      <h2 className="text-4xl xl:text-[64px] xl:pt-[50px] xl:pb-[50px] font-semibold text-center text-black pb-[20px]">
        Our <span className="text-[#182989]">Products</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto pb-10">
        We offer a diverse selection of high-quality products, sourced from the
        best farms and suppliers worldwide. Our products are fresh, natural, and
        carefully processed to meet global standards.
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fresh Fruits */}
        <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:bg-[#182989] hover:text-white cursor-pointer group">
          <Image
            src="/images/1.png"
            alt="Fresh Fruits"
            width={500}
            height={500}
            className="w-full h-56 object-cover transition-all"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 transition-all group-hover:text-white">
              Fresh Fruits
            </h3>
            <p className="text-gray-600 text-sm transition-all group-hover:text-white">
              We provide a variety of fresh fruits, ensuring quality and
              freshness for international export and trade.
            </p>
            <Link href="/fresh-fruits">
              <button className="mt-4 px-14 py-4 bg-[#182989] text-white border border-transparent rounded-[20px] transition-all hover:bg-white hover:text-[#182989] group-hover:border-white">
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Coffee Beans */}
        <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:bg-[#182989] hover:text-white cursor-pointer group">
          <Image
            src="/images/11.png"
            alt="Coffee Beans"
            width={500}
            height={300}
            className="w-full h-56 object-cover transition-all"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 transition-all group-hover:text-white">
              Coffee Beans
            </h3>
            <p className="text-gray-600 text-sm transition-all group-hover:text-white">
              Our premium coffee beans are sourced from the best farms, ensuring
              rich flavors and high-quality beans for trade.
            </p>
            <Link href="/coffee-beans">
              <button className="mt-4 px-14 py-4 bg-[#182989] text-white border border-transparent rounded-[20px] transition-all hover:bg-white hover:text-[#182989] group-hover:border-white">
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Spices */}
        <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:bg-[#182989] hover:text-white cursor-pointer group">
          <Image
            src="/images/111.png"
            alt="Spices"
            width={500}
            height={300}
            className="w-full h-56 object-cover transition-all"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 transition-all group-hover:text-white">
              Spices
            </h3>
            <p className="text-gray-600 text-sm transition-all group-hover:text-white">
              High-quality spices sourced from around the world, adding rich
              flavors to culinary creations.
            </p>
            <Link href="/spices">
              <button className="mt-4 px-14 py-4 bg-[#182989] text-white border border-transparent rounded-[20px] transition-all hover:bg-white hover:text-[#182989] group-hover:border-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
