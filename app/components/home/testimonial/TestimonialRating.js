"use client";

import { FaStar } from "react-icons/fa";

export default function TestimonialRanting() {
  const items = [
    {
      name: "Malik T., Farmingdale",
      quote:
        "I had an emergency plumbing issue in my home, and Plumber Farmingdale was there within hours! Their technician was professional, friendly, and had the problem fixed quickly. The service was affordable, and they even explained everything in detail. I highly recommend them to anyone in the Farmingdale area!",
    },
    {
      name: "Michael C., Restaurant Owner",
      quote:
        "I’ve used several plumbers over the years, but none have been as dependable as Plumber Farmingdale. They came out on time, provided a detailed estimate, and got the job done right the first time. If you need plumbing work done in Farmingdale, I wouldn’t call anyone else!",
    },
    {
      name: "Robert A., Home Owner",
      quote:
        "From the moment I called to the final fix, my experience with Plumber Farmingdale NY was exceptional. The team was courteous, showed up on time, and provided transparent pricing. They solved my plumbing issue quickly, and I felt confident in their expertise. Would definitely use them again!",
    },
  ];

  return (
    <section className="bg-gray-100 lg:py-4 py-4 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, i) => (
            <article key={i} className="bg-gray-200 rounded-sm p-8 sm:p-10 ">
              {/* Stars */}
              <div className="mb-4 flex items-center justify-center text-amber-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FaStar key={s} className="h-5 w-5" aria-hidden />
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </div>

              {/* Name */}
              <h3 className="mb-6 text-center text-sm font-medium text-gray-700">
                {t.name}
              </h3>

              {/* Quote */}
              <blockquote className="text-gray-800 leading-relaxed">
                <p className="whitespace-pre-line">“{t.quote}”</p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
