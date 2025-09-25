"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="lg:text-3xl md:text-3xl text-xl font-bold text-gray-700 mb-4 uppercase">
            About Plumber Farmingdale
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Plumber Farmingdale NY</strong>, we take pride in serving
            the Farmingdale community for over a decade. With years of
            experience, we have built a reputation for providing reliable,
            professional, and affordable plumbing services to homeowners and
            businesses alike.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether it’s a minor repair, routine maintenance, or a large-scale
            plumbing project, our team of licensed and skilled plumbers is
            committed to delivering top-notch solutions tailored to your needs.
            We understand the unique plumbing challenges in Farmingdale, NY, and
            are dedicated to ensuring your satisfaction every step of the way.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From emergency services to scheduled installations, we’ve got you
            covered. Trust us to be your go-to plumber in Farmingdale, 11735,
            and experience the quality service our customers have come to rely
            on.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Learn More About
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/images/about/about1.webp"
            alt="Plumber working"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
