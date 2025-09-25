"use client";
import React from "react";
import Link from "next/link";

export default function ServicesWeProvide() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold  uppercase text-gray-700">
          Services We Provide in Farmingdale NY
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <article className="bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase   text-gray-700">
              Septic System
              <br />
              Repair
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Rely on our experienced team for
              <Link
                href="#"
                className="underline text-gray-900 hover:text-blue-700"
              >
                prompt and efficient septic system repair
              </Link>
              . We diagnose issues, clear blockages, and replace faulty
              components to maintain a healthy system. Our comprehensive
              services prevent environmental hazards and costly damage, ensuring
              your septic system functions reliably and safely year-round.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white hover:bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-700">
              Water Heater Repair
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Experience{" "}
              <Link
                href="#"
                className="underline text-gray-900 hover:text-blue-700"
              >
                reliable water heater repair services
              </Link>{" "}
              that restore hot water comfort to your home. Our technicians
              quickly diagnose and fix issues ranging from faulty thermostats to
              sediment buildup. With prompt and efficient service, we extend the
              lifespan of your heater while ensuring you enjoy consistent,
              energy-efficient performance every day.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-700">
              Drain Cleaning
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Keep your drains flowing smoothly with our{" "}
              <Link
                href="#"
                className="underline text-gray-900 hover:text-blue-700"
              >
                expert drain cleaning service
              </Link>
              . Our team uses advanced techniques and eco‑friendly solutions to
              remove stubborn blockages, grease, and debris. Trust us to restore
              your plumbing’s efficiency and prevent future clogs, ensuring
              hassle‑free drainage for your home or business.
            </p>
          </article>
          {/* Card 4 */}
          <article className="hover:bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-700">
              Leak Repair
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Don’t let leaks disrupt your home’s comfort or lead to costly
              water damage. <Link href="#">Our leak repair service</Link>
              swiftly locates and fixes hidden leaks in pipes, faucets, and
              other fixtures. Using state-of-the-art technology, we minimize
              water waste and restore your system’s integrity, protecting your
              property and peace of mind.
            </p>
          </article>
          {/* Card 5 */}
          <article className="bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-700">
              Gas Line Repair
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Ensure the safety of your home with{" "}
              <Link href="#">our reliable gas line repair service</Link>. Our
              skilled technicians promptly address leaks, blockages, and other
              issues to prevent dangerous hazards. We follow strict safety
              protocols and industry standards, ensuring your gas system
              operates safely and efficiently for worry-free living.
            </p>
          </article>
          {/* Card 6 */}
          <article className="hover:bg-gray-200 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-700">
              Water Treatment
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Ensure safe, clean water for your family with{" "}
              <Link href="#">our comprehensive water treatment services</Link> .
              We assess and treat your water supply to remove contaminants,
              improve taste, and safeguard your health. Our customized solutions
              include filtration, softening, and disinfection, providing you
              with peace of mind and a healthier living environment.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
