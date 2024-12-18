export default function Footer() {
  return (
    <footer className="py-5 bg-black text-white grid md:grid-cols-6 max-md:grid-rows-2 items-center w-full mx-auto">
      <div className="md:text-left text-center md:col-start-2 md:col-span-2">
        <p className="font-bold text-4xl">Elevating<br />Your Export<br />Experience</p>
      </div>
      <div className="md:text-right text-center md:col-start-4 md:col-span-2">
        <nav className="space-y-2 text-lg">
          <a href="#product" className="hover:underline block">
            Our Product
          </a>
          <a href="#about" className="hover:underline block">
            About Us
          </a>
          <a href="#contact" className="hover:underline block">
            Contact
          </a>
        </nav>
        <p className="mt-6 text-sm mb-6">© 2024 • Experience</p>
      </div>
    </footer>
  );
}
