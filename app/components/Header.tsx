// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <h1 className="text-3xl font-bold">
        <span style={{ color: "#182989" }}>Expor</span>
        <span style={{ color: "#000000" }}>ience.</span>
      </h1>
      <nav className="flex space-x-8 text-black">
        <Link href="#product">Our Product</Link>
        <Link href="#about">About Us</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
