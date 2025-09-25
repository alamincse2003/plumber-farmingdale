"use client";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function AreasAndDirections() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Left: Areas we serve */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-wide text-gray-900">
              Areas We Serve
            </h2>
            <ul className="space-y-2 text-gray-900">
              <li>
                <div className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-blue-600" />
                  <Link
                    href="/locations/south-farmingdale"
                    className="underline hover:text-blue-700"
                  >
                    South Farmingdale (11735)
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-blue-600" />
                  <Link
                    href="/locations/north-farmingdale"
                    className="underline hover:text-blue-700"
                  >
                    North Farmingdale (11735)
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-blue-600" />
                  <Link
                    href="/locations/east-farmingdale"
                    className="underline hover:text-blue-700"
                  >
                    East Farmingdale (11735)
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-blue-600" />
                  <Link
                    href="/locations/west-farmingdale"
                    className="underline hover:text-blue-700"
                  >
                    West Farmingdale (11735)
                  </Link>
                </div>

                {/* nested */}
                <ul className="mt-2 ml-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <FiCheck className="mt-1 text-blue-600" />
                    <Link
                      href="/locations/west/estates"
                      className="underline hover:text-blue-700 text-sm"
                    >
                      Estates (11735)
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="mt-1 text-blue-600" />
                    <Link
                      href="/locations/west/manor"
                      className="underline hover:text-blue-700 text-sm"
                    >
                      Manor (11735)
                    </Link>
                  </li>
                  {/* …repeat for Commons, Heights, Park, etc. */}
                </ul>
              </li>
            </ul>
          </div>

          {/* Right: Directions */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-wide text-gray-900">
              Directions
            </h2>
            <div className="space-y-6 text-gray-800">
              <div>
                <p className="font-semibold text-gray-900">
                  From Long Island MacArthur Airport:
                </p>
                <p className="mt-1 leading-relaxed">
                  Once you exit Long Island MacArthur Airport, follow the signs
                  directing you to NY-27 West. Continue on NY-27 West for about
                  3 miles before taking the exit for NY-24 North. Stay on NY-24
                  North for roughly 2 miles, then turn right onto Staples
                  Street. Drive approximately 0.5 miles, and you’ll find 276
                  Staples St on your left.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  From Downtown Farmingdale:
                </p>
                <p className="mt-1 leading-relaxed">
                  Starting in downtown Farmingdale, head east along Main Street
                  until you reach the intersection with NY-24. Make a left onto
                  NY-24 North and continue for about 2 miles. At the next major
                  intersection, turn right onto Staples Street. Proceed for
                  around 0.5 miles, and 276 Staples St will be on your left,
                  just past a recognizable local landmark.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">From I-495 West:</p>
                <p className="mt-1 leading-relaxed">
                  Merge onto I-495 West and travel for approximately 6 miles
                  until you reach the exit for NY-24 North. Once on NY-24 North,
                  drive for about 2 miles before turning right onto Staples
                  Street. Continue on Staples for roughly 0.5 miles; you’ll see
                  276 Staples St on your left shortly after passing a key cross
                  street.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
