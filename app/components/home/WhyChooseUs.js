"use client";

import {
  FaLock,
  FaUser,
  FaCommentDots,
  FaClipboardCheck,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* Left Side - Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Our <br /> Farmingdale Plumbing <br /> Company?
          </h2>
        </div>

        {/* Right Side - Features */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-10">
          {/* Feature 1 */}
          <div>
            <div className="flex lg:flex-row md:flex-col flex-col ">
              <div className="text-blue-600 text-3xl mb-3 mr-2">
                <FaLock />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                24/7 Plumbing Services
              </h3>
            </div>

            <p className="text-gray-600">
              Your trusted Plumber in Farmingdale NY available around the clock.
              When plumbing emergencies strike, our Farmingdale NY plumbers
              respond immediately.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="flex lg:flex-row md:flex-col flex-col ">
              <div className="text-blue-600 text-3xl mb-3 mr-2">
                <FaUser />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Emergency Response Times
              </h3>
            </div>

            <p className="text-gray-600">
              Over a decade we are well known for our emergency response as we
              provide top notch emergency plumbing services in Farmingdale.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="flex lg:flex-row md:flex-col flex-col ">
              <div className="text-blue-600 text-3xl mb-3 mr-2">
                <FaCommentDots />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Licensed and Certified
              </h3>
            </div>

            <p className="text-gray-600">
              Our professional plumbers are fully licensed and insured. Trust
              your local Farmingdale plumber for superior, code-compliant
              plumbing solutions.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="flex lg:flex-row md:flex-col flex-col ">
              <div className="text-blue-600 text-3xl mb-3 mr-2">
                <FaClipboardCheck />
              </div>
              <h3 className="text-xl  font-bold text-gray-800 mb-2">
                Satisfaction Guaranteed
              </h3>
            </div>
            <p className="text-gray-600">
              Farmingdale NY&apos;s most reliable plumbing service guarantees
              your satisfaction. Our plumbers ensure quality work with every
              plumbing project completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
