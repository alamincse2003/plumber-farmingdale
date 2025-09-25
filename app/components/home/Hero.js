"use client";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className=" lg:mt-3 relative bg-cover bg-center min-h-[80vh] flex items-center"
      style={{ backgroundImage: "url('/images/hero/hero1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            PLUMBER FARMINGDALE NY - <br /> CALL (516) 200 0815
          </h1>
          <p className="flex items-center justify-center md:justify-start text-lg mb-6">
            <FaMapMarkerAlt className="mr-2 text-blue-400" />
            276 Staples St, Farmingdale, NY 11735
          </p>
        </div>

        {/* Right Side Buttons (on large devices separate, on small stack) */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-3">
          <a
            href="tel:5162000815"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-semibold transition w-full sm:w-auto text-center"
          >
            <FaPhoneAlt /> (516) 200 0815
          </a>
          <a
            href="/appointment"
            className="inline-flex items-center gap-2 mt-3 sm:mt-0 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg text-white font-semibold transition w-full sm:w-auto text-center"
          >
            <FaPhoneAlt /> Schedule Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
