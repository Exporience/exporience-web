export default function Footer() {
  return (
    <footer className="h-[200px] bg-black text-white flex justify-between items-center w-full mx-auto" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
      <div className="text-left">
        <p className="font-bold text-4xl">Elevating<br />Your Export<br />Experience</p>
      </div>
      <div className="text-right">
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
