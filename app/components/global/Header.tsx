"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#F1EFE7] shadow-header fixed w-full z-50 font-league-spartan font-medium">
      <div className="flex justify-between items-center px-4 py-4 mx-auto w-full max-w-none xl:px-[36px]">
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

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="xl:hidden flex items-center justify-center text-gray-800"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`xl:flex gap-4 text-gray-800 ${
            isMenuOpen ? "block" : "hidden"
          } xl:block absolute xl:relative top-16 left-0 xl:top-0 xl:left-0 bg-[#F1EFE7] w-full xl:w-auto xl:gap-8 xl:gap-[37px]`}
        >
          <Link
            href="#home"
            className="block xl:inline hover:text-[#182989] text-[16px] px-4 py-2 xl:p-0 xl:text-[20px] xl:text-[22px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#catalog"
            className="block xl:inline hover:text-[#182989] text-[16px] px-4 py-2 xl:p-0 xl:text-[20px] xl:text-[22px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalog
          </Link>
          <Link
            href="#service"
            className="block xl:inline hover:text-[#182989] text-[16px] px-4 py-2 xl:p-0 xl:text-[20px] xl:text-[22px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="#about"
            className="block xl:inline hover:text-[#182989] text-[16px] px-4 py-2 xl:p-0 xl:text-[20px] xl:text-[22px]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}