"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className=" lg:mt-3 relative bg-cover bg-center min-h-[70vh] flex items-center"
      style={{ backgroundImage: "url('/images/hero/hero1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-3xl lg:text-6xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            Reviews - Plumber <br /> Farmingdale Ny
          </h1>
        </div>

        {/* Right Side Buttons (on large devices separate, on small stack) */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-3 lg:text-xl text-xl font-extrabold ">
          <a
            href="tel:5162000815"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:text-black rounded-lg shadow-lg text-white  transition w-full sm:w-auto text-center"
          >
            <FaPhoneAlt /> (516) 200 0815
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-3 sm:mt-0 px-6 py-3 bg-blue-600 hover:text-black rounded-lg shadow-lg text-white  transition w-full sm:w-auto text-center"
          >
            <FaPhoneAlt /> Schedule Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
