// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center">
      <p className="font-bold text-xl">Elevating Your Export Experience</p>
      <div className="mt-4 flex justify-center space-x-8">
        <a href="#product" className="hover:underline">
          Our Product
        </a>
        <a href="#about" className="hover:underline">
          About Us
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <p className="mt-4 text-sm">© 2024 • Experience</p>
    </footer>
  );
}
