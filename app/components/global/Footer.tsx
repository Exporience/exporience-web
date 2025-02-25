export default function Footer() {
  return (
    <footer className="py-10 bg-black text-white w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-lg inline-block">
            <p className="font-bold text-4xl leading-tight">
              Elevating <br /> Your Export <br /> Experience
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right mt-6 md:mt-0">
          <nav className="space-y-3 text-lg">
            <a href="#product" className="hover:text-[#4A90E2] transition-colors duration-300 block">
              Our Product
            </a>
            <a href="#about" className="hover:text-[#4A90E2] transition-colors duration-300 block">
              About Us
            </a>
            <a href="#contact" className="hover:text-[#4A90E2] transition-colors duration-300 block">
              Contact
            </a>
          </nav>
          <p className="mt-6 text-sm opacity-75">© 2024 • Experience</p>
        </div>
      </div>
    </footer>
  );
}
