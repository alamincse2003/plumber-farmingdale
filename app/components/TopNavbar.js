// components/TopNavbar.jsx
export default function TopNavbar() {
  return (
    <header className="bg-blue-600">
      <div className="hidden lg:text-xl  font-semibold max-w-6xl mx-auto lg:flex justify-between items-center  text-white text-sm px-6 py-2">
        {/* Left side */}
        <div>Open - 24/7</div>

        {/* Right side */}
        <div>
          <a href="tel:5162000815" className="hover:text-gray-800">
            Call Now! (516) 200 0815
          </a>
        </div>
      </div>
    </header>
  );
}
