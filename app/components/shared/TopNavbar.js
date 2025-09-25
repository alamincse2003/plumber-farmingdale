"use client";
export default function TopNavbar() {
  return (
    <header className="bg-blue-600">
      <div className="hidden max-w-6xl mx-auto lg:flex justify-between items-center  text-white text-sm px-6 py-2">
        {/* Left side */}
        <div className="font-bold lg:text-xl">Open - 24/7</div>

        {/* Right side */}
        <div className="font-extrabold lg:text-xl">
          <a href="tel:5162000815" className="hover:text-gray-300">
            Call Now! (516) 200 0815
          </a>
        </div>
      </div>
    </header>
  );
}
