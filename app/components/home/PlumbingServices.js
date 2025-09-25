"use client";
import Image from "next/image";

export default function PlumbingServices() {
  return (
    <section className="lg:py-16 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-2xl md:text-3xl uppercase font-extrabold tracking-tight text-gray-600 mb-12">
          PROFESSIONAL PLUMBING SOLUTIONS FOR FARMINGDALE RESIDENTS
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Residential */}
          <div className="flex flex-col ">
            <Image
              src="/images/services/services1.webp"
              alt="Residential plumbing service"
              width={600}
              height={400}
              className="rounded shadow-md object-cover"
            />
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              RESIDENTIAL PLUMBING SERVICES
            </h3>
            <p className="mt-2 text-base text-gray-600">
              As your trusted plumber in Farmingdale, we deliver comprehensive
              residential plumbing solutions for homeowners.
            </p>
            <p className="mt-2 text-base text-gray-600">
              From emergency repairs to routine maintenance, our Farmingdale NY
              plumbers handle everything: leak detection, drain cleaning, water
              heater services, pipe repairs, bathroom renovations, and kitchen
              plumbing installations. Count on our experienced local plumbers
              for prompt, reliable service.
            </p>
          </div>

          {/* Commercial */}
          <div className="flex flex-col  ">
            <Image
              src="/images/services/services2.webp"
              alt="Commercial plumbing service"
              width={600}
              height={400}
              className="rounded shadow-md object-cover"
            />
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              COMMERCIAL PLUMBING SERVICES
            </h3>
            <p className="mt-2 text-base text-gray-600">
              When Farmingdale NY businesses need dependable plumbing services,
              they turn to our expert plumbers.
            </p>
            <p className="mt-2 text-base text-gray-600">
              We understand commercial plumbing systems require specialized
              knowledge and quick response times. Our Farmingdale plumbers
              provide complete solutions: grease trap maintenance, commercial
              drain cleaning, backflow prevention, water line repairs, emergency
              services, and comprehensive building inspections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
