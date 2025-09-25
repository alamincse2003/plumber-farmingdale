"use client";
import Image from "next/image";
import Link from "next/link";

export default function LocalExperts() {
  return (
    <section className="bg-[#efefef] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold  text-blue-500 ">
          Serving in Farmingdale Since 2016
        </p>

        {/* Title */}
        <h2 className="mt-1 text-2xl sm:text-3xl uppercase md:text-4xl font-extrabold tracking-tight text-gray-700">
          LOCAL PLUMBING EXPERTS IN FARMINGDALE, NY
        </h2>

        {/* Image */}
        <div className="mt-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/local-expert/localExpert1.webp"
              alt="Plumber service van"
              width={800}
              height={600}
              className="h-auto w-full rounded-sm object-cover"
              priority
            />
          </div>
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto mt-4   text-sm sm:text-base leading-relaxed text-gray-700">
          When you need a reliable plumber in Farmingdale, our expert team is
          just minutes away, serving the 11735 area and beyond. With local
          expertise in plumbing infrastructure, building codes, and common
          issues, we deliver fast, professional service to residential and
          commercial properties. Because we’re local, we ensure quick response
          times across all Farmingdale neighborhoods.
          <Link href="/contact" className=" underline">
            Contact us today
          </Link>
          to get relief from the plumbing headache.
        </p>

        {/* Divider */}
        <hr className="mt-6 border-gray-300/70" />

        {/* Two-column highlights */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
          {/* Left block */}
          <div>
            <h3 className="lg:text-3xl sm:text-xl font-semibold   text-blue-600">
              SAME-DAY SERVICE AVAILABLE
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
              Don’t let plumbing problems ruin your day! We offer same-day
              service in Farmingdale, with transparent pricing, clean
              workmanship, and friendly technicians. From leaks to clogs, we’ve
              got you covered—and many jobs are completed on the first visit.
              Available 7 days a week, our professional team ensures fast
              response and reliable solutions for all your plumbing needs.
            </p>
          </div>

          {/* Right block */}
          <div>
            <h3 className="lg:text-3xl sm:text-xl font-semibold tracking-tight text-gray-700">
              SERVING SINCE 2016
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
              For nearly 10 years, we’ve proudly served the Farmingdale
              community with dependable plumbing services. Residents and
              businesses trust us for punctual arrivals, clear communication,
              and quality workmanship that stands the test of time. We’re
              licensed and insured, and our focus is on long-term reliability,
              safety, and your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
