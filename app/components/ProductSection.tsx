// app/components/ProductSection.tsx
import Image from "next/image";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function ProductSection() {
  return (
    <section id="product" className="bg-white relative">
      {/* Image Section */}
      <div>
        <Image
          src="/images/hero.png"
          alt="Product"
          width={1100}
          height={650} // Set the height to 650px as requested
          sizes="100vw"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section with 150px Margin */}
      <div className="relative mx-[150px] p-8">
        <h2
          className={`${leagueSpartan.className} text-3xl font-bold text-gray-800`}
        >
          Product Name
        </h2>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
