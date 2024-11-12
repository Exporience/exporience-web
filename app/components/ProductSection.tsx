// app/components/ProductSection.tsx
import Image from "next/image";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function ProductSection() {
  return (
    <section id="product" className="p-8 bg-gray-100">
      <Image
        src="/images/hero.png"
        alt="Product"
        width={1100}
        height={400}
        // fill={true}
        sizes="100vw"
        className="h-64 object-cover mb-6"
      />
      <h2 className={leagueSpartan.className}>Product Name</h2>
      <p className="text-gray-700 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </p>
    </section>
  );
}
