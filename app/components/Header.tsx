import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#F1EFE7] shadow-header fixed w-full z-50">
      <div className="flex justify-between items-center px-[36px] py-4 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Exporience Logo"
              width={150}
              height={50}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-gray-800 font-medium">
          <Link href="#home" className="hover:text-blue-600 text-[20px]">
            Home
          </Link>
          <Link href="#catalog" className="hover:text-blue-600 text-[20px]">
            Catalog
          </Link>
          <Link href="#service" className="hover:text-blue-600 text-[20px]">
            Service
          </Link>
          <Link href="#about" className="hover:text-blue-600 text-[20px]">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}