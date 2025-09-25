"use client";
import Link from "next/link";

export default function ServicesWeProvideList() {
  const left = [
    { href: "/drain-cleaning", label: "Drain Cleaning" },
    { href: "/sewer-line-repair", label: "Sewer Line Repair" },
    { href: "/sump-pump-repair", label: "Sump Pump Repair" },
    { href: "/water-treatment", label: "Water Treatment" },
    {
      href: "/backflow-prevention-testing",
      label: "Backflow Prevention Testing",
    },
    { href: "/emergency", label: "Emergency" },
    { href: "/water-line-repair", label: "Water Line Repair" },
    { href: "/toilet-repair", label: "Toilet Repair" },
  ];

  const right = [
    { href: "/water-heater-repair", label: "Water Heater Repair" },
    { href: "/gas-line-repair", label: "Gas Line Repair" },
    { href: "/septic-system-repair", label: "Septic System Repair" },
    { href: "/leak-repair", label: "Leak Repair" },
    { href: "/pipe-repair", label: "Pipe Repair" },
    { href: "/sewer-clearing", label: "Sewer Clearing" },
    { href: "/faucet-repair", label: "Faucet Repair" },
    { href: "/garbage-disposal-repair", label: "Garbage Disposal Repair" },
  ];

  return (
    <section className="bg-gray-100 py-14 sm:py-16">
      <div className="container mx-auto w-full max-w-3xl px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-gray-900">
          Services We Provide
        </h2>

        {/* Two-column lists */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2">
          <ul className="space-y-4">
            {left.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline text-gray-900 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {right.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline text-gray-900 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom single centered link */}
        <div className="mt-10 text-center">
          <Link
            href="/plumbing-services"
            className="underline font-medium text-gray-900 hover:text-blue-700"
          >
            Plumbing Services
          </Link>
        </div>
      </div>
    </section>
  );
}
