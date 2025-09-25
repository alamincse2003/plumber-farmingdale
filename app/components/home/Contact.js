"use client";

import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-2xl text-xl font-bold text-gray-900 mb-6 text-center">
          Contact
        </h2>

        <div className="space-y-4 flex flex-col items-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600 mt-1 h-5 w-5" />
            <a
              href="mailto:plumberfarmingdaleny@gmail.com"
              className="text-gray-800 hover:text-blue-700"
            >
              plumberfarmingdaleny@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
