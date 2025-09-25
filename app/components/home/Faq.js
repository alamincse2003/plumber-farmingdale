"use client";

export default function Faq() {
  const faqs = [
    {
      q: "Do we offer 24/7 emergency plumbing services in Farmingdale?",
      a: "Yes! Our team of licensed plumbers in Farmingdale NY is available 24 hours a day, 7 days a week, including holidays. Whether it’s a burst pipe at 2 AM or a flooding basement on Sunday, we’re always ready to help.",
    },
    {
      q: "What areas around Farmingdale do we serve?",
      a: "As your local Farmingdale NY plumber, we serve all the areas in Farmingdale and surrounding areas including South Farmingdale, East Farmingdale, Bethpage, Plainview, and throughout Nassau County. No location in Farmingdale is too far for our team.",
    },
    {
      q: "Are we licensed and insured in Farmingdale NY?",
      a: "Yes, all our plumbers are fully licensed, bonded, and insured in New York State. We maintain all required local Farmingdale and Nassau County certifications, and our work always meets or exceeds local building codes.",
    },
    {
      q: "How much does a typical plumbing service cost in Farmingdale, NY?",
      a: "Our service costs in Farmingdale NY depend on the specific plumbing issue. It can vary from 50$ upto 2000$, depending on each specific situatuion.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-xl sm:text-3xl md:text-3xl font-bold uppercase text-gray-700 mb-8">
          Frequently Asked Questions About Plumbing in Farmingdale, NY
        </h2>

        {/* FAQ list */}
        <dl className="space-y-8">
          {faqs.map((item, i) => (
            <div key={i}>
              <dt className="text-lg font-semibold text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-gray-700 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
