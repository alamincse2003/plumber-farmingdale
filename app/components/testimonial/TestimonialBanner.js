"use client";

export default function TestimonialBanner({
  title = "Our Satisfied Plumbing Clients in Farmingdale, NY",
  backgroundSrc = "/images/testimonial/testimonial1.webp",
}) {
  return (
    <section
      className="relative flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url('${backgroundSrc}')` }}
      aria-label="Satisfied clients banner"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 w-full px-4 py-10 sm:py-12 md:py-16 text-center">
        <h2
          className="
            text-white drop-shadow
            text-3xl sm:text-4xl md:text-5xl
            font-[400]
          "
          style={{
            fontFamily:
              "'Great Vibes', 'Dancing Script', ui-script, 'Comic Sans MS', cursive",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h2>
      </div>
    </section>
  );
}
